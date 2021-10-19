import fetchCoinList from '../fetchCointList'

describe('Fetch coin list', () => {
  it('Should return coin list', async () => {
    const list = await fetchCoinList()
    console.log(list)
    expect(list).toBeTruthy()
  })
})