import Link from 'next/link';
import Image from 'next/image';
import NotFoundImage from '@/components/assets/images/404.png';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Image src={NotFoundImage} alt="Not Found" width={400} height={300} />
      <h2>404</h2>
      <p>Page under development</p>
      <Link
        href="/"
        className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 cursor-pointer"
      >
        Return Home
      </Link>
    </div>
  );
}
