'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScheduleSchema extends Schema {
  up () {
    this.create('schedules', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name', 100).notNullable()
      table.date('date').notNullable()
      table.time('hour').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('schedules')
  }
}

module.exports = ScheduleSchema
