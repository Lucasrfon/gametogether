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
        className="mb-2 tracking-[-.01em] p-2 rounded-lg hover:bg-[#ac1717] transition-all duration-200"
      >
        {children}
      </Link>
    </li>
  );
}
