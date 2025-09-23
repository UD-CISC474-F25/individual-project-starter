import { Test, TestingModule } from '@nestjs/testing';
import { CourseGradeService } from './course_grade.service';

describe('CourseGradeService', () => {
  let service: CourseGradeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseGradeService],
    }).compile();

    service = module.get<CourseGradeService>(CourseGradeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
