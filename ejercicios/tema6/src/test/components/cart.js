import jsdom from '../helpers/jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Dispatcher } from 'flux';
import { Cart }  from '../../components/ecommerce/cart';
import CartItem from '../../components/ecommerce/cart_item';
import should from 'should';
import TestUtils from 'react-addons-test-utils';
import rewire from 'rewire';
import sinon from 'sinon';

describe('Cart component', () => {
  function renderComponent(comp){
    return TestUtils.renderIntoDocument(comp);
  }

  var fakeItems = [
    { id: 1, name: 'product1', price: 10, quantity: 1 },
    { id: 2, name: 'product2', price: 10, quantity: 2 }
  ];

  var comp,
      goBackSpy = sinon.spy(),
      goCheckoutSpy = sinon.spy();

  before(() => {
    comp = renderComponent(<Cart items={ fakeItems } onGoBack={ goBackSpy } onCheckout={ goCheckoutSpy } />);
  });

  it('Should render one CartItem per cart product', () => {
    var cartItems = TestUtils.scryRenderedComponentsWithType(comp, CartItem);
    cartItems.length.should.equal(2);
  });

  it('Should render the total cart amount', () => {
    var cartTotal = TestUtils.findRenderedDOMComponentWithClass(comp, 'total');
    cartTotal.props.children[0].should.equal('30.00');
  });

  it('Should call onGoBack to go back to shopping', () => {
    var footer = TestUtils.findRenderedDOMComponentWithClass(comp, 'footer');

    var backButton = footer.children[0],
        checkoutButton = footer.children[1];

    TestUtils.Simulate.click(backButton, {});
    TestUtils.Simulate.click(checkoutButton, {});
    goBackSpy.callCount.should.equal(1);
    goCheckoutSpy.callCount.should.equal(1);
  });
});