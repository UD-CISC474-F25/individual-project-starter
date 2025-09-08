# LMS Design, Requirements, Site Map, Wireframes, Data Model

## Vision
Create a flexible, user-friendly, scalable Learning Management System that empowers learners, instructors, and administrators by providing a structured yet adaptable environment for managing programming problems organized around courses, assignments, submissions, and feedback. The LMS will support diverse learning needs, streamline administrative processes, and foster meaningful engagement between all roles in the system.

A unique feature: **Replayable Submission**: students submit code plus a recording of the program execution or terminal session, which graders can replay step by step, add inline annotations, and re-run in an isolated sandbox.

---

## 1. [Requirements, roles, user stories](requirements-user-stories.md)

---

## 2. [Site map](sitemap.mmd)

```
/ (Landing page)
 /login
 /signup
 /forgot-password

/dashboard                      
/courses                        
/courses/:courseId              
/courses/:courseId/assignments  
/courses/:courseId/assignments/:assignmentId
  - /view       
  - /submit     
  - /submissions
  - /grade/:submissionId

/instructor/courses/:courseId/setup  
/admin/users                           
/admin/settings                        
/support                                
/profile/:userId                        
```

---

## 3. Wireframes

### 3.1 [Dashboard](wireframes-dashboard.mmd)

### 3.2 [Assignment Page](wireframes-assignment.mmd)

### 3.3 [Grading UI](wireframes-grader.mmd)

---

## 4. [Data Model](data-model.mmd)

---

## 5. Replayable Submission: feature spec
### What it is:

A submission type where the student runs their solution in a system-provided sandbox while the system records inputs, outputs, console logs, and an execution trace. The submission includes code, the captured trace, and a reproducible environment snapshot.

### Why it is cool and useful

- Facilitates faster grading since graders can see actual program behavior
- Students can demonstrate corner-case handling and interactivity
- Improves feedback clarity, since graders can annotate timeline events
- Helps debug flaky or environment dependent failures by providing environment snapshot

### Recording contents

- Files at time of run
- Standard input that was provided
- Standard output and standard error logs
- Timing of I/O events (timestamps)
- Process exit code, runtime metrics, and captured stack traces for crashes
- Optional screen capture or terminal replay (text-based), not full video to save storage

### Storage and privacy

- Store recording as compressed structured trace, execution_id and trace_path
- Keep retention policy configurable by admins
- Ensure traces are sanitized to remove sensitive system info

### Grader UI behavior

- Load trace, show timeline with events
- Allow stepping through code with execution pointers
- Re-run recorded inputs in an isolated private sandbox for further exploration
- Attach inline comments at a timestamp or file/line

### Basic backend flow

- Student chooses Replayable Submission, opens the sandbox
- They run the program with provided inputs, system records the trace
- On submit, the system stores code, trace, and test results
- Auto-grader runs test suites on the captured submission, stores structured results
- Grader uses Replay UI for manual grading

## 6. Suggested API resources and components

### Frontend components:

- CourseCard, AssignmentList, AssignmentDetail, SubmitWidget, ReplayPlayer, CodeEditor (monaco), FileExplorer, RubricPanel, GradingQueue.

### Backend services:

- Auth service (JWT)
- Courses service, Assignments service
- Submission storage (S3 or compatible)
- Sandbox / Execution service (Kubernetes pods, container pool)
- Auto-grader service (runs tests, posts results)
- Replay storage and replay service (serves execution trace)

### Datastore suggestions:

- Postgres for relational data
- S3-compatible for files and traces
- Redis for queues and caching
- Optional: ElasticSearch for full-text search of submissions and comments

### Security suggestions:

- RBAC for pages and API endpoints
- Network policy isolation for sandbox execution
- Rate limiting and virus scanning on uploads
