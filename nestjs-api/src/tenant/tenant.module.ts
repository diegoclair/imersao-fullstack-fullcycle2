import { Account } from './../accounts/entities/account.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Global, Module } from '@nestjs/common';
import { TenantService } from './tenant/tenant.service';

@Global() // with global we make this module available for all others modules without need to import
@Module({
  imports: [SequelizeModule.forFeature([Account])],
  providers: [TenantService],
  exports: [TenantService],
})
export class TenantModule {}