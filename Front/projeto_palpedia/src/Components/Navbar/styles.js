import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { gray20, white } from '../../styles/colors';

export const Supergraphic = styled.div``;

export const Void = styled.div``;

export const Row = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr 2fr;
    justify-content: space-between;
    @media (max-width: 512px) {
        grid-template-columns: 2fr 1fr 2fr;
    }
`;

export const Links = styled.div`
    align-self: center;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-right: 4em;
`;

export const NavMenu = styled.div`
    display: inline-flex;
    align-self: center;
`;

export const Nav = styled.p`
    align-self: flex-end;
    &:hover{
        text-decoration: underline;
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: ${white};
    display: flex;
    align-self: flex-end;
    align-items: self-end;
`

export const Centered = styled.div`
    align-self: center;
    display: block;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const MenuLinks = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-inline: 3.5rem;
    color: ${white};
    width: 90%;
    z-index: 3;
    transition: all 3s;
    padding: 1.5em;
    border-radius: 0 0 10px 10px;
    background-color: rgb(64, 64, 64);
`

export const Icon = styled.img`
    width: 35px;
    position: relative;
    top: -5px;
`;

export const Span = styled.span`
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`