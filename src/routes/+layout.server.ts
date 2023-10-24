import type {LayoutServerLoad} from './$types';
import {users} from "$lib/server/schema";

export const load: LayoutServerLoad = async ({locals}) => {
    if (!locals.drizzle) {
        console.warn('drizzle not found in locals')
        return {};
    }
    let query = await locals.drizzle.select().from(users);
    console.log("QUERY:", query);
    if (!query || !query.length) {
        let addUser = await locals.drizzle.insert(users)
            .values({name: 'test', email: 'test@example.com'})
            .returning({insertedId: users.id});
        console.log("INSERT:", addUser);
    }
    return {};
};