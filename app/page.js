import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h3>Accounting System</h3>
      <Link href='/signup'>
        <button>Sign up</button>
      </Link>
      <Link href='/loginpage'>
        <button>Log In</button>
      </Link>
      <Link href='/dashboard'>
        <button>Dashboard</button>
      </Link>
    </main>
  )
}
