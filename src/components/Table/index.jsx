import moment from 'moment'
import pt from 'prop-types'

import { TableHead, TableRow, TableCol } from './styles'

const Table = ({ data }) => {
  if (!data) return <div>Please select a coin.</div>
  return (
    <div>
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
                <TableCol>{`CA$${data[date].price}`}</TableCol>
                <TableCol textAlign="right">{`CA$${data[date].total_volume}`}</TableCol>
                <TableCol textAlign="right">{`CA$${data[date].market_cap}`}</TableCol>
              </TableRow>
            )
          })
        }
      </div>
    </div>
  )
}

Table.propTypes = {
  data: pt.object
}

Table.defaultProps = {
  data: null
}

export default Table
