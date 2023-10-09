
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Cabecalho, Card,Tags,Tag,CardContainer } from './AppStyle';
import logo from './img/logo.png'
import estrela from './img/estrela.png'
import Footer from './Footer';

import Contato from './components/pages/Contato';
import { GlobalCss } from './styles';

function App() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [erro, setErro] = useState(null);
  const [carrinho, setCarrinho] = useState([]);

  const concluir = () => {
    
    setCarrinho([]);
  }

  const adicionarAoCarrinho = (prato) => {
    const itemExistente = carrinho.find((item) => item.id === prato.id);
    if (itemExistente) {
      const novoCarrinho = carrinho.map((item) =>
        item.id === prato.id ? { ...item, quantidade: item.quantidade + 1 } : item
      );alert('Este item já está no carrinho.')
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...prato, quantidade: 1 }]);
    }
  };

  const calcularValorTotal = () => {
    const total = carrinho.reduce((acc, item) => {
      return acc + item.preco * item.quantidade;
    }, 0);
  
    return total.toFixed(2); // Arredonda o total para duas casas decimais
  };

  const removerDoCarrinho = (pratoParaRemover) => {
    const novoCarrinho = carrinho.filter((prato) => prato.id !== pratoParaRemover.id);
    setCarrinho(novoCarrinho);
  };

  useEffect(() => {
    const url = 'https://fake-api-tau.vercel.app/api/efood/restaurantes';

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível obter os dados dos restaurantes');
        }
        return response.json();
      })
      .then((data) => {
        setRestaurantes(data);
      })
      .catch((error) => {
        setErro(error.message);
      });
  }, []);

  return (
    <Router>
      <GlobalCss/>
      <Routes>
        
        <Route path="/" element={<div>
          
          <Cabecalho>
          <div>
          <img src={logo} alt='logo'/> 
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1></div>
          </Cabecalho>
          {erro ? (
            <p>Ocorreu um erro: {erro}</p>
          ) : (
            <CardContainer className="Container">
              {restaurantes.map((restaurante) => (
                <Card key={restaurante.id}>
                 <div className='CardImg'>
                    <Tags>
                    <Tag style={{ display: restaurante.destacado ? 'block' : 'none' }}>Destaque da semana </Tag>
                    <Tag>{restaurante.tipo} </Tag>
                    </Tags>
                    <img src={restaurante.capa} alt={restaurante.titulo} />
                 </div>
                  <div className='CardInfo'>
                  <div className='NomeNota'>
                  <h3>{restaurante.titulo}</h3>
                  <span>{restaurante.avaliacao} <img src={estrela} alt='estrela'/> </span>
                  </div>
                  <p>{restaurante.descricao}</p>
                  
                  <Link className='button' to={`/contato/${restaurante.id}`} state={{ restaurante }}>
                  Saiba mais
                  </Link>
                  </div>
                </Card>
              ))}
               
            </CardContainer>
            
          )}
          
        </div>} />
        <Route path="/contato/:restauranteId" element={<Contato concluir={concluir} carrinho={carrinho} setCarrinho={setCarrinho} adicionarAoCarrinho={adicionarAoCarrinho} removerDoCarrinho={removerDoCarrinho} calcularValorTotal={calcularValorTotal} />} />
       
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;