import styled from 'styled-components';
import {Link as LinkR} from  'react-router-dom';
//import {Link as LinkS} from 'react-scroll'

export const Nav=styled.nav `
//background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent' )};
height: 80px;
margin-top: -10px;
display: flex;
justify-content: center ;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
background: #fff;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`;
export const NavbarContainer= styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding:0 24px ;
max-width: 1100px;
`;

export const Navlogo = styled(LinkR)`
justify-self: flex-start;
cursor: pointer;
font-size:1.5rem;
display:flex;
align-items: center;
margin-left: 24px;
font-weight:bold;
text-decoration:none;
color: #eb63d8;

`;

export const MobileIcon= styled.div`
display:none;

@media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`; 
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;
    margin-left: 500px;

    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const NavItem = styled.li`
height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
color: #eb63d8 ;
`;
export const NavLinks = styled.a`
    color: #fff ;
    font-size: 25px;
    cursor: pointer;
`;

