import { useState } from 'react';
import { signIn } from 'next-auth/react';
import dynamic from 'next/dynamic';

const DynamicLoginForm = dynamic(() => import('./LoginFormClient'), {
  ssr: false,
});

function LoginForm() {
  const [showClientForm, setShowClientForm] = useState(false);

  const handleLogin = async (email, password) => {
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      
      console.error(result.error);
    } else {
      // Login successful, redirect or perform any additional actions
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    handleLogin(email, password);
  };

  const handleClientFormToggle = () => {
    setShowClientForm(!showClientForm);
  };

  return (
    <>
      {!showClientForm && (
        <form onSubmit={handleFormSubmit}>
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
          <button type="submit">Login</button>
          <br />
          <button type="button" onClick={handleClientFormToggle}>
            Use Client Form
          </button>
        </form>
      )}
      {showClientForm && <DynamicLoginForm />}
    </>
  );
}

export default LoginForm;
