# Learning Management System (LMS) Planning Document

**Vision:**  
To create a flexible, user-friendly, and scalable Learning Management System that empowers learners, instructors, and administrators by providing a structured yet adaptable environment for managing programming problems structured around courses, assignments, submissions, and feedback. The LMS will support diverse learning needs, streamline administrative processes, and foster meaningful engagement between all roles in the system.  
A unique feature of this LMS will be **interactive coding submission types**, where students can submit runnable code snippets with embedded test cases that professors/teaching assistants can execute directly within the LMS.

---

## 1. Requirements Document

### Users and Roles
- **Institution / Admin**: Oversees courses, manages professors/TAs, audits system-wide usage.
- **Professor**: Creates courses, manages assignments, grades, and feedback.
- **Teaching Assistant (TA)**: Assists with grading, moderating discussions, and providing feedback.
- **Student**: Enrolls in courses, submits assignments, views feedback and grades.

### Core Actions
- **Submit**
  - Student submits assignments.
  - Professor/TA submits grades or changes grades.
  - Professor/TA submits comments or replies to student questions.
- **Audit**
  - Student audits their courses and grades.
  - Professor audits student submissions and grades.
  - Institution audits courses and performance system-wide.

### Example User Stories
- *As a Student*, I want to upload my code for an assignment so that I can receive a grade and feedback.  
- *As a Professor*, I want to create and manage assignments so that students have clear tasks to complete.  
- *As a TA*, I want to grade and provide feedback on submissions so that students understand how to improve.  
- *As an Institution Admin*, I want to audit course activity so that I can ensure compliance with school standards.  
- *As a Student*, I want to use the unique **interactive code submission type** so that I can test and verify my code against provided test cases directly in the LMS.

👉 Full requirements: [`requirements.md`](./requirements.md)

---

## 2. Site Map

```mermaid
graph TD
    A[Login / Register] --> B[Dashboard]
    B --> C[Courses]
    C --> C1[Course Overview]
    C1 --> C2[Assignments]
    C2 --> C3[Assignment Submission]
    C3 --> C4[Interactive Code Submission]
    C1 --> C5[Grades & Feedback]
    B --> D[Profile / Settings]
    B --> E[Admin Panel]
    E --> E1[Manage Users]
    E --> E2[Audit Reports]
````

👉 Detailed site map: [`sitemap.md`](./sitemap.md)

---

## 3. Wireframes

Major screens to wireframe:

* **Dashboard**: Displays enrolled courses, upcoming assignments, recent feedback.
* **Course Page**: Overview, assignments list, grades tab.
* **Assignment Submission Page**: Upload form + interactive code editor.
* **Admin Panel**: User management and audit tools.

👉 Wireframes: [`wireframes.md`](./wireframes.md)
(*These can be text/ASCII mockups or exported images/PDFs placed in `apps/docs/public/`.*)

---

## 4. Data Model

### Major Entities (Nouns)

* **School / Institution**
* **Course**
* **User** (Professor, TA, Student, Admin)
* **Assignment**
* **Submission**
* **Grade**
* **Comment / Feedback**

### Entity Relationship Diagram

```mermaid
erDiagram
    INSTITUTION ||--o{ COURSE : offers
    COURSE ||--o{ ASSIGNMENT : contains
    USER ||--o{ COURSE : enrolls_in
    USER ||--o{ ASSIGNMENT : creates
    ASSIGNMENT ||--o{ SUBMISSION : receives
    SUBMISSION ||--o{ GRADE : results_in
    SUBMISSION ||--o{ COMMENT : has
    USER ||--o{ COMMENT : writes
```

👉 Full data model: [`data_model.md`](./data_model.md)

---

## File Mapping

* **Requirements Document** → [`requirements.md`](./requirements.md)
* **Site Map** → [`sitemap.md`](./sitemap.md)
* **Wireframes** → [`wireframes.md`](./wireframes.md)
* **Data Model Diagram** → [`data_model.md`](./data_model.md)

All files live in `apps/docs/public/`.
