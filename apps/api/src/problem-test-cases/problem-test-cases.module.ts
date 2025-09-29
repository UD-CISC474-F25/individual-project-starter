import { Module } from '@nestjs/common';
import { ProblemTestCasesController } from './problem-test-cases.controller';
import { ProblemTestCasesService } from './problem-test-cases.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ProblemTestCasesController],
  providers: [ProblemTestCasesService, PrismaService],
})
export class ProblemTestCasesModule {}


