import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #D3A625;
    background-attachment: fixed;
    box-shadow: inset 2px 2px 2px 4px #740001;
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 25vh;
`

export const ListMenu = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30vw;
    list-style: none;
    margin: 2rem;

`;

export const Title = styled.h1 `
    margin-top: 1.5rem;
    text-align: center;
`