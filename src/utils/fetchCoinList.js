const fetchCoinList = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/list')
  const data = response.json()
  return data
}

export default fetchCoinList