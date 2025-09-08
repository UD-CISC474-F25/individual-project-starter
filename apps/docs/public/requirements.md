# Requirements Document - Learning Management System

## Project Vision
To create a flexible, user-friendly, and scalable Learning Management System that empowers learners, instructors, and administrators by providing a structured yet adaptable environment for managing programming problems structured around courses, assignments, submissions, and feedback. A unique feature of this LMS will be **interactive coding submission types**, where students can submit runnable code snippets with embedded test cases that professors/teaching assistants can execute directly within the LMS.

## User Roles

### 1. Institution Administrator
**Description:** System-level administrator who oversees the entire LMS platform
**Responsibilities:**
- Manage institution-wide settings and policies
- Oversee professor and TA accounts
- Generate system-wide audit reports
- Monitor platform usage and performance

### 2. Professor
**Description:** Course instructor who creates and manages educational content
**Responsibilities:**
- Create and configure courses
- Design assignments and rubrics
- Grade student submissions
- Provide detailed feedback to students
- Manage teaching assistants

### 3. Teaching Assistant (TA)
**Description:** Assistant who helps professors with course management
**Responsibilities:**
- Grade assignments within assigned courses
- Provide feedback to students
- Moderate course discussions
- Assist with administrative tasks

### 4. Student
**Description:** Learner enrolled in courses
**Responsibilities:**
- Enroll in courses
- Submit assignments (including interactive code submissions)
- View grades and feedback
- Track academic progress

## Core System Actions

### Submit Actions
- **Student Submissions:** Upload files, write code in interactive editor, submit text responses
- **Grade Submissions:** Professors/TAs submit grades with detailed rubrics
- **Feedback Submissions:** Professors/TAs provide written feedback and comments
- **Code Execution:** System executes student code against test cases

### Audit Actions
- **Student Audit:** View personal grades, submission history, course progress
- **Professor Audit:** Review all student submissions, grade distributions, course analytics
- **Institution Audit:** System-wide performance metrics, user activity, compliance reports

## User Stories

### Student User Stories
- **As a Student**, I want to view all my enrolled courses on a dashboard so that I can quickly access course materials and assignments.
- **As a Student**, I want to submit code assignments using an interactive code editor so that I can test my solutions before submission.
- **As a Student**, I want to see real-time feedback when my code runs against test cases so that I can debug and improve my solution.
- **As a Student**, I want to view my grades and detailed feedback for each assignment so that I can understand how to improve.
- **As a Student**, I want to track my progress across all courses so that I can manage my workload effectively.
- **As a Student**, I want to resubmit assignments (if allowed) so that I can improve my grade after receiving feedback.

### Professor User Stories
- **As a Professor**, I want to create courses with customizable settings so that I can tailor the learning experience to my curriculum.
- **As a Professor**, I want to design assignments with multiple submission types (file upload, text, interactive code) so that I can assess different types of learning.
- **As a Professor**, I want to create interactive coding assignments with pre-defined test cases so that student code can be automatically validated.
- **As a Professor**, I want to execute student code submissions safely in a sandboxed environment so that I can verify functionality without security risks.
- **As a Professor**, I want to grade submissions with detailed rubrics so that students receive consistent and fair evaluations.
- **As a Professor**, I want to provide rich text feedback with code comments so that students understand specific areas for improvement.
- **As a Professor**, I want to manage teaching assistants and delegate grading responsibilities so that I can scale course management.
- **As a Professor**, I want to view analytics on student performance and engagement so that I can adjust my teaching approach.

### Teaching Assistant User Stories
- **As a TA**, I want to access assignments assigned to me for grading so that I can fulfill my responsibilities efficiently.
- **As a TA**, I want to use the same grading interface as professors so that I can provide consistent feedback.
- **As a TA**, I want to execute and test student code submissions so that I can verify correctness before grading.
- **As a TA**, I want to communicate with professors about grading questions so that we maintain consistency.

### Institution Administrator User Stories
- **As an Institution Admin**, I want to manage professor and TA accounts so that I can control access to the system.
- **As an Institution Admin**, I want to generate system-wide reports on usage and performance so that I can demonstrate value and identify issues.
- **As an Institution Admin**, I want to configure institution-level policies and settings so that the system complies with our standards.
- **As an Institution Admin**, I want to monitor system security and user activity so that I can ensure data protection.

## Functional Requirements

### Authentication & Authorization
- **REQ-AUTH-001:** System shall support role-based access control with four distinct user types
- **REQ-AUTH-002:** Users shall authenticate using secure login credentials
- **REQ-AUTH-003:** System shall maintain session management with automatic timeout
- **REQ-AUTH-004:** Password requirements shall enforce strong security practices

### Course Management
- **REQ-COURSE-001:** Professors shall be able to create, edit, and archive courses
- **REQ-COURSE-002:** Students shall be able to enroll in courses (with professor approval if required)
- **REQ-COURSE-003:** System shall support course hierarchies and prerequisites
- **REQ-COURSE-004:** Courses shall have configurable visibility and enrollment settings

### Assignment Management
- **REQ-ASSIGN-001:** System shall support multiple assignment types: file upload, text submission, interactive code
- **REQ-ASSIGN-002:** Interactive code assignments shall include an in-browser code editor
- **REQ-ASSIGN-003:** Code submissions shall be executed against professor-defined test cases
- **REQ-ASSIGN-004:** System shall provide secure, sandboxed code execution environment
- **REQ-ASSIGN-005:** Assignments shall have configurable due dates, attempt limits, and late policies

### Submission & Grading
- **REQ-SUB-001:** Students shall be able to save draft submissions and submit when ready
- **REQ-SUB-002:** System shall timestamp all submissions for audit purposes
- **REQ-SUB-003:** Professors/TAs shall grade submissions using customizable rubrics
- **REQ-SUB-004:** Grading interface shall support rich text feedback and code annotations
- **REQ-SUB-005:** Students shall receive notifications when grades are published

### Interactive Code Execution (Unique Feature)
- **REQ-CODE-001:** Code editor shall support syntax highlighting for multiple programming languages
- **REQ-CODE-002:** Students shall be able to run code against sample test cases before submission
- **REQ-CODE-003:** System shall execute code in isolated containers for security
- **REQ-CODE-004:** Test results shall display with clear pass/fail indicators and error messages
- **REQ-CODE-005:** Professors shall be able to add hidden test cases not visible to students

### Data Management & Analytics
- **REQ-DATA-001:** System shall maintain comprehensive audit logs of all user actions
- **REQ-DATA-002:** Professors shall access analytics on student performance and engagement
- **REQ-DATA-003:** Students shall view their progress and grade trends over time
- **REQ-DATA-004:** Institution admins shall generate system-wide usage and performance reports

## Non-Functional Requirements

### Performance
- **REQ-PERF-001:** Code execution shall complete within 30 seconds maximum
- **REQ-PERF-002:** Page load times shall not exceed 3 seconds under normal conditions
- **REQ-PERF-003:** System shall support concurrent access by up to 1000 active users

### Security
- **REQ-SEC-001:** All data transmission shall use HTTPS encryption
- **REQ-SEC-002:** Code execution environment shall be completely sandboxed
- **REQ-SEC-003:** User data shall be encrypted at rest
- **REQ-SEC-004:** System shall implement protection against common web vulnerabilities (OWASP Top 10)

### Usability
- **REQ-USE-001:** Interface shall be responsive and work on desktop, tablet, and mobile devices
- **REQ-USE-002:** System shall be accessible to users with disabilities (WCAG 2.1 AA compliance)
- **REQ-USE-003:** Error messages shall be clear and provide actionable guidance

### Scalability
- **REQ-SCALE-001:** System architecture shall support horizontal scaling
- **REQ-SCALE-002:** Database shall handle growth in users and submissions over time
- **REQ-SCALE-003:** File storage shall scale to accommodate large submissions and media files