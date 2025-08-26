'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md bg-amber-700 ' : 'bg-amber-700/90'
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">🚀 Meu App</h1>
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/info" className="hover:text-blue-600">
            About us
          </Link>
          <Link href="/support" className="hover:text-blue-600">
            Support us
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}
