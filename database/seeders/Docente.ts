import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Docente from 'App/Models/Docente'

export default class extends BaseSeeder {
  public async run () {
    await Docente.createMany([
      {nome: 'VP', cpf: 16485478524, matricula: '24854763557', email: 'docente001@iesb.edu.br', telefone: '61 998752147', cep: 75478365, logradouro: 'SQT 013', complemento: 'Ao lado do mercado XX', numero: '253', bairro: 'Capão Redondo'},
    ])
  }
}
