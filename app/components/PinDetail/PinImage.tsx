import Image from 'next/image';

type Props = {};

export default function PinImage({ pinDetail }: Props) {
  return (
    <>
      <Image
        src={pinDetail.image}
        alt={pinDetail.title}
        width={1000}
        height={1000}
        className="rounded-2xl"
      />
    </>
  );
}
