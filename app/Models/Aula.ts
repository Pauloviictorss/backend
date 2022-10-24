import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Chamada from './Chamada'
import Turma from './Turma'

export default class Aula extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public data: Date

  @column()
  public conteudo: string

  @column()
  public turmaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Chamada)
  public chamadas: HasMany<typeof Chamada>

  @belongsTo(() => Turma)
  public turma: BelongsTo<typeof Turma>
}
