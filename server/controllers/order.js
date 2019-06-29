import model from '../models';

const { Order } = model;

function addOrder(req, res) {
    const { 
      product_id, 
      user_id, 
      quantity, 
      total_price, 
      discount_price, 
      status,
    } = req.body

      return Order
        .create({
          product_id,
          user_id,
          quantity,
          total_price,
          discount_price,
          status, 
          
        })
        .then(productData => res.status(201).send({
          success: true,
          message: 'Order successfully created',
          productData
        }))
}
function modifyOrder(req, res) {
    const { 
      product_id, 
      user_id, 
      quantity, 
      total_price, 
      discount_price, 
      status, 
    } = req.body
    
    return Order
      .findByPk(req.params.orderId)
      .then((order) => {
        order.update({
          product_id: product_id || order.product_id,
          user_id: user_id || order.user_id,
          quantity: quantity || order.quantity,
          total_price: total_price || order.total_price,
          discount_price: discount_price || order.discount_price,
          status: status || order.status,
        })
        .then((updatedOrder) => {
          res.status(200).send({
            message: 'Order updated successfully',
            data: updatedOrder,

          })
        })
        .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }

  function viewAllOrders(req, res) {
    return Order
      .findAll()
      .then(orders => res.status(200).send(orders));
  }



export default { addOrder, modifyOrder, viewAllOrders};