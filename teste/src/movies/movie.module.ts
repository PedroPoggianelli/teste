import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { MoviesService } from './movie.service';
import { MoviesController } from './movie.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
