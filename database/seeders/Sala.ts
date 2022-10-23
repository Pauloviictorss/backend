import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run () {
    await Sala.createMany([
      {nome: 'ADSMNOP2022', capacidade: 60, tipo: 'P'},
    ])
  }
}
