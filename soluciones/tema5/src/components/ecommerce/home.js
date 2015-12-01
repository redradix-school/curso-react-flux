import React from 'react';
import Header from './header';
import { Link } from 'react-router';
import CategoryStore from '../../stores/category_store';
import CatalogStore from '../../stores/catalog_store';

import { connectToStores } from '../connect';


const Menu = React.createClass({
  propTypes: {
    categories: React.PropTypes.array
  },
  render(){
    const links = this.props.categories.map(c => (
      <li key={ c.id }>
        <Link to={ "/c/" +  c.id + "/" + c.slug }>{ c.name }</Link>
      </li>)
    );

    return (
      <div className="shop-menu">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            { links }
            <li className="right"><Link to="/cart">Tu carrito</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
});

const CategoryItem = function(props){
  const cat = props.category;
  return (
    <div className="row">
      <div className="col one-whole">
        <h2 className="category-title"><Link to={ "/c/" + cat.id + "/" + cat.slug}>{cat.name}</Link></h2>
        <p>{ cat.description }</p>
      </div>
    </div>
  );
}

const Home = React.createClass({
  statics: {
    getStores(){
      return [CategoryStore]
    },
    getState(props){
      return {
        categories: CategoryStore.getCategories()
      }
    },
  },
  renderCategories(){
    const categoryItems = this.props.categories.map(c => <CategoryItem key={ c.id } category={c} />);
    return (
      <div className="category-list">
        { categoryItems }
      </div>
    );
  },
  render(){
    return (
      <div className='shopping-cart'>
        <div className="catalog">
          <div className="shop-header">
            <h1>Flux Shop</h1>
          </div>
          <Menu categories={ this.props.categories } />

          { this.props.children || this.renderCategories() }
        </div>
      </div>
    );
  }
});

export default connectToStores(Home);