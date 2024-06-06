import { IsEmail, IsNotEmpty } from "class-validator";

export class WelcomeDhanaAuthDto {

    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;
}
