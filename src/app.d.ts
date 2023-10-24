// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type {DrizzleD1Database} from "drizzle-orm/d1";

declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            drizzle?: DrizzleD1Database
        }
        // interface PageData {}
        interface Platform {
            env: {
                DB?: D1Database;
                AUTH0_CLIENT_ID?: string;
                AUTH0_CLIENT_SECRET?: string;
                AUTH0_ENDPOINT?: string;
                AUTH_SECRET?: string;
            };
        }
    }
}

export {};
