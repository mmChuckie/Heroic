import Token from '@/lib/jwt'
import Interactor from '@/sql/interactors/user'
export default class Controller {
  static async read (request, reply) {
    try {
      let user = await Interactor.read(request.session.username)
      reply.code(201).send(user)
    } catch (e) {
      reply.code(400).send(e)
    }
  }
  static async create (request, reply) {
    try {
      // Try Login
      let user = await Interactor.login(request.body.username, request.body.password)
      // Sign Session
      user = Token.sign(user)
      // Return
      reply.code(201).send(user)
    } catch (e) {
      reply.code(400).send(e)
    }
  }

  static async client (request, reply) {
    try {
      let sso = await Interactor.client(request.session.id)
      reply.code(201).send(sso)
    } catch (e) {
      reply.code(400).send(e)
    }
  }
}
