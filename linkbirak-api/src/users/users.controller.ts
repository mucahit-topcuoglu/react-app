import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.usersService.login(loginUserDto);
    if (user) {
      return { success: true, user: { id: user.id, username: user.username, email: user.email } };
    } else {
      return { success: false, message: 'Geçersiz email veya şifre' };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findById(parseInt(id));
    if (user) {
      return { id: user.id, username: user.username, email: user.email };
    } else {
      return { message: 'Kullanıcı bulunamadı' };
    }
  }
}