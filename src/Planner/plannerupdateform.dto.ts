import {IsNotEmpty, IsString, Length } from "class-validator";
export class PlannerUpdateForm{
    @IsNotEmpty({message: "Name cannot be empty"})
    @IsString({message: "Cannot accept this type name"})
    @Length(3,40, {message: "Name of length must have at least 3 letters or maximum 40 letters"})
    name: string;
}