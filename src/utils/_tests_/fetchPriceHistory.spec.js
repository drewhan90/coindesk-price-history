import fetchPriceHistory from '../fetchPriceHistory'

describe.skip('Fetch Price History using CoinDesk', () => {
  it ('returns data', async () => {
    const response = await fetchPriceHistory('ETH', '2021-10-12T01:34', '2021-10-19T01:34')
    console.log(response)
  })
})