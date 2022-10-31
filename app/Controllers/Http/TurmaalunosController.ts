import Turmaaluno from "App/Models/Turmaaluno"
import TurmaAlunoValidator from "App/Validators/TurmaAlunoValidator"

export default class TurmaalunosController {
    index({request}){

        const {turmaId, alunoId} = request.all()

        const turmaaluno = Turmaaluno.query()
                             .select(['id', 'turmaId', 'alunoId'])

        if(turmaId){
            turmaaluno.where('turmaId', turmaId)
        }

        if(alunoId){
            turmaaluno.where('alunoId', alunoId)
        }

        return turmaaluno
    }
    async store({request}){
        const dados = await request.validate(TurmaAlunoValidator)
        return Turmaaluno.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Turmaaluno.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const turmaaluno = await Turmaaluno.findOrFail(id)
        return turmaaluno.delete()
    }
    async update({request}){
        const id = request.param('id')
        const turmaaluno = await Turmaaluno.findOrFail(id)

        const dados = request.only(['turmaId', 'alunoId'])
        
        turmaaluno.merge(dados).save()

        return dados
    }
}