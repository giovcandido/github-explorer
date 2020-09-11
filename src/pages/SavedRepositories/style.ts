import styled from 'styled-components';

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
