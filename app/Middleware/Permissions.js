"use strict";


const Access = use('App/Models/Access');

class Permissions {
  async handle({ request, auth,response }, next) {
    const user = await auth.getUser();
    const access = await Access.findBy({role_id: user.role,route: request.url(),method: request.method()})
    if(!access){
      return response.status(403).json({status: "error",message: `you dont't have access to this endpoint ${request.url()} with method ${request.method()}`});
    }
    await next();
    
  }
}

module.exports = Permissions;