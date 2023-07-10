import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {SequalizeConfigService} from "./config/sequalizeConfig.service";
import {databaseConfig} from "./config/configuration";
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            useClass: SequalizeConfigService
        }),
        ConfigModule.forRoot({load: [databaseConfig]}),
        UsersModule,
        AuthModule
    ],
})
export class AppModule {
}
