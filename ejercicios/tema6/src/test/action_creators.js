import ActionCreators from '../actions/ecommerce';
import { Dispatcher } from 'flux';
import sinon from 'sinon';
import should from 'should';
import ActionTypes from '../action_types';

describe.only('Action creators', () =>{
  var dispatcher, actionSpy, token;
  var mockApi = {
    getProducts(){},
    getCategories(){}
  };

  before(() => {
    actionSpy = sinon.spy();
    dispatcher = new Dispatcher();
    token = dispatcher.register(actionSpy);
    ActionCreators.__Rewire__('Dispatcher', dispatcher);
    ActionCreators.__Rewire__('api', mockApi);
  });

  after(()=>{
    dispatcher.unregister(token);
    ActionCreators.__ResetDependency__('Dispatcher');
    ActionCreators.__ResetDependency__('api');
  });

  beforeEach(()=>{
    actionSpy.reset();
  });

  function waitPromise(fn){
    setTimeout(() => {
      fn();
    },5);
  }

  it('loadCategories should call api and dispatch CATEGORIES_RECEIVE when successful', (done) => {
    var stub = sinon.stub(mockApi, 'getCategories', () => {
      return Promise.resolve([1,2]);
    });
    ActionCreators.loadCategories();
    waitPromise(() => {
      stub.restore();
      actionSpy.callCount.should.equal(1);
      var action = actionSpy.getCall(0).args[0];
      action.should.have.property('type', ActionTypes.CATEGORIES_RECEIVE);
      done();
    });
  });

  it('loadCategories should call api and dispatch ERROR when not successful', (done) => {
    var stub = sinon.stub(mockApi, 'getCategories', () => {
      return Promise.reject(new Error('fail'));
    });
    ActionCreators.loadCategories();
    waitPromise(() => {
      stub.restore();
      actionSpy.callCount.should.equal(1);
      var action = actionSpy.getCall(0).args[0];
      action.should.have.property('type', 'ERROR');
      done();
    });
  });

});
