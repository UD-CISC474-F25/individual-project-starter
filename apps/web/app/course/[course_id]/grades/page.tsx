import Link from 'next/link';
import Assignment from '../../../../components/Assignment';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default async function Grades({
  params,
}: {
  params: Promise<{ course_id: string }>;
}) {
  const course_id = (await params).course_id;
  return (
    <div className="w-full h-screen overflow-y-auto p-2">
      <div className="w-full p-2 text-white bg-cyan-900 rounded-md text-2xl font-semibold">
        Grade: <span className="text-green-400">100% (A+)</span>
      </div>
      <div className="relative w-full my-5">
        <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search files or media..."
          className="w-full border-2 border-slate-700 rounded-md pl-10 pr-3 py-2 outline-none"
        />
      </div>
      <div>
        {Array.from({ length: 10 }).map((_, index) => (
          <Link
            key={index}
            href={`/course/${course_id}/assignment/${Math.floor(Number(new Date()) * Math.random())}`}
          >
            <Assignment
              assignmentTitle={`Assignment ${index + 1} - click me!`}
              score={10}
              outOf={10}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
