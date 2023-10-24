import type {LayoutServerLoad} from './$types';
import {users} from "$lib/server/schema";

export const load: LayoutServerLoad = async ({locals}) => {
    if (!locals.drizzle) {
        console.warn('drizzle not found in locals')
        return {};
    }
    let query = locals.drizzle.select().from(users);
    console.log(query.toSQL())
    let result = await query.all();
    console.log(result)
    return {};
};