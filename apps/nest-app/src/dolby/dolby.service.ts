import { Injectable } from '@nestjs/common';
import { CreateDolbyDto } from './dto/create-dolby.dto';
import { UpdateDolbyDto } from './dto/update-dolby.dto';

@Injectable()
export class DolbyService {
  create(createDolbyDto: CreateDolbyDto) {
    return 'This action adds a new dolby';
  }

  findAll() {
    return `This action returns all dolby`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dolby`;
  }

  update(id: number, updateDolbyDto: UpdateDolbyDto) {
    return `This action updates a #${id} dolby`;
  }

  remove(id: number) {
    return `This action removes a #${id} dolby`;
  }
}
