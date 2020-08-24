'use strict'

class ScheduleUpdate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      date: 'required',
      hour: 'required',
    }
  }

  get messages () {
    return {
      'name.required': 'Você precisa inserir um nome!',
      'date.required': 'Você precisa inserir uma data!',
      'hour.required': 'Você precisa inserir um horário!',
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(406).send(errorMessages)
  }
}

module.exports = ScheduleUpdate
