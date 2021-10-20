import styled from 'styled-components'

const Container = styled.div`
  width: 40%;
  position: relative;
  margin-bottom: 24px;
`

const Input = styled.input`
  width: 100%;
  height: 25px;
  border: 1px solid #494949;
  margin-top: 12px;
`

const Dropdown = styled.div`
  width: 100%;
  height: 240px;
  overflow: scroll;
  position: absolute;
  border: 1px solid #EDEEF0;
  background-color: white;
`

const DropdownItem = styled.div`
  text-align: left;
  cursor: pointer;
  height: 42px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  line-height: 2;

  &:hover {
    background-color: #EDEEF0;
  }
`

export { Container, Input, Dropdown, DropdownItem }