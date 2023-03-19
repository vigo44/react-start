import Header from '../components/header';
import Search from '../components/search';
import React from 'react';

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}
export default Home;
