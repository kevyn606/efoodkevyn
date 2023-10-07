import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {FormularioPagamentostyle} from './FormularioPagamentoStyle';
import {Carrinho} from './ContatoStyle';
import Pedido from './Pedido';
import axios from 'axios';

const enviarDadosParaAPIFalsa = async (dados, endpoint) => {
    try {
      const response = await axios.post(`http://localhost:3001/${endpoint}`, dados);
      console.log('Dados enviados com sucesso:', response.data);
      // Realize qualquer ação necessária após o envio bem-sucedido, como redirecionar ou atualizar a interface do usuário.
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };
  
  const handleSubmitFormularioCartao = (values) => {
    enviarDadosParaAPIFalsa(values, 'formulariosCartao');
  };


const FormularioCartao = ({concluir,exibirPedido,valorTotal, voltarEntrega,abrirPedido}) => {
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
        .matches(/^\d{16}$/, 'Número de cartão inválido')
        .required('O número do cartão é obrigatório'),
      cvv: Yup.string()
        .matches(/^\d{3}$/, 'CVV inválido')
        .required('O CVV é obrigatório'),
      mesVencimento: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês de vencimento inválido')
        .required('O mês de vencimento é obrigatório'),
      anoVencimento: Yup.string()
        .matches(/^\d{4}$/, 'Ano de vencimento inválido')
        .required('O ano de vencimento é obrigatório'),
    }),
    onSubmit: (values) => {
      console.log('Dados do cartão submetidos:', values);
      // Aqui você pode enviar os dados para o servidor ou fazer o que desejar com eles.
    },
  });

  return (
    <>
    <FormularioPagamentostyle onSubmit={formik.handleSubmit}>
        <p>Pagamento - Valor a pagar R$ {valorTotal}</p>
      <div>
        <label htmlFor="nomeCartao">Nome no Cartão:</label>
        <input
          type="text"
          id="nomeCartao"
          name="nomeCartao"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nomeCartao}
        />
        {formik.touched.nomeCartao && formik.errors.nomeCartao ? (
          <div className="erro">{formik.errors.nomeCartao}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="numeroCartao">Número do Cartão:</label>
        <input
          type="text"
          id="numeroCartao"
          name="numeroCartao"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.numeroCartao}
        />
        {formik.touched.numeroCartao && formik.errors.numeroCartao ? (
          <div className="erro">{formik.errors.numeroCartao}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cvv}
        />
        {formik.touched.cvv && formik.errors.cvv ? (
          <div className="erro">{formik.errors.cvv}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="mesVencimento">Mês de Vencimento:</label>
        <input
          type="text"
          id="mesVencimento"
          name="mesVencimento"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mesVencimento}
        />
        {formik.touched.mesVencimento && formik.errors.mesVencimento ? (
          <div className="erro">{formik.errors.mesVencimento}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="anoVencimento">Ano de Vencimento:</label>
        <input
          type="text"
          id="anoVencimento"
          name="anoVencimento"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.anoVencimento}
        />
        {formik.touched.anoVencimento && formik.errors.anoVencimento ? (
          <div className="erro">{formik.errors.anoVencimento}</div>
        ) : null}
      </div>
      <button onClick={abrirPedido}  className='ButtonForm2' type="submit">Finalizar pagamento</button>
      <button onClick={voltarEntrega} className='ButtonForm3'>Voltar para edição de endereço</button>
    </FormularioPagamentostyle>
    <Carrinho style={{ display: exibirPedido ? 'block' : 'none' }}>
    <div>
      <h2>Entrega</h2>
      <Pedido concluir={concluir} voltarEntrega={voltarEntrega} valorTotal={valorTotal} />
    </div>
    </Carrinho>
    </>
    
    
  );
};

export default FormularioCartao;
