
import React from 'react';
import css from './search.scss';

class SearchItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let item = this.props.item;
    return (
      <li className="item">
      </li>
    )
  }
}

export default SearchItem;
