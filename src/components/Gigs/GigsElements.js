import styled from "styled-components";

export const RecContainer = styled.div`
height: 1000px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px) {
  height: 1500px;

}
`;

export const RecWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px ;
padding: 0 50px;

@media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 250px) {
  grid-template-columns: 1fr ;
  padding: 0 20px;
}
`;

export const RecCard = styled.div`
background: linear-gradient(
    108deg,
        rgb(168, 224, 205) 0%,
        rgb(238, 196, 242) 100% 
);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
height:380px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0, 0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
`;


export const RecIcon =styled.img`
height: 160px;
width:230px;
margin-top: 30px;
margin-bottom: 10px;
`;

export const RecH1 =styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and  (max-width: 480px) {
  font-size: 2rem;
}
`;

export const RecH2 =styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`;

export const RecP = styled.p`
font-size: 1rem;
text-align: center;
`;

export const Favorites = styled.div`
position: absolute;
bottom: 1rem;
left: 1rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
 `;
export const MobileIcon = styled.div`
position: absolute;
top: 1rem;
left: 1rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
 `;
export const BarIcon = styled.div`
position: absolute;
top: 1rem;
right: 1rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
 `;