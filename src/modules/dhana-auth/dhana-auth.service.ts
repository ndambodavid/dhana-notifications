import { Injectable } from '@nestjs/common';
import { CreateDhanaAuthDto } from './dto/create-dhana-auth.dto';
import { UpdateDhanaAuthDto } from './dto/update-dhana-auth.dto';
import { TypedEventEmitter } from 'src/event-emitter/typed-event-emitter.class';


@Injectable()
export class DhanaAuthService {

  constructor(private readonly eventEmitter: TypedEventEmitter) {}

  create(createDhanaAuthDto: CreateDhanaAuthDto) {
    return this.eventEmitter.emit('user.welcome', {
      name: 'Bhagyajit Jagdev',
      email: "email",
    });
    // return 'This action adds a new dhanaAuth';
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
