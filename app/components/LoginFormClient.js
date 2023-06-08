import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

function LoginFormClient() {
  const { register, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      // Handle login error
      console.error(result.error);
    } else {
      // Login successful, redirect or perform any additional actions
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <label>
        Email:
        <input type="email" name="email" required ref={register} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" required ref={register} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginFormClient;
