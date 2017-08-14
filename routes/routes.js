const express = require('express')
const router = express.Router()
const products = require('../controllers/product')
const cart = require('../controllers/cart')

//product routes
router.get('/products', products.productListing)
router.get('/product/:id', products.productPage)

//cart routes
router.get('/cart', cart.listCartItems)
router.post('/cart', cart.addToCart)
router.delete('/cart', cart.deleteCart)
router.delete('/cart/item', cart.removeItemFromCart)
router.put('/cart/item', cart.updateCartItem)

module.exports = router
