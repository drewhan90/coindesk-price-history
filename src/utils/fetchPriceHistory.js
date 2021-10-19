
const fetchPriceHistory =  async (iso, startDate, endDate) => {
  try {
    const response = await fetch(`https://www.coindesk.com/pf/api/v3/content/fetch/chart-api?query={"end_date":"${endDate}","iso":"${iso}","ohlc":false,"start_date":"${startDate}"}&d=96&_website=coindesk`)

    const data = await response.json()
    return data
  } catch (e) {
    console.log('---- ERROR FETCHING PRICE HISTORY ----', e)
    return e
  }
}

export default fetchPriceHistory
