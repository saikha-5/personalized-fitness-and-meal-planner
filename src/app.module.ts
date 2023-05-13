import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlannerModule} from './Planner/planner.module';

import { AdminModule } from './admin/adminmodule.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AdminModule, PlannerModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'saikha',
    database: 'postgres',
    password: 'saikha_1234',
    autoLoadEntities: true,
    synchronize: true,
  }), AuthModule,
 
  
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
