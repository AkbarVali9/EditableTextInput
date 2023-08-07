import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  height: 200px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 24px;
  font-family: 'Roboto';
  margin-bottom: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Paragraph = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  padding-right: 10px;
`

export const Input = styled.input`
  height: 30px;
  width: 100%;
  outline: none;
  margin-right: 20px;
  padding: 10px;
`

export const Button = styled.button`
  height: 30px;
  width: 55px;
  cursor: pointer;
  background-color: #d946ef;
  color: #ffffff;
  border-width: 0px;
  border-radius: 5px;
  font-size: 13px;
  font-family: 'Roboto';
`
