import Link from 'next/link';
import Image from 'next/image';
import NotFoundImage from '@/components/assets/images/404.png';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Image src={NotFoundImage} alt="Not Found" width={400} height={300} />
      <h2>404</h2>
      <section className="space-y-6 text-lg text-gray-300 leading-relaxed">
        <p>Page under development</p>
        <p>Or will be soon.</p>
        <p>
          Or maybe you tried a path that doesn't exist. But don't worry — you
          can go back home
        </p>
        <p>and find something fun to play!</p>
        <p>No, this is not Dungeons & Dragons the TV series.</p>
      </section>
      <Link
        href="/"
        className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 cursor-pointer hover:scale-105 transition-all duration-200"
      >
        Return Home
      </Link>
    </div>
  );
}
