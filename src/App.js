import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApiPromise, WsProvider } from '@polkadot/api';

function App() {
  const [message, setMessage] = useState('Loading...');
  const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  useEffect(() => {
    async function loadPolka() {
      const api = await ApiPromise.create({ provider: wsProvider });
      setMessage(api.genesisHash.toHex());
    }
    loadPolka();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
