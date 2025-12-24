import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "@/types/user"

const users: User[] = [
  {
    id: "user_1",
    name: "Jamie",
    email: "jamieleecurtis997@gmail.com",
  },
]

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Simple mock authentication
        const user = users.find(u => u.email === credentials.email)
        if (user && credentials.password === "password") { // Mock password
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          }
        }
        return null
      }
    })
  ],
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: "/login",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }