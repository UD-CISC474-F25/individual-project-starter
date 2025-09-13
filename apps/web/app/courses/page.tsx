'use client';

import { useState } from "react";
import Header from "@/_components/header";
import { Card, CardContent } from "@/_components/ui/card";
import { Badge } from "@/_components/ui/badge";
import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";
import { Calendar } from "@/_components/ui/calendar";
import { 
  BookOpen, 
  Calendar as CalendarIcon, 
  Users, 
  Clock, 
  Search,
  ChevronRight
} from "lucide-react";

// Mock course data - in a real app this would come from your database
const mockCourses = [
  {
    id: '1',
    code: 'CISC 474',
    name: 'Web Development',
    instructor: 'Dr. Sarah Johnson',
    description: 'Learn modern web development technologies including React, Node.js, and databases.',
    semester: 'Fall 2024',
    credits: 3,
    progress: 75,
    grade: 'A-',
    color: '#3B82F6',
    assignments: 12,
    completed: 9,
    nextDue: '2024-12-15',
    resources: [
      { type: 'video', name: 'React Fundamentals', count: 8 },
      { type: 'document', name: 'Course Notes', count: 15 },
      { type: 'assignment', name: 'Labs', count: 6 }
    ]
  },
  {
    id: '2',
    code: 'CISC 320',
    name: 'Algorithms',
    instructor: 'Prof. Michael Chen',
    description: 'Study of fundamental algorithms and data structures for efficient problem solving.',
    semester: 'Fall 2024',
    credits: 3,
    progress: 60,
    grade: 'B+',
    color: '#10B981',
    assignments: 10,
    completed: 6,
    nextDue: '2024-12-18',
    resources: [
      { type: 'video', name: 'Algorithm Lectures', count: 12 },
      { type: 'document', name: 'Textbook Chapters', count: 8 },
      { type: 'assignment', name: 'Problem Sets', count: 8 }
    ]
  },
  {
    id: '3',
    code: 'MATH 242',
    name: 'Calculus II',
    instructor: 'Dr. Emily Rodriguez',
    description: 'Integration techniques, sequences, series, and applications of calculus.',
    semester: 'Fall 2024',
    credits: 4,
    progress: 85,
    grade: 'A',
    color: '#F59E0B',
    assignments: 15,
    completed: 13,
    nextDue: '2024-12-20',
    resources: [
      { type: 'video', name: 'Lecture Videos', count: 20 },
      { type: 'document', name: 'Practice Problems', count: 25 },
      { type: 'assignment', name: 'Homework', count: 12 }
    ]
  },
  {
    id: '4',
    code: 'ENGL 110',
    name: 'Academic Writing',
    instructor: 'Prof. David Thompson',
    description: 'Development of critical thinking and writing skills for academic contexts.',
    semester: 'Fall 2024',
    credits: 3,
    progress: 90,
    grade: 'A-',
    color: '#EF4444',
    assignments: 8,
    completed: 7,
    nextDue: '2024-12-22',
    resources: [
      { type: 'document', name: 'Writing Guides', count: 10 },
      { type: 'assignment', name: 'Essays', count: 5 },
      { type: 'video', name: 'Writing Workshops', count: 4 }
    ]
  },
  {
    id: '5',
    code: 'PHYS 207',
    name: 'Physics I',
    instructor: 'Dr. Lisa Wang',
    description: 'Mechanics, waves, and thermodynamics with laboratory component.',
    semester: 'Fall 2024',
    credits: 4,
    progress: 45,
    grade: 'B',
    color: '#8B5CF6',
    assignments: 14,
    completed: 6,
    nextDue: '2024-12-16',
    resources: [
      { type: 'video', name: 'Physics Lectures', count: 16 },
      { type: 'document', name: 'Lab Manuals', count: 8 },
      { type: 'assignment', name: 'Lab Reports', count: 10 }
    ]
  }
];


const getGradeColor = (grade: string) => {
  if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
  if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
  if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
  return 'bg-gray-100 text-gray-800';
};

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSemester, setFilterSemester] = useState('all');

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSemester = filterSemester === 'all' || course.semester === filterSemester;
    return matchesSearch && matchesSemester;
  });

  const semesters = ['all', ...Array.from(new Set(mockCourses.map(c => c.semester)))];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Main courses content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6">My Courses</h1>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search courses, instructors, or course codes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={filterSemester}
                  onChange={(e) => setFilterSemester(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {semesters.map(semester => (
                    <option key={semester} value={semester}>
                      {semester === 'all' ? 'All Semesters' : semester}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Courses List */}
            <div className="space-y-4">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        {/* Course Color Indicator */}
                        <div 
                          className="w-4 h-4 rounded-full flex-shrink-0"
                          style={{ backgroundColor: course.color }}
                        />
                        
                        {/* Course Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{course.code}</h3>
                            <Badge className={getGradeColor(course.grade)}>
                              {course.grade}
                            </Badge>
                          </div>
                          <h4 className="text-lg font-medium text-gray-900 mb-1">{course.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                          <p className="text-sm text-gray-700 line-clamp-1">{course.description}</p>
                        </div>

                        {/* Course Stats */}
                        <div className="flex items-center gap-6 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{course.semester}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>{course.credits} credits</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{course.completed}/{course.assignments} assignments</span>
                          </div>
                        </div>

                        {/* Progress */}
                        <div className="w-32">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full transition-all duration-300"
                              style={{ 
                                width: `${course.progress}%`,
                                backgroundColor: course.color 
                              }}
                            />
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          View Course
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
