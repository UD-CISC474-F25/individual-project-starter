import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EnrollmentsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.enrollment.findMany();
  }

  findOne(id: string) {
    return this.prisma.enrollment.findUnique({ where: { id } });
  }
}


