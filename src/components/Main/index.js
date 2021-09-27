import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './styled';


const Main = () => {
    const [listaPersonagens, setListaPersonages] = useState([])

    const getData = async () => {
        const info = await axios.get(' http://hp-api.herokuapp.com/api/characters');
       
        setListaPersonages(info.data)
    };

    useEffect(() => {
        getData()
    }, [])


    return (
        <S.Container>
            {listaPersonagens.map((item, index) => {
               return (
                <S.Card  key={index}>
                    <S.Name>{item.name}</S.Name>
                    <S.Avatar src={item.image} />
                    <p>{index}</p>
                </S.Card>
            )
            })}
        </S.Container>
    )
}

export default Main;