import { ConfigService } from '@nestjs/config';
import {SequelizeModuleOptions, SequelizeOptionsFactory} from '@nestjs/sequelize'
import { EnumConfig } from './enumConfig/enumConfig';
import {Todo} from '../todos/models/todo.model'
import { Injectable } from '@nestjs/common';

@Injectable()
export class sequelizeConfigService implements SequelizeOptionsFactory {
    constructor(private readonly configService : ConfigService){}

    createSequelizeOptions(): SequelizeModuleOptions{
        const {pg: {dialect, logging, host ,port, username, password, database}
        
        } = this.configService.get(EnumConfig.DATABASE);

        return {
            dialect,
            logging, 
            host, 
            port, 
            username, 
            password, 
            database,
            models: [Todo],
            autoLoadModels: true,
            synchronize: true,

        }
    }
}
