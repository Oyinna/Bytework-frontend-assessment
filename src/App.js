import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PremierLeagueTable from './containers/PremierLeague/PremierLeagueTable';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <PremierLeagueTable/>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
