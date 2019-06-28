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
function modifyOrder(req, res) {
    const { itemid, userid, quantity, totalprice, discountprice, status } = req.body
    return Order
      .findByPk(req.params.orderId)
      .then((order) => {
        order.update({
          itemid: itemid || order.itemid,
          userid: userid || order.userid,
          quantity: quantity || order.quantity,
          totalprice: totalprice || order.totalprice,
          discountprice: discountprice || order.discountprice,
          status: status || order.status,
        })
        .then((updatedOrder) => {
          res.status(200).send({
            message: 'Order updated successfully',
            data: {
                itemid: itemid || updatedOrder.itemid,
                userid: userid || updatedOrder.userid,
                quantity: quantity || updatedOrder.quantity,
                totalprice: totalprice || updatedOrder.totalprice,
                discountprice: discountprice || updatedOrder.discountprice,
                status: status || updatedOrder.status,
            }
          })
        })
        .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }



export default { addOrder, modifyOrder};