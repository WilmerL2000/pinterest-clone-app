'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  user: {
    image?: string;
    name?: string;
    email?: string;
  };
};

export default function UserTag({ user }: Props) {
  const router = useRouter();

  return (
    <div className="">
      {user ? (
        <div
          className="flex gap-3 
           items-center cursor-pointer"
          onClick={() => router.push(`/` + user.email)}
        >
          <Image
            src={user.image}
            alt="userImage"
            width={45}
            height={45}
            className="rounded-full"
          />
          <div>
            <h2 className="text-[14px] font-medium">{user.name}</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
