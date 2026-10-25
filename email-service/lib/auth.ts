import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

export const auth = betterAuth({
  database: new Database("./sqlite.db"),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  // Allow requests from the frontend app (different port in dev)
  trustedOrigins: [
    "http://localhost:3001",  // adjust to whichever port your email frontend runs on
    "http://localhost:3000",
  ],
});
