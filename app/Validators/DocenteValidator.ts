import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DocenteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.alpha({
        allow: ['space']
      }),
      rules.maxLength(100),
    ]),
    cpf: schema.number([
      rules.unique({ table: 'docentes', column: 'cpf' }),
    ]),
    matricula: schema.string([
      rules.maxLength(20),
    ]),
    salario: schema.string([
      rules.maxLength(100),
    ]),
    email: schema.string([
      rules.email(),
      rules.maxLength(100),
    ]),
    telefone: schema.string([
      rules.maxLength(15),
    ]),
    cep: schema.number(),
    logradouro: schema.string([
      rules.maxLength(100),
    ]),
    complemento: schema.string([
      rules.maxLength(100),
    ]),
    numero: schema.string([
      rules.maxLength(20),
    ]),
    bairro: schema.string([
      rules.maxLength(100),
    ]),
  })

  public messages: CustomMessages = {}
}
