import React, { useEffect, useState } from 'react';
import {
  Switch, Redirect, Route, /* useRouteMatch */
} from 'react-router-dom';
import styled from 'styled-components/macro';
import AppContext from '../contexts/AppContext';
import Header from './Header';
import Info from './Info';
import Lead from './Lead';
import config from '../config';
import InitLead from './InitLead';
import Call from './Call';

const Page = styled.div`
  min-width: 1440px;
  margin: 0 auto;
  color: #E5E5E5;
  padding: 0;

`;

const App = () => {
/*   const { path, url } = useRouteMatch(); */

  const [poem, setPoem] = useState('')
  const [userPoemZero, setUserPoemZero] = useState('');
  const [userPoemOne, setUserPoemOne] = useState('')
  const [userPoemTwo, setUserPoemTwo] = useState('')
  const [callTexts, setCallTexts] = useState({}); 
  const [joinTexts, setJoinTexts] = useState({}); 
  const [complainTexts, setComplainTexts] = useState({}); 
  const [exploreTexts, setExploreTexts] = useState({}); 

  useEffect(() => {
    setCallTexts(config.leadTexts.routeCall);
    setComplainTexts(config.leadTexts.routeComplain);
    setJoinTexts(config.leadTexts.routeJoin);
    setExploreTexts(config.leadTexts.routeExplore);
  }, [])

  useEffect(() => {
    setPoem(`${userPoemZero}\n${userPoemOne}\n${userPoemTwo}`);

  }, [userPoemZero, userPoemOne, userPoemTwo])

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
              <InitLead leadTexts={callTexts} poem={poem} />
              <Call poem={poem} setUserPoemZero={setUserPoemZero} setUserPoemOne={setUserPoemOne} setUserPoemTwo={setUserPoemTwo}>

              </Call>
            </Route>
            <Route path="/explore">
              <InitLead leadTexts={exploreTexts} poem="" />
              контент оценки других заявок
            </Route>
            <Route path="/complain">
              <InitLead leadTexts={complainTexts} poem={poem} />
              контент жалобы
            </Route>
            <Route path="/join">
              <InitLead leadTexts={joinTexts} poem={poem} />
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
