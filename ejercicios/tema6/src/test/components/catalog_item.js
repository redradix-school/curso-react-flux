import jsdom from '../helpers/jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Dispatcher } from 'flux';
import CatalogItem from '../../components/ecommerce/catalog_item';
import should from 'should';
import TestUtils from 'react-addons-test-utils';
import rewire from 'rewire';
import sinon from 'sinon';

describe('CatalogItem component', () => {

  var fakeProduct = {
    id: 1,
    name: 'foobar',
    description: 'a nice foobar',
    price: 10
  };

  var addToCartSpy = sinon.spy();

  before(() => {
    CatalogItem.__Rewire__('addToCart', addToCartSpy);
  });

  after(() => {
    CatalogItem.__ResetDependency__('addToCart');
  })

  it('Should render', () => {
    var comp = TestUtils.renderIntoDocument(<CatalogItem product={ fakeProduct } />);
    comp.should.be.an.Object;
  });

  it('Should dispatch add to cart action from button click', () => {
    var comp = TestUtils.renderIntoDocument(<CatalogItem product={ fakeProduct } />);
    var button = TestUtils.findRenderedDOMComponentWithClass(comp, 'button');

    TestUtils.Simulate.click(button);
    addToCartSpy.callCount.should.equal(1);
    addToCartSpy.getCall(0).args[0].should.deepEqual(fakeProduct);
  });
});