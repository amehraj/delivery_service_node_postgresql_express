import model from '../models';

const { Product } = model;

function addProduct(req, res) {
    const { 
      name, 
      price, 
      discount_price, 
    } = req.body

      return Product
        .create({
          name,
          price,
          discount_price,
        })
        .then((productData) => {
          
          res.locals.cacheConnection.del(res.locals.cacheKey);
          res.status(201).send({
          success: true,
          message: 'Product successfully created',
          productData,
        })
        
      })
      .catch(error => res.status(400).send(error));
}

function modifyProduct(req, res) {
  const { 
  name, 
  price, 
  discount_price,
 } = req.body

  return Product
    .findByPk(req.params.productId)
    .then((product) => {
      product.update({
        name: name || product.name,
        price: price || product.price,
        discount_price: discount_price || product.discount_price,
      })
      .then((updatedProduct) => {
        const toOmit = '/' + req.params.productId;
        const omitLength = toOmit.length;

        console.log(res.locals.cacheKey.slice(0,-omitLength), res.locals.cacheKey);

        res.locals.cacheConnection.del(res.locals.cacheKey.slice(0,-omitLength));

        res.status(200).send({
          message: 'Product updated successfully',
          data: updatedProduct,

        })
      })
      .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

function viewAllProducts(req, res) {
  return Product
    .findAll()
    .then((products) => {
      res.locals.cacheConnection.set(res.locals.cacheKey, JSON.stringify(products));
      res.status(200).send(products);
    });
}

function deleteProduct (req, res) {
  return Product
    .findByPk(req.params.productId)
    .then(product => {
      if(!product) {
        return res.status(400).send({
        message: 'Product Not Found',
        });
      }
      return product
        .destroy()
        .then(() => {
          const toOmit = '/' + req.params.productId;
          const omitLength = toOmit.length;

          console.log(res.locals.cacheKey.slice(0,-omitLength), res.locals.cacheKey);

          res.locals.cacheConnection.del(res.locals.cacheKey.slice(0,-omitLength));

          res.status(200).send({
          message: 'Product successfully deleted'
        })

      })
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error))
}



export default { addProduct, viewAllProducts, modifyProduct, deleteProduct};