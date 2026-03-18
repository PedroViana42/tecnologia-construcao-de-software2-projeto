import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoLancheComboService } from './pedido-lanche-combo.service';
import { CreatePedidoLancheComboDto } from './dto/create-pedido-lanche-combo.dto';
import { UpdatePedidoLancheComboDto } from './dto/update-pedido-lanche-combo.dto';

@Controller('pedido-lanche-combo')
export class PedidoLancheComboController {
  constructor(private readonly pedidoLancheComboService: PedidoLancheComboService) {}

  @Post()
  create(@Body() createPedidoLancheComboDto: CreatePedidoLancheComboDto) {
    return this.pedidoLancheComboService.create(createPedidoLancheComboDto);
  }

  @Get()
  findAll() {
    return this.pedidoLancheComboService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoLancheComboService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoLancheComboDto: UpdatePedidoLancheComboDto) {
    return this.pedidoLancheComboService.update(+id, updatePedidoLancheComboDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoLancheComboService.remove(+id);
  }
}
