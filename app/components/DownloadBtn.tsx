import React from 'react';
import { downloadImage } from '../utils';
import { HiDownload } from 'react-icons/hi';

type Props = {
  id: string;
  image: string;
};

export default function DownloadBtn({ id, image }: Props) {
  return (
    <button type="button" onClick={() => downloadImage(id, image)}>
      <HiDownload
        className="w-5 md:w-9 h-5 md:h-9 cursor-pointer hover:scale-105 
      transition-all text-gray-300 hover:text-white "
      />
    </button>
  );
}
