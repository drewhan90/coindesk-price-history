import styled from 'styled-components'

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  position: relative;
  margin-bottom: 24px;
`

const Label = styled.label`
  margin-right: 16px;
  font-weight: 700;
  font-size: 16px;
`

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  height: 36px;
  border: 1px solid #494949;
  margin-top: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
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
  height: 56px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  line-height: 2;

  &:hover {
    background-color: #EDEEF0;
  }
`

export { Container, Label, Input, Dropdown, DropdownItem }