import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity } from "src/admin/admin.entity";
import { PlannerController } from "./planner.controller";
import { PlannerEntity } from "./planner.entity";
import { PlannerService } from "./planner.service";



@Module({
imports: [TypeOrmModule.forFeature(
    [
        PlannerEntity,
        AdminEntity
    ])],
controllers: [PlannerController],
providers: [PlannerService],

})


export class PlannerModule {}