//Ecommerce action types

export const CATALOG_RECEIVE = 'CATALOG:RECEIVE';

export const CART_ADD = 'CART:ADD';
export const CART_CHANGE_QTY = 'CART:CHANGE:QTY';
export const CART_REMOVE = 'CART:REMOVE';

export const ORDER_SAVE = 'ORDER:SAVE';
export const ORDER_SET_ERRORS = 'ORDER:VALIDATION:SAVE';
export const PAGE_SET = 'PAGE:SET';

export default {
  CART_ADD,
  CART_CHANGE_QTY,
  CART_REMOVE,
  ORDER_SAVE,
  PAGE_SET,
  CATALOG_RECEIVE
}