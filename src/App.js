import React, { Component } from 'react';

import Layout from './components/layout/Layout'
import Burger from './containers/burger/Burger'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Burger>
            
          </Burger>
        </Layout>
      </div>
    );
  }
}

export default App;
