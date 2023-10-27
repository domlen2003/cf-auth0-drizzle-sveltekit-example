import type {Handle} from '@sveltejs/kit';
import {sequence} from "@sveltejs/kit/hooks";
import {injectDB} from "$lib/server";
import {SvelteKitAuth} from "@auth/sveltekit"
import Auth0Provider from "@auth/core/providers/auth0";

const dbHandle: Handle = async ({event, resolve}) => {
    try {
        injectDB(event);
    } catch (e) {
        console.warn(e);
    }
    return resolve(event);
}

const authHandle: Handle = SvelteKitAuth(async (event) => {
    // Function syntax for being able to load secrets from CF/ENV
    return {
        // TODO: do we need drizzle adapter? => https://authjs.dev/reference/adapter/drizzle
        //adapter: DrizzleAdapter(event.locals.drizzle),
        providers: [
            Auth0Provider({
                clientId: event.platform?.env.AUTH0_CLIENT_ID,
                clientSecret: event.platform?.env.AUTH0_CLIENT_SECRET,
                issuer: event.platform?.env.AUTH0_ENDPOINT,
            })
        ],
        secret: event.platform?.env.AUTH_SECRET,
        trustHost: true
    }
})

export const handle = sequence(dbHandle, authHandle);