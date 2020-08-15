import React, { useState, FormEvent } from 'react';

import PageHeader from '~/components/PageHeader';
import TeacherItem, { Teacher } from '~/components/TeacherItem';
import Input from '~/components/Input';
import { PageTeacherList, SearchTeachers, ExistsProffys } from './styles';
import Select from '~/components/Select';
import api from '~/services/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekday] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setTeachers(response.data);
  }

  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <form onSubmit={searchTeachers}>
          <SearchTeachers>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={[
                {
                  value: 'Artes',
                  label: 'Artes',
                },
                {
                  value: 'Biologia',
                  label: 'Biologia',
                },
                {
                  value: 'Ciências',
                  label: 'Ciências',
                },
              ]}
            />
            <Select
              name="week_day"
              label="Dia da semana"
              value={week_day}
              onChange={(e) => setWeekday(e.target.value)}
              options={[
                {
                  value: '0',
                  label: 'Domingo',
                },
                {
                  value: '1',
                  label: 'Segunda-feira',
                },
                {
                  value: '2',
                  label: 'Terça-feira',
                },
                {
                  value: '3',
                  label: 'Quarta-feira',
                },
                {
                  value: '4',
                  label: 'Quinta-feira',
                },
                {
                  value: '5',
                  label: 'Sexta-feira',
                },
                {
                  value: '6',
                  label: 'Sábado',
                },
              ]}
            />
            <Input
              type="time"
              name="time"
              label="Hora"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <button type="submit">Buscar</button>
          </SearchTeachers>
        </form>
      </PageHeader>

      <main>
        {teachers.length === 0 && (
          <ExistsProffys>
            Nenhum proffy encontrado, tente novamente.
          </ExistsProffys>
        )}
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </PageTeacherList>
  );
}

export default TeacherList;
