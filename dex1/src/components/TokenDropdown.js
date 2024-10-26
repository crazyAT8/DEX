import React from 'react';
import { tokenList } from '../config';

const TokenDropdown = ({ selectedToken, setSelectedToken }) => {
  const handleChange = (e) => {
    setSelectedToken(e.target.value);
  };

  return (
    <select value={selectedToken} onChange={handleChange}>
      {tokenList.map((token) => (
        <option key={token.symbol} value={token.symbol}>
          {token.name}
        </option>
      ))}
    </select>
  );
};

export default TokenDropdown;
