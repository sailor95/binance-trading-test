require('dotenv').config();
const ccxt = require('ccxt');

const tick = async (config, binanceClient) => {
  const { asset, base, buyPrice, buyVolume } = config;
  const market = `${asset}/${base}`;
  await binanceClient.createLimitBuyOrder(market, buyVolume, buyPrice);

  console.log(`
    New tick for ${market}...
    Created limit buy order for ${buyVolume}@${buyPrice}USDT
  `);
};

const run = () => {
  const config = {
    asset: 'BNB',
    base: 'USDT',
    buyPrice: 100,
    buyVolume: 1,
  };
  const binanceClient = new ccxt.binance({
    apiKey: process.env.API_KEY,
    secret: process.env.API_SECRET,
  });
  tick(config, binanceClient);
};

run();
