const express = require('express')
const router = express.Router()
const products = require('../controllers/product')
const cart = require('../controllers/cart')
const checkout = require('../controllers/checkout')
const auth = require('../controllers/auth')

//product routes
router.get('/products', products.productListing)
router.get('/product/:id', products.productPage)

//cart routes
router.get('/cart', cart.listCartItems)
router.post('/cart', cart.addToCart)
router.delete('/cart', cart.deleteCart)
router.delete('/cart/item', cart.removeItemFromCart)
router.put('/cart/item', cart.updateCartItem)

//checkout routes
router.post('/checkout', checkout.checkoutCart)
router.post('/placeOrder', checkout.placeOrder)

router.get('/orders', checkout.getAllOrders)
router.get('/order', checkout.getOrder)

//authentication routes
router.post('/signup', auth.signup)
router.post('/signin', auth.signin)

module.exports = router
