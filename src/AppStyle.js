import styled from "styled-components";
import Vetor from "./img/Vector.png"
import { cores } from "./styles";

 export const Cabecalho = styled.div`

background-image: url(${Vetor});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
height:384px;
width:100vw;
padding:40px;

div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap: 138px;

    h1{
        font-size:36px;
        font-weight:bold;
        width:539px;
        text-align:center;
    }
}
`

export const CardContainer = styled.ul`
display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding: 80px 0px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;

  }

`


export const Card = styled.li`

  width: 472px;
  height: 398px;
  background-color:${cores.branco};
  border: solid 2px ${cores.vermelho};


  @media (max-width: 767px) {
    width: 100%;
 

  }



  .CardImg{
    width:100%;
    height:217px;
    position: relative;

    img{
        width:100%;
        height:217px;
        object-fit: cover;
    }
  }

  .CardInfo{
    padding:8px;


    .NomeNota{
        display:flex;
        justify-content: space-between;
        font-size: 18px;
        font-weight:700;

        span{  
            display:flex;
            align-items:center;
            gap:8px;
        }
        
    }

    p{
        font-size: 14px;
        font-weight:400;
        padding: 16px 0;
    }

    .button{
        padding: 6px;
  font-size:14px;
  font-weight:700;
  background-color:${cores.vermelho};
  color:${cores.bege};
  

    }


  }




`
export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display:flex;
  gap:8px;
  
`
export const Tag = styled.div`
  padding: 6px;
  font-size:12px;
  font-weight:700;
  background-color:${cores.vermelho};
  color:${cores.bege}
  
`
