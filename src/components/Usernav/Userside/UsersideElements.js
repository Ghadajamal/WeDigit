import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';
import { FaRegUserCircle, FaTimes } from 'react-icons/fa';


export const SidebarContainer  = styled.aside`
position: fixed;
z-index:999;
width: 100%;
height: 100%;
background:linear-gradient(
    108deg,
        rgb(168, 224, 205) 0%,
        rgb(238, 196, 242) 100% 
);
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;  
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')}; 
top: ${({ isOpen }) => (isOpen ? '0' : '-100%' )};
`;
export const CloseIcon = styled(FaTimes)`
color: #403b3e;
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color: #fff;
`;

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
top: 1.5rem;
text-align: left;
grid-template-rows: repeat(1, 30px);


@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}
`;
export const FaUserCircle= styled(FaRegUserCircle)`
color: #403b3e ;
`;

export const IconWrapper= styled.div`
position: absolute;
top: 2.5rem;
left: 2rem;
background: transparent;
font-size: 5rem;
cursor: pointer;
outline: none;
`;


export const SidebarLink = styled(LinkS)`
display: flex;
align-items: left;
justify-content: left;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out; 
color: #403b3e;
cursor: pointer;

&:hover {
    color: #eb63d8;
    transition: 0.2s ease-in-out;
}
`;

export const h2 =styled.h2`
font-weight: bold;
color: #eb63d8;
`;