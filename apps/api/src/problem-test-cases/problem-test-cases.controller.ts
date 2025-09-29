import { Controller, Get, Param } from '@nestjs/common';
import { ProblemTestCasesService } from './problem-test-cases.service';

@Controller('problem-test-cases')
export class ProblemTestCasesController {
  constructor(private readonly problemTestCasesService: ProblemTestCasesService) {}

  @Get()
  findAll() {
    return this.problemTestCasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.problemTestCasesService.findOne(id);
  }
}


