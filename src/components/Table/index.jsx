import moment from 'moment'
import pt from 'prop-types'

const Table = ({ data }) => {
  if (!data) return <div>Please select a coin.</div>
  return (
    <div>
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '2px solid #EDEEF0',
          borderBottom: '1px solid #EDEEF0',
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,
          paddingRight: 16,
          fontWeight: 'bold'
        }}
      >
        <div style={{ flex: 0.2 }}>Date</div>
        <div style={{ flex: 0.2 }}>Day of the week</div>
        <div style={{ flex: 0.2 }}>Price</div>
        <div style={{ flex: 0.2, textAlign: 'right' }}>Volume (24H)</div>
        <div style={{ flex: 0.2, textAlign: 'right' }}>Market cap</div>
      </div>
      <div>
        {
          Object.keys(data).map((date, i) => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderTop: '1px solid #EDEEF0',
                  paddingTop: 12,
                  paddingBottom: 12,
                  backgroundColor: i % 2 ? 'white' : '#F2F2F2',
                  paddingLeft: 16,
                  paddingRight: 16
                }}
              >
                <div style={{ flex: 0.2, textAlign: 'left' }}>{moment.unix(date / 1000).format('MMMM DD, YYYY')}</div>
                <div style={{ flex: 0.2, textAlign: 'left' }}>{moment.unix(date / 1000).format('dddd')}</div>
                <div style={{ flex: 0.2, textAlign: 'left' }}>{`CA$${data[date].price}`}</div>
                <div style={{ flex: 0.2, textAlign: 'right' }}>{`CA$${data[date].total_volume}`}</div>
                <div style={{ flex: 0.2, textAlign: 'right' }}>{`CA$${data[date].market_cap}`}</div>
              </div>
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
