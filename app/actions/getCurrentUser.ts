import { options } from './../api/auth/[...nextauth]/options';
import { getServerSession } from "next-auth/next"

/**
 * This function returns a promise that resolves to the server session obtained using the provided
 * authentication options.
 * @returns The `getSession` function is returning a promise that resolves to the result of calling the
 * `getServerSession` function with the `authOptions` parameter. The `await` keyword is used to wait
 * for the promise to resolve before returning its result.
 */
export async function getSession() {
    return await getServerSession(options)
}


/**
 * The function `getCurrentUser` retrieves the current user's session and returns the user object if it
 * exists, otherwise it returns null.
 * @returns the current user object if there is a valid session and the session has a user property. If
 * there is no valid session or the session does not have a user property, it will return null.
 */
export default async function getCurrentUser() {
    try {

        const session = await getSession();

        if (!session?.user) {
            return null;
        }

        return {
            ...session.user
        };

    } catch (error: any) {
        return null;
    }
}