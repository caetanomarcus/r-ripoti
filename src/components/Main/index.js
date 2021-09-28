import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import * as S from './styled';


const Main = () => {
    const [listaPersonagens, setListaPersonages] = useState([])

    const getData = async () => {
        const info = await axios.get(' http://hp-api.herokuapp.com/api/characters');

        const completeInfo = info.data.map(item => {
            return {...item, slug: item.name.toLowerCase().replace(' ', '-')}
        })
       
        setListaPersonages(completeInfo)
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <S.Container>
            {listaPersonagens.map((item, index) => {
               return (
                <S.Card key={index}>
                    <S.Name>{item.name}</S.Name>
                    <S.Avatar src={item.image} />
                </S.Card>
            )
            })}
        </S.Container>
    )
}

export default Main;