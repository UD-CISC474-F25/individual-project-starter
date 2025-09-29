import { Controller, Get, Param } from '@nestjs/common';
import { CourseGradeService } from './course_grade.service';

@Controller('course-grades')
export class CourseGradeController {
  constructor(private courseGradeService: CourseGradeService) {}

  @Get()
  async getAllCourseGrades() {
    return this.courseGradeService.getAllCourseGrades();
  }

  @Get(':id')
  async getCourseGradeById(@Param('id') id: string) {
    return this.courseGradeService.getCourseGradeById(id);
  }
}
