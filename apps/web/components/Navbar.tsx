'use client';

import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import defaultUserPfp from '../public/assets/default-user-pfp.jpg';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-sky-950 w-full h-14 p-1.5 text-white flex items-center">
      <Link
        href="/profile/123"
        className="flex items-center w-full p-1.5 rounded-sm bg-cyan-900 hover:cursor-pointer"
      >
        <Image
          src={defaultUserPfp}
          alt="User Profile Picture"
          width={32}
          height={32}
          className="rounded-full border border-white object-cover"
        />

        <span className="ml-3">User Profile</span>
      </Link>
      <div className="p-2 rounded-sm flex items-center justify-center text-2xl ml-auto hover:cursor-pointer">
        <GiHamburgerMenu />
      </div>
    </div>
  );
}
