import React from 'react';
import SearchItem from './SearchItem'

class SearchList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul className="list">
        {this.props.items.map((item) => {
          return <SearchItem item={item} key={item.title} />
        })}
      </ul>
    )
  }
}

export default SearchList;
