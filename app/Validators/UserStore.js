'use strict'

class UserStore {
  get validateAll () {
    return true
  }

  get sanitizationRules () {
    return {
      email: 'normalize_email',
      age: 'to_int'
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
      'email.required': 'Você precisa inserir um e-mail',
      'email.email': 'Você precisa inserir um e-mail válido',
      'email.unique': 'Este e-mail já está cadastrado',
      'password.required': 'Você precisa cadastrar uma senha',
      'username.required': 'Você precisa inserir um nome de usuário',
      'username.unique': 'Este usuário já está sendo utilizado em outra conta',
      'name.required': 'Você precisa inserir um nome'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = UserStore
