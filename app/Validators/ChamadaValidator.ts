import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ChamadaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    aulaId: schema.number(),
    alunoId: schema.number(),
    presenca: schema.string([
      rules.maxLength(1),
      rules.minLength(1),
    ]),
  })
  
  public messages: CustomMessages = {}
}
