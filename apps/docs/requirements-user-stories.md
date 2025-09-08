### Roles
- Student
- Instructor
- Teaching Assistant (TA)
- Course Admin / Administrator
- Auto-grader / System (automated processes)

### Functional Requirements, grouped by role

#### Students
- View enrolled courses, assignments, deadlines, and grades.
- Download starter code and assignment materials.
- Create and submit solutions: code uploads, repository link, notebook, or Replayable Submission.
- Run tests locally in a provided sandbox environment, view test results.
- Receive automated feedback and manual grader feedback.
- View submission history, teacher comments, and detailed test logs.
- Resubmit until deadline if allowed.
- See rubric and expected outputs before submission.
- Participate in discussion threads for assignments, post clarifying questions.

**User stories:**
- As a student, I want to see all active assignments for my course, so I can plan my work.
- As a student, I want to run the provided unit tests in a sandbox before I submit, so I can catch errors early.
- As a student, I want to submit a recorded run of my program, so I can show how my code behaves with sample input.

#### Instructors
- Create and manage courses, assignments, and rubrics.
- Upload starter code, test suites, and example solutions.
- Set submission types allowed, late policies, resubmission rules, and grading policy.
- Assign TAs, view grading progress, and bulk release grades.
- Review submissions using a replayable grader UI, leave inline comments, and adjust scores.
- Configure automated grading scripts, test suites, and resource limits.

**User stories:**
- As an instructor, I want to configure automatic tests that run on each submission, so I can provide instant feedback.
- As an instructor, I want to annotate student submissions with inline comments while replaying execution, so feedback is precise.

#### TAs / Graders
- View assigned submissions and grading queue.
- Use the replay UI to watch the student's execution, inspect files, run tests in a private sandbox, and leave rubric-based scores and comments.
- Mark submissions as graded, request resubmission, or provide partial credit.

**User stories:**
- As a TA, I want to filter submissions by passed/failed tests priority, so I grade the highest-need submissions first.
- As a TA, I want to run tests locally in a sandbox with modified inputs, so I can explore edge-case behavior.

#### Admins
- Manage users, roles, and course enrollment.
- Configure system wide settings: compute resource pools, storage quotas, backup schedule.
- View audit logs, usage metrics, and system health.

**User stories:**
- As an admin, I want to configure resource quotas per course, so heavy classes do not exhaust compute.

#### System / Auto-grader
- Run test suites on submission, generate logs and structured results.
- Detect plagiarism using snapshot and token-based similarity checks, flag suspicious submissions.

**User stories:**
- As an automated system, I need to produce deterministic test outputs so instructors can rely on consistent grading.

### Non-functional requirements
- Scalable
- Secure
- Extensible
- Usable
- Reproducible