import  { createGlobalStyle } from 'styled-components'
export const cores = {
  branco: '#FFFFFF',
  vermelho: '#E66767',
  laranja: '#FFEBD9',
  bege: '#FFF8F1'
  
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
list-style: none;
text-decoration:none;
}

body {
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  width: 100vw ;
  overflow-x: hidden; /* Oculta a barra de rolagem horizontal se o conteúdo for muito largo */
  

}

.Container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;}

`
