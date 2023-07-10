import Image from 'next/image';
import React from 'react';

type Props = {
  user: {
    image?: string;
    name?: string;
    email?: string;
  };
};

export default function UserTag({ user }: Props) {
  return (
    <div className="">
      {user ? (
        <div
          className="flex gap-3 
           items-center"
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
            <h2 className="text-[12px]">{user.email}</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
