import React, { Component } from 'react';
import logo from './logo.svg';

import Sidebar from './components/Sidebar';
import VxSample from './charts/VxSample';
import VictorySample from './charts/VictorySample';
import RechartsSample from './charts/RechartsSample';

import './App.css';

class App extends Component {
  state = {
    navs: ['VX', 'Victory', 'Recharts'],
    selected: 'Victory'
  };

  onNavChanged = selected => {
    this.setState({ selected });
  };

  render() {
    const { navs, selected } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">react-charts-comparison</h1>
        </header>
        <div className="app-content">
          <Sidebar
            navs={navs}
            selected={selected}
            onNavChanged={this.onNavChanged}
          />
          <div className="charts-container">
            {selected === 'VX' ? <VxSample /> : null}
            {selected === 'Victory' ? <VictorySample /> : null}
            {selected === 'Recharts' ? <RechartsSample /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
