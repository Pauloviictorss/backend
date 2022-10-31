import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TurmaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
    ]),
    professorId: schema.number(),
    semestreId: schema.number(),
    disciplinaId: schema.number(),
    salaId: schema.number(),
    turno: schema.string([
      rules.maxLength(1),
      rules.minLength(1),
    ]),
  })

  public messages: CustomMessages = {}
}
