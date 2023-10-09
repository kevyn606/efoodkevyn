import styled from "styled-components";
import { cores } from "../../styles";

export const Pedidostyle = styled.div`
 color:${cores.laranja};

 h2{
  font-size:16px;
  font-weight:700;
 }

 p{
  padding-top:16px;
  font-size:14px;
  font-weight:400;
 }

 .ButtonForm4{
  background-color:${cores.laranja};
  color:${cores.vermelho};
  padding:4px;
  text-align:center;
  font-size:14px;
  font-weight:700px;
  width:100%;
  border:none;
  cursor: pointer;
  margin-top:24px;

}
`