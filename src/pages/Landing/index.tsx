import React, { useState, useEffect } from 'react';

import logoImg from '~/assets/images/logo.svg';
import landingImg from '~/assets/images/landing.svg';
import studyIcon from '~/assets/images/icons/study.svg';
import giveClassesIcon from '~/assets/images/icons/give-classes.svg';
import purpleHeartIcon from '~/assets/images/icons/purple-heart.svg';
import api from '~/services/api';

import {
  ButtonsContainer,
  HeroImage,
  LogoContainer,
  PageLanding,
  PageLandingContent,
  TotalConnections,
  LinkButton,
} from './styles';

export default function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function checkConnections() {
      const response = await api.get('/connections');
      setTotalConnections(response.data.total);
    }
    checkConnections();
  }, []);

  return (
    <PageLanding>
      <PageLandingContent>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt="Plataforma de estudos" />

        <ButtonsContainer>
          <LinkButton study to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </LinkButton>

          <LinkButton giveClasses to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </LinkButton>
        </ButtonsContainer>

        <TotalConnections>
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
}
