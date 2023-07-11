'use client';

import Image from 'next/image';
import React, { useEffect, useState, useCallback } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { HiSearch, HiBell, HiChat } from 'react-icons/hi';
import { BiSolidDownArrow } from 'react-icons/bi';
import { IoIosCreate } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { saveUserInfo } from '../actions/firebaseActions';
import MenuItem from './MenuItem';
import Logo from './Logo';
import UserTag from './UserTag';

type Props = {};

export default function Header({}: Props) {
  const router = useRouter();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (session?.user) {
      saveUserInfo({ ...session?.user });
    }
  }, [session]);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="flex justify-between gap-3 md:gap-2 items-center p-3">
      <Logo />

      <button
        className="bg-black
         text-white p-3 px-6 rounded-full
         text-[18px] hidden md:block"
        onClick={() => router.push('/')}
      >
        Home
      </button>
      {session?.user && (
        <button
          className="font-semibold p-3 px-6 rounded-full text-[18px] hidden md:block"
          onClick={() => router.push('/pin-builder')}
        >
          <span className="hidden md:block">Create</span>
        </button>
      )}

      <div className="bg-[#e9e9e9] p-2 px-6 gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch className="text-[25px] text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-3/4 text-[20px]"
        />
      </div>

      {session?.user ? (
        <div className="relative z-10">
          <div className="flex flex-row justify-center items-center py-2 px-4">
            <Image
              src={session.user.image || 'placeholder.jpg'}
              onClick={() => router.push('/' + session?.user.email)}
              alt="user-image"
              width={70}
              height={70}
              className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
            />
            <div className="p-2 hover:bg-gray-200 rounded-full">
              <BiSolidDownArrow
                className=" min-h-[25px] min-w-[25px] text-gray-500 cursor-pointer transition-all"
                onClick={toggleOpen}
              />
            </div>
          </div>
          {isOpen && (
            <div
              className="
                absolute 
                rounded-xl 
                shadow-md
                w-56
                bg-white 
                overflow-hidden 
                right-0 
                top-12 
                text-sm
                mt-8
                p-3
          "
            >
              <div className="flex flex-col cursor-pointer items-center justify-center gap-3">
                <div className="bg-gray-300 rounded-lg p-3">
                  <UserTag user={session?.user} />
                </div>
                <div className="md:hidden w-full">
                  <MenuItem
                    label="Create"
                    onClick={() => {
                      router.push('/pin-builder');
                      toggleOpen();
                    }}
                  />
                </div>
                <MenuItem label="Logout" onClick={() => signOut()} />
              </div>
            </div>
          )}
        </div>
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
