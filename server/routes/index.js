import UserFunctions from '../controllers/user';
import ProductFunctions from '../controllers/product';
import OrderFunctions from '../controllers/order';

export default (app) => {
  
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
  }));

  app.post('/api/user', UserFunctions.signUp);
  app.get('/api/user', UserFunctions.viewAllUsers);
  app.put('/api/user/:userId', UserFunctions.modifyUser);
  app.delete('/api/user/:userId', UserFunctions.deleteUser);

  app.post('/api/product', ProductFunctions.addProduct);
  app.get('/api/product', ProductFunctions.viewAllProducts);
  app.put('/api/product/:productId', ProductFunctions.modifyProduct);
  app.delete('/api/product/:productId', ProductFunctions.deleteProduct);

  app.post('/api/order', OrderFunctions.addOrder);
  app.get('/api/order', OrderFunctions.viewAllOrders);
  app.put('/api/order/:orderId', OrderFunctions.modifyOrder);
  app.delete('/api/order/:orderId', OrderFunctions.deleteOrder);


};