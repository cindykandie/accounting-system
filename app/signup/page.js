import { useSession, signIn } from 'next-auth/react';

function RegistrationForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (response.error) {
      // Handle registration error
      console.error(response.error);
    } else {
      // Registration successful, redirect or perform any additional actions
      // You can access the session data from response.data
    }
  };

  return (
    <>
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default function ClientRegistrationForm() {
  return <RegistrationForm />;
}
