import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Validate the user's credentials and return the user object
        const { email, password } = credentials;

        // Perform any additional validation or checks here
        // For example, you can check if the user exists in the database

        // Retrieve the user from the database
        const user = await findUserByEmail(email);

        if (user && user.password === password) {
          return Promise.resolve(user);
        } else {
          return Promise.reject(new Error('Invalid credentials'));
        }
      },
    }),
  ],
});
