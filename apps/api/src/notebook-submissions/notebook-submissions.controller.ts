import { Controller, Get, Param } from '@nestjs/common';
import { NotebookSubmissionsService } from './notebook-submissions.service';

@Controller('notebook-submissions')
export class NotebookSubmissionsController {
  constructor(private readonly notebookSubmissionsService: NotebookSubmissionsService) {}

  @Get()
  findAll() {
    return this.notebookSubmissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notebookSubmissionsService.findOne(id);
  }
}


