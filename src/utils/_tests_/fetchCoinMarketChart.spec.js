import fetchCointMarketChart from '../fetchCoinMarketChart'

describe('Fetch coin market chart', () => {
  it('Given correct coin id is provided, should return price, market caps, and total volues for 7 days', async () => {
    const coinId = '3x-long-ethereum-classic-token'
    const result = await fetchCointMarketChart(coinId)
    expect(result).toBeTruthy()
    expect(Object.keys(result)).toHaveLength(8)
    expect(result[Object.keys(result)[0]].price).toBeDefined()
    expect(result[Object.keys(result)[0]].market_cap).toBeDefined()
    expect(result[Object.keys(result)[0]].total_volume).toBeDefined()
  })
  it.only('Given incorrect coin id is provided, should return error', async () => {
    const result = await fetchCointMarketChart('wrong id')
    expect(result).toBeTruthy()
    expect(result).toThrow('Could not find coin with the given id')
  })
})