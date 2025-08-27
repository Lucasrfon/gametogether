'use client';
import Link from 'next/link';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="mb-2 tracking-[-.01em] hover:text-amber-700 transition-all"
      >
        {children}
      </Link>
    </li>
  );
}
