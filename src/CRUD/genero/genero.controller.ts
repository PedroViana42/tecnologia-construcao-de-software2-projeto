import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('genero')
@Controller('CRUD/genero')
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new genre' })
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generoService.create(createGeneroDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all genres' })
  findAll() {
    return this.generoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a genre by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.generoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a genre by id' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGeneroDto: UpdateGeneroDto,
  ) {
    return this.generoService.update(id, updateGeneroDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a genre by id' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.generoService.remove(id);
  }
}
