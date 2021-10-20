import moment from 'moment'
import pt from 'prop-types'

import { Title, TableHead, TableRow, TableCol } from './styles'

const Table = ({ data, coinName }) => {
  if (!data) return <div>Please select a coin.</div>

  const cadCurrencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
  })

  return (
    <div style={{ marginTop: 42 }}>
      {coinName && (
        <Title>
          7 day price history of
          <span style={{ color: '#F2931A' }}> {coinName} </span> 
          to CAD
        </Title>)
      }
      <TableHead>
        <TableCol>Date</TableCol>
        <TableCol>Day of the week</TableCol>
        <TableCol>Price</TableCol>
        <TableCol textAlign="right">Volume (24H)</TableCol>
        <TableCol textAlign="right">Market cap</TableCol>
      </TableHead>
      <div>
        {
          Object.keys(data).map((date, i) => {
            return (
              <TableRow>
                <TableCol>{moment.unix(date / 1000).format('MMMM DD, YYYY')}</TableCol>
                <TableCol>{moment.unix(date / 1000).format('dddd')}</TableCol>
                <TableCol>{cadCurrencyFormatter.format(data[date].price)}</TableCol>
                <TableCol textAlign="right">{cadCurrencyFormatter.format(data[date].total_volume)}</TableCol>
                <TableCol textAlign="right">{cadCurrencyFormatter.format(data[date].market_cap)}</TableCol>
              </TableRow>
            )
          })
        }
      </div>
    </div>
  )
}

Table.propTypes = {
  data: pt.object,
  coinName: pt.string
}

Table.defaultProps = {
  data: null,
  coinName: ''
}

export default Table
