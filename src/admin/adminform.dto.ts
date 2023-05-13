import { Matches, IsInt, IsNotEmpty,IsEmail, Min,IsString,Length, MinLength } from "class-validator";

export class AdminProfile {   
    
    @IsNotEmpty({ message: "Name should not be empty!" })
    @IsString({ message: "Name should not be character!" })
    @Length(4, 48, { message: "Input should be between 4 and 48 characters in length!" })
    admin_name: string;

    @IsNotEmpty({ message: "Name should not be empty!" })
    @IsString({ message: "Name should not be character!" })
    @Length(4, 8, { message: "Input should be between 4 and 8 characters in length!" })
    user_name: string;

    
    @IsNotEmpty({ message: "Password should not be empty!" })
    @IsString({ message: "Password should not be character!" })
    @MinLength(6, { message: "Password should be minimum in 6 character!" })
    password: string;

    @IsNotEmpty({ message: "Phone Number should not be empty!" })
    @Matches(/[0][1][3 4 5 6 7 8 9][0-9]{8}$/i, { message: "Phone Number Invalid!" })
    phoneNo: string;
    
    @IsNotEmpty({ message: "Email should not be empty!" })
    email: string;

    @IsNotEmpty({ message: "Address should not be empty!" })
    @IsString({ message: "Address should not be character!" })
    address:string;
     
    @IsNotEmpty({ message: "Joining Year should not be empty!" })
    joining_year:string;
    
    @IsNotEmpty({ message: "birthdate should not be empty!" })
    birth_date: string;
    
    @IsNotEmpty({ message: "Admin image should be provided!" })
    filename: string;  

}

export class AdminEditProfile {
    
    admin_name: string;
    user_name: string;
    phoneNo: string;
    email: string;
    address: string;
    joining_year: string;
    birth_date: string;
    filename: string; 
    
}