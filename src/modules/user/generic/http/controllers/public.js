import Service from '@/modules/user/generic/service/user'

class Public {

  static async view (request, response) {
    try {
      let user = await Service.view(request.params.username)
      response.send(user)
    } catch (e) {
      response.status(400).send(e)
    }
  }

  static async list (request, response) {
    try {
      request.params.page = (request.params.page) ? request.params.page : 0
      let users = await Service.list(request.params.page)
      response.send(users)
    } catch (e) {
      response.status(400).send(e)
    }
  }

}

export default Public