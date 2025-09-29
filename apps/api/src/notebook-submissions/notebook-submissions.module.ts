import { Module } from '@nestjs/common';
import { NotebookSubmissionsController } from './notebook-submissions.controller';
import { NotebookSubmissionsService } from './notebook-submissions.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [NotebookSubmissionsController],
  providers: [NotebookSubmissionsService, PrismaService],
})
export class NotebookSubmissionsModule {}


