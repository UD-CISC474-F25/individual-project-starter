import { faker } from '@faker-js/faker';
import { PrismaClient } from './client';
import { Role, SubmissionType, SubmissionStatus } from './enums';

const prisma = new PrismaClient();

async function main() {
  const optionalBio = () =>
    Math.random() > 0.5 ? faker.lorem.sentences(2) : null;
  const fakePfp = () =>
    `https://i.pravatar.cc/150?img=${faker.number.int({ min: 1, max: 70 })}`;

  // Users

  // Instructors
  await prisma.user.createMany({
    data: Array.from({ length: 14 }).map(() => ({
      email: faker.internet.email(),
      password: faker.internet.password(),
      fullName: faker.person.fullName(),
      role: Role.INSTRUCTOR,
      bio: optionalBio(),
      profilePicture: fakePfp(),
    })),
  });

  // TAs
  await prisma.user.createMany({
    data: Array.from({ length: 15 }).map(() => ({
      email: faker.internet.email(),
      password: faker.internet.password(),
      fullName: faker.person.fullName(),
      role: Role.TA,
      bio: optionalBio(),
      profilePicture: fakePfp(),
    })),
  });

  // Students
  await prisma.user.createMany({
    data: Array.from({ length: 40 }).map(() => ({
      email: faker.internet.email(),
      password: faker.internet.password(),
      fullName: faker.person.fullName(),
      role: Role.STUDENT,
      bio: optionalBio(),
      profilePicture: fakePfp(),
    })),
  });

  // Admins
  await prisma.user.createMany({
    data: Array.from({ length: 10 }).map(() => ({
      email: faker.internet.email(),
      password: faker.internet.password(),
      fullName: faker.person.fullName(),
      role: Role.ADMIN,
      bio: optionalBio(),
      isAdmin: true,
      profilePicture: fakePfp(),
    })),
  });

  const instructors = await prisma.user.findMany({
    where: { role: Role.INSTRUCTOR },
    select: { id: true },
  });
  const tas = await prisma.user.findMany({
    where: { role: Role.TA },
    select: { id: true },
  });
  const students = await prisma.user.findMany({
    where: { role: Role.STUDENT },
    select: { id: true },
  });

  // Courses
  for (let i = 0; i < 6; i++) {
    const randomInstructor = faker.helpers.arrayElement(instructors).id;
    const maybeTAs =
      i === 0 ? [] : faker.helpers.arrayElements(tas, { min: 1, max: 2 });
    const maybeStudents =
      i === 1 ? [] : faker.helpers.arrayElements(students, { min: 4, max: 10 });

    const course = await prisma.course.create({
      data: {
        courseName: faker.company.catchPhrase(),
        professorId: randomInstructor,
        tas: { connect: maybeTAs.map((t) => ({ id: t.id })) },
        students: { connect: maybeStudents.map((s) => ({ id: s.id })) },
      },
    });

    // Folders
    const root = await prisma.folder.create({
      data: { courseID: course.id, name: 'Root Folder' },
    });
    const child = await prisma.folder.create({
      data: { courseID: course.id, name: 'Week 1', parentId: root.id },
    });
    const grandchild = await prisma.folder.create({
      data: { courseID: course.id, name: 'Lecture Slides', parentId: child.id },
    });

    // more test files
    const testFiles = [
      { displayName: 'Intro.pdf', mimeType: 'application/pdf' },
      {
        displayName: 'Notes.docx',
        mimeType:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      },
      { displayName: 'Homework.zip', mimeType: 'application/zip' },
      { displayName: 'Image1.jpg', mimeType: 'image/jpeg' },
      { displayName: 'Syllabus.txt', mimeType: 'text/plain' },
    ];

    for (const f of testFiles) {
      if (Math.random() > 0.3) {
        await prisma.file.create({
          data: {
            courseID: course.id,
            folderID: grandchild.id,
            uploaderID: randomInstructor,
            displayName: f.displayName,
            path: `/files/${f.displayName}`,
            mimeType: f.mimeType,
            size: faker.number.int({ min: 1024, max: 1024 * 50 }),
          },
        });
      }
    }

    // Assignments with Modules
    const moduleNames = faker.helpers.arrayElements(
      ['Module A', 'Module B', 'Module C', 'Module D'],
      { min: 2, max: 4 },
    );

    for (let a = 0; a < 3; a++) {
      const taGrader = tas.length ? faker.helpers.arrayElement(tas).id : null;
      const allowEC = Math.random() > 0.5;
      const revokedEC = Math.random() > 0.7;
      const moduleName = faker.helpers.arrayElement(moduleNames);

      const assignment = await prisma.assignment.create({
        data: {
          title: `Assignment ${a + 1}: ${faker.hacker.phrase()}`,
          description: faker.lorem.sentences(2),
          module: moduleName,
          dueDate: faker.date.future(),
          courseID: course.id,
          graderID: taGrader,
          totalPoints: faker.number.int({ min: 10, max: 100 }),
          published: a === 2 ? false : true,
          allowEarlyECSubmissionIncentive: allowEC,
          extraCreditTotalPointsIncentive: allowEC
            ? parseFloat((Math.random() * 1 + 0.1).toFixed(1))
            : 0,
          revokedECSubmissionIncentive: revokedEC,
        },
      });

      if (maybeStudents.length > 0) {
        const chosenStudents = faker.helpers.arrayElements(maybeStudents, {
          min: 1,
          max: Math.min(5, maybeStudents.length),
        });

        for (const s of chosenStudents) {
          const daysEarly = allowEC ? faker.number.int({ min: 0, max: 5 }) : 0;
          const submissionDate = new Date(assignment.dueDate);
          submissionDate.setDate(submissionDate.getDate() - daysEarly);

          // decide feedback + poster
          let feedbackText: string | null = null;
          let feedbackPosterId: string | null = null;
          if (Math.random() > 0.5) {
            feedbackPosterId =
              taGrader ??
              randomInstructor ??
              (tas.length ? faker.helpers.arrayElement(tas).id : null) ??
              (instructors.length
                ? faker.helpers.arrayElement(instructors).id
                : null);
            if (feedbackPosterId) {
              feedbackText = faker.lorem.sentences(2);
            }
          }

          // calculate max points including extra credit
          const maxPoints =
            assignment.totalPoints + assignment.extraCreditTotalPointsIncentive;

          // randomly decide draft content, scheduled submit, isScheduledEnabled, and status
          const draftContent =
            Math.random() > 0.5 ? faker.lorem.paragraph() : null;
          const scheduledSubmitAt =
            Math.random() > 0.5 ? faker.date.future() : null;
          const isScheduledSubmitEnabled = Math.random() > 0.7;
          const status = faker.helpers.arrayElement([
            SubmissionStatus.NOT_SUBMITTED,
            SubmissionStatus.SUBMITTED,
            SubmissionStatus.GRADED,
            SubmissionStatus.LATE,
            SubmissionStatus.MISSING,
            SubmissionStatus.DRAFT,
            SubmissionStatus.EXCUSED,
          ]);
          const submissionType = faker.helpers.arrayElement([
            SubmissionType.FILE,
            SubmissionType.URL,
            SubmissionType.TEXT,
            SubmissionType.GOOGLE_DOC,
          ]);

          await prisma.submission.create({
            data: {
              assignmentID: assignment.id,
              courseID: course.id,
              studentID: s.id,
              submissionType,
              pointsEarned: faker.number.int({
                min: 0,
                max: Math.floor(maxPoints),
              }),
              createdAt: submissionDate,
              feedback: feedbackText,
              feedbackPosterId: feedbackPosterId,
              draftContent,
              scheduledSubmitAt,
              isScheduledSubmitEnabled,
              status,
              type: submissionType,
            },
          });

          await prisma.courseGrade.create({
            data: {
              courseID: course.id,
              studentID: s.id,
              numericGrade: faker.number.int({ min: 50, max: 100 }),
            },
          });
        }
      }
    }
  }
}

main()
  .then(() => console.log('✅ Seeding completed'))
  .catch((err) => {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// Seed code was generated with the help of ChatGPT
