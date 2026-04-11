import { Module } from '@nestjs/common';
import { LancheComboService } from './lanche-combo.service';
import { LancheComboController } from './lanche-combo.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [LancheComboController],
  providers: [LancheComboService, PrismaService],
})
export class LancheComboModule {}
