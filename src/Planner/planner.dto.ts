import { IsNotEmpty, IsInt, Length, IsEmail, IsString, IsPhoneNumber, MinLength, Min } from "class-validator";

export class PlannerProfile {
    @IsNotEmpty({ message: "Enter Your Name." })
    @Length(3, 10, { message: "Name Length Should be 3 to 10 Character." })
    @IsString({ message: "Name Should be String." })
    planner_name: string;

    @IsNotEmpty({ message: "Enter Your Email." })
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: "Enter Your Phone Number." })
    @Length(11, 11, { message: "Phone Number Length Must be 11." })
    @IsPhoneNumber("BD", { message: "Phone Number Invalid." })
    phonenumber: string;

    @IsNotEmpty({ message: "Enter Your Password." })
    @MinLength(4, { message: "Password Must be Greater Than 4 Character." })
    password: string;

    
    @Min(18, { message: "Instructor Must be Older Than 18." })
    age: number;

    status: boolean;

    adminId: any;
}