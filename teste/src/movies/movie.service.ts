import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async create(title: string, description: string): Promise<Movie> {
    const movie = this.moviesRepository.create({ title, description });
    return this.moviesRepository.save(movie);
  }

  async findAll(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  async findOne(id: number): Promise<Movie> {
    return this.moviesRepository.findOne(id);
  }

  async update(id: number, title: string, description: string): Promise<Movie> {
    await this.moviesRepository.update(id, { title, description });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.moviesRepository.delete(id);
  }
}
