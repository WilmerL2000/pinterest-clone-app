'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import UserTag from '../UserTag';
import { IPin } from '@/app/types';
import { HiDownload } from 'react-icons/hi';
import { downloadImage } from '@/app/utils';
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
        <div
          className="  
            relative 
            overflow-hidden 
            rounded-3xl
            group
            "
        >
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
            className="group-hover:flex flex-col max-h-[94.5%] hidden absolute 
                        bottom-0 left-0 right-0 bg-g m-2 p-2 md:p-3 mb-3 rounded-md z-20
                        bg-backdrop-blur-md backdrop-brightness-50
                        "
          >
            <DownloadBtn id={pin.id} image={pin.image} />
          </div>
        </div>
      </div>
      <h2 className="font-bold text-[18px] mb-1 mt-2 line-clamp-2">
        {pin.title}
      </h2>
      <UserTag user={user} />
    </div>
  );
}
