import fetchCointMarketChart from '../fetchCoinMarketChart'

describe('Fetch coin market chart', () => {
  it('Given correct coin id is provided, should return price, market caps, and total volues for 7 days', async () => {
    const coinId = '3x-long-ethereum-classic-token'
    const result = await fetchCointMarketChart(coinId)
    expect(result).toBeTruthy()
    expect(Object.keys(result)).toHaveLength(3)
    expect(result.prices).toBeTruthy()
    expect(result.market_caps).toBeTruthy()
    expect(result.total_volumes).toBeTruthy()
  })
  it('Given incorrect coin id is provided, should return error', async () => {
    const result = await fetchCointMarketChart('wrong id')
    expect(result.error).toBeTruthy()
    expect(result.error).toEqual('Could not find coin with the given id')
  })
})