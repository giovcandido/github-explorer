import styled, {css} from 'styled-components';
import {shade} from 'polished';

interface FormAdditionalProps{
  hasError: boolean;
};

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormAdditionalProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input{
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder{
      color: #a8a8b3;
    }
  }

  button{
    width: 210px;
    height: 70px;
    background-color: #04D361;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover{
      background-color: ${shade(0.2, '#04D361')}; 
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a{
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a{
      margin-top: 16px;
    }
    
    &:hover{
      transform: translateX(20px);
    }

    img{
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div{
      margin: 0 16px;
      flex: 1;

      strong{
        font-size: 20px;
        color: #3d4d4d;
      }

      p{
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg{
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  margin-top: 8px;
  display: block;
  color: #c53030;
`;