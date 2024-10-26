import React, { useState, useEffect } from 'react';
import CandlestickChart from './components/CandlestickChart';
import TokenDropdown from './components/TokenDropdown';
import useFetchTokenData from './hooks/useFetchTokenData';
import './styles/App.css';

function App() {
  const [selectedToken, setSelectedToken] = useState('ETH');
  const { data, fetchHistoricalData } = useFetchTokenData(selectedToken);

  useEffect(() => {
    fetchHistoricalData();
  }, [selectedToken]);

  return (
    <div className="App">
      <h1>Token Candlestick Chart</h1>
      <TokenDropdown selectedToken={selectedToken} setSelectedToken={setSelectedToken} />
      <CandlestickChart chartData={data} />
    </div>
  );
}

export default App;
