import { Module } from '@nestjs/common';
import { CourseGradeService } from './course_grade.service';
import { CourseGradeController } from './course_grade.controller';

@Module({
  providers: [CourseGradeService],
  controllers: [CourseGradeController]
})
export class CourseGradeModule {}
