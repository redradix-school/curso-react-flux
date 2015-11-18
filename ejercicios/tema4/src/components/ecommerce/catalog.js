import React from 'react';
import Header from './header';
import CatalogItem from './catalog_item';
import CatalogStore from '../../stores/catalog_store';
import { connectToStores } from '../connect';

const Catalog = React.createClass({
  statics: {
    getStores(){
      return [CatalogStore];
    },
    getState(){
      return {
        products: CatalogStore.getProducts()
      }
    }
  },

  render(){
    const items = this.props.products.map(item => <CatalogItem key={item.id} product={item} />);
    return (
      <div className='catalog'>
        <Header text='Products' />
        <div className='catalog-list'>
          { items.length ?  items : <p>Cargando...</p> }
        </div>
      </div>

    )
  }
});

export default connectToStores(Catalog);