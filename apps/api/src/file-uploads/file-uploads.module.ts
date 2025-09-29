import { Module } from '@nestjs/common';
import { FileUploadsController } from './file-uploads.controller';
import { FileUploadsService } from './file-uploads.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [FileUploadsController],
  providers: [FileUploadsService, PrismaService],
})
export class FileUploadsModule {}


