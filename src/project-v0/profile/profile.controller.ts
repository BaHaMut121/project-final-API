import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProfileDto } from './profile.dto';
import { ProfileService } from './profile.service';

@Controller('project-v0/profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}
  @Get()
  async getProfile() {
    return await this.profileService.getProfile();
  }

  @Get('login/:username/:password')
  async loginByusername(
    @Param('username') username: String,
    @Param('password') password: String,
  ) {
    return await this.profileService.loginByusername(username, password);
  }

  @Post('profile_save')
  async createProfile(@Body() data: ProfileDto) {
    return await this.profileService.ProfileUser(data);
  }
}
