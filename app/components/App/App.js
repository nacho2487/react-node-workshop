import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import css from './app.scss';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onSearchChange(text) {

    fetch('/api/search')
      .then((response) => {
        return response.json()
      })
      .then(function(response2){
          console.log(response2);
      });
  }
  render() {
      return (
        <div>
          <Header onSearchChange={this.onSearchChange} />
          <Footer />
        </div>
      );
  }
}

export default App;
