import axios from 'axios';

class CryptoApi {
  static async getCryptos(limit: number, offset: number) {
    const result = await axios.get(
      `https://api.coinlore.net/api/tickers/?start=${offset}&limit=${limit}`,
    );

    return result.data || {};
  }

  static async getCryptoById(id: string) {
    const result = await axios.get(
      `https://api.coinlore.net/api/ticker/?id=${id}`,
    );

    return (result.data.length && result.data[0]) || {};
  }
}

export default CryptoApi;
