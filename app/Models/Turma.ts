import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Turmaaluno from './Turmaaluno'
import Docente from './Docente'
import Semestre from './Semestre'
import Disciplina from './Disciplina'
import Sala from './Sala'

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public docenteId: number

  @column()
  public semestreId: number

  @column()
  public disciplinaId: number

  @column()
  public salaId: number

  @column()
  public turno: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Turmaaluno)
  public turma_alunos: HasMany<typeof Turmaaluno>

  @belongsTo(() => Docente)
  public docente: BelongsTo<typeof Docente>

  @belongsTo(() => Semestre)
  public semestre: BelongsTo<typeof Semestre>

  @belongsTo(() => Disciplina)
  public disciplina: BelongsTo<typeof Disciplina>

  @belongsTo(() => Sala)
  public sala: BelongsTo<typeof Sala>
}
