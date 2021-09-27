import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
`

export const Card = styled.div `
    width: 140px;
    height: 250px;
    border: solid 1px black;
    border-radius: 4px;
    margin: 1rem 2rem;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(145deg, black, gray);
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
`

export const Avatar = styled.img `
    width:100px;
    height: 100px;
    border: 3px white double;
    border-radius: 3px;
`
