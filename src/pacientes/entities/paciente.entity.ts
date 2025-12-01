export class Paciente {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;

    constructor(id, nome, cpf, telefone) {
        this.id = id
        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
    }
}
