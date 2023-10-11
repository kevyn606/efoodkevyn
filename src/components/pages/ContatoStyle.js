import styled from "styled-components";
import Vetor from "../../img/Vector.png"
import { cores } from "../../styles";

export const CabecalhoContato = styled.div`
background-image: url(${Vetor});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
height:186px;
width:100vw;
padding:40px;

.Container{
  @media (max-width: 767px) {
    display:flex;
    flex-direction:column;
    gap:10px;
    
  }

}



p{
  cursor: pointer;
}

div{
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-weight:900;
    font-size:18px;
    color:${cores.vermelho};
    
    .link{
    text-decoration: none;
    color:${cores.vermelho};

    }
}

`
export const ImgContato = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  .fundoPreto {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  .NomeContato {
    position: absolute;
    z-index: 2;
    top: 50%; /* Centraliza verticalmente */
  left: 33%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%);
    color: ${cores.branco};
    display:flex;
    flex-direction:column;
    gap:156px;


    h2{
      font-size:32px;
      font-weight:100;

    }
    h1{
      font-size:32px;
      font-weight:900;

    }
    
  }
`;

export const CardContato = styled.div`
width:320px;
height:auto;
background-color: ${cores.vermelho};
padding: 8px;
color:${cores.laranja};
display:flex;
flex-direction:column;
justify-content:space-between;


.cardImg{
  width:304px;
  height:167px;
  

  img{
        width:100%;
        height:167px;
        object-fit: cover;
    }
}

h3{
  font-size:16px;
  font-weight: 900;
  padding-top:8px;
}

p{
  font-size:14px;
  font-weight: 400;
  padding: 8px 0;
}

button{
  
  background-color:${cores.laranja};
  color:${cores.vermelho};
  padding:4px;
  font-size:14px;
  font-weight:700;
  width:100%;
  border:none;
  cursor:pointer;

}

`

export const CardContainer = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
gap:32px;
padding-bottom:120px;
padding-top:56px;

@media (max-width: 767px) {
    grid-template-columns: 1fr;
    

  }


`

export const Modal = styled.div`
width:100vw;
height:100vh;
background-color:rgba(0, 0, 0, 0.7); 
position: fixed;
top: 0;
left: 0;
z-index:4;


`

export const CardModal = styled.div`
position:absolute;
width:1024px;
height:344px;
background-color:${cores.vermelho};
color:${cores.branco};
padding:32px;
display:grid;
grid-template-columns: 280px auto 10px;
gap:24px;
z-index:5;
top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Centraliza o modal em relação ao seu tamanho */


  span{
    cursor: pointer;
    font-size:30px;
    font-weight:100;
    
  }


.cardModalImg{
  width:280px;
  height:280px;
  

  img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
}

.infosCardModal{
  display:flex;
  flex-direction:column;
  gap:16px;
}

button{
  
  background-color:${cores.laranja};
  color:${cores.vermelho};
  padding:4px;
  font-size:14px;
  font-weight:700;
  width:33%;
  border:none;
  cursor:pointer;

}
`
export const Carrinho = styled.div`
background-color:${cores.vermelho};
width:360px;
height:100vh;
padding:8px;
position:absolute;
top:0;

right:0;
z-index:12;


.valorTotal{
  color:${cores.laranja};
  font-size:14px;
  font-weight:700px;
  display:flex;
  justify-content:space-between;
  padding-top:40px;
}

.ButtonForm{
  background-color:${cores.laranja};
  color:${cores.vermelho};
  padding:4px;
  text-align:center;
  font-size:14px;
  font-weight:700;
  width:100%;
  border:none;
  cursor: pointer;
  margin-top:20px;

}

`

export const CarrinhoCard = styled.div`
width:344px;
height:100px;
background-color:${cores.laranja};
color:${cores.vermelho};
display:grid;
grid-template-columns: 80px auto 10px;
gap:8px;
padding:8px;
margin-top:16px;

h3{
  font-weight:900;
  font-size:18px;

}

p{
  font-weight:400;
  font-size:14px;
  padding-top:16px;

}


.lixo{
  display:flex;
  justify-content:end;
  align-items:end;

}

.CarrinhoImg{
  width:80px;
  height:80px;
  

  img{
        width:100%;
        height:100%;
        object-fit: cover;
    }

}

`
