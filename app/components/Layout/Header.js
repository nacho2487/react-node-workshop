import React from 'react';
import css from './header.scss';
import SearchForm from './SearchForm';

class Header extends React.Component {
  render() {
      return (
        <header role="banner" className="nav-header nav-header-sticky">
        		<div className="nav-bounds ">
      					<a className="nav-logo" href="//www.mercadolibre.com.ar/">
      						Mercado Libre Argentina - Donde comprar y vender de todo
      					</a>
                <SearchForm />
        		</div>
        	</header>
      );
  }
}

export default Header;
