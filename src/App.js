import React from 'react'
import moment from 'moment'

import Table from './components/Table'

import './App.css';
import fetchPriceHistory from './utils/fetchPriceHistory'

const App = () =>  {
  const [priceHistory, setPriceHistory] = React.useState()
  const [iso, setIso] = React.useState('ETH')
  const currentDate = moment().format('YYYY-DD-MM')
  console.log({ currentDate })
  // 2021-10-12T01:34
  const [startDate, setStartDate] = React.useState(currentDate)
  const [endDate, setEndDate] = React.useState(currentDate)

  const getPriceHistory = async () => {
    const _startDate = `${moment(startDate).format('YYYY-MM-DD')}T01:34`
    const _endDate = `${moment(endDate).format('YYYY-MM-DD')}T01:34`
    console.log(moment(endDate).format('YYYY-MM-DD'))
    const prices = await fetchPriceHistory(iso, _startDate, _endDate)
    setPriceHistory(prices)
    console.log(prices)
  }

  const updateIsoValue = (e) => {
    setIso(e.target.value)
  }

  const updateStartDate = (e) => {
    setStartDate(e.target.value)
  }

  const updateEndDate = (e) => {
    setEndDate(e.target.value)
  }

  return (
    <div className="App">
      <label htmlFor="iso">ISO</label>
      <input type="text" id="iso" onChange={updateIsoValue} value={iso} />

      <label htmlFor="startDate">Start date:</label>
      <input type="date" id="startDate" name="startDate" value={startDate} onChange={updateStartDate} />

      <label htmlFor="endDate">End date:</label>
      <input type="date" id="endDate" name="endDate" value={endDate} onChange={updateEndDate} />

      <button onClick={getPriceHistory}>Get history</button>
    </div>
  );
}

export default App;
