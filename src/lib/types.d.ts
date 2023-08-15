import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  type User = {
    id: number;
    email: string;
    name: string;
    password?: string;
  };
}
