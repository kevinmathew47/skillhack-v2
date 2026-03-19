import Link from "next/link";

export default function SubpageHeader() {
  return (
    <header className="subpage-header">
      <div className="subpage-header-inner">
        <Link href="/" className="btn-outline-dark" style={{ borderColor: 'var(--yellow)', color: 'var(--dark)' }}>
          Back to Home
        </Link>
        <Link href="/fund" className="btn-fund">
          Fuel my dream
        </Link>
      </div>
    </header>
  );
}
