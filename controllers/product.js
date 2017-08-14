const config = require('../config')

let productListing = (request, response) => {
  const products = config.Moltin.Products.All().then((products) => {
  response.status(200).send(products);
  });
}

let productPage = (request, response) => {
  const products = config.Moltin.Products.Get(request.params.id).then((products) => {
    console.log(products)
  response.status(200).send(products);
}).catch((error) => {
    response.status(error.errors[0].status).send(error);
});
}

exports.productListing = productListing;
exports.productPage = productPage;
