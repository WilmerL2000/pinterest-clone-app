import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        })
    ],
    // callbacks: {
    //     async session({ session, }) {
    //         // Send properties to the client, like an access_token and user id from a provider.
    //         if (session) {
    //             saveUserInfo({ ...session?.user });
    //         }

    //         return session
    //     }
    // },
    secret: process.env.NEXTAUTH_SECRET,

}