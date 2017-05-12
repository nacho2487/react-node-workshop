import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearchChange(this.refs.searchValue.value);
  }


  render() {
      return (
          <form className="nav-search" onSubmit={this.handleSubmit}>
              <input ref="searchValue" type="text" className="nav-search-input"
               />
    					<button type="submit" className="nav-search-btn">
    						<i className="nav-icon-search"></i>
    					</button>
          </form>
      );
  }
}

export default SearchForm;
