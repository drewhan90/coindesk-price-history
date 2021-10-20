import React from 'react'

import Table from './components/Table'
import Autocomplete from './components/Autocomplete'

import fetchCoinList from './utils/fetchCoinList'
import fetchCoinMarketChart from './utils/fetchCoinMarketChart'

const App = () =>  {
  const [coinList, setCoinList] = React.useState()
  const [coinMarketChartData, setCoinMarketChartData] = React.useState()

  const getCoinList = async () => {
    const _coinList = await fetchCoinList()
    setCoinList(_coinList)
  }

  React.useEffect(() => {
    if (!coinList) {
      getCoinList()
    }
  }, [coinList])

  const getCointMarketChart = async (coinId) => {
    if (coinId) {
      const _coinMarketChartData = await fetchCoinMarketChart(coinId)
      setCoinMarketChartData(_coinMarketChartData)
    }
  }

  // TODO onHover the dropdown
      
  return (
    <div style={{ padding: 24 }}>
      <Autocomplete list={coinList} getCointMarketChart={getCointMarketChart} />
      <Table data={coinMarketChartData} />
    </div>
  )
}

export default App
