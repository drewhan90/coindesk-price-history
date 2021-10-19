import React from 'react'

import Table from './components/Table'

import fetchCoinList from './utils/fetchCoinList'
import fetchCoinMarketChart from './utils/fetchCoinMarketChart'

const App = () =>  {
  const [coinList, setCoinList] = React.useState()
  const [searchValue, setSearchValue] = React.useState('')
  const [filteredCoinList, setFilteredCoinList] = React.useState()
  const [displayDropdown, setDisplayDropdown] = React.useState()
  const [selectedCoinId, setSelectedCoinId] = React.useState()
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

  React.useMemo(() => {
    // Debounce this
    // Filter by symbol
    if (coinList && searchValue) {
      const _filteredCoinList = coinList.filter((coin) => {
        return coin.name.toLowerCase().includes(searchValue.toLowerCase())
      })
      setFilteredCoinList(_filteredCoinList)
    }
    if (!searchValue) setDisplayDropdown(false)
  }, [searchValue, coinList])

  const updateSearchValue = (value) => {
    setSearchValue(value)
  }

  const handleSearchInputChange = (e) => {
    updateSearchValue(e.target.value)
    setDisplayDropdown(true)
  }

  const handleDropdownItemClick = (coin) => () => {
    updateSearchValue(coin.name)
    setSelectedCoinId(coin.id)
    setDisplayDropdown(false)
  }

  const getCointMarketChart = async () => {
    if (selectedCoinId) {
      const _coinMarketChartData = await fetchCoinMarketChart(selectedCoinId)
      setCoinMarketChartData(_coinMarketChartData)
    }
  }
      
  console.log({ coinMarketChartData })

  return (
    <div style={{ padding: 16 }}>
      <div>
        <label htmlFor="search">Coin: </label>
        <input
          type="text"
          id="search"
          name="search"
          value={searchValue}
          style={{ width: '100%' }}
          onChange={handleSearchInputChange}
        />
        {
          displayDropdown && (
            <div style={{ height: 150, backgroundColor: 'grey', overflow: 'scroll' }}>
              {
                (filteredCoinList && filteredCoinList.length) ? filteredCoinList.map((coin) => {
                  return (
                    <div
                      id={coin.id}
                      onClick={handleDropdownItemClick(coin)}
                      style={{ textAlign: 'left', cursor: 'pointer' }}
                    >
                      {coin.symbol}: {coin.name}
                    </div>
                  )
                }) : (
                  <div>There are no results.</div>
                )
              }
            </div>
            )
        }
      </div>
      <button onClick={getCointMarketChart}>Get price history</button>
      <Table data={coinMarketChartData} />
    </div>
  );
}

export default App;
