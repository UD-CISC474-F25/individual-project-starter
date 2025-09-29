import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProblemsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.problem.findMany();
  }

  findOne(id: string) {
    return this.prisma.problem.findUnique({ where: { id } });
  }
}


