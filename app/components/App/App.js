import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import css from './app.scss';
import SearchList from '../Search/SearchList'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onSearchChange(text) {
    let that = this;
    fetch(`/api/search?q=${text}`)
      .then((response) => {
        return response.json()
      })
      .then(function(response){
        console.log(response)
      });
  }
  render() {
      return (
        <div>
          <Header onSearchChange={this.onSearchChange} />
          <div className="container">
          </div>
          <Footer />
        </div>
      );
  }
}

export default App;
