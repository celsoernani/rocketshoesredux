import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: #9e9e;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      padding: 10px;
      text-transform: uppercase;
      margin-top: auto;
      transition: 0.2s;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.1, '#9e9e')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;

    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }
  strong {
    color: #444;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 19px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 20px;
    margin-left: 5px;
  }
`;
