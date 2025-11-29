import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';

@Controller('medicos')
export class MedicosController {
  constructor(private readonly medicosService: MedicosService) {}

  //verificaTokendoADmin
  @Post()
  create(@Body() createMedicoDto: CreateMedicoDto) {
    return this.medicosService.criarMedico(createMedicoDto);
  }

  @Get()
  findAll() {
    return this.medicosService.listarTodos();
  }
}
