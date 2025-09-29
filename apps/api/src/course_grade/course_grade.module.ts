import { Module } from '@nestjs/common';
import { CourseGradeService } from './course_grade.service';
import { CourseGradeController } from './course_grade.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CourseGradeService],
  controllers: [CourseGradeController],
})
export class CourseGradeModule {}
