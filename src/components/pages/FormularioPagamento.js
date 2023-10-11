import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormularioPagamentostyle } from './FormularioPagamentoStyle';
import { Carrinho } from './ContatoStyle';
import Pedido from './Pedido';
import axios from 'axios';
import InputMask from 'react-input-mask';

const enviarDadosParaAPIFalsa = async (dados, endpoint) => {
  try {
    const response = await axios.post(`http://localhost:3001/${endpoint}`, dados);
    console.log('Dados enviados com sucesso:', response.data);
    // Realize qualquer ação necessária após o envio bem-sucedido, como redirecionar ou atualizar a interface do usuário.
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
  }
};

const FormularioCartao = ({ concluir2, concluir, exibirPedido, valorTotal, voltarEntrega, abrirPedido }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const formik = useFormik({
    initialValues: {
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: '',
    },
    validationSchema: Yup.object({
      nomeCartao: Yup.string()
        .required('O nome no cartão é obrigatório'),
      numeroCartao: Yup.string()
        
      .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, 'Cartão inválido')
        .required('O número do cartão é obrigatório'),
      cvv: Yup.string()
        .matches(/^\d{3}$/, 'CVV inválido')
        .required('O CVV é obrigatório'),
  
      mesVencimento: Yup.string()
        .matches(/^\d{2}$/, 'Mês de vencimento inválido')
        .required('O mês de vencimento é obrigatório'),
      anoVencimento: Yup.string()
        .matches(/^\d{2}$/, 'Ano de vencimento inválido')
        .required('O ano de vencimento é obrigatório'),
    }),
    onSubmit: (values) => {
      console.log('Dados do cartão submetidos:', values);
      handleSubmitFormularioCartao(values);
    },
  });

  const handleBlur = (e) => {
    const fieldName = e.target.name;
    if (!formik.errors[fieldName]) {
      setIsFormValid(Object.keys(formik.errors).length === 0);
    }
  };

  const handleSubmitFormularioCartao = (values) => {
    if (isFormValid) {
      enviarDadosParaAPIFalsa(values, 'formulariosCartao');
    } else {
      alert('Por favor, preencha todos os campos obrigatórios antes de continuar.');
    }
  };

  return (
    <>
      <FormularioPagamentostyle onSubmit={formik.handleSubmit}>
        <p>Pagamento - Valor a pagar R$ {valorTotal}</p>
        <div>
          <label htmlFor="nomeCartao">Nome no cartão</label>
          <input
            type="text"
            id="nomeCartao"
            name="nomeCartao"
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.handleBlur(e);
              handleBlur(e);
            }}
            value={formik.values.nomeCartao}
          />
          {formik.touched.nomeCartao && formik.errors.nomeCartao ? (
            <div className="erro">{formik.errors.nomeCartao}</div>
          ) : null}
        </div>
        <div className='numeroCvv'>
          <div>
            <label htmlFor="numeroCartao">Número do cartão</label>
            <InputMask
            placeholder='0000 0000 0000 0000'
            mask="9999-9999-9999-9999"
            maskChar=""
            
              type="text"
              id="numeroCartao"
              name="numeroCartao"
              onChange={formik.handleChange}
              onBlur={(e) => {
                formik.handleBlur(e);
                handleBlur(e);
              }}
              value={formik.values.numeroCartao}
            />
            {formik.touched.numeroCartao && formik.errors.numeroCartao ? (
              <div className="erro">{formik.errors.numeroCartao}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <InputMask
             placeholder='000'
              type="text"
              mask="999"
              maskChar=""
              id="cvv"
              name="cvv"
              onChange={formik.handleChange}
              onBlur={(e) => {
                formik.handleBlur(e);
                handleBlur(e);
              }}
              value={formik.values.cvv}
            />
            {formik.touched.cvv && formik.errors.cvv ? (
              <div className="erro">{formik.errors.cvv}</div>
            ) : null}
          </div>
        </div>
        <div className='MesAno'>
          <div>
            <label htmlFor="mesVencimento">Mês de Vencimento</label>
            <InputMask
            placeholder='00'
              type="text"
              mask="99"
              maskChar=""
              id="mesVencimento"
              name="mesVencimento"
              onChange={formik.handleChange}
              onBlur={(e) => {
                formik.handleBlur(e);
                handleBlur(e);
              }}
              value={formik.values.mesVencimento}
            />
            {formik.touched.mesVencimento && formik.errors.mesVencimento ? (
              <div className="erro">{formik.errors.mesVencimento}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="anoVencimento">Ano de Vencimento</label>
            <InputMask
            placeholder='00'
              type="text"
              id="anoVencimento"
              mask="99"
              maskChar=""
              name="anoVencimento"
              onChange={formik.handleChange}
              onBlur={(e) => {
                formik.handleBlur(e);
                handleBlur(e);
              }}
              value={formik.values.anoVencimento}
            />
            {formik.touched.anoVencimento && formik.errors.anoVencimento ? (
              <div className="erro">{formik.errors.anoVencimento}</div>
            ) : null}
          </div>
        </div>
        <button onClick={abrirPedido} className='ButtonForm2' type="submit" disabled={!isFormValid}>Finalizar pagamento</button>
        <button onClick={voltarEntrega} className='ButtonForm3'>Voltar para edição de endereço</button>
      </FormularioPagamentostyle>
      <Carrinho style={{ display: exibirPedido ? 'block' : 'none' }}>
        <div>
          <h2>Entrega</h2>
          <Pedido concluir={concluir} concluir2={concluir2} voltarEntrega={voltarEntrega} valorTotal={valorTotal} />
        </div>
      </Carrinho>
    </>
  );
};

export default FormularioCartao;

