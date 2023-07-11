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
      <DownloadBtn id={pinDetail.id} image={pinDetail.image} />
      <h2 className="text-[30px] font-bold mb-10">{pinDetail.title}</h2>
      <h2 className="mt-10">{pinDetail.desc}</h2>
      <UserTag user={user} />
    </>
  );
}
