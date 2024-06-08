import { Injectable } from '@nestjs/common';
import { WelcomeDhanaAuthDto } from './dto/welcome-dhana-auth.dto';
import { UpdateDhanaAuthDto } from './dto/update-dhana-auth.dto';
import { TypedEventEmitter } from 'src/event-emitter/typed-event-emitter.class';
import { OtpDhanaAuthDto } from './dto/2fa-dhana-auth.dto';


@Injectable()
export class DhanaAuthService {

  constructor(private readonly eventEmitter: TypedEventEmitter) {}

  async welcomeNotification(welcomeDhanaAuthDto: WelcomeDhanaAuthDto) {
    console.log(welcomeDhanaAuthDto);
    
    this.eventEmitter.emit('user.welcome', {
      name: welcomeDhanaAuthDto.name,
      email: welcomeDhanaAuthDto.email,
      link: welcomeDhanaAuthDto.link
    });
    return 'Email Sent';
  }

  async sendOtp(otpDhanaAuthDto: OtpDhanaAuthDto) {
    this.eventEmitter.emit('user.verify-email', {
      name: otpDhanaAuthDto.name,
      email: otpDhanaAuthDto.email,
      otp: otpDhanaAuthDto.otp
    });
    return 'Email Sent';
  }

  findOne(id: number) {
    return `This action returns a #${id} dhanaAuth`;
  }

  update(id: number, updateDhanaAuthDto: UpdateDhanaAuthDto) {
    return `This action updates a #${id} dhanaAuth`;
  }

  remove(id: number) {
    return `This action removes a #${id} dhanaAuth`;
  }
}
