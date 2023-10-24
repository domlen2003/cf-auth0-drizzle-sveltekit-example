import type {Handle} from '@sveltejs/kit';
import {injectDB} from "$lib/server";

export const handle: Handle = async ({event, resolve}) => {
    try {
        injectDB(event);
    } catch (e) {
        console.warn(e);
    }
    return resolve(event);
};