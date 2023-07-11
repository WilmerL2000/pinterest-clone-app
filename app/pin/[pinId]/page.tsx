import { getPinDetail } from '@/app/actions/firebaseActions';
import { GoBack, PinImage, PinInfo } from '@/app/components';

type Props = {
  params: { pinId: string };
};

export default async function PinDetails({ params }: Props) {
  const pinDetail = await getPinDetail(params);

  return (
    <div className=" bg-white p-3 md:p-12 rounded-2xl md:px-24 lg:px-36 ">
      <div className="-right-24 md:right-0">
        <GoBack />
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 shadow-lg
          rounded-3xl p-3 md:p-7 lg:p-12 xl:pb-16 "
      >
        <PinImage pinDetail={pinDetail} />
        <div>
          <PinInfo pinDetail={pinDetail} />
        </div>
      </div>
    </div>
  );
}
