import { Test, TestingModule } from '@nestjs/testing';
import { CourseGradeController } from './course_grade.controller';

describe('CourseGradeController', () => {
  let controller: CourseGradeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseGradeController],
    }).compile();

    controller = module.get<CourseGradeController>(CourseGradeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
