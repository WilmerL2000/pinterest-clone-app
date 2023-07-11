'use client';

import React from 'react';
import UserTag from '../UserTag';
import { IPin } from '@/app/types';
import DownloadBtn from '../DownloadBtn';

type Props = {
  pinDetail: IPin;
};

export default function PinInfo({ pinDetail }: Props) {
  const user = {
    name: pinDetail.userName,
    email: pinDetail.email,
    image: pinDetail.userImage,
  };

  return (
    <>
      <DownloadBtn
        id={pinDetail.id}
        image={pinDetail.image || ''}
        styles="text-[55px] hover:bg-gray-200 rounded-full p-2"
      />
      <h2 className="text-[30px] font-bold mb-4 mt-8">{pinDetail.title}</h2>
      <h2 className="mb-10">{pinDetail.desc}</h2>
      <div className="mb-6 md:mb-0">
        <UserTag user={user} />
      </div>
    </>
  );
}
