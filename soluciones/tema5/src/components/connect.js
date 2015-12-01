import React  from 'react';
//import { ReactComponentWithPureRenderMixin } from 'react/addons';

function assertInterface(Component){
  //ensure static methods exists
  if(typeof(Component.getStores)!=='function'){
    throw new Error('Connected components should implement `static getStores`');
  }
  if(typeof(Component.getState)!=='function'){
    throw new Error('Connected components should implement `static getState`');
  }
}

export function connectToStores(Component, stores, getState){
  var subs = [];
  if(!stores || !getState){
    assertInterface(Component);
  }
  var connected = React.createClass({
    displayName: 'Connected(' + (Component.displayName || Component.name) + ')',
    //mixins: [ReactComponentWithPureRenderMixin],
    componentDidMount(){
      for(let store of Component.getStores()){
        subs.push(store.addListener(this.__onStoreChange));
      }
      this.__onStoreChange();
    },

    componentWillUnmount(){
      subs.forEach(s => s.remove());
    },

    getInitialState(){
      return Component.getState(this.props);
    },

    __onStoreChange(){
      this.setState(Component.getState(this.props));
    },

    render(){
      return (<Component {...this.state} {...this.props} />);
    }
  });
  return connected;
}

