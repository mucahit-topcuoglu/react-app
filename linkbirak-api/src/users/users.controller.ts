import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.usersService.login(loginUserDto);
    if (user) {
      return { success: true, user: { id: user.id, username: user.username, email: user.email } };
    } else {
      return { success: false, message: "Geçersiz email veya şifre" };
    }
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const user = await this.usersService.findById(parseInt(id));
    if (user) {
      return { id: user.id, username: user.username, email: user.email, fullName: user.fullName };
    } else {
      return { message: "Kullanıcı bulunamadı" };
    }
  }

  @Patch(":id/password")
  async updatePassword(@Param("id") id: string, @Body() updatePasswordDto: UpdatePasswordDto) {
    return await this.usersService.updatePassword(parseInt(id), updatePasswordDto);
  }

  @Patch(":id/profile")
  async updateProfile(@Param("id") id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return await this.usersService.updateProfile(parseInt(id), updateProfileDto);
  }
}
