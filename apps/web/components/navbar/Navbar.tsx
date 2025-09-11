'use client';

import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import defaultUserPfp from '../../public/assets/default-user-pfp.jpg';
import Link from 'next/link';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { useParams } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const params = useParams();

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
  ].filter((course) => course.id !== params.course_id);

  return (
    <div className="lg:hidden md:block bg-sky-950 w-full h-14 p-1.5 text-white flex items-center">
      <Link
        href="/123/profile"
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
      <div
        className="p-2 rounded-sm flex items-center justify-center text-2xl ml-auto hover:cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
      </div>
      {isMenuOpen && (
        <div className="w-full border-b-3 border-sky-700 bg-sky-950 p-2 h-auto absolute top-14 right-0">
          {params.course_id ? (
            <div className="flex flex-col gap-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </Link>
              <Link
                href={`/course/${params.course_id}/grades`}
                onClick={() => setIsMenuOpen(false)}
              >
                Grades
              </Link>
              <Link
                href={`/course/${params.course_id}/assignments`}
                onClick={() => setIsMenuOpen(false)}
              >
                Assignments
              </Link>
              <Link
                href={`/course/${params.course_id}/syllabus`}
                onClick={() => setIsMenuOpen(false)}
              >
                Syllabus
              </Link>
              <Link
                href={`/course/${params.course_id}/media`}
                onClick={() => setIsMenuOpen(false)}
              >
                Media
              </Link>
              <hr className="border-sky-700" />
              <span className="text-sky-300">Other Courses:</span>
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/course/${course.id}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {course.name}
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </Link>
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/course/${course.id}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {course.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
