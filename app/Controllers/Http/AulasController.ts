import Aula from "App/Models/Aula"

export default class AulasController {
    index({request}){

        const {data, turmaId} = request.all()

        const aula = Aula.query()
                             .select(['id', 'data', 'conteudo', 'turmaId'])
                             .preload('chamadas')
                             .preload('turma')
                           
        if(data){
            aula.where('data', data)
        }

        if(turmaId){
            aula.where('turmaId', turmaId)
        }

        return aula
    }
    store({request}){
        const dados = request.only(['data', 'conteudo', 'turmaId'])

        return Aula.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Aula.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const aula = await Aula.findOrFail(id)
        return aula.delete()
    }
    async update({request}){
        const id = request.param('id')
        const aula = await Aula.findOrFail(id)

        const dados = request.only(['data', 'conteudo', 'turmaId'])
        
        aula.merge(dados).save()

        return dados
    }
}