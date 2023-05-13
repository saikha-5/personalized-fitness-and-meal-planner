import { Module } from "@nestjs/common";
import { AdminEntity } from './admin.entity';
import { AdminController } from "./admin.controller";
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AdminService } from "./admins.service"
import { MailerModule } from "@nestjs-modules/mailer";
import { PlannerService } from "src/Planner/planner.service";
import { PlannerEntity } from "src/Planner/planner.entity";
@Module({
    imports: [
            MailerModule.forRoot({
                transport: {
                  host: 'smtp.gmail.com',
                           port: 465,
                           ignoreTLS: true,
                           secure: true,
                           auth: {
                               user: 'saikha.assafa@gmail.com',
                               pass: 'qyzajtjvhcbgaawb'
                           },
                          }
              }),
        TypeOrmModule.forFeature([AdminEntity,PlannerEntity])],
controllers: [AdminController],
providers: [AdminService,PlannerService],

})

export class AdminModule {}