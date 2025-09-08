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

### 3.1 [Dashboard](Dashboard-wireframe.png)

### 3.2 [Assignment Page](Assignments-wireframe.png)

### 3.3 [Docs/FAQ Page](Docs-wireframe.png)

### 3.4 [Grades Page](Grades-wireframe.png)


---

## 4. [Data Model](data-model.md)

---

## 5.

## 6. Suggested API resources and components

### Frontend components:

- CourseCard, AssignmentList, AssignmentDetail, SubmitWidget, CodeEditor (monaco)(Potentially), FileExplorer, RubricPanel.

### Backend services:

- Auth service (JWT)
- Courses service, Assignments service
- Submission storage (S3 or compatible)

### Datastore suggestions:

- Postgres for relational data
- S3-compatible for files and traces
- Redis for queues and caching
- Optional: ElasticSearch for full-text search of submissions and comments

### Security suggestions:

- RBAC for pages and API endpoints
- Network policy isolation for sandbox execution
- Rate limiting and virus scanning on uploads
