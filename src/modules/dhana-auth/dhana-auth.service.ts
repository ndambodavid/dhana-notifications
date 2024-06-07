import { Injectable } from '@nestjs/common';
import { WelcomeDhanaAuthDto } from './dto/welcome-dhana-auth.dto';
import { UpdateDhanaAuthDto } from './dto/update-dhana-auth.dto';
import { TypedEventEmitter } from 'src/event-emitter/typed-event-emitter.class';


@Injectable()
export class DhanaAuthService {

  constructor(private readonly eventEmitter: TypedEventEmitter) {}

  async welcomeNotification(welcomeDhanaAuthDto: WelcomeDhanaAuthDto) {
    console.log(welcomeDhanaAuthDto);
    
    this.eventEmitter.emit('user.welcome', {
      name: welcomeDhanaAuthDto.name,
      email: welcomeDhanaAuthDto.email
    });
    return 'Email Sent';
  }

  findAll() {
    return `This action returns all dhanaAuth`;
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
