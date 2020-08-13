import React, { Component } from 'react';

import Header from './header';
import Card from "./card";

class Home extends Component {
  render() {
    return (
      <div className='home'>
        { Header() }
        <Card />
          </div>
    );
  }
}

export default Home

// Things we need to fix

// Number lables on the paragraph
// button spacing issues