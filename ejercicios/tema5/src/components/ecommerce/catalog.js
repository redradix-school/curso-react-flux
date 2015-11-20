import React from 'react';
import Header from './header';
import CatalogItem from './catalog_item';
import CatalogStore from '../../stores/catalog_store';
import CategoryStore from '../../stores/category_store';
import { connectToStores } from '../connect';

const Catalog = React.createClass({
  statics: {
    getStores(){
      return [CatalogStore];
    },
    getState(props){
      return {
        products: CatalogStore.getProducts(),
        categoryId: CatalogStore.getCategoryId()
      }
    }
  },
  propTypes: {
    //injected by connectToStores
    products: React.PropTypes.array,
    //injected by react-router
    params: React.PropTypes.object
  },
  getDefaultProps(){
    return {
      products: []
    }
  },

  render(){
    const categoryName = CategoryStore.getCategoryNameById(this.props.categoryId);
    const items = this.props.products.map(item => <CatalogItem key={item.id} product={item} />);
    return (
      <div className='catalog'>
        <Header text={ categoryName } />
        <div className='catalog-list'>
          { items.length ?  items : <p>Cargando...</p> }
        </div>
      </div>

    )
  }
});

export default connectToStores(Catalog);