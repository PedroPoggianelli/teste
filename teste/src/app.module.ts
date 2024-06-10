import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';
import { MoviesModule } from './movies/movie.module';
import { User } from './users/user.entity';
import { Movie } from './movies/movie.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Movie],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    MoviesModule,
  ],
})
export class AppModule {}
