import React, { InputHTMLAttributes } from 'react';

import { InputBlock } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<IInputProps> = ({ name, label, ...rest }) => {
  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </InputBlock>
  );
};

export default Input;
