import {drizzle} from 'drizzle-orm/d1';
import type {RequestEvent} from "@sveltejs/kit";

/**
 * @throws {Error}
 */
export const injectDB = (event: RequestEvent) => {
    if (!event.platform?.env?.DB) {
        throw new Error('DB not found in event.platform.env');
    }
    console.log(event.platform.env.DB)
    event.locals.drizzle = drizzle(event.platform?.env.DB);
}