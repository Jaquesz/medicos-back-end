import { IsNotEmpty } from "class-validator";

export class CreateConsultaDto {
    @IsNotEmpty({message : 'data e hora da consulta são obrigatórios'})
    dataHora: string;
    @IsNotEmpty({message : 'status da consulta é obrigatório'})
    status: string;
    @IsNotEmpty({message : 'Id do médico é obrigatório'})
    medicoId: number;
    @IsNotEmpty({message : 'Id do paciente é obrigatório'})
    pacienteId: number
}
