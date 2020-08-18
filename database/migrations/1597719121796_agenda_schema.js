'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgendaSchema extends Schema {
  up () {
    this.create('agenda', (table) => {
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
      table.datetime('dateHour').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('agenda')
  }
}

module.exports = AgendaSchema
