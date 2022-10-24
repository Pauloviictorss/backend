import Docente from "App/Models/Docente"

export default class DocentesController {
    index({request}){

        const {nome, cpf, matricula, email} = request.all()

        const docente = Docente.query()
                             .select(['id', 'nome', 'cpf', 'matricula', 'email', 'telefone'])
                             .preload('turmas')

        if(nome){
            docente.where('nome', nome)
        }

        if(cpf){
            docente.where('cpf', cpf)
        }

        if(matricula){
            docente.where('matricula', matricula)
        }

        if(email){
            docente.where('email', email)
        }

        return docente
    }
    store({request}){
        const dados = request.only(['id', 'nome', 'cpf', 'matricula', 'salario', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])

        return Docente.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Docente.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const docente = await Docente.findOrFail(id)
        return docente.delete()
    }
    async update({request}){
        const id = request.param('id')
        const docente = await Docente.findOrFail(id)

        const dados = request.only(['id', 'nome', 'cpf', 'matricula', 'salario', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])
        
        docente.merge(dados).save()

        return dados
    }
}