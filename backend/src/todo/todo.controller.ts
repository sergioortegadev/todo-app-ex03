import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Request, Response } from 'express';

@Controller('v1/todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get(':id?')
  async getTodo(@Res() response: Response, @Param('id') id: string) {
    const prods = await this.todoService.getTodo(id);

    if (prods.message == 'Error - prod not found') {
      response.status(204).json(prods);
      //return prods;
    } else {
      response.status(200).json(prods);
      return prods;
    }
  }
}
