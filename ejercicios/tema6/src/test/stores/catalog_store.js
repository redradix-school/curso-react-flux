import { Dispatcher } from 'flux';
import { CatalogStore } from '../../stores/catalog_store';
import ActionTypes from '../../action_types';
import should from 'should';

describe('Catalog Store', () => {
  var dispatcher, store;

  var fakeProducts = [
     { id: 1, name: 'test', price: 500 },
     { id: 2, name: 'test2', price: 0}
  ];

  before(() => {
    dispatcher = new Dispatcher();
    store = new CatalogStore(dispatcher);
  })

  // after(() => {
  //   dispatcher.unregister(store.getDispatchToken());
  // });

  it('Should receive catalog products', () => {
    var action = {
      type: ActionTypes.CATALOG_RECEIVE,
      products: fakeProducts
    }
    dispatcher.dispatch(action);
    store.getProducts().should.have.length(2);
  });

  it('Should return all catalog products', () => {
    store.getProducts().should.have.length(2);
  });

  it('Should return a product by Id', () => {
    store.getProductById(1).should.have.property('name', 'test');
  });
});