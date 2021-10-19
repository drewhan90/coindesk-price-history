import React from 'react'

import fetchCoinList from './utils/fetchCoinList'

const App = () =>  {
  const [coinList, setCoinList] = React.useState()
  const [searchValue, setSearchValue] = React.useState('')
  const [filteredCoinList, setFilteredCoinList] = React.useState()
  const [displayDropdown, setDisplayDropdown] = React.useState()
  const [selectedCoinId, setSelectedCoinId] = React.useState()

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

  return (
    <div className="App">
      <div style={{ border: '1px solid black'}}>
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
      <button>Get price history</button>
    </div>
  );
}

export default App;
