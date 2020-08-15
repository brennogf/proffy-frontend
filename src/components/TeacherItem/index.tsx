import React from 'react';

import whatsappIcon from '~/assets/images/icons/whatsapp.svg';

import { Item } from './styles';
import api from '~/services/api';

export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  user: {
    name: string;
    avatar: string;
    bio: string;
    whatsapp: string;
  };
}

interface ITeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('/connections', {
      user_id: teacher.id,
    });
  }

  return (
    <Item>
      <header>
        <img src={teacher.user.avatar} alt={teacher.user.name} />
        <div>
          <strong>{teacher.user.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.user.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost},00</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.user.whatsapp}?text=Eu%20tenho%20interesse%20%20na%20sua%20aula.`}
          target="_blank"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </Item>
  );
};

export default TeacherItem;
