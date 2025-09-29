import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProblemTestCasesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.problemTestCase.findMany();
  }

  findOne(id: string) {
    return this.prisma.problemTestCase.findUnique({ where: { id } });
  }
}


