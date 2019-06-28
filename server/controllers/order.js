import model from '../models';

const { Order } = model;

function addOrder(req, res) {
    const { itemid, userid, quantity, totalprice, discountprice, status} = req.body
      return Order
        .create({
          itemid,
          userid,
          quantity,
          totalprice,
          discountprice,
          status
        })
        .then(userData => res.status(201).send({
          success: true,
          message: 'Order successfully created',
          userData
        }))
}


export default addOrder;