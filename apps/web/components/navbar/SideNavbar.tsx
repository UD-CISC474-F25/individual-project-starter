'use client';

import Link from 'next/link';
import Image from 'next/image';
import defaultUserPfp from '../../public/assets/default-user-pfp.jpg';
import { useParams } from 'next/navigation';
import { MdOutlineSchool } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { MdOutlineGrade } from 'react-icons/md';
import { PiPencilLineLight } from 'react-icons/pi';
import { LuNewspaper } from 'react-icons/lu';
import { MdOutlinePermMedia } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

export default function SideNavbar() {
  const params = useParams();
  const course_id = params?.course_id as string | undefined;

  const courses = [
    {
      id: '1234',
      name: 'Course 1',
    },
    {
      id: '5678',
      name: 'Course 2',
    },
    {
      id: '9101',
      name: 'Course 3',
    },
    {
      id: '1112',
      name: 'Course 4',
    },
    {
      id: '1314',
      name: 'Course 5',
    },
  ].filter((course) => course.id !== course_id);

  return (
    <div className="w-full h-screen p-2 text-white">
      <Link
        href="/123/profile"
        className="flex items-center p-1.5 rounded-sm bg-cyan-900 border border-sky-500 hover:cursor-pointer"
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
      <div className="border-sky-700 bg-sky-950 p-2 h-auto">
        {course_id ? (
          <div className="flex flex-col gap-3">
            <Link href="/" className="hover:bg-sky-900 p-1 hover:rounded-sm">
              <RxDashboard className="inline mr-2 mb-1 text-lg" />
              Dashboard
            </Link>
            <Link
              href={`/course/${course_id}`}
              className="hover:bg-sky-900 p-1 hover:rounded-sm"
            >
              <FaSchool className="inline mr-2 mb-1 text-lg" />
              Course Page
            </Link>
            <Link
              href={`/course/${course_id}/grades`}
              className="hover:bg-sky-900 p-1 hover:rounded-sm"
            >
              <MdOutlineGrade className="inline mr-2 mb-1 text-lg" />
              Grades
            </Link>
            <Link
              href={`/course/${course_id}/assignments`}
              className="hover:bg-sky-900 p-1 hover:rounded-sm"
            >
              <PiPencilLineLight className="inline mr-2 mb-1 text-lg" />
              Assignments
            </Link>
            <Link
              href={`/course/${course_id}/syllabus`}
              className="hover:bg-sky-900 p-1 hover:rounded-sm"
            >
              <LuNewspaper className="inline mr-2 mb-1 text-lg" />
              Syllabus
            </Link>
            <Link
              href={`/course/${course_id}/media`}
              className="hover:bg-sky-900 p-1 hover:rounded-sm"
            >
              <MdOutlinePermMedia className="inline mr-2 mb-1 text-lg" />
              Media & Files
            </Link>
            <hr className="border-sky-700" />
            <span className="text-sky-300">Other Courses:</span>
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/course/${course.id}`}
                className="hover:bg-sky-900 p-1 hover:rounded-sm"
              >
                <MdOutlineSchool className="inline mr-2 mb-1 text-lg" />
                {course.name}
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <Link href="/" className="hover:bg-sky-900 p-1 hover:rounded-sm">
              <RxDashboard className="inline mr-2 mb-1 text-lg" />
              Dashboard
            </Link>
            <hr className="border-sky-700" />
            <span className="text-sky-300">My Courses:</span>
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/course/${course.id}`}
                className="hover:bg-sky-900 p-1 hover:rounded-sm"
              >
                <MdOutlineSchool className="inline mr-2 mb-1 text-lg" />
                {course.name}
              </Link>
            ))}
          </div>
        )}
      </div>{' '}
    </div>
  );
}
