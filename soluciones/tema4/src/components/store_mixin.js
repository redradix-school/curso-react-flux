import React from 'react';

const StoreMixin = function(stores){
  var __subs = [];
  return {
    componentDidMount(){
      stores.forEach(s => {
        __subs.push(s.addListener(this.__onStoreChange));
      });
      this.__onStoreChange();
    },

    componentWillUnmount(){
      __subs.forEach(s =>s.remove());
    },

    __onStoreChange(){
      if(typeof(this.getState) !== 'function'){
        throw new Error('StoreMixin expects method `getState`');
      }
      this.setState(this.getState());
    }
  }
}

export default StoreMixin;