# Database Schema and Exports

This document provides links to the Prisma schema and exported database tables for the Learning Management System (LMS) project.

## Prisma Schema

The complete database schema is defined in the Prisma schema file:

**[📄 Prisma Schema File](../../packages/database/prisma/schema.prisma)**

This schema includes all the models and relationships for the LMS MVP:
- User management with authentication
- Course and enrollment system
- Assignment and problem structure
- Multiple submission types (Code, Notebook, Textbox, File Upload, Video)
- Test cases and feedback system

## Database Table Exports

The following CSV files contain the exported data from each table in the database:

### Core Tables

| Table | Description | CSV File |
|-------|-------------|----------|
| **User** | System users (instructors, TAs, students) | [user_rows.csv](./db_exports/user_rows.csv) |
| **Course** | Academic courses | [course_rows.csv](./db_exports/course_rows.csv) |
| **Enrollment** | User enrollments in courses with roles | [enrollment_rows.csv](./db_exports/enrollment_rows.csv) |

### Assignment System

| Table | Description | CSV File |
|-------|-------------|----------|
| **Assignment** | Course assignments | [assignment_rows.csv](./db_exports/assignment_rows.csv) |
| **Problem** | Programming problems within assignments | [problem_rows.csv](./db_exports/problem_rows.csv) |
| **ProblemTestCase** | Test cases for problems | [problem_test_case_rows.csv](./db_exports/problem_test_case_rows.csv) |

### Submission System

| Table | Description | CSV File |
|-------|-------------|----------|
| **Submission** | Student submissions (all types) | [submission_rows.csv](./db_exports/submission_rows.csv) |
| **NotebookSubmission** | Jupyter notebook submissions (unique feature) | [notebook_submission_rows.csv](./db_exports/notebook_submission_rows.csv) |
| **FileUpload** | File upload submissions | [file_upload_rows.csv](./db_exports/file_upload_rows.csv) |
| **Feedback** | Instructor/TA feedback on submissions | [feedback_rows.csv](./db_exports/feedback_rows.csv) |

## Data Overview

The seeded database contains:
- **115 Users**: 5 instructors, 10 TAs, 100 students
- **5 Courses**: Computer Science courses (CISC474, CISC320, etc.)
- **Realistic Enrollments**: Proper role assignments and status distributions
- **Multiple Assignments**: 3-5 assignments per course with 2-4 problems each
- **Diverse Submissions**: All submission types with realistic content
- **Comprehensive Feedback**: Instructor and TA feedback with rubrics

## Unique Features

### Notebook Submissions
The LMS includes a unique **Notebook Submission** type that stores Jupyter notebook cells as JSON, allowing for rich data science and analysis submissions.

### Multiple Submission Types
- **CODE**: Programming solutions with multiple language support
- **NOTEBOOK**: Interactive Jupyter notebooks
- **TEXTBOX**: Essay and text-based responses
- **FILE_UPLOAD**: Document and file submissions
- **VIDEO**: Video-based submissions

### Realistic Test Data
All data is generated using Faker.js to create authentic-looking:
- User profiles with realistic names and emails
- Programming problems with proper starter code
- Submission content with actual algorithms
- Feedback with meaningful comments and rubrics

---

*Generated on: $(date)*
*Database seeded with comprehensive LMS test data*
