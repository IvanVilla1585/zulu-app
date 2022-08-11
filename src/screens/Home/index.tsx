import React, {useState, useEffect} from 'react';
import {ListItem} from '@react-native-material/core';

import {Props, Crypto, CryptoResponse} from './types';

import CryptoApi from '../../services/CryptoApi';

function HomeScreen({navigation}: Props) {
  const [limit] = useState(50);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    CryptoApi.getCryptos(limit, offset).then((result: CryptoResponse) => {
      setTotal(result.info.coins_num || 0);
      setCryptos([...cryptos, ...result.data]);
    });
  }, [limit, offset]);

  return (
    <>
      {cryptos.map((crypto: Crypto, index: number) => (
        <ListItem
          key={`${index}_${crypto.id}`}
          title={crypto.symbol}
          secondaryText={crypto.name}
          onPress={() => navigation.navigate('Detail', {id: crypto.id})}
        />
      ))}
    </>
  );
}

export default HomeScreen;
