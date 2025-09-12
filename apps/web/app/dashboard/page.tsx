'use client';

import { Calendar } from "@/_components/ui/calendar";
import { Card } from "@/_components/ui/card";
import Image from "next/image";
import Header from "@/_components/header";

const exampleCourses = [
  { id: 1, name: "Course 1", date: "2023-10-01", img: "/course1.jpg" },
  { id: 2, name: "Course 2", date: "2023-10-05", img: "/course2.jpg" },
  { id: 3, name: "Course 3", date: "2023-10-10", img: "/course3.jpg" },
];

const exampleAssignments = [
  { id: 1, title: "Assignment 1", dueDate: "2023-10-03", description: "Description for Assignment 1" },
  { id: 2, title: "Assignment 2", dueDate: "2023-10-07", description: "Description for Assignment 2" },
  { id: 3, title: "Assignment 3", dueDate: "2023-10-12", description: "Description for Assignment 3" },
];

export default function DashboardPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Main dashboard content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exampleCourses.map((course) => (
                  <Card key={course.id} className="p-4">
                    <Image src={course.img} alt={course.name} fill={true} />
                    <h3 className="text-xl font-bold">{course.name}</h3>
                    {exampleAssignments.map((assignment) => (
                      <div key={assignment.id} className="mt-2 p-2 border rounded">
                        <h4 className="font-semibold">{assignment.title}</h4>
                        <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                        <p className="text-sm">{assignment.description}</p>
                      </div>
                    ))}
                    <p className="text-gray-600">Date: {course.date}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Calendar */}
          <div className="lg:w-80 lg:flex-shrink-0">
            <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
            <Card className="p-6">
              <Calendar 
                className="bg-inherit"
                mode="single"
                onSelect={() => {}}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}