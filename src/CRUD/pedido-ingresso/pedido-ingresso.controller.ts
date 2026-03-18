import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoIngressoService } from './pedido-ingresso.service';
import { CreatePedidoIngressoDto } from './dto/create-pedido-ingresso.dto';
import { UpdatePedidoIngressoDto } from './dto/update-pedido-ingresso.dto';

@Controller('pedido-ingresso')
export class PedidoIngressoController {
  constructor(private readonly pedidoIngressoService: PedidoIngressoService) {}

  @Post()
  create(@Body() createPedidoIngressoDto: CreatePedidoIngressoDto) {
    return this.pedidoIngressoService.create(createPedidoIngressoDto);
  }

  @Get()
  findAll() {
    return this.pedidoIngressoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoIngressoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoIngressoDto: UpdatePedidoIngressoDto) {
    return this.pedidoIngressoService.update(+id, updatePedidoIngressoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoIngressoService.remove(+id);
  }
}
