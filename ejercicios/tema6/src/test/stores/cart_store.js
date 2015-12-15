import { Dispatcher } from 'flux';
import { CartStore } from '../../stores/cart_store';
import ActionTypes from '../../action_types';
import should from 'should';

describe('Cart Store', function(){

  var dispatcher, store;

  before(function(){
    dispatcher = new Dispatcher();
    store = new CartStore(dispatcher);

  });

  // after(function(){
  //   dispatcher.unregister(store.getDispatchToken());
  // });

  it('Should return cart items', function(){
    store.getCartItems.should.be.a.Function;
  });

  it('Should add a product to the cart', function(){
    var product = { id: 1, name: 'foo', price: 10 };
    var action = {
      type: ActionTypes.CART_ADD,
      product
    };

    dispatcher.dispatch(action);
    var items = store.getCartItems();
    items.should.be.an.Array;
    items[0].should.have.property('quantity', 1);
    items[0].id.should.equal(product.id);
  });

  it('Should handle change quantity', function(){
    var action = {
      type: ActionTypes.CART_CHANGE_QTY,
      productId: 1,
      quantity: 3
    };

    dispatcher.dispatch(action);

    var items = store.getCartItems();
    items.should.be.an.Array;
    items[0].should.have.property('quantity', 3);
    items[0].id.should.equal(1);
  });

  it('Should remove a product from the cart', ()=>{
    var action = {
      type: ActionTypes.CART_REMOVE,
      productId: 1
    }

    dispatcher.dispatch(action);
    var items = store.getCartItems();
    items.should.be.an.Array;
    items.should.have.length(0);
  });

  it('Should empty the cart when order is saved', () => {
    var action = {
      type: ActionTypes.ORDER_SAVE
    };

    dispatcher.dispatch(action);
    var items = store.getCartItems();
    items.should.have.length(0);
  })

});

