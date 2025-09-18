import { prisma } from "./client";
import { faker } from "@faker-js/faker";
import type { 
  CourseRole, 
  EnrollmentStatus, 
  Language, 
  SubmissionStatus, 
  SubmissionType 
} from "../generated/client";
import { 
  createProblems, 
  createTestCases, 
  createSubmissions, 
  createFeedback 
} from "./seed-functions";

// Set seed for consistent results
faker.seed(12345);

async function createUsers() {
  console.log("Creating users...");
  
  const users = [];
  
  // Create instructors
  for (let i = 0; i < 5; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      emailVerified: true,
      image: faker.image.avatar(),
    });
  }
  
  // Create TAs
  for (let i = 0; i < 10; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      emailVerified: true,
      image: faker.image.avatar(),
    });
  }
  
  // Create students
  for (let i = 0; i < 100; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      emailVerified: faker.datatype.boolean(),
      image: faker.image.avatar(),
    });
  }
  
  // Create users in database
  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: user,
      create: user,
    });
  }
  
  return users;
}

async function createCourses(users: any[]) {
  console.log("Creating courses...");
  
  const courses = [];
  
  const courseData = [
    {
      code: "CISC474",
      title: "Web Application Development",
      description: "Modern web development using React, Node.js, and databases. Covers full-stack development, APIs, and deployment."
    },
    {
      code: "CISC320",
      title: "Introduction to Algorithms",
      description: "Fundamental algorithms and data structures. Analysis of time and space complexity."
    },
    {
      code: "CISC275",
      title: "Introduction to Software Engineering",
      description: "Software development lifecycle, design patterns, testing, and project management."
    },
    {
      code: "CISC181",
      title: "Introduction to Computer Science II",
      description: "Object-oriented programming, data structures, and problem-solving techniques."
    },
    {
      code: "CISC220",
      title: "Data Structures",
      description: "Advanced data structures including trees, graphs, and hash tables."
    }
  ];
  
  for (let i = 0; i < courseData.length; i++) {
    const course = await prisma.course.create({
      data: {
        id: faker.string.uuid(),
        code: courseData[i].code,
        title: courseData[i].title,
        description: courseData[i].description,
        startDate: faker.date.past({ years: 1 }),
        endDate: faker.date.future({ years: 1 }),
      }
    });
    courses.push(course);
  }
  
  return courses;
}

async function createEnrollments(users: any[], courses: any[]) {
  console.log("Creating enrollments...");
  
  const instructors = users.slice(0, 5);
  const tas = users.slice(5, 15);
  const students = users.slice(15);
  
  const enrollments = [];
  
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    const instructor = instructors[i];
    
    // Enroll instructor
    await prisma.enrollment.create({
      data: {
        id: faker.string.uuid(),
        userId: instructor.id,
        courseId: course.id,
        role: 'INSTRUCTOR',
        status: 'ACTIVE',
      }
    });
    
    // Enroll 2-3 TAs per course
    const courseTAs = faker.helpers.arrayElements(tas, faker.number.int({ min: 2, max: 3 }));
    for (const ta of courseTAs) {
      await prisma.enrollment.create({
        data: {
          id: faker.string.uuid(),
          userId: ta.id,
          courseId: course.id,
          role: 'TA',
          status: 'ACTIVE',
        }
      });
    }
    
    // Enroll 15-25 students per course
    const courseStudents = faker.helpers.arrayElements(students, faker.number.int({ min: 15, max: 25 }));
    for (const student of courseStudents) {
      const enrollment = await prisma.enrollment.create({
        data: {
          id: faker.string.uuid(),
          userId: student.id,
          courseId: course.id,
          role: 'STUDENT',
          status: faker.helpers.weightedArrayElement([
            { weight: 90, value: 'ACTIVE' },
            { weight: 8, value: 'PENDING' },
            { weight: 2, value: 'DROPPED' }
          ]),
        }
      });
      enrollments.push(enrollment);
    }
  }
  
  return enrollments;
}

async function createAssignments(courses: any[]) {
  console.log("Creating assignments...");
  
  const assignments = [];
  
  for (const course of courses) {
    // Create 3-5 assignments per course
    const numAssignments = faker.number.int({ min: 3, max: 5 });
    
    for (let i = 0; i < numAssignments; i++) {
      const assignment = await prisma.assignment.create({
        data: {
          id: faker.string.uuid(),
          courseId: course.id,
          title: faker.helpers.arrayElement([
            `Assignment ${i + 1}: ${faker.helpers.arrayElement(['Data Structures', 'Algorithms', 'Web Development', 'Database Design', 'System Design'])}`,
            `Lab ${i + 1}: ${faker.helpers.arrayElement(['Programming Practice', 'Code Review', 'Testing', 'Documentation'])}`,
            `Project ${i + 1}: ${faker.helpers.arrayElement(['Full-Stack Application', 'Algorithm Implementation', 'Data Analysis', 'System Architecture'])}`
          ]),
          description: faker.lorem.paragraphs(2),
          totalPoints: faker.helpers.arrayElement([100, 150, 200, 250]),
          publishedAt: faker.date.past({ years: 0.1 }),
          dueAt: faker.date.future({ years: 0.1 }),
        }
      });
      assignments.push(assignment);
    }
  }
  
  return assignments;
}

async function main() {
  console.log("🌱 Starting database seeding...");
  
  try {
    // Clear existing data
    console.log("Clearing existing data...");
    await prisma.feedback.deleteMany();
    await prisma.fileUpload.deleteMany();
    await prisma.notebookSubmission.deleteMany();
    await prisma.submission.deleteMany();
    await prisma.problemTestCase.deleteMany();
    await prisma.problem.deleteMany();
    await prisma.assignment.deleteMany();
    await prisma.enrollment.deleteMany();
    await prisma.course.deleteMany();
    await prisma.user.deleteMany();
    
    // Create data
    const users = await createUsers();
    const courses = await createCourses(users);
    const enrollments = await createEnrollments(users, courses);
    const assignments = await createAssignments(courses);
    const problems = await createProblems(assignments);
    await createTestCases(problems);
    const submissions = await createSubmissions(problems, users, assignments);
    await createFeedback(submissions, users);
    
    console.log("✅ Database seeding completed successfully!");
    console.log(`Created:`);
    console.log(`- ${users.length} users`);
    console.log(`- ${courses.length} courses`);
    console.log(`- ${enrollments.length} enrollments`);
    console.log(`- ${assignments.length} assignments`);
    console.log(`- ${problems.length} problems`);
    console.log(`- ${submissions.length} submissions`);
    
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
