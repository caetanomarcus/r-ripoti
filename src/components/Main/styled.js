import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    margin-top: 25vh;
    justify-content: center;
    flex-wrap: wrap;
    background: #740001;
`

export const Card = styled.div `
    width: 210px;
    height: 400px;
    border: solid 1px white;
    border-radius: 4px;
    margin: 1rem 1.75rem;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(70deg, #AE0001, #EEBA30);
    box-shadow: rgba(0,0,0, 0.4) 2px 2px 2px;
    color: #fff;
`
export const CardBack = styled.div `
    width: 140px;
    height: 250px;
    margin: 1rem 2rem;
    background: black;
    border: double 4px blue;
`

export const Name = styled.h2 `
    font-size: 1.2rem;
    text-align: center;
    margin: 10px;
`

export const Avatar = styled.img `
    width:100%;
    height: 75%;
    border: 3px white double;
    border-radius: 3px;
    margin-bottom: 1rem;
`
