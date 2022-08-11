import React, {useState, useEffect} from 'react';
import {Stack, Text} from '@react-native-material/core';

import {NavigaionProps, Crypto} from './types';

import CryptoApi from '../../services/CryptoApi';

function DetailScreen({route}: NavigaionProps) {
  const [crypto, setCrypto] = useState({});

  useEffect(() => {
    CryptoApi.getCryptoById(route.params.id).then((result: Crypto) => {
      setCrypto(result);
    });
  }, [route.params.id]);
  return (
    <Stack m={8} spacing={4}>
      <Text variant="h6">{crypto.symbol}</Text>
      <Text variant="subtitle1">Name: {crypto.name}</Text>
      <Text variant="subtitle1">Rank: {crypto.rank}</Text>
      <Text variant="subtitle1">Price: ${crypto.price_usd}</Text>
    </Stack>
  );
}

export default DetailScreen;
