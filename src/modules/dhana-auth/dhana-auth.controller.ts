import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DhanaAuthService } from './dhana-auth.service';
import { CreateDhanaAuthDto } from './dto/create-dhana-auth.dto';
import { UpdateDhanaAuthDto } from './dto/update-dhana-auth.dto';

@Controller('dhana-auth')
export class DhanaAuthController {
  constructor(private readonly dhanaAuthService: DhanaAuthService) {}

  @Post()
  async create(@Body() createDhanaAuthDto: CreateDhanaAuthDto) {
    return await this.dhanaAuthService.create(createDhanaAuthDto);
  }

  @Get()
  findAll() {
    return this.dhanaAuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dhanaAuthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDhanaAuthDto: UpdateDhanaAuthDto) {
    return this.dhanaAuthService.update(+id, updateDhanaAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dhanaAuthService.remove(+id);
  }
}
