import styled from 'styled-components';

import { InputBlock } from '~/components/Input/styles';
import { SelectBlock } from '~/components/Select/styles';

export const PageTeacherList = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  main {
    margin: 3.2rem auto;
    width: 90%;
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }

  button{
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;
  }

  button:hover{
    background: var(--color-secundary-dark);
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;

    ${InputBlock} + ${InputBlock},
    ${SelectBlock} + ${SelectBlock} {
      margin-top: 0;
    }
  }
`;

export const ExistsProffys = styled.div`
  margin-top: 10rem;
  text-align: center;
`;
