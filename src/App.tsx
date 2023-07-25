import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WagmiConfig } from 'wagmi';
import { wagmiClient } from './config/WagmiClient';
import Metamask from './views/Metamask/Metamask';

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
       <div className="App">
      <header className="App-header">
        <Metamask />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
</WagmiConfig>
   
  );
}

export default App;
