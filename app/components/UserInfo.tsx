import Image from 'next/image';
import { IUserInfo } from '../types';

type Props = {
  userInfo: IUserInfo;
};

export default function UserInfo({ userInfo }: Props) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={userInfo.userImage || '/placeholder.jpg'}
        alt="userImage"
        width={100}
        height={100}
        className="rounded-full"
      />

      <h2 className="text-[30px] font-semibold">{userInfo.userName}</h2>
      <h2 className="text-gray-400">{userInfo.email}</h2>
      <div className="flex gap-4">
        <button className="bg-gray-200 p-2 px-3 font-semibold mt-5 rounded-full">
          Share
        </button>
      </div>
    </div>
  );
}
