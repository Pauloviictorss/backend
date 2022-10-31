import Turma from "App/Models/Turma"
import TurmaValidator from "App/Validators/TurmaValidator"

export default class TurmasController {
    index({request}){

        const {nome, docenteId, semestreId, disciplinaId, salaId, turno} = request.all()

        const turma = Turma.query()
                             .select(['id', 'nome', 'docenteId', 'semestreId', 'disciplinaId', 'salaId', 'turno'])
                             .preload('docente')
                             .preload('semestre')
                             .preload('disciplina')
                             .preload('sala')
                             .preload('alunos')
                             .preload('aulas')
                             
        if(nome){
            turma.where('nome', nome)
        }

        if(docenteId){
            turma.where('docenteId', docenteId)
        }

        if(semestreId){
            turma.where('semestreId', semestreId)
        }

        if(disciplinaId){
            turma.where('disciplinaId', disciplinaId)
        }

        if(salaId){
            turma.where('salaId', salaId)
        }

        if(turno){
            turma.where('turno', turno)
        }

        return turma
    }
    async store({request}){
        const dados = await request.validate(TurmaValidator)
        return Turma.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Turma.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const turma = await Turma.findOrFail(id)
        return turma.delete()
    }
    async update({request}){
        const id = request.param('id')
        const turma = await Turma.findOrFail(id)

        const dados = request.only(['nome', 'docenteId', 'semestreId', 'disciplinaId', 'salaId', 'turno'])
        
        turma.merge(dados).save()

        return dados
    }
}