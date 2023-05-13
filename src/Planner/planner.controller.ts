import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { PlannerProfile } from "./planner.dto";
import { PlannerService } from "./planner.service";

@Controller("/manager")
export class PlannerController {
    constructor(private plannerservice: PlannerService) { }

    @Post("/registration")
    @UsePipes(new ValidationPipe())
    registration(@Body() planner: PlannerProfile): any {
        return this.plannerservice.registration(planner);
    }
}