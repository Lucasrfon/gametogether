'use client';
import Link from 'next/link';

type NavLinkProps = {
  href: string;
  status: 'Done' | 'In Progress' | 'Soon';
  children: React.ReactNode;
};

export default function NavLink({ href, status, children }: NavLinkProps) {
  const color =
    status === 'Done'
      ? 'text-green-500'
      : status === 'In Progress'
        ? 'text-yellow-500'
        : 'text-red-500';

  return (
    <li className="group flex gap-2">
      <Link
        href={href}
        className="mb-2 tracking-[-.01em] p-2 rounded-lg group-hover:bg-[#ac1717] transition-all duration-200"
      >
        {children}
      </Link>
      <div
        className={`h-4 text-[10px] mt-2 ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
      >
        {status}
      </div>
    </li>
  );
}
