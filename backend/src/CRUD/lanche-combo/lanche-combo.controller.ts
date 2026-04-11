import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LancheComboService } from './lanche-combo.service';
import { CreateLancheComboDto } from './dto/create-lanche-combo.dto';
import { UpdateLancheComboDto } from './dto/update-lanche-combo.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('lanches')
export class LancheComboController {
  constructor(private readonly lancheComboService: LancheComboService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createLancheComboDto: CreateLancheComboDto) {
    return this.lancheComboService.create(createLancheComboDto);
  }

  @Get()
  findAll() {
    return this.lancheComboService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lancheComboService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLancheComboDto: UpdateLancheComboDto) {
    return this.lancheComboService.update(+id, updateLancheComboDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lancheComboService.remove(+id);
  }
}
