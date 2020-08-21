'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => 'Conectado');

Route.post("/register", "AuthController.register").validator('UserStore');
Route.post("/authenticate", "AuthController.authenticate");

Route.group(() => {
    Route.resource("schedule", "ScheduleController")
        .apiOnly()
        .validator(new Map([
            [['schedule.store'], ['ScheduleStore']],
          ]));
}).middleware("auth");

    // * Rota de usuário *
//Route.resource("user", "UserController").apiOnly().except(['show', 'store']);

    // * Rota de teste *
//Route.resource("schedule", "ScheduleController").apiOnly();