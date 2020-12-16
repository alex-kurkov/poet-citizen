import React from 'react';
import {
  Switch, Redirect, Route,
} from 'react-router-dom';
import styled from 'styled-components/macro';
import AppContext from '../contexts/AppContext';
import Header from './Header';
import Info from './Info';
import Lead from './Lead';
import config from '../config';

const Page = styled.div`
  min-width: 1440px;
  margin: 0 auto;
  color: #E5E5E5;
  padding: 0;

`;

const App = () => {
  console.log(config);
  return (
    <AppContext.Provider value={config}>
      <Page>
        <Header/>
        <Lead>
          ЗДЕСЬ БУДЕТ КАРУСЕЛЬ
        </Lead>
        <Info>
          <Switch>
            <Route path="/main">
              основной контент
            </Route>
            <Route path="/call">
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
        </Info>
      </Page>
    </AppContext.Provider>
  );
};
export default App;
