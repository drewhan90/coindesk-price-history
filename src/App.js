import React from 'react'

import Table from './components/Table'

import './App.css';
import fetchCoinList from './utils/fetchCoinList'

const App = () =>  {
  const [coinList, setCoinList] = React.useState()

  const getCoinList = async () => {
    const _coinList = await fetchCoinList()
    setCoinList(_coinList)
    console.log(_coinList)
  }

  React.useEffect(() => {
    if (!coinList) {
      getCoinList()
    }
  }, [coinList])
  
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
