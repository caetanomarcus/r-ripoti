import * as React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
  * {
    padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

`

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  )
}

export default IndexPage
