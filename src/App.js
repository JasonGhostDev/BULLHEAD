import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recovery from './pages/Recovery';
import { UseWalletProvider } from 'use-wallet';

function App() {
  return (
    <Providers>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/recovery' component={Recovery} />
        </Switch>
      </Router>
    </Providers>
    
  );
}
 const getEthChainInfo = () => {
  let chainId = 1;
  let rpcUrl = 'https://mainnet.infura.io/v3/cb76dcac4ae3402fb421b2b0d4c28db3/';
  // // if (/\/\/farm.deor.io/.test(href)) {
  //      chainId = 1;
  //      rpcUrl = 'https://mainnet.infura.io/v3/e707b58edfd7437cbb6e9079c259eda7/';
  //      ethscanType = '';
  // // }
  return {
    chainId,
    rpcUrl,
  }
};
const Providers = ({ children }) => {

  const {
    chainId,
    rpcUrl
  } = getEthChainInfo();

  return (
    <UseWalletProvider
      chainId={chainId}
      connectors={{
        walletconnect: { rpcUrl }
      }}
    >
      
          {children}
     
    </UseWalletProvider>
  )
}

export default App;
