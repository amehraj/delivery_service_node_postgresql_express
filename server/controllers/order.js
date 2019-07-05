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
        .then((productData) => {

          res.locals.cacheConnection.del(res.locals.cacheKey);
          
          res.status(201).send({
          success: true,
          message: 'Order successfully created',
          productData
        })
        
      })
      .catch(error => res.status(400).send(error));
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
            const toOmit = '/' + req.params.orderId;
            const omitLength = toOmit.length;
    
            console.log(res.locals.cacheKey.slice(0,-omitLength), res.locals.cacheKey);
    
            res.locals.cacheConnection.del(res.locals.cacheKey.slice(0,-omitLength));

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
      .then((orders) => {
        
        res.locals.cacheConnection.set(res.locals.cacheKey, JSON.stringify(orders));
        res.status(200).send(orders)
        
      });
  }

  function deleteOrder (req, res) {
    return Order
      .findByPk(req.params.orderId)
      .then(order => {
        if(!order) {
          return res.status(400).send({
          message: 'Order Not Found',
          });
        }
        return order
          .destroy()
          .then(() => {

            const toOmit = '/' + req.params.orderId;
            const omitLength = toOmit.length;
    
            console.log(res.locals.cacheKey.slice(0,-omitLength), res.locals.cacheKey);
    
            res.locals.cacheConnection.del(res.locals.cacheKey.slice(0,-omitLength));

            res.status(200).send({
            message: 'Order successfully deleted'
          })
        })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error))
  }

export default { addOrder, modifyOrder, viewAllOrders, deleteOrder};