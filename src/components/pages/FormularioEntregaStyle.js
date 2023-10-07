import styled from "styled-components";
import { cores } from "../../styles";

export const Formulariostyle  = styled.form`

.erro{
    color:${cores.bege};

}

.cepNumero{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:34px;
}

label{
    color:${cores.bege};
    display:block;
    font-weight:700;
    font-size:14px;
    padding:8px 0;
}

input{
    padding:8px;
    background-color:${cores.bege};
    color:black;
    width:100%;
    border:none;
    font-weight:700;
    font-size:14px;
}

.ButtonForm2{
  background-color:${cores.bege};
  color:${cores.vermelho};
  padding:4px;
  text-align:center;
  font-size:14px;
  font-weight:700px;
  width:100%;
  border:none;
  cursor: pointer;
  margin-top:20px;
}

.ButtonForm3{
  background-color:${cores.bege};
  color:${cores.vermelho};
  padding:4px;
  text-align:center;
  font-size:14px;
  font-weight:700px;
  width:100%;
  border:none;
  cursor: pointer;
  margin-top:8px;

}

`