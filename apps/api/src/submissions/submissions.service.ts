import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SubmissionsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.submission.findMany();
  }

  findOne(id: string) {
    return this.prisma.submission.findUnique({ where: { id } });
  }
}


