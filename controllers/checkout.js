const config = require('../config')

let checkoutCart = (request, response) => {
    const data = {
        customer: {
            name: 'John Doe',
            email: 'john@doe.co'
        },
        shipping_address: {
            first_name: 'John',
            last_name: 'Doe',
            line_1: '2nd Floor British India House',
            line_2: '15 Carliol Square',
            city: 'Newcastle Upon Tyne',
            postcode: 'NE1 6UF',
            county: 'Tyne & Wear',
            country: 'United Kingdom'
        },
        billing_address: {
            first_name: 'John',
            last_name: 'Doe',
            line_1: '2nd Floor British India House',
            line_2: '15 Carliol Square',
            city: 'Newcastle Upon Tyne',
            postcode: 'NE1 6UF',
            county: 'Tyne & Wear',
            country: 'United Kingdom'
        }
    }
    const checkout = config.Moltin.Cart.Checkout(data).then((order) => {
        response.status(200).send(order);
    }).catch((error) => {
        response.status(error.errors[0].status).send(error);
    });
}

let placeOrder = (request, response) => {
    // Pay using Braintree Payment Method Token
    Moltin.Orders.Payment('orderId', {
        gateway: 'braintree',
        payment_method_token: XXX
    }).then(() => {
        // Do something
    });
}

let getAllOrders = (request, response) => {
    const orders = config.Moltin.Orders.List().then((orders) => {
        response.status(200).send(order);
    }).catch((error) => {
        response.status(error.errors[0].status).send(error);
    });
}

let getOrder = (request, response) => {
    const order = config.Moltin.Orders.Get('orderId').then((order) => {
        // Do something
    });
}

exports.checkoutCart = checkoutCart
exports.getAllOrders = getAllOrders;
exports.getOrder = getOrder