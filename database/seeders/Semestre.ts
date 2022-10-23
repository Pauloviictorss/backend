import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class extends BaseSeeder {
  public async run () {
    await Semestre.createMany([
      {nome: 'Make it believe', dataInicio: new Date(2020, 10, 2), dataFim: new Date(2020, 10, 7)},
    ])
  }
}
