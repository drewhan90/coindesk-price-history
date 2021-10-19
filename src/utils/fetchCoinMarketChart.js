const fetchCoinMarketChart = async (id) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=cad&days=7&interval=daily`)
  const data = await response.json()
  
  const formattedChartObj = {}
  for (let i = 0; i < data.prices.length; i += 1) {
    formattedChartObj[data.prices[i][0]] = {
      price: data.prices[i][1],
      total_volume: data.total_volumes[i][1],
      market_cap: data.market_caps[i][1]
    }
  }
  return formattedChartObj
}

export default fetchCoinMarketChart