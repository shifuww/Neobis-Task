import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Header, Patch, Delete } from "@nestjs/common";
import { ChangeTodo } from "./dto/change-todo.dot";
import { CreateTodo } from "./dto/create-todo.dto";
import { TodoService } from "./todo.service";

@Controller('todos')
export class TodoController{
    constructor(
        private readonly todoService: TodoService 
    ){}

    @Get()
    getallTodo(){
        return this.todoService.findAll();
    }

    @Get(':id')
    getOneTodo(@Param('id') id : string){
        return this.todoService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('content-Type', 'application/json')
    createTodo(@Body() createTodo: CreateTodo) {
        return this.todoService.create(createTodo);
    }

    @Patch(':id')
    changeTodo(@Body() changeTodo: ChangeTodo, @Param('id') id : string){
        return this.todoService.update(id, changeTodo);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id : string){
        return this.todoService.remove(id);
    }
}