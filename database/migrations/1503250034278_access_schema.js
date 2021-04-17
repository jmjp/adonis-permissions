'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AccessSchema extends Schema {
  up () {
    this.create('accesses', (table) => {
      table.increments()
      table.integer('role_id').unsigned().references('id').inTable('roles').onDelete('cascade').onUpdate('cascade')
      table.string('route',120).notNullable()
      table.enu('method',["POST","GET","PUT","PATCH","DELETE"]).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('accesses')
  }
}

module.exports = AccessSchema
