
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Formulariostyle } from './FormularioEntregaStyle';
import { Carrinho } from './ContatoStyle';
import FormularioCartao from './FormularioPagamento';
import axios from 'axios';
import InputMask from 'react-input-mask'; // Importe o componente InputMask

const Formulario = ({ concluir2, concluir, exibirPedido, voltarcarrinho, abrirFormulariocartao, exibirFormularioCartão, valorTotal, voltarEntrega, abrirPedido }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const formik = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .required('O nome é obrigatório'),
      endereco: Yup.string()
        .required('O endereço é obrigatório'),
      cidade: Yup.string()
        .required('A cidade é obrigatória'),
      cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .required('O CEP é obrigatório'),
      numero: Yup.string()
        .required('O número é obrigatório'),
      complemento: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log('Dados submetidos:', values);
      handleSubmitFormulario(values);
    },
  });

  const handleBlur = (e) => {
    const fieldName = e.target.name;
    if (!formik.errors[fieldName]) {
      setIsFormValid(Object.keys(formik.errors).length === 0);
    }
  };

  const handleSubmitFormulario = (values) => {
    if (isFormValid) {
      enviarDadosParaAPIFalsa(values, 'formularios');
    } else {
      alert('Por favor, preencha todos os campos obrigatórios antes de continuar.');
    }
  };

  const enviarDadosParaAPIFalsa = async (dados, endpoint) => {
    try {
      const response = await axios.post(`http://localhost:3001/${endpoint}`, dados);
      console.log('Dados enviados com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <>
      <Formulariostyle onSubmit={formik.handleSubmit}>
        <h2>Entrega</h2>
        <div>
          <label htmlFor="nome">Quem irá receber</label>
          <input
            type="text"
            id="nome"
            name="nome"
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur(e);
              handleBlur(e);
            }}
            value={formik.values.nome}
          />
          {formik.touched.nome && formik.errors.nome ? (
            <div className="erro">{formik.errors.nome}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur(e);
              handleBlur(e);
            }}
            value={formik.values.endereco}
          />
          {formik.touched.endereco && formik.errors.endereco ? (
            <div className="erro">{formik.errors.endereco}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur(e);
              handleBlur(e);
            }}
            value={formik.values.cidade}
          />
          {formik.touched.cidade && formik.errors.cidade ? (
            <div className="erro">{formik.errors.cidade}</div>
          ) : null}
        </div>
        <div className='cepNumero'>
          <div>
            <label htmlFor="cep">CEP</label>
            <InputMask
            placeholder='00000-000'
              mask="99999-999"
              maskChar=""
              type="text"
              id="cep"
              name="cep"
              onChange={formik.handleChange}
              onBlur={(e) => {
                formik.handleBlur(e);
                handleBlur(e);
              }}
              value={formik.values.cep}
            />
            {formik.touched.cep && formik.errors.cep ? (
              <div className="erro">{formik.errors.cep}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="numero">Número</label>
            <InputMask
            placeholder='0000'
              mask="99999"
              maskChar=""
              type="text"
              id="numero"
              name="numero"
              onChange={formik.handleChange}
              onBlur={(e) => {
                formik.handleBlur(e);
                handleBlur(e);
              }}
              value={formik.values.numero}
            />
            {formik.touched.numero && formik.errors.numero ? (
              <div className="erro">{formik.errors.numero}</div>
            ) : null}
          </div>
        </div>
        <div>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.complemento}
          />
        </div>
        <button onClick={abrirFormulariocartao} className='ButtonForm2' type="submit" disabled={!isFormValid}>Continuar com pagamento</button>
        <button onClick={voltarcarrinho} className='ButtonForm3' >Voltar para o carrinho</button>
      </Formulariostyle>
      <Carrinho style={{ display: exibirFormularioCartão ? 'block' : 'none' }}>
        <div>
          <h2>Entrega</h2>
          <FormularioCartao concluir2={concluir2} concluir={concluir} exibirPedido={exibirPedido} abrirPedido={abrirPedido} voltarEntrega={voltarEntrega} valorTotal={valorTotal} />
        </div>
      </Carrinho>
    </>
  );
};

export default Formulario;
