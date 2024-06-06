import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DhanaAuthService } from './dhana-auth.service';
import { WelcomeDhanaAuthDto } from './dto/welcome-dhana-auth.dto';
import { UpdateDhanaAuthDto } from './dto/update-dhana-auth.dto';

@Controller('dhana-auth')
export class DhanaAuthController {
  constructor(private readonly dhanaAuthService: DhanaAuthService) {}

  @Post('welcome')
  async welcomeMail(@Body() welcomeDhanaAuthDto: WelcomeDhanaAuthDto) {
    return await this.dhanaAuthService.welcomeNotification(welcomeDhanaAuthDto);
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
