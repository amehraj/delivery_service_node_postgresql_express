import model from '../models';

const { Item } = model;

function addItem(req, res) {
    const { name, price, discount } = req.body
      return Item
        .create({
          name,
          price,
          discount
        })
        .then(userData => res.status(201).send({
          success: true,
          message: 'Item successfully created',
          userData
        }))
}


export default addItem;