import styled from 'styled-components'

export const NotFoundViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: pink;
  min-height: 100vh;
`

export const Heading = styled.h1`
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`

export const Text = styled.p`
  color: #94a3b8;
  font-size: 12px;
  text-align: center;
  width: 300px;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
    width: 500px;
  }
`

export const GoBackButton = styled.button`
  background-color: pink;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    font-size: 14px;
    padding: 12px 24px;
  }
`
