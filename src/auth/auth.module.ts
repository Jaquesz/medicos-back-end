import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'Segredo jwt hash',
      signOptions: {
        expiresIn: '2h'
      }
    }),
    UsuariosModule
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
