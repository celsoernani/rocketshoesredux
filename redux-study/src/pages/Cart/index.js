import React from 'react';
import { connect } from 'react-redux';
import { formatPrice } from './../../util/format';

import { Container, ProductTable, Total } from './styles';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import * as CartActions from './../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';
function Cart({ cart, removeFromCart, updateAmount, total }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }
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
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.name} />
              </td>
              <td>
                <strong> {product.name}</strong>
                <span>{product.priceFormatted}</span>
              </td>

              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#9e9e" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#9e9e" />
                  </button>
                </div>
              </td>

              <td>
                <strong> {product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="#9e9e" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button"> Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong> {total} </strong>
        </Total>
      </footer>
    </Container>
  );
}
const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
