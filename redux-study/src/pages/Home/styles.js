import styled from 'styled-components';
import { darken } from 'polished';
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 15px;

    img {
      align-self: center;
      max-width: 150px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 20px;
    }

    > span {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 2px;
    }

    button {
      background: #9e9e;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      transition: 0.2s;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.1, '#9e9e')};
      }

      div {
        display: flex;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }
    }

    span {
      flex: 1;
      font-weight: bold;
    }
  }
`;
