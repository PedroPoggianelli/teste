import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MoviesService } from './movie.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createMovieDto: { title: string; description: string }) {
    return this.moviesService.create(createMovieDto.title, createMovieDto.description);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.moviesService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Param('id') id: number, @Body() updateMovieDto: { title: string; description: string }) {
    return this.moviesService.update(id, updateMovieDto.title, updateMovieDto.description);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesService.remove(id);
  }
}
