# Learning Management System - Project Documentation

## Vision
To create a flexible, user-friendly, and scalable Learning Management System that empowers learners, instructors, and administrators by providing a structured yet adaptable environment for managing programming problems structured around courses, assignments, submissions, and feedback. The LMS will support diverse learning needs, streamline administrative processes, and foster meaningful engagement between all roles in the system. 

**Unique Feature:** Interactive coding submission types where students can submit runnable code snippets with embedded test cases that professors/teaching assistants can execute directly within the LMS.

---

## Project Documentation

This document serves as the central hub linking to all required project planning documents:

### 📋 [Requirements Document](./requirements.md)
**Satisfies:** Requirements document outlining what different users need to be able to do

**Contains:**
- User roles and responsibilities (Institution Admin, Professor, TA, Student)
- Comprehensive user stories for each role
- Functional requirements with detailed specifications
- Non-functional requirements (performance, security, usability, scalability)
- Interactive code execution requirements (unique feature)

### 🗺️ [Site Map](./sitemap.md)
**Satisfies:** Site map identifying the frontend pages

**Contains:**
- Complete navigation hierarchy with Mermaid diagram
- Detailed page descriptions and purposes
- User flows for common tasks
- Mobile responsive considerations
- Role-based access patterns

### 🎨 [Wireframes](./wireframes.md)
**Satisfies:** Wireframes of some of the major screens

**Contains:**
- ASCII wireframes for major screens:
  - Dashboard (personalized home page)
  - Course overview and navigation
  - Interactive code submission interface (unique feature)
  - Professor grading center with code execution
  - Admin panel for user management
  - Mobile responsive design examples
- Design notes and accessibility considerations

### 🏗️ [Data Model](./data_model.md)
**Satisfies:** Basic data model diagram, at least identifying major nouns in the system

**Contains:**
- Comprehensive Entity Relationship Diagram using Mermaid
- Detailed entity descriptions with business rules
- Major nouns identified: Institution, User, Course, Assignment, Submission, Grade, Comment, Test Case, Execution Log
- Relationship cardinalities and constraints
- Database design considerations for scalability and performance
- Sample queries for common operations

---

## Quick Navigation

| Requirement | Document | Key Features |
|-------------|----------|--------------|
| User Stories & Requirements | [requirements.md](./requirements.md) | 20+ user stories, functional/non-functional requirements |
| Frontend Pages | [sitemap.md](./sitemap.md) | Complete navigation, user flows, mobile considerations |
| Screen Mockups | [wireframes.md](./wireframes.md) | ASCII wireframes, unique code submission interface |
| Data Structure | [data_model.md](./data_model.md) | ERD with 12 entities, relationships, business rules |

---

## Implementation Readiness

These documents provide a comprehensive foundation for development, including:

✅ **Clear user requirements** with detailed user stories  
✅ **Complete site navigation** with page-by-page specifications  
✅ **Visual layouts** showing the user interface design  
✅ **Database design** ready for implementation  
✅ **Unique feature specification** for interactive code submissions  
✅ **Scalability considerations** for future growth  

The planning phase establishes a solid foundation to begin developing the Learning Management System with confidence in the architecture and user experience design.