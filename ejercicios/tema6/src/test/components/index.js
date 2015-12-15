import jsdom from '../helpers/jsdom';
import React from 'react';
import { Shop } from '../../components/ecommerce/index';
import should from 'should';
import TestUtils from 'react-addons-test-utils';


describe('Ecommerce Component', () => {

  function renderComponent(comp){
    return TestUtils.renderIntoDocument(comp);
  }

  it('Should render the appropiate component for the page', () => {
    var component = renderComponent(<Shop page='catalog' />);
    var catalog = TestUtils.findRenderedDOMComponentWithClass(component, 'catalog');
    catalog.should.be.an.Object;

    component = renderComponent(<Shop page='cart' />);
    var cart = TestUtils.findRenderedDOMComponentWithClass(component, 'cart');
    cart.should.be.an.Object;

    component = renderComponent(<Shop page='checkout' />);
    var checkout = TestUtils.findRenderedDOMComponentWithClass(component, 'checkout');
    checkout.should.be.an.Object;

    component = renderComponent(<Shop page='thankyou' />);
    var thankyou = TestUtils.findRenderedDOMComponentWithClass(component, 'thank-you');
    thankyou.should.be.an.Object;

    component = renderComponent(<Shop page='blablabla' />);
    var notfound = TestUtils.findRenderedDOMComponentWithClass(component, 'not-found');
    notfound.should.be.an.Object;

  });

});