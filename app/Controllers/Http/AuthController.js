'use strict'

const User = use('App/Models/User');

class AuthController {
    async register({ request, response }) {
        const data = request.only(['username', 'email', 'password'])
        if(request.is(["multipart"])){
            
        }else{
            try {
                data.role = 4;
                const user = await User.create(data);
                return response.status(200).json({ "status": "success", "user": user })
            } catch (error) {
                return response.status(401).json({ "status": "error", "message": "username or email already taken" })
            }
        }
       
    }
    async authenticate({ request, auth }) {
        const { identifier, password } = request.all()
        var user;
        if (identifier.includes('@') && identifier.includes('.')) {
            user = await User.findBy('email', identifier);
        } else {
            user = await User.findBy('username', identifier);
        }
        var jwt = await auth.attempt(user.email, password);

        return { "jwt": jwt.token, user }
    }
    async me({ auth }) {
        const user = await User.findBy('id', auth.user.id)
        return user;
    }

    async update({ auth, request }){
        const {role} = request.all();
        const user = await User.findBy('id', auth.user.id)
        user.role = role;
        await user.save();
        return user;
    }

}

module.exports = AuthController