import React from 'react'
import pt from 'prop-types'

const Autocomplete = ({ list, getCointMarketChart }) => {
  const dropdownRef = React.useRef()
  const [searchValue, setSearchValue] = React.useState('')
  const [displayDropdown, setDisplayDropdown] = React.useState()
  const [filteredCoinList, setFilteredCoinList] = React.useState()

  const updateSearchValue = (value) => {
    setSearchValue(value)
  }

  const handleSearchInputChange = (e) => {
    updateSearchValue(e.target.value)
    setDisplayDropdown(true)
  }

  const handleDropdownItemClick = (coin) => () => {
    updateSearchValue(coin.name)
    setDisplayDropdown(false)
    getCointMarketChart(coin.id)
  }

  const handleClickAwayDropdown = (e) => {
    if (dropdownRef && dropdownRef.current && !dropdownRef.current.contains(e.target) ) {
      setDisplayDropdown(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('mousedown', handleClickAwayDropdown)
    return () => {
      window.removeEventListener('mousedown', handleClickAwayDropdown)
    }
  }, [])

  React.useMemo(() => {
    // Debounce this
    // Filter by symbol
    if (list && searchValue) {
      const _filteredCoinList = list.filter((coin) => {
        return coin.name.toLowerCase().includes(searchValue.toLowerCase())
      })
      setFilteredCoinList(_filteredCoinList)
    }
    if (!searchValue) setDisplayDropdown(false)
  }, [searchValue, list])

  return (
    <div style={{ width: '40%', position: 'relative', marginBottom: 24 }}>
        <label htmlFor="search" style={{ marginRight: 12 }}>Coin</label>
        <div>
          <input
            type="text"
            id="search"
            name="search"
            value={searchValue}
            style={{ width: '100%', height: 25, border: '1px solid #494949', marginTop: 12 }}
            onChange={handleSearchInputChange}
          />
          {
            displayDropdown && (
              <div
                ref={dropdownRef}
                style={{
                  width: '100%',
                  height: 240,
                  overflow: 'scroll',
                  position: 'absolute',
                  border: '1px solid #EDEEF0',
                  backgroundColor: 'white'
                }}
              >
                {
                  (filteredCoinList && filteredCoinList.length) ? filteredCoinList.map((coin) => {
                    return (
                      <div
                        key={coin.id}
                        id={coin.id}
                        onClick={handleDropdownItemClick(coin)}
                        style={{
                          textAlign: 'left center',
                          cursor: 'pointer',
                          height: 42,
                          paddingleft: 16,
                          paddingTop: 8,
                          paddingBottom: 8,
                          lineHeight: 2
                        }}
                      >
                        {coin.name}
                      </div>
                    )
                  }) : (
                    <div style={{ padding: 16 }}>There are no results.</div>
                  )
                }
              </div>
              )
          }
        </div>
      </div>
  )
}

Autocomplete.propTypes = {
  list: pt.array,
  getCointMarketChart: pt.func.isRequired
}

Autocomplete.defaultProps = {
  list: null
}

export default Autocomplete
