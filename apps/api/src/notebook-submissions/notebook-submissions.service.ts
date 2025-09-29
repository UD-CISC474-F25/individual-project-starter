import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class NotebookSubmissionsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.notebookSubmission.findMany();
  }

  findOne(id: string) {
    return this.prisma.notebookSubmission.findUnique({ where: { id } });
  }
}


