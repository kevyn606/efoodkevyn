import React from 'react';
import {Pedidostyle} from './PedidoStyle'
const Pedido = ({concluir}) => {
    return(
        <Pedidostyle>
            Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido. Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição. Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            <button onClick={concluir} className='ButtonForm4'>Concluir</button>
        </Pedidostyle>

    )
}
export default Pedido