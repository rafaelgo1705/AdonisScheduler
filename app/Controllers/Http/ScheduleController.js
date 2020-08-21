'use strict'

const { post } = require('@adonisjs/framework/src/Route/Manager');

const Schedule = use('App/Models/Schedule')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ScheduleController {
  /**
   * Show a list of all schedules.
   * GET schedules
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    const schedule = await Schedule.query().where('user_id', auth.user.id).fetch();

    return schedule;
  }

  /**
   * Create/save a new schedule.
   * POST schedules
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only([ 'date', 'hour', 'name' ]);
    const schedule = await Schedule.create({ user_id: auth.user.id, ...data});

    return schedule;
  }

  /**
   * Display a single schedule.
   * GET schedules/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, auth }) {
    const schedule = await Schedule.query().where('user_id', auth.user.id).where('id', params.id).fetch();

    return schedule;
  }

  /**
   * Update schedule details.
   * PUT or PATCH schedules/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const data = request.only([ 'date', 'hour', 'name' ]);
    const schedule = await post.find(params.id);

    schedule.merge(data);

    await schedule.save();

    return schedule;
  }

  /**
   * Delete a schedule with id.
   * DELETE schedules/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth }) {
    const schedule = await Schedule.findOrFail(params.id);

    if (schedule.user_id != auth.user.id)
      return reponse.status(401);
      
    schedule.delete();
  }
}

module.exports = ScheduleController
