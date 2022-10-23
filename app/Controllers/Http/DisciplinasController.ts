import Disciplina from "App/Models/Disciplina"

export default class DisciplinasController {
    index({request}){

        const {nome, cursoId} = request.all()

        const disciplina = Disciplina.query()
                             .select(['id', 'nome', 'cursoId'])
                             //.preload('album')

        if(nome){
            disciplina.where('nome', nome)
        }

        if(cursoId){
            disciplina.where('cursoId', cursoId)
        }

        return disciplina
    }
    store({request}){
        const dados = request.only(['nome', 'cursoId'])

        return Disciplina.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Disciplina.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const disciplina = await Disciplina.findOrFail(id)
        return disciplina.delete()
    }
    async update({request}){
        const id = request.param('id')
        const disciplina = await Disciplina.findOrFail(id)

        const dados = request.only(['nome', 'cursoId'])
        
        disciplina.merge(dados).save()

        return dados
    }
}