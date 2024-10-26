import { ethers } from 'ethers';
import TokenPriceOracleABI from '../abi/TokenPriceOracle.json';
import { contractAddress } from '../config';

export const fetchHistoricalDataFromContract = async (tokenSymbol) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, TokenPriceOracleABI, signer);

  const prices = await contract.getHistoricalPrices(tokenSymbol);
  
  return prices.map((p) => ({
    x: new Date(p.timestamp * 1000),
    o: parseFloat(ethers.utils.formatUnits(p.open, 18)),
    h: parseFloat(ethers.utils.formatUnits(p.high, 18)),
    l: parseFloat(ethers.utils.formatUnits(p.low, 18)),
    c: parseFloat(ethers.utils.formatUnits(p.close, 18)),
  }));
};
