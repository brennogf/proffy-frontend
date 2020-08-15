import styled from 'styled-components';

import { TextareaBlock } from '~/components/Textarea/styles';
import { InputBlock } from '~/components/Input/styles';
import { HeaderContent } from '~/components/PageHeader/styles';
import { SelectBlock } from '~/components/Select/styles';

export const PageTeacherForm = styled.div`
  width: 100vw;
  height: 100vh;

  main {
    background: var(--color-box-base);
    width: 100%;
    max-width: 74em;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2em;
    padding-top: 6.4rem;
    overflow: hidden;
  }

  main fieldset {
    border: 0;
    padding: 0 2.4rem;
  }

  main fieldset + fieldset {
    margin-top: 6.4rem;
  }

  main fieldset legend {
    font: 700 2.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }

  main fieldset legend button {
    background: none;
    border: 0;
    color: var(--color-secundary);
    font: 700 1.6rem Archivo;
    cursor: pointer;
    transition: color 0.2s;
  }

  main fieldset legend button:hover {
    color: var(--color-secundary-dark);
  }

  main
    fieldset
    ${InputBlock}
    + ${TextareaBlock},
    main
    fieldset
    ${SelectBlock}
    + ${InputBlock} {
    margin-top: 2.4rem;
  }

  main label {
    color: var(--color-text-complement);
  }

  main footer {
    padding: 4rem 2.4rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 6.4rem;
  }

  main footer p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
  }

  main footer p img {
    margin-right: 2rem;
  }

  main footer button {
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

  main footer button:hover {
    background: var(--color-secundary-dark);
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    main {
      width: 50%;
    }

    ${HeaderContent} {
      margin-bottom: 0;
    }

    main fieldset {
      padding: 0 6.4rem;
    }

    main footer {
      padding: 4rem 6.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    main footer p {
      justify-content: space-between;
    }

    main footer button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;

export const ScheduleItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: 1.6rem;

  ${InputBlock} {
    margin-top: 0 !important;
  }
`;
