import React, { useState, useEffect } from 'react';
import { Pedidostyle } from './PedidoStyle';
import { v4 as uuidv4 } from 'uuid'; // Importe a função uuidv4

const Pedido = ({ concluir, concluir2 }) => {
  const [pedidoId, setPedidoId] = useState('');

  useEffect(() => {
    // Gere um novo ID de pedido quando o componente for montado
    const newPedidoId = uuidv4();
    setPedidoId(newPedidoId);
  }, []);

  return (
    <Pedidostyle>
      <h2>Pedido realizado - Pedido #{pedidoId}</h2>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
      </p>

      <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>

      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>

      <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
      <button onClick={() => { concluir(); concluir2(); }} className='ButtonForm4'>Concluir</button>
    </Pedidostyle>
  );
};

export default Pedido;
