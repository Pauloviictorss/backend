import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SalaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
    ]),
    capacidade: schema.number(),
    tipo: schema.string([
      rules.maxLength(1),
      rules.minLength(1),
    ]),
  })

  public messages: CustomMessages = {}
}
