import Dispatcher from '../app_dispatcher';
import api from '../lib/api';
import {
  CATEGORIES_RECEIVE,
  CATALOG_RECEIVE,
  CART_ADD,
  CART_CHANGE_QTY,
  CART_REMOVE,
  PAGE_SET,
  ORDER_SAVE,
  ORDER_SET_ERRORS,
  LOGIN
} from '../action_types';

/** Ecommerce Action Creators **/

//  Adds a product to the cart
export function addToCart(productId){
  Dispatcher.dispatch({
    type: CART_ADD,
    productId
  })
}

// Changes a product's quantity in the cart
export function changeQty(productId, quantity){
  Dispatcher.dispatch({
    type: CART_CHANGE_QTY,
    productId: productId,
    quantity: quantity
  })
}

//  Removes a product from the cart
export function removeFromCart(productId){
  Dispatcher.dispatch({
    type: CART_REMOVE,
    productId: productId
  })
}

// Changes the visible page
export function setPage(page){
  Dispatcher.dispatch({
    type: PAGE_SET,
    page: page
  })
}

export function login(user, pwd, returnPath){
  setTimeout(()=>{
    Dispatcher.dispatch({
      type: LOGIN,
      returnPath,
      user: {
        email: user,
        id: (Math.random()*500).toString(16),
        loginTime: Date.now()
      }
    });
  }, 1000);
}

// Saves user details for an order
export function saveOrder({ firstName, lastName, email, address }){
  Dispatcher.dispatch({
    type: ORDER_SAVE,
    orderDetails: {
      firstName,
      lastName,
      email,
      address
    }
  });
}

// Validates user details and dispatches appropiate action
export function validateOrder(order){
  var errors = {};
  if(order.firstName.trim() === ''){
    errors.firstName = 'First name is required';
  }
  if(order.lastName.trim() === ''){
    errors.lastName = 'Last name is required';
  }
  if(order.email.trim() === ''){
    errors.email = 'Email is required';
  }
  if(order.address.trim() === ''){
    errors.address = 'Address is required';
  }

  if(Object.keys(errors).length > 0){
    Dispatcher.dispatch({
      type: ORDER_SET_ERRORS,
      errors: errors
    });
  }
  else {
    saveOrder(order);
  }
}

export function loadCategories(){
  api.getCategories().then(categories => {
    Dispatcher.dispatch({
      type: CATEGORIES_RECEIVE,
      categories
    });
  })
  .catch(err => {
    alert("Error al cargar categorías (dist/categories.json)")
  });
}

export function loadProductsByCategory(categoryId){
  api.getProducts(categoryId)
  .then(products => {
    Dispatcher.dispatch({
      type: CATALOG_RECEIVE,
      categoryId,
      products
    });
  })
  .catch(err => {
    setPage('notfound');
  });
}

export function receiveCatalogProducts(products, slug){
  Dispatcher.dispatch({
    type: CATALOG_RECEIVE,
    products: products
  })
}


