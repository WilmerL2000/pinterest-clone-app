'use client';

import { useRouter } from 'next/navigation';
import { HiArrowSmallLeft } from 'react-icons/hi2';

export default function GoBack() {
  const router = useRouter();

  return (
    <HiArrowSmallLeft
      className="text-[60px] font-bold md:ml-[-50px] cursor-pointer 
        hover:bg-gray-200 rounded-full p-2 hover:scale-105 transition-all"
      onClick={() => router.back()}
    />
  );
}
