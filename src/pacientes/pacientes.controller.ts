import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';


@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Post()
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return  this.pacientesService.cadastrarPaciente(createPacienteDto);
  }

  @Get()
  listarTodosPacientes() {
    return this.pacientesService.listarTodos();
  }
}
