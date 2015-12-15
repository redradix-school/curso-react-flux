import { Dispatcher } from 'flux';
import { RouteStore } from '../../stores/route_store';
import ActionTypes from '../../action_types';
import should from 'should';

describe('Route Store', () => {
  var dispatcher, store;
  before(() => {
    dispatcher = new Dispatcher();
    store = new RouteStore(dispatcher);
  });

  it('Should return the current page', () => {
    store.getPage().should.equal('catalog');
  });

  it('Should change page with PAGE_SET', () => {
    dispatcher.dispatch({
      type: ActionTypes.PAGE_SET,
      page: 'test'
    });
    store.getPage().should.equal('test');
  });

  it('Should change page to cart with CART_ADD', () => {
    dispatcher.dispatch({
      type: ActionTypes.CART_ADD
    });
    store.getPage().should.equal('cart');
  });

  it('Should change page to thankyou with ORDER_SAVE', () => {
    dispatcher.dispatch({
      type: ActionTypes.ORDER_SAVE
    });
    store.getPage().should.equal('thankyou');
  });
})