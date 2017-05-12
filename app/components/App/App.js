import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import css from './app.scss';
import SearchList from '../Search/SearchList'



class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
        <div>
          <Header />
          <div className="container">
            <SearchList  />
          </div>
          <Footer />
        </div>
      );
  }
}

export default App;
