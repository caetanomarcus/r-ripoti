import React from 'react';
import * as S from './styled';
import { Link } from 'gatsby';


const Header = () => {
    return (
        (
            <S.Container>
                <S.Title>Réri Poti</S.Title>
                <S.ListMenu>
                    <li><Link to='/'>início</Link></li>
                    <li><Link to='/sobre'>sobre</Link></li>
                    <li><Link to='/contato'>contato</Link></li>
                    <li><Link to="/localizacao">localização</Link></li>
                </S.ListMenu>
            </S.Container>
        )
    )
}

export default Header;