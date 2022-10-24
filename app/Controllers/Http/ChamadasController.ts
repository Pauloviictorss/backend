import Chamada from "App/Models/Chamada"

export default class ChamadasController {
    index({request}){

        const {aulaId, alunoId, presenca} = request.all()

        const chamada = Chamada.query()
                             .select(['id', 'aulaId', 'alunoId', 'presenca'])
                             .preload('aula')
                             .preload('aluno')
                             
        if(aulaId){
            chamada.where('aulaId', aulaId)
        }

        if(alunoId){
            chamada.where('alunoId', alunoId)
        }

        if(presenca){
            chamada.where('presenca', presenca)
        }

        return chamada
    }
    store({request}){
        const dados = request.only(['aulaId', 'alunoId', 'presenca'])

        return Chamada.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Chamada.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const chamada = await Chamada.findOrFail(id)
        return chamada.delete()
    }
    async update({request}){
        const id = request.param('id')
        const chamada = await Chamada.findOrFail(id)

        const dados = request.only(['aulaId', 'alunoId', 'presenca'])
        
        chamada.merge(dados).save()

        return dados
    }
}