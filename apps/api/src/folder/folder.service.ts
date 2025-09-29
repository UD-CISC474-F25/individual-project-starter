import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FolderService {
  constructor(private prisma: PrismaService) {}

  async getAllFolders() {
    return this.prisma.folder.findMany();
  }

  async getFolderById(id: string) {
    return this.prisma.folder.findUnique({ where: { id } });
  }
}
