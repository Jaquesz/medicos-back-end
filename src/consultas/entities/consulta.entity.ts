export class Consulta {
    id : number;
    dataHora : string;
    status : string;
    medicoId : number;
    pacienteId : number

    constructor(id, dataHora, status, medicoId, pacienteId){
        this.id =  id
        this.dataHora = dataHora;
        this.status = status
        this.medicoId = medicoId
        this.pacienteId = pacienteId
    }
}
