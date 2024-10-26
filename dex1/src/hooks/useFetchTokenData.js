import { useState } from 'react';
import { fetchHistoricalDataFromContract } from '../utils/ethersConfig';

const useFetchTokenData = (tokenSymbol) => {
  const [data, setData] = useState([]);

  const fetchHistoricalData = async () => {
    try {
      const result = await fetchHistoricalDataFromContract(tokenSymbol);
      setData(result);
    } catch (error) {
      console.error('Error fetching historical data:', error);
    }
  };

  return { data, fetchHistoricalData };
};

export default useFetchTokenData;
