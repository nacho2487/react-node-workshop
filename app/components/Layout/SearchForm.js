import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
          <form className="nav-search">
              <input ref="searchValue" type="text" className="nav-search-input" />
    					<button type="submit" className="nav-search-btn">
    						<i className="nav-icon-search"></i>
    					</button>
          </form>
      );
  }
}

export default SearchForm;
