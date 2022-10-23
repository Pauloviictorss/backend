import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turmaaluno from 'App/Models/Turmaaluno'

export default class extends BaseSeeder {
  public async run () {
    await Turmaaluno.createMany([
      {alunoId: 1, turmaId: 1},
    ])
  }
}
