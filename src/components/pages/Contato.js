
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Formulario from './FormularioEntrega';

import {CabecalhoContato, ImgContato,CardContato,CardContainer,CardModal,Modal, CarrinhoCard ,Carrinho} from './ContatoStyle';
import logo from '../../img/logo.png'
import lixo from '../../img/lixo.png'
import close from '../../img/close.png'
import { Link } from 'react-router-dom';


function Contato({ concluir,setCarrinho,carrinho, adicionarAoCarrinho, removerDoCarrinho,calcularValorTotal }) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [exibirFormularioCartão, setExibirFormularioCartão] = useState(false);
  const [exibirPedido, setExibirPedido] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);
  const [pratoSelecionado, setPratoSelecionado] = useState(null);
  const [exibirCarrinho, setexibirCarrinho] = useState(false);
  const [exibirItemCarrinho, setExibirItemCarrinho] = useState(false);
  const { state } = useLocation();


  

  const abrirFormulario = () => {
    setExibirFormulario(true);
    setExibirPedido(false);
    setExibirFormularioCartão(false);
    
  };

  const abrirFormulariocartao = () => {
    setExibirFormularioCartão(true);
    
  };

  const abrirPedido = () => {
    setExibirPedido(true);
    
  };

  

  const handleSubmitEntrega = (values) => {
    console.log('Valores do formulário de entrega:', values);
    setExibirFormulario(false);
  };

  const abrirItemCarrinho = () => {
    setExibirItemCarrinho(true);
  }

  const voltarcarrinho = () => {
    setExibirItemCarrinho(true);
    setExibirFormulario(false);
  }

  const voltarEntrega= () => {
    setExibirItemCarrinho(false);
    setExibirFormulario(true);
    setExibirFormularioCartão(false);
  }


  const abrirCarrinho = () => {
    setexibirCarrinho(true);
    setexibirCarrinho(true);
    setExibirFormulario(false);
    setExibirItemCarrinho(true);
  }

  const abrirCarrinho2 = () => {
    if(carrinho.length === 0){
      alert("O carrinho está vazio, por favor adicione algum produto!")
    }else{
    setexibirCarrinho(true);
    setexibirCarrinho(true);
    setExibirFormulario(false);
    setExibirItemCarrinho(true);}
  }

  function formatarPreco(pratoSelecionado) {
    if (pratoSelecionado && pratoSelecionado.preco) {
      const valor = pratoSelecionado.preco;
      const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      return valorFormatado;
    } else {
      return ''; // Retorna uma string vazia se pratoSelecionado ou pratoSelecionado.preco não estiverem definidos.
    }
  }
   

  function formatarPrecoItem(item) {
    if (item && item.preco) {
      const valor = item.preco;
      const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      return valorFormatado;
    } else {
      return ''; // Retorna uma string vazia se item ou item.preco não estiverem definidos.
    }
  }

  
  
  


  const fecharCarrinho = () => {
    setexibirCarrinho(false)
  }


  const abrirModal = (prato) => {
    setPratoSelecionado(prato);
    setExibirModal(true);
  }

  const fecharModal = () => {
    setExibirModal(false);
  };

  const restaurante = state?.restaurante;


  const valorTotal = calcularValorTotal();

  const handleAdicionarAoCarrinho = (prato) => {
    adicionarAoCarrinho(prato);
    fecharModal();
    abrirCarrinho();
    abrirItemCarrinho();
    
  };
  const concluir2 = () => {
    setExibirFormularioCartão(true);
    setexibirCarrinho(false);
    setExibirFormulario(false);
    setExibirItemCarrinho(false);
    
  }

  const handleRemoverDoCarrinho = (prato) => {
    removerDoCarrinho(prato);
  };

  if (!restaurante) {
    return <div>Selecione um restaurante para ver os pratos.</div>;
  }

  




  return (
    <>

    
      <div>
      <CabecalhoContato >
        <div className='Container'>
      <Link className='link' to={"/"} >Restaurantes</Link>
      <img src={logo} alt='logo'/> 
      <p onClick={abrirCarrinho2}>{carrinho.length} produto(s) no carrinho</p>
      </div>
      </CabecalhoContato>



      <ImgContato>
      <div className='fundoPreto'></div>
      <img src={restaurante.capa} alt={restaurante.titulo} />
      <div  className='NomeContato'>
        <h2>{restaurante.tipo}</h2>
        <h1>{restaurante.titulo}</h1>
      </div>
      </ImgContato>

        
        <Carrinho style={{ display: exibirCarrinho ? 'block' : 'none' }}>
            <Modal onClick={fecharCarrinho}/>
              <Carrinho style={{ display: exibirItemCarrinho ? 'block' : 'none' }}>
                  {carrinho.map((item) => (
                      <CarrinhoCard  key={item.id}>
                        <div className='CarrinhoImg'>
                          <img src={item.foto} alt={item.nome} />
                        </div>
                        <div>
                          <h3>{item.nome}</h3>
                          <p>Preço: {formatarPrecoItem(item)}</p>
                        </div>
                        <div className='lixo'>
                          <img  src={lixo} alt='lixo' onClick={() => handleRemoverDoCarrinho(item)}/>
                        </div>
                      </CarrinhoCard >
                  ))}
                  <div className='valorTotal'>
                    <p>Valor total</p>
                    <p>{valorTotal}</p>
                  </div>
                  <button className='ButtonForm' onClick={abrirFormulario}>Continuar com entrega</button>
              </Carrinho>
              <Carrinho style={{ display: exibirFormulario ? 'block' : 'none' }}>
                                <div>
                                  
                                  <Formulario concluir2={concluir2} concluir={concluir} exibirPedido={exibirPedido} abrirPedido={abrirPedido} voltarEntrega={voltarEntrega} voltarcarrinho={voltarcarrinho} abrirFormulariocartao={abrirFormulariocartao} exibirFormularioCartão={exibirFormularioCartão} valorTotal={valorTotal} onSubmit={handleSubmitEntrega} />
                                </div>
              </Carrinho>
              
              
        </Carrinho>
      </div>

      <div>
        <CardContainer className='Container'>
          {restaurante.cardapio.map((prato) => (
            <CardContato key={prato.id}>
              <div className='cardImg'>
              <img src={prato.foto} alt={prato.nome} />
              </div>
              <h3>{prato.nome}</h3>
              <p>{prato.descricao}</p>
              <button onClick={() => abrirModal(prato)}>Adicionar ao Carrinho</button>
            </CardContato>
          ))}
        </CardContainer>
      </div>
      <div style={{ display: exibirModal ? 'block' : 'none' }}>
      {pratoSelecionado && (
        <>
            <Modal onClick={fecharModal}/>
            <CardModal  key={pratoSelecionado.id}>
              <div className='cardModalImg'>
              <img src={pratoSelecionado.foto} alt={pratoSelecionado.nome} />
              </div>
              <div className='infosCardModal'>
              <h3>{pratoSelecionado.nome}</h3>
              <p>{pratoSelecionado.descricao}</p>
              <p>Serve: de {pratoSelecionado.porcao}</p>
              <button onClick={() => handleAdicionarAoCarrinho(pratoSelecionado)}>Adicionar ao Carrinho - {formatarPreco(pratoSelecionado)}</button>
              
              </div>
              <div>
              <img onClick={fecharModal} className='fechar' src={close} alt='fechar'/>
              </div>
            </CardModal>
            </>
            
          )}
      </div>
    </>
  );
}

export default Contato;
