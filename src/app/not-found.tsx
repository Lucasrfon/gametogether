'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import NotFoundImage from '@/components/assets/images/404.png';

export default function NotFound() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Image src={NotFoundImage} alt="Not Found" width={400} height={300} />
      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
        404
      </h1>
      <section className="space-y-6 text-lg text-gray-300 leading-relaxed relative">
        <p>Page under development.</p>
        <p>Or maybe it will be soon.</p>
        <p>Or maybe you tried a path that doesn't exist.</p>
        <p>But don't worry! You can always head back home</p>
        <p
          className={`absolute bottom-0 right-0 text-xs italic text-amber-500 text-right max-w-[200px] transition-all duration-300 ${
            showEasterEgg
              ? 'opacity-70 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          No, this is not Dungeons & Dragons the TV series.
        </p>
        <p>and find something fun to play!</p>
      </section>
      <Link
        href="/"
        onMouseEnter={() => setShowEasterEgg(true)}
        onMouseLeave={() => setShowEasterEgg(false)}
        className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 cursor-pointer hover:scale-105 transition-all duration-200"
      >
        Return Home
      </Link>
    </div>
  );
}
