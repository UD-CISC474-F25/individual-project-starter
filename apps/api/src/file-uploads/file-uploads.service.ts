import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FileUploadsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.fileUpload.findMany();
  }

  findOne(id: string) {
    return this.prisma.fileUpload.findUnique({ where: { id } });
  }
}


