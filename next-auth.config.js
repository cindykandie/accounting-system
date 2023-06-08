import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { User } from './models'; // Import the User model from your Sequelize setup

const options = {
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'potgres',
    password: '123456',
    database: 'accounting-system',
    synchronize: true, // Set to false in production
  },
  callbacks: {
    async signIn(user, account, profile) {
      return true;
    },
    async redirect(url, baseUrl) {
      return baseUrl;
    },
    async session(session, user) {
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token;
    },
  },
  pages: {
    signIn: '/login', // Redirect to the login page on sign-in
  },
};

export default (req, res) => NextAuth(req, res, options);
