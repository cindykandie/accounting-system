import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h3>Accounting System Dashboard</h3>
      <h4>Your Balance: 00</h4>
      <Link href="/withdraw">
        <button>Withdraw</button>
      </Link>
      <button>Send</button>
      <button>Deposit options</button>
    </main>
  )
}
