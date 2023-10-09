import styled from "styled-components";
import { cores } from "../../styles";

export const FormularioPagamentostyle  = styled.form`
color:${cores.laranja};

.erro{
    color:${cores.laranja};

}

.cepNumero{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:34px;
}

.numeroCvv{
  display:grid;
  grid-template-columns:228px auto;
  gap:30px;
}
.MesAno{
  display:grid;
  grid-template-columns:155px auto;
  gap:30px;
}


label{
    color:${cores.laranja};
    display:block;
    font-weight:700;
    font-size:14px;
    padding:8px 0;
}

input{
    padding:8px;
    background-color:${cores.laranja};
    color:black;
    width:100%;
    border:none;
    font-weight:700;
    font-size:14px;
}

.ButtonForm2{
  background-color:${cores.laranja};
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
  background-color:${cores.laranja};
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