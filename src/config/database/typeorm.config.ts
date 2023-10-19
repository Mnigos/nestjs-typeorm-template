import 'dotenv/config'

import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService, registerAs } from '@nestjs/config'
import { DataSource, DataSourceOptions } from 'typeorm'

import { Environment } from '../environment'

const configService = new ConfigService()

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = Environment

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: configService.get(DATABASE_HOST),
  port: configService.get(DATABASE_PORT),
  username: configService.get(DATABASE_USERNAME),
  password: configService.get(DATABASE_PASSWORD),
  database: configService.get(DATABASE_NAME),
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsRun: true,
  autoLoadEntities: true,
  synchronize: false,
}

export const typeorm = registerAs('typeorm', () => typeOrmConfig)
export const connectionSource = new DataSource(
  typeOrmConfig as DataSourceOptions
)
