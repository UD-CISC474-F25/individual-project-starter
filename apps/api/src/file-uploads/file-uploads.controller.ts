import { Controller, Get, Param } from '@nestjs/common';
import { FileUploadsService } from './file-uploads.service';

@Controller('file-uploads')
export class FileUploadsController {
  constructor(private readonly fileUploadsService: FileUploadsService) {}

  @Get()
  findAll() {
    return this.fileUploadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileUploadsService.findOne(id);
  }
}


