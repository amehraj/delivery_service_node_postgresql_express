import model from '../models';

const { User } = model;

function signUp(req, res) {
    const { 
      name, 
      user_name, 
      email, 
      password, 
      user_type, 
    } = req.body

      return User
        .create({
          name,
          user_name,
          email,
          password,
          user_type,
        })
        .then(userData => res.status(201).send({
          success: true,
          message: 'User successfully created',
          userData,
        }))
}

function modifyUser(req, res) {
  const { 
    name, 
    user_name, 
    email, 
    password, 
    user_type,
   } = req.body

  return User
    .findByPk(req.params.userId)
    .then((user) => {
      user.update({
        name: name || user.name,
        user_name: user_name || user.user_name,
        email: email || user.email,
        password: password || user.password,
        user_type: user_type || user.user_type,
      })
      .then((updatedUser) => {
        res.status(200).send({
          message: 'User updated successfully',
          data: updatedUser,

        })
      })
      .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

function viewAllUsers(req, res) {
  return User
    .findAll()
    .then(users => res.status(200).send(users));
}



export default {signUp, viewAllUsers, modifyUser};