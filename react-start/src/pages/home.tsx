import Header from '../components/header';
import Search from '../components/search';
import React from 'react';
import Cards from '../components/cards';

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <Search />
        <Cards />
      </div>
    );
  }
}
export default Home;
