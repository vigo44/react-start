import Search from '../../components/search/search';
import React from 'react';
import Cards from '../../components/cards/cards';

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Search />
        <Cards />
      </div>
    );
  }
}
export default Home;
