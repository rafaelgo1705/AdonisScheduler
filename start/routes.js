'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => 'Conectado');

Route.post("/register", "AuthController.register").validator('UserStore');
Route.post("/authenticate", "AuthController.authenticate");

Route.group(() => {
    Route.resource("schedule", "ScheduleController").apiOnly();
}).middleware("auth");

/*Route.group(() => {
    Route.resource("schedule", "ScheduleController").apiOnly();
});*/