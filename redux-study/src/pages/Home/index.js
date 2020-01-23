import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import api from './../../services/api';
import { ProductList } from './styles';
import { formatPrice } from './../../util/format';
import { bindActionCreators } from 'redux';
import * as CartActions from './../../store/modules/cart/actions';
function Home ({amount, addToCartRequest}) {
    const [products, setProducts ] = useState([])

  function handleAddProduct (id) {
    addToCartRequest(id);
  };

  useEffect(()=> {
      async function loadProducts(){
        const response = await api.get('products');
        const data = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));
        setProducts(data)
      }
      loadProducts();
  }, [])

  return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => handleAddProduct(product.id)}
            >
              <div>
                <MdShoppingCart size={16} color="#fff" />
                {amount[product.id] || 0}
              </div>
              <span> ADICIONAR AO CARRINHO </span>
            </button>
          </li>
        ))}
      </ProductList>
    );
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
