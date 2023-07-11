import React from 'react';
import { downloadImage } from '../utils';
import { HiDownload } from 'react-icons/hi';

type Props = {
  id: string;
  image: string;
  styles?: string;
};

export default function DownloadBtn({ id, image, styles }: Props) {
  return (
    <button type="button" onClick={() => downloadImage(id, image)}>
      <HiDownload
        className={`cursor-pointer hover:scale-105 transition-all ${styles}`}
      />
    </button>
  );
}
