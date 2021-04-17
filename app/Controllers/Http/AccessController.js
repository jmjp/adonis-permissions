'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with accesses
 */
const Access = use('App/Models/Access');

class AccessController {
  /**
   * Show a list of all accesses.
   * GET accesses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ }) {
    var access = await Access.query().with('roles').fetch();
    return access;
  }

  /**
   * Render a form to be used for creating a new access.
   * GET accesses/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request }) {
    const data = request.only(['role_id','route','method']);
    console.log(data);
    var access = await Access.create(data);
    return access;
  }

  /**
   * Create/save a new access.
   * POST accesses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['role_id','route','method']);
    var access = await Access.create(data);
    return access;
  }

  /**
   * Display a single access.
   * GET accesses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing access.
   * GET accesses/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update access details.
   * PUT or PATCH accesses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a access with id.
   * DELETE accesses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    var destroy = await Access.query().where('id', params.id).delete();
    return destroy;
  }
}

module.exports = AccessController