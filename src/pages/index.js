import * as React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>
          Réri Pobre
        </title>
      </Helmet>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  )
}

export default IndexPage
