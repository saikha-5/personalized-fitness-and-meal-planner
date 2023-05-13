import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from "src/admin/admin.entity";
import { Repository } from 'typeorm';
import { PlannerProfile } from "./planner.dto";
import { PlannerEntity } from "./planner.entity";


@Injectable()
export class PlannerService {
    registration(planner: PlannerProfile): any {
        throw new Error("Method not implemented.");
    }
    constructor(
        @InjectRepository(PlannerEntity) private plannerRepo: Repository<PlannerEntity>,
        @InjectRepository(AdminEntity) private adminRepo: Repository<AdminEntity> ,
        private readonly mailerservice: MailerService

        ) {}







}