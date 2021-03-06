import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import api from './../../services/api';
import { ProductList } from './styles';
import { formatPrice } from './../../util/format';
import * as CartActions from './../../store/modules/cart/actions';
export default function Home ({}) {
    const [products, setProducts ] = useState([])
    const amount = useSelector(state =>
      state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {})
    );

  const dispatch = useDispatch();

  function handleAddProduct (id) {
    dispatch(CartActions.addToCartRequest(id));
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
