const fetchCoinMarketChart = async (id) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=cad&days=7&interval=daily`)
  const data = response.json()
  return data
}

export default fetchCoinMarketChart