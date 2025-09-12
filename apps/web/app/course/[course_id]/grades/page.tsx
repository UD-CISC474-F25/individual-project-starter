import Link from 'next/link';
import Assignment from '../../../../components/Assignment';
import SearchBar from '../../../../components/SearchBar';

export default async function Grades({
  params,
}: {
  params: Promise<{ course_id: string }>;
}) {
  const course_id = (await params).course_id;
  return (
    <div className="w-full h-screen overflow-y-auto p-2">
      <div className="w-full p-2 text-white bg-cyan-900 rounded-md text-2xl font-semibold">
        Grade: <span className="text-yellow-400">100% (A+)</span>
      </div>
      <SearchBar placeholder={'Search for assignment...'} />
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
