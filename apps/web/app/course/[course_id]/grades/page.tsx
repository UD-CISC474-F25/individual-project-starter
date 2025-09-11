import Link from 'next/link';
import Assignment from '../../../../components/Assignment';

// TODO - add a magnifying glass icon to the search bar

export default async function Grades({
  params,
}: {
  params: Promise<{ course_id: string }>;
}) {
  const course_id = (await params).course_id;
  return (
    <div className="w-full p-2">
      <div className="w-full p-2 bg-slate-800 rounded-md text-2xl text-white font-semibold">
        Grade: <span className="text-green-400">100% (A+)</span>
      </div>
      <div>
        <input
          type="text"
          className="w-full p-2.5 bg-sky-950 rounded-sm text-white my-3 outline-none"
          placeholder="Search for assignments..."
        />
      </div>
      <div>
        {Array.from({ length: 10 }).map((_, index) => (
          <Link
            key={index}
            href={`/course/${course_id}/assignment/${Math.floor(Number(new Date()) * Math.random())}`}
          >
            <Assignment
              assignmentTitle={`Assignment ${index + 1}`}
              score={10}
              outOf={10}
              date={`9/${index + 1}/2025`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
