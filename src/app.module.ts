import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MedicosModule } from './medicos/medicos.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PacientesModule } from './pacientes/pacientes.module';
import { ConsultasModule } from './consultas/consultas.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal : true }),
    UsuariosModule,
    MedicosModule, 
    AuthModule, PacientesModule, ConsultasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
