import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TenantGuard } from 'src/tenant/tenant.guard';
import { TenantService } from 'src/tenant/tenant/tenant.service';

@UseGuards(JwtAuthGuard, TenantGuard) //here we are saying that all routes here will be validated by a jwt
@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private tenantService: TenantService
  ) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll(@Req() req) {
    console.log(this.tenantService.tenant, req.user);
    
    return this.transactionsService.findAll();
  }
}
