'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Logo() {
  const router = useRouter();

  return (
    <Image
      src="/logo.png"
      alt="logo"
      width={50}
      height={50}
      onClick={() => router.push('/')}
      className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
    />
  );
}
