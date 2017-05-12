
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
        <div className="image">
          <img src={item.thumbnail} width="180" height="180"  />
        </div>
        <div className="item-info">
          <div className="price">{item.price}</div>
          <h3>{item.title}</h3>
        </div>
      </li>
    )
  }
}

export default SearchItem;
