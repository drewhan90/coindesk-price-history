import React from 'react'
import pt from 'prop-types'

import { Container, Input, Dropdown, DropdownItem } from './styles'

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
    <Container>
        <label htmlFor="search" style={{ marginRight: 12 }}>Coin</label>
        <div>
          <Input
            type="text"
            id="search"
            name="search"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
          {
            displayDropdown && (
              <Dropdown ref={dropdownRef}>
                {
                  (filteredCoinList && filteredCoinList.length) ? filteredCoinList.map((coin) => {
                    return (
                      <DropdownItem
                        key={coin.id}
                        id={coin.id}
                        onClick={handleDropdownItemClick(coin)}
                      >
                        {coin.name}
                      </DropdownItem>
                    )
                  }) : (
                    <div style={{ padding: 16 }}>There are no results.</div>
                  )
                }
              </Dropdown>
              )
          }
        </div>
      </Container>
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
