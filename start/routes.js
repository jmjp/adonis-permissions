'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('signup','AuthController.register')
Route.post('signin','AuthController.authenticate')
Route.group(() => {
  Route.get('me','AuthController.me')
  Route.put('me','AuthController.update')
  Route.resource('roles','RoleController').apiOnly()
  Route.resource('access','AccessController').apiOnly().except(['update'])
}).middleware(['auth','permissions'])

//middleware(['auth','permissions'])