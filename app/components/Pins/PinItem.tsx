'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import UserTag from '../UserTag';
import { IPin } from '@/app/types';
import { FiArrowUpRight } from 'react-icons/fi';
import DownloadBtn from '../DownloadBtn';

type Props = {
  pin: IPin;
};

export default function PinItem({ pin }: Props) {
  const router = useRouter();
  const user = {
    name: pin?.userName,
    image: pin?.userImage,
    email: pin?.email,
  };

  return (
    <div className="">
      <div
        className="
            relative 
            before:absolute
            before:h-full 
            before:w-full
            hover:before:bg-gray-300 
            before:opacity-50
            cursor-pointer
            group      
            "
      >
        <div className="relative overflow-hidden rounded-3xl group max-h-96">
          <Image
            src={pin.image}
            alt={pin.title}
            width={500}
            height={500}
            className="cursor-pointer relative
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110
              transition
          "
            onClick={() => router.push('/pin/' + pin.id)}
          />
          <div
            className="group-hover:flex flex-row justify-between items-center max-h-[94.5%] hidden absolute 
                        bottom-0 left-0 right-0 bg-g m-2 p-2 md:p-3 mb-3 rounded-md z-20
                        bg-backdrop-blur-md backdrop-brightness-50"
          >
            <DownloadBtn
              id={pin.id}
              image={pin.image}
              styles="text-gray-300 hover:text-white w-5 md:w-9 h-5 md:h-9"
            />
            {pin.link && pin.link.includes('https://') && (
              <div
                className="text-gray-700 text-sm md:text-base bg-gray-300 hover:bg-gray-200 
                p-1 md:px-7 md:p-2 rounded-2xl flex gap-2 items-center hover:scale-105 
                transition-all"
                onClick={() => router.push(pin.link)}
              >
                <FiArrowUpRight />
                <div className="max-w-[60px] truncate ">
                  {pin.link.split('//')[1]}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <h2 className="font-bold text-[14px] md:text-[18px] mb-1 mt-2 line-clamp-2">
        {pin.title}
      </h2>
      <UserTag user={user} />
    </div>
  );
}
