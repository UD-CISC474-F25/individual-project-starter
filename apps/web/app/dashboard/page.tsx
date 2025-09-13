'use client';

import { useState } from "react";
import { Calendar } from "@/_components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/_components/ui/card";
import { Badge } from "@/_components/ui/badge";
import { Button } from "@/_components/ui/button";
import Header from "@/_components/header";
import { 
  BookOpen, 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  TrendingUp,
  Star,
  AlertCircle,
  CheckCircle,
  Circle
} from "lucide-react";
import { useRouter } from "next/navigation";

// Mock course data with assignments
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
    recentActivity: [
      { type: 'assignment', title: 'React Components Lab', date: '2024-12-10', status: 'submitted' },
      { type: 'grade', title: 'JavaScript Basics', grade: 'A', date: '2024-12-08' }
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
    recentActivity: [
      { type: 'assignment', title: 'Dynamic Programming Problem Set', date: '2024-12-12', status: 'pending' },
      { type: 'grade', title: 'Graph Algorithms', grade: 'B+', date: '2024-12-05' }
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
    recentActivity: [
      { type: 'assignment', title: 'Series Convergence Problems', date: '2024-12-14', status: 'submitted' },
      { type: 'grade', title: 'Integration Techniques', grade: 'A', date: '2024-12-07' }
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
    recentActivity: [
      { type: 'assignment', title: 'Research Paper Draft', date: '2024-12-16', status: 'pending' },
      { type: 'grade', title: 'Argumentative Essay', grade: 'A-', date: '2024-12-09' }
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
    recentActivity: [
      { type: 'assignment', title: 'Lab Report: Wave Properties', date: '2024-12-11', status: 'submitted' },
      { type: 'grade', title: 'Mechanics Problem Set', grade: 'B', date: '2024-12-04' }
    ]
  }
];

// Mock assignments data with due dates
const mockAssignments = [
  {
    id: '1',
    title: 'React Components Lab',
    courseId: '1',
    courseCode: 'CISC 474',
    courseName: 'Web Development',
    courseColor: '#3B82F6',
    dueDate: '2024-12-15',
    type: 'Lab',
    points: 100,
    status: 'pending',
    description: 'Build interactive React components with state management'
  },
  {
    id: '2',
    title: 'Dynamic Programming Problem Set',
    courseId: '2',
    courseCode: 'CISC 320',
    courseName: 'Algorithms',
    courseColor: '#10B981',
    dueDate: '2024-12-18',
    type: 'Assignment',
    points: 50,
    status: 'pending',
    description: 'Solve dynamic programming problems using memoization'
  },
  {
    id: '3',
    title: 'Series Convergence Problems',
    courseId: '3',
    courseCode: 'MATH 242',
    courseName: 'Calculus II',
    courseColor: '#F59E0B',
    dueDate: '2024-12-20',
    type: 'Homework',
    points: 75,
    status: 'pending',
    description: 'Analyze convergence of infinite series'
  },
  {
    id: '4',
    title: 'Research Paper Draft',
    courseId: '4',
    courseCode: 'ENGL 110',
    courseName: 'Academic Writing',
    courseColor: '#EF4444',
    dueDate: '2024-12-22',
    type: 'Essay',
    points: 100,
    status: 'pending',
    description: 'Submit first draft of research paper'
  },
  {
    id: '5',
    title: 'Lab Report: Wave Properties',
    courseId: '5',
    courseCode: 'PHYS 207',
    courseName: 'Physics I',
    courseColor: '#8B5CF6',
    dueDate: '2024-12-16',
    type: 'Lab Report',
    points: 80,
    status: 'pending',
    description: 'Analyze wave properties in different media'
  },
  {
    id: '6',
    title: 'Final Project Presentation',
    courseId: '1',
    courseCode: 'CISC 474',
    courseName: 'Web Development',
    courseColor: '#3B82F6',
    dueDate: '2024-12-28',
    type: 'Project',
    points: 150,
    status: 'pending',
    description: 'Present your final web application project'
  }
];

const getGradeColor = (grade: string) => {
  if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
  if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
  if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
  return 'bg-gray-100 text-gray-800';
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'submitted': return <CheckCircle className="h-4 w-4 text-green-600" />;
    case 'pending': return <Clock className="h-4 w-4 text-yellow-600" />;
    case 'late': return <AlertCircle className="h-4 w-4 text-red-600" />;
    default: return <Circle className="h-4 w-4 text-gray-400" />;
  }
};

const getDaysUntilDue = (dueDate: string) => {
  const today = new Date();
  const due = new Date(dueDate);
  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const getUrgencyColor = (daysUntil: number) => {
  if (daysUntil < 0) return 'text-red-600';
  if (daysUntil <= 1) return 'text-red-500';
  if (daysUntil <= 3) return 'text-yellow-600';
  return 'text-gray-600';
};

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const router = useRouter();
  
  // Sort assignments by due date
  const sortedAssignments = [...mockAssignments].sort((a, b) => 
    new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  );

  // Get assignments for selected date
  const selectedDateAssignments = selectedDate 
    ? mockAssignments.filter(assignment => {
        const assignmentDate = new Date(assignment.dueDate);
        return assignmentDate.toDateString() === selectedDate.toDateString();
      })
    : [];

  // Create calendar modifiers for assignment due dates
  const assignmentDates = mockAssignments.map(assignment => new Date(assignment.dueDate));
  
  const modifiers = {
    hasAssignment: assignmentDates
  };

  const modifiersClassNames = {
    hasAssignment: 'relative after:content-[""] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:bg-blue-500'
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Main dashboard content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Courses</p>
                      <p className="text-2xl font-bold">{mockCourses.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Avg. Progress</p>
                      <p className="text-2xl font-bold">
                        {Math.round(mockCourses.reduce((acc, c) => acc + c.progress, 0) / mockCourses.length)}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Star className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Avg. Grade</p>
                      <p className="text-2xl font-bold">B+</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Due Soon</p>
                      <p className="text-2xl font-bold">
                        {sortedAssignments.filter(a => getDaysUntilDue(a.dueDate) <= 3).length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Course Cards */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: course.color }}
                          />
                          <div>
                            <CardTitle className="text-lg">{course.code}</CardTitle>
                            <p className="text-sm text-gray-600">{course.name}</p>
                          </div>
                        </div>
                        <Badge className={getGradeColor(course.grade)}>
                          {course.grade}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">{course.instructor}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Progress Bar */}
                      <div>
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

                      {/* Course Stats */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-gray-400" />
                          <span>{course.semester}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span>{course.credits} credits</span>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div>
                        <p className="text-sm font-medium mb-2">Recent Activity</p>
                        <div className="space-y-1">
                          {course.recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              {getStatusIcon(activity.status || 'completed')}
                              <span className="text-gray-600">{activity.title}</span>
                              {activity.grade && (
                                <Badge variant="outline" className="text-xs">
                                  {activity.grade}
                                </Badge>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Next Due Date */}
                      <div className="pt-2 border-t">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>Next due: {new Date(course.nextDue).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1">
                          View Course
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => router.push("/courses/grades")}>
                          Grades
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Calendar and Assignments */}
          <div className="lg:w-80 lg:flex-shrink-0">
            <h2 className="text-2xl font-semibold mb-4">Calendar & Assignments</h2>
            
            {/* Calendar */}
            <Card className="p-6 mb-6">
              <Calendar 
                className="bg-inherit"
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                modifiers={modifiers}
                modifiersClassNames={modifiersClassNames}
              />
            </Card>

            {/* Selected Date Assignments */}
            {selectedDate && selectedDateAssignments.length > 0 && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Assignments for {selectedDate.toLocaleDateString()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedDateAssignments.map((assignment) => (
                      <div key={assignment.id} className="flex items-center gap-3 p-3 border rounded-lg">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: assignment.courseColor }}
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{assignment.title}</p>
                          <p className="text-xs text-gray-600">{assignment.courseCode}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {assignment.points} pts
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Upcoming Assignments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sortedAssignments.slice(0, 5).map((assignment) => {
                    const daysUntil = getDaysUntilDue(assignment.dueDate);
                    return (
                      <div key={assignment.id} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: assignment.courseColor }}
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{assignment.title}</p>
                          <p className="text-xs text-gray-600">{assignment.courseCode}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-xs font-medium ${getUrgencyColor(daysUntil)}`}>
                            {daysUntil < 0 ? 'Overdue' : 
                             daysUntil === 0 ? 'Due Today' :
                             daysUntil === 1 ? 'Due Tomorrow' :
                             `${daysUntil} days`}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(assignment.dueDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {sortedAssignments.length > 5 && (
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    View All Assignments
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}