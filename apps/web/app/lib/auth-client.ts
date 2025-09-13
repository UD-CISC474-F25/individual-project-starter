/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAuthClient } from "better-auth/react";
import { passkeyClient } from "better-auth/client/plugins";

export const authClient: ReturnType<typeof createAuthClient> = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
    plugins: [passkeyClient(), ],
});

export const {
    signIn,
    signOut,
    signUp,
    useSession
}: {
    signIn: any;
    signOut: any;
    signUp: any;
    useSession: any;
} = authClient as any;