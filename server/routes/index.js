import UserFunctions from '../controllers/user';
import ItemFunctions from '../controllers/item';
import OrderFunctions from '../controllers/order';

export default (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
  }));

  app.post('/api/users', UserFunctions.signUp);
  app.get('/api/userslist', UserFunctions.viewAllUsers);

  app.post('/api/items', ItemFunctions.addItem);
  app.get('/api/itemslist',ItemFunctions.viewAllItems);

  app.post('/api/orders', OrderFunctions.addOrder);
  app.post('/api/orders/:orderId', OrderFunctions.modifyOrder);
  app.get('/api/orderslist', OrderFunctions.viewAllOrders);


};