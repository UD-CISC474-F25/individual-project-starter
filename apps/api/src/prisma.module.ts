import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service'; // Adjust the path if necessary

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Export to use in other modules
})
export class PrismaModule {}
