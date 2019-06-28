import model from '../models';

const { User } = model;

function signUp(req, res) {
    const { name, username, email, password } = req.body
      return User
        .create({
          name,
          username,
          email,
          password
        })
        .then(userData => res.status(201).send({
          success: true,
          message: 'User successfully created',
          userData
        }))
}


export default signUp;