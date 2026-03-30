'use client';
import {
  LucideHouse,
  LucideNotebookText,
  LucidePhone,
  LucideSmartphoneCharging,
} from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className={
        'fixed top-0 left-0 w-full z-1 bg-[#ac1717] h-14 flex items-center justify-between px-6 shadow-md'
      }
    >
      <h1 className="text-xl font-bold">🚀 Play together, have fun together</h1>
      <nav className="flex gap-2">
        <Link
          href="/"
          className="hover:bg-gray-900 py-2 px-4 rounded-lg flex items-center gap-1 transition-all duration-200"
        >
          <LucideHouse className="h-4" /> Home
        </Link>
        <Link
          href="/info"
          className="hover:bg-gray-900 py-2 px-4 rounded-lg flex items-center gap-1 transition-all duration-200"
        >
          <LucideNotebookText className="h-4" /> About Project
        </Link>
        <Link
          href="/support"
          className="hover:bg-gray-900 py-2 px-4 rounded-lg flex items-center gap-1 transition-all duration-200"
        >
          <LucideSmartphoneCharging className="h-4" /> Power up
        </Link>
        <Link
          href="/contact"
          className="hover:bg-gray-900 py-2 px-4 rounded-lg flex items-center gap-1 transition-all duration-200"
        >
          <LucidePhone className="h-4" /> Contact
        </Link>
      </nav>
    </header>
  );
}
