import { IsEmail, IsNotEmpty } from "class-validator";

export class OtpDhanaAuthDto {

    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    otp: string;
}
