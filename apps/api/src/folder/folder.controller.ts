import { Controller, Get, Param } from '@nestjs/common';
import { FolderService } from './folder.service';

@Controller('folders')
export class FolderController {
  constructor(private readonly folderService: FolderService) {}

  @Get()
  async getAllFolders() {
    return this.folderService.getAllFolders();
  }

  @Get(':id')
  async getFolderById(@Param('id') id: string) {
    return this.folderService.getFolderById(id);
  }
}
