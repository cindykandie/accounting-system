import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { User } from '../../models'; // Import the User model from your Sequelize setup

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Validate the user's credentials and create a new user record
        const { email, password } = credentials;

        // Perform any additional validation or checks here
        // For example, you can check if the email is already registered

        // Create the user in the database
        const user = await User.create({ email, password });

        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.reject(new Error('Failed to create user'));
        }
      },
    }),
  ],
});
