'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className={
        'fixed top-0 left-0 w-full z-1 bg-amber-700 h-14 flex items-center justify-between px-6 shadow-md'
      }
    >
      <h1 className="text-xl font-bold">🚀 Play together, have fun together</h1>
      <nav className="flex gap-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/info" className="hover:text-blue-600">
          About Project
        </Link>
        <Link href="/support" className="hover:text-blue-600">
          Insert Coin
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          Contact
        </Link>
      </nav>
    </header>
  );
}
