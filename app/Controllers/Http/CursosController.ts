import Curso from "App/Models/Curso"

export default class CursosController {
    index({request}){

        const {nome, modalidade} = request.all()

        const curso = Curso.query()
                             .select(['id', 'nome', 'duracao', 'modalidade'])
                             .preload('disciplinas')
                             
        if(nome){
            curso.where('nome', nome)
        }

        if(modalidade){
            curso.where('modalidade', modalidade)
        }

        return curso
    }
    store({request}){
        const dados = request.only(['id', 'nome', 'duracao', 'modalidade'])

        return Curso.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Curso.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const curso = await Curso.findOrFail(id)
        return curso.delete()
    }
    async update({request}){
        const id = request.param('id')
        const curso = await Curso.findOrFail(id)

        const dados = request.only(['id', 'nome', 'duracao', 'modalidade'])
        
        curso.merge(dados).save()

        return dados
    }
}