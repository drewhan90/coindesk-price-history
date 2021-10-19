import moment from 'moment'

const Table = ({ data }) => {
  if (!data) return null
  debugger
  return (
    <div>
      <div>
        <div>October 18, 2021</div>
        <div>Monday</div>
        <div>CA$3.42</div>
        <div>CA$0.61</div>
        <div>21.9%</div>
      </div>
      {
        data.entries.length && data.entries.map((item) => {
          const date = moment(item[0]).format('MMMM DD, YYYY')
          const price = item[1]
          return (
            <div>
              <div>{date}</div>
              <div>{price}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Table
