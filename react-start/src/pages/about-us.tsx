import Header from '../components/header';
import React from 'react';
import About from '../components/about';

class AboutUs extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}
export default AboutUs;
