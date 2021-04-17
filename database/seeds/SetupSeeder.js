'use strict'

/*
|--------------------------------------------------------------------------
| SetupSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User');
const Role = use('App/Models/Role');
const Access = use('App/Models/Access');

class SetupSeeder {
  async run () {
    //create roles
    await Role.create({name: 'Admin'});
    await Role.create({name: 'Moderator'});
    await Role.create({name: 'User'});
    await Role.create({name: 'Public'});

    const role = await Role.findBy('name','Admin');
    //create_admin
    var user = {
      username: "admin",
      email: "admin@admin.com",
      password: "admin123",
      role: role.id
    }
    await User.create(user);

    //create admin routes police   
    var roles_get = {
      route: "/roles",
      method: "GET",
      role_id: role.id
    }
    var roles_post = {
      route: "/roles",
      method: "POST",
      role_id: role.id
    }
    var roles_update = {
      route: "/roles",
      method: "PUT",
      role_id: role.id
    }
    var roles_delete = {
      route: "/roles",
      method: "DELETE",
      role_id: role.id
    }
    var access_get = {
      route: "/access",
      method: "GET",
      role_id: role.id
    }
    var access_post = {
      route: "/access",
      method: "POST",
      role_id: role.id
    }
    var access_delete = {
      route: "/access",
      method: "DELETE",
      role_id: role.id
    }
    await Access.createMany([
      roles_get,
      roles_post,
      roles_update,
      roles_delete,
      access_get,
      access_post,
      access_delete
    ])
  }
}

module.exports = SetupSeeder
