import { Module } from "@nestjs/common";
import {SequelizeModule} from '@nestjs/sequelize'
import { Todo } from "./models/todo.model";
import { TodoController } from "./todo.conroller";
import { TodoService } from "./todo.service";

@Module({
    imports: [SequelizeModule.forFeature([Todo])],
    providers: [TodoService],
    controllers: [TodoController]
})
export class TodoModule{

}