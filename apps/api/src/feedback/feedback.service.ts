import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.feedback.findMany();
  }

  findOne(id: string) {
    return this.prisma.feedback.findUnique({ where: { id } });
  }
}


