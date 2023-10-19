import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'

import { environmentValidationSchema } from '@config/environment'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
      validationSchema: environmentValidationSchema,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
