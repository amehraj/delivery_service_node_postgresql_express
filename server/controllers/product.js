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
        .then(productData => res.status(201).send({
          success: true,
          message: 'Product successfully created',
          productData,
        }))
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
    .then(products => res.status(200).send(products));
}


export default { addProduct, viewAllProducts, modifyProduct};