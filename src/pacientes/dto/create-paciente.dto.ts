import { IsNotEmpty } from "class-validator";

export class CreatePacienteDto {
    @IsNotEmpty({ message : 'nome do paciente não pode ser vazio'})
    nome : string;
    @IsNotEmpty({ message : 'cpf do paciente não pode ser vazio'})
    cpf : string;
    @IsNotEmpty({ message : 'telefone do paciente não pode ser vazio'})
    telefone : string
}
