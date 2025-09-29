import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SubmissionService {
  constructor(private prisma: PrismaService) {}

  async getAllSubmissions() {
    return this.prisma.submission.findMany();
  }

  async getSubmissionById(id: string) {
    return this.prisma.submission.findUnique({ where: { id } });
  }
}
