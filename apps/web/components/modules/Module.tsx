'use client';

import { useState } from 'react';
import ModuleSection from './ModuleSection';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Module({
  moduleName,
  numSections,
}: {
  moduleName: string;
  numSections: number;
}) {
  const [collapsed, setIsCollapsed] = useState(false);
  const course_id = useParams().course_id;

  return (
    <div
      className="m-3 border border-slate-300 rounded-md"
      onClick={() => setIsCollapsed(!collapsed)}
    >
      <div className="flex items-center hover:cursor-pointer p-3 w-full bg-slate-700 text-white rounded-tr-md rounded-tl-md">
        {moduleName}
        <span className="ml-auto text-xl">
          {!collapsed ? <FaChevronCircleDown /> : <FaChevronCircleUp />}
        </span>
      </div>
      {collapsed && (
        <div className="w-full bg-slate-100">
          {Array.from({ length: numSections }).map((_, index) => (
            <Link
              key={index}
              href={`/course/${course_id}/assignment/${Math.floor(new Date().getTime() * Math.random())}`}
            >
              <ModuleSection
                sectionTitle={`This is some placeholder content for section ${index + 1}`}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
