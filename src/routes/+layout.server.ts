import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = async ({locals}) => {
    if (!locals.drizzle) {
        console.warn('drizzle not found in locals')
        return {};
    }
    return {
        session: await locals.getSession()
    }
    /*let query = await locals.drizzle.select().from(users);
    console.log("QUERY:", JSON.stringify(query));

    if (!query || !query.length) {
        let addUser = await locals.drizzle.insert(users)
            .values({name: 'test', email: 'test@example.com'})
            .returning({insertedId: users.id});
        console.log("INSERT:", addUser);
    }*/
};