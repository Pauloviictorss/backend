import Aluno from "App/Models/Aluno"

export default class AlunosController {
    index({request}){

        const {nome, cpf, matricula, email} = request.all()

        const aluno = Aluno.query()
                             .select(['id', 'nome', 'cpf', 'matricula', 'email', 'telefone'])
                             .preload('turmas')
                             .preload('chamadas')

        if(nome){
            aluno.where('nome', nome)
        }

        if(cpf){
            aluno.where('cpf', cpf)
        }

        if(matricula){
            aluno.where('matricula', matricula)
        }

        if(email){
            aluno.where('email', email)
        }

        return aluno
    }
    store({request}){
        const dados = request.only(['id', 'nome', 'cpf', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])

        return Aluno.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Aluno.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)
        return aluno.delete()
    }
    async update({request}){
        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)

        const dados = request.only(['id', 'nome', 'cpf', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])
        
        aluno.merge(dados).save()

        return dados
    }
}