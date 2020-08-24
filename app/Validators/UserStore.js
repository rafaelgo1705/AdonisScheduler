'use strict'

class UserStore {
  get validateAll () {
    return true
  }

  get sanitizationRules () {
    return {
      email: 'normalize_email',
    }
  }

  get rules () {
    return {
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required',
      username: 'required|unique:users'
    }
  }

  get messages () {
    return {
      'name.required': 'Insira um nome!',
      'username.required': 'Insira um nome de usuário!',
      'email.required': 'Insira um e-mail!',
      'password.required': 'Insira uma senha!',
      'username.unique': 'Usuário já está sendo utilizado!',
      'email.email': 'O e-mail não é válido!',
      'email.unique': 'E-mail já está cadastrado!',
       
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(406).send(errorMessages)
  }
}

module.exports = UserStore
