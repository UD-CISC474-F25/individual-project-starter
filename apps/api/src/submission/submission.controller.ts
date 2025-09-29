import { Controller, Get, Param } from '@nestjs/common';
import { SubmissionService } from './submission.service';

@Controller('submissions')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Get()
  async getAllUsers() {
    return this.submissionService.getAllSubmissions();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.submissionService.getSubmissionById(id);
  }
}
