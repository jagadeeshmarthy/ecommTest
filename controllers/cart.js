const config = require('../config')

let addToCart = (request, response) => {
  const products =   config.Moltin.Cart.AddProduct(request.body.id, request.body.quantity).then((cart) => {
  response.status(200).send(cart);
}).catch((error) => {
    response.status(error.errors[0].status).send(error);
});
}

let listCartItems = (request, response) => {
  const items = config.Moltin.Cart.Items().then((items) => {
  response.status(200).send(items);
}).catch((error) => {
    response.status(error.errors[0].status).send(error);
});
}

let removeItemFromCart = (request, response) => {
    const item = config.Moltin.Cart.RemoveItem(request.body.itemId).then((item) => {
    response.status(200).send(item);
}).catch((error) => {
    response.status(error.errors[0].status).send(error);
});
}

let updateCartItem = (request, response) => {
    const item = config.Moltin.Cart.UpdateItemQuantity(request.body.itemId, request.body.quantity).then((item) => {
    response.status(200).send(item);
}).catch((error) => {
    response.status(error.errors[0].status).send(error);
});
}

let deleteCart = (request, response) => {
    const item = config.Moltin.Cart.Delete().then(() => {
    response.status(200).send({message:"successfully deleted cart"});
}).catch((error) => {
    response.status(error.errors[0].status).send(error);
});
}

exports.listCartItems = listCartItems;
exports.addToCart = addToCart;
exports.removeItemFromCart = removeItemFromCart;
exports.updateCartItem = updateCartItem;
exports.deleteCart = deleteCart;
