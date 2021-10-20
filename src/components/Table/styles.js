import styled from 'styled-components'

const lightGrey = '#EDEEF0'
const grey = '#F2F2F2'

const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 32px;
`

const TableWrapper = styled.div`
  overflow: scroll;
  max-width: 1128px;
`

const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid ${lightGrey};
  border-bottom: 1px solid ${lightGrey};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 600px;
  }
`

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${lightGrey};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${props => props.isEven ? 'white' : grey};

  @media (max-width: 768px) {
    width: 600px;
  }
`

const TableCol = styled.div`
  flex: 0.2;
  text-align: ${props => props.textAlign || 'left'};
`

export { Title, TableWrapper, TableHead, TableRow, TableCol }