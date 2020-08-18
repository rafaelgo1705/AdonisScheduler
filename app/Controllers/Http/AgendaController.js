'use strict'

const Agenda = use('App/Models/Agenda')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with agenda
 */
class AgendaController {
  /**
   * Show a list of all agenda.
   * GET agenda
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    const agenda = await Agenda.query().with('user').where('user_id', auth.user.id).fetch();

    return agenda;
  }

  /**
   * Create/save a new agenda.
   * POST agenda
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only(['dateHour', 'name']);
    const agenda = await Agenda.create({ user_id: auth.user.id, ...data });

    return agenda;
  }

  /**
   * Display a single agenda.
   * GET agenda/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, auth }) {
    //const agenda = await Agenda.findOrFail(params.id);
    const agenda  = await Agenda.query().where('user_id', auth.user.id).where('id', params.id).with('user').fetch();

    return agenda;
  }

  /**
   * Update agenda details.
   * PUT or PATCH agenda/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a agenda with id.
   * DELETE agenda/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const agenda = await Agenda.findOrFail(params.id);

    if (agenda.user_id != auth.user.id){
      return response.status(401);
      
    }else{
      agenda.delete();
    }

    return agenda;
  }
}

module.exports = AgendaController
