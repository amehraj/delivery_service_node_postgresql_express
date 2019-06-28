import signUp from '../controllers/user';
import addItem from '../controllers/item';
import addOrder from '../controllers/order';

export default (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
  }));

  app.post('/api/users', signUp); // API route for user to signup
  app.post('/api/items', addItem);
  app.post('/api/orders', addOrder);
};