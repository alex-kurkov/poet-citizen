import React, { useState } from 'react';
import {
  Switch, Redirect, Route,
} from 'react-router-dom';
import styled from 'styled-components/macro';
import AppContext from '../contexts/AppContext';
import Header from './Header';
import Info from './Info';
import Lead from './Lead';
import config from '../config';
import InitLead from './InitLead';

const Page = styled.div`
  min-width: 1440px;
  margin: 0 auto;
  color: #E5E5E5;
  padding: 0;

`;

const App = () => {
  console.log(config);
  // eslint-disable-next-line 
  const [leadTexts, setLeadTexts] = useState({
    title: 'Выберите организацию в которую хотите обратиться',
    helper: 'Тут будет отображаться Ваше обращение',
    info: 'Создавая обращение в организацию, Вы делаете мир лучше! Сообщите нам о наболевшем, чтобы мы решили эту проблему. Помните, обращение формируется словами классиков.',
    nav: 'гражданин-поэт/',
  })
  // eslint-disable-next-line 
  const [poem, setPoem] = useState(`“Граждане,
  у меня
  огромная радость.
  Разулыбьте
  сочувственные лица.
  Мне
  обязательно
  поделиться надо,
  стихами
  хотя бы
  поделиться...”
  у меня
  огромная радость.
  Разулыбьте
  сочувственные лица.
  Мне
  обязательно
  поделиться надо,
  стихами
  хотя бы
  поделиться...”
  `)

  return (
    <AppContext.Provider value={config}>
      <Page>
        <Header/>
          <Switch>
            <Route path="/main">
              <Lead />
              <Info>
              основной контент
              </Info>
            </Route>
            <Route path="/call">
              <InitLead leadTexts={leadTexts} poem={poem} />
              контент подачи инициативы
            </Route>
            <Route path="/explore">
              контент оценки других заявок
            </Route>
            <Route path="/complain">
              контент жалобы
            </Route>
            <Route path="/join">
              контент присоединения
            </Route>
            <Route path="/">
              <Redirect to="/main" />
            </Route>
          </Switch>
      </Page>
    </AppContext.Provider>
  );
};
export default App;
