//const rootDir = require('../util/path');

const Product = require('../models/product.model')

exports.getAddProduct = (req, res, next) => {
  
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}

exports.postAddProduct = (req, res, next) => {
  //products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

exports.getProduct = (req, res, next) => {
  // const products = adminData.products;
  const product = Product.fetchAll();
  res.render('shop', {
    prods: product,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: product.length > 0,
    activeShop: true,
    productCSS: true
  });
}