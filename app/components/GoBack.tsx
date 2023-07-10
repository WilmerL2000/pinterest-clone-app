'use client';
import { useRouter } from 'next/navigation';
import { HiArrowSmallLeft } from 'react-icons/hi2';

export default function GoBack() {
  const router = useRouter();

  return (
    <HiArrowSmallLeft
      className="text-[60px] font-bold ml-[-50px] cursor-pointer hover:bg-gray-200 rounded-full p-2 "
      onClick={() => router.back()}
    />
  );
}
