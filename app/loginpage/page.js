import LoginForm from "../components/LoginForm";

export default function Login() {
    return (
      <main className="flex flex-col items-center justify-between p-24">
        <h3>Log In</h3>
        <LoginForm/>
      </main>
    )
  }
  Login['use client'] = true;