import React from 'react'
import pt from 'prop-types'
import { debounce } from 'lodash'

import { Container, Label, Input, Dropdown, DropdownItem } from './styles'

const Autocomplete = ({ list, getCointMarketChart }) => {
  const dropdownRef = React.useRef()
  const [searchValue, setSearchValue] = React.useState('')
  const [displayDropdown, setDisplayDropdown] = React.useState()
  const [filteredCoinList, setFilteredCoinList] = React.useState()

  const updateSearchValue = (value) => {
    setSearchValue(value)
  }

  const handleSearchInputChange = React.useCallback((e) => {
    updateSearchValue(e.target.value)
    setDisplayDropdown(true)
  }, [])

  const handleDropdownItemClick = (coin) => () => {
    updateSearchValue(coin.name)
    setDisplayDropdown(false)
    getCointMarketChart(coin)
  }

  const handleClickAwayDropdown = (e) => {
    if (dropdownRef && dropdownRef.current && !dropdownRef.current.contains(e.target) ) {
      setDisplayDropdown(false)
    }
  }

  const debouncedResults = React.useMemo(() => {
    return debounce(handleSearchInputChange, 300)
  }, [handleSearchInputChange])

  React.useEffect(() => {
    window.addEventListener('mousedown', handleClickAwayDropdown)
    return () => {
      window.removeEventListener('mousedown', handleClickAwayDropdown)
      debouncedResults.cancel()
    }
  }, [debouncedResults])

  React.useMemo(() => {
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
        <div>
          <Label htmlFor="search">Coin</Label>
          <span style={{ fontSize: 14, fontStyle: 'italic' }}>Please select a coin using the dropdown field</span>
        </div>
        <div>
          <Input
            type="text"
            id="search"
            name="search"
            onChange={debouncedResults}
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
