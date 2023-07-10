'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { HiSearch, HiBell, HiChat } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { saveUserInfo } from '../actions/firebaseActions';

type Props = {};

export default function Header({}: Props) {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      saveUserInfo({ ...session?.user });
    }
  }, [session]);

  return (
    <div className="flex justify-between gap-3 md:gap-2 items-center p-6 ">
      <Image
        src="/logo.png"
        alt="logo"
        width={60}
        height={60}
        onClick={() => router.push('/')}
        className="hover:bg-gray-300 p-2
        rounded-full cursor-pointer"
      />

      <button
        className="bg-black
         text-white p-3 px-6 rounded-full
         text-[20px]
          hidden md:block"
        onClick={() => router.push('/')}
      >
        Home
      </button>
      {session?.user && (
        <button
          className="font-semibold p-3 px-6
      rounded-full text-[20px]"
          onClick={() => router.push('/pin-builder')}
        >
          Create
        </button>
      )}

      <div className="bg-[#e9e9e9] p-2 px-6 gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch
          className="text-[34px] 
        text-gray-500"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-[25px]"
        />
      </div>

      <HiSearch className="text-[25px] text-gray-500 md:hidden" />
      <HiBell className="text-[25px] md:text-[50px] text-gray-500 cursor-pointer" />
      <HiChat className="text-[25px] md:text-[50px] text-gray-500 cursor-pointer" />

      {session?.user ? (
        <Image
          src={session.user.image}
          onClick={() => router.push('/' + session?.user.email)}
          alt="user-image"
          width={60}
          height={60}
          className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
        />
      ) : (
        <button
          className="font-semibold p-2 px-4 rounded-full"
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </div>
  );
}
