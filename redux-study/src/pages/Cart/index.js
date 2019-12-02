import React from 'react';

import { Container, ProductTable, Total } from './styles';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th> PRODUTOR</th>

            <th> QTD</th>
            <th> SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/chuteira-futsal-nike-phantom-vision-academy-df-ic/83/HZM-0008-283/HZM-0008-283_detalhe2.jpg?ims=326x"
                alt="tenis"
              />
            </td>
            <td>
              <strong> Teniszin irado</strong>
              <span> R$ 100,00</span>
            </td>

            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#9e9e" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#9e9e" />
                </button>
              </div>
            </td>

            <td>
              <strong> R$ 200,00</strong>
            </td>
            <td>
              <MdDelete size={20} color="#9e9e" />
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button"> Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong> R$ 2000,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
