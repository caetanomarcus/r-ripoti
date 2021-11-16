
import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { Helmet } from "react-helmet";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
`
const Container = styled.section`
   
`
const BoxParagraph = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    p{
        font-size: 1.25em;   
    }
    button{
        width: 5vw;
        border: none;
        font-size: 1em;
    }
`

const ContainerBox = styled.div`
    height: 100vh;
    background-color: brown;
`
const BoxImg = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     height: 80vh;
     width: 100%;
     padding-top: 10%;
     h1{
         padding-bottom: 1%;
     }
`
const Image = styled.img`
    width: 200px;
    height: 250px;
`
const InfoTemplate = ({ pageContext }) => {

    return (
        <Container>
            <GlobalStyle />
            <Helmet>
                <title>{pageContext.name}</title>
            </Helmet>
            <ContainerBox>
                <BoxImg>
                    <h1>{pageContext.name}</h1>
                    <Image src={pageContext.image} />
                    <BoxParagraph>
                        <p><b>espécie:</b> {pageContext.species}</p>
                        <p><b>gênero:</b> {pageContext.gender}</p>
                        <p><b>casa:</b> {pageContext.house || 'sem-teto'}</p>
                        <p><b>data de nascimento:</b> {pageContext.dateOfBirth}</p>
                        <p><b>ano de nascimento:</b> {pageContext.yearOfBirth}</p>
                        <p><b>ancestralidade:</b> {pageContext.ancestry || 'sem parentes'}</p>
                        <h3>{pageContext.slug}</h3>
                        <button onClick={() => navigate('/')} >Voltar</button>
                    </BoxParagraph>
                </BoxImg>
            </ContainerBox>
        </Container>
    )
}

export default InfoTemplate;