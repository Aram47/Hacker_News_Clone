import LoginUserDto from "./dto/login-user.dto";
import RegisterUserDto from "./dto/register-user.dto";

export default class AuthService {
  async login(): Promise<LoginUserDto> {
    return new LoginUserDto('1', '2');
  }

  async register(): Promise<RegisterUserDto> {
    return new RegisterUserDto('1', '2');
  }
}