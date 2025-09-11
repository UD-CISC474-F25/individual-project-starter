import Image from 'next/image';
import defaultUserPfp from '../../../public/assets/default-user-pfp.jpg';
import Course from '../../../components/Course';
import Link from 'next/link';
import { FaGear } from 'react-icons/fa6';

export default async function UserProfile({
  params,
}: {
  params: Promise<{ user_id: string }>;
}) {
  const userID = (await params).user_id;
  return (
    <div className="w-full p-3">
      <div className="bg-slate-800 text-white p-4 rounded-md flex flex-row items-center gap-4">
        <div>
          <Image
            src={defaultUserPfp}
            alt="User Profile Picture"
            width={100}
            height={100}
            className="rounded-full border border-white object-cover"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex">
            <h2 className="text-xl font-semibold">User Profile</h2>
            <Link href={`/${userID}/profile/settings`} className="ml-auto">
              <div className="ml-auto hover:cursor-pointer text-xl">
                <FaGear />
              </div>
            </Link>
          </div>
          <p className="mt-1">Name: Hairum Qureshi</p>
          <p>Email: hairum.qureshi@example.edu</p>
        </div>
      </div>
      <div className="p-2 rounded-md mt-2 bg-slate-200">
        <h2 className="text-xl font-semibold">User Bio</h2>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Cupiditate, nemo. Sit
          est laboriosam perspiciatis enim fuga nulla, officia neque
          exercitationem cumque, eos possimus deleniti, veritatis nemo. Corrupti
          obcaecati libero debitis. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Pariatur tempore quos, quod ea recusandae error nisi
          commodi architecto voluptatibus. Numquam ab veniam sunt beatae iste
          velit eaque ex odit excepturi. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Porro pariatur veniam nam necessitatibus quae, ea
          numquam repellat sint ut illum voluptate ipsum quod architecto
          reiciendis velit eos exercitationem nemo? Doloremque.
        </p>
      </div>
      <div className="w-full">
        <h2 className="text-xl font-semibold mt-4 mb-2">Enrolled Courses</h2>
        <Link href={'/course/1234'}>
          <Course courseName={'Course 1'} />
        </Link>
        <Link href={'/course/5678'}>
          <Course courseName={'Course 2'} />
        </Link>
        <Link href={'/course/9101'}>
          <Course courseName={'Course 3'} />
        </Link>
        <Link href={'/course/1112'}>
          <Course courseName={'Course 4'} />
        </Link>
        <Link href={'/course/1314'}>
          <Course courseName={'Course 5'} />
        </Link>
      </div>
    </div>
  );
}
