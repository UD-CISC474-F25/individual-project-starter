import { Controller, Get, Param } from '@nestjs/common';
import { FileService } from './file.service';

@Controller('files')
export class FileController {
  constructor(private fileService: FileService) {}

  @Get()
  async getAllFiles() {
    return this.fileService.getAllFiles();
  }

  @Get(':id')
  async getFileById(@Param('id') id: string) {
    return this.fileService.getFileById(id);
  }
}
