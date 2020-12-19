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
  const [leadPoemBlockVisibility, setLeadPoemBlockVisibility] = useState(true);
  const [leadTitle, setLeadTitle] = useState('')
  const [leadHelperText, setLeadHelperText] = useState('')
  const [leadInfoText, setLeadInfoText] = useState('')
  const [leadNav, setLeadNav] = useState('')

  useEffect(() => {
    setPoem(`${userPoemZero}\n${userPoemOne}\n${userPoemTwo}`);

  }, [userPoemZero, userPoemOne, userPoemTwo])

  return (
    <AppContext.Provider value={config}>
      <Page>
        <Header/>
          <Switch>
            <Route path="/main">
              <Lead texts={config.leadTexts.routeMain}/>
              <Info />
            </Route>
            <Route path="/call">
              <InitLead 
                poem={poem}
                leadPoemBlockVisibility={leadPoemBlockVisibility}
                leadTexts={
                  {
                    leadTitle, 
                    leadHelperText, 
                    leadInfoText, 
                    leadNav
                  }
                }
                />
              <Call
                poem={poem}
                setUserPoemZero={setUserPoemZero} 
                setUserPoemOne={setUserPoemOne} 
                setUserPoemTwo={setUserPoemTwo} 
                setLeadTitle={setLeadTitle}
                setLeadHelperText={setLeadHelperText}
                setLeadInfoText={setLeadInfoText}
                setLeadNav={setLeadNav}
                setLeadPoemBlockVisibility={setLeadPoemBlockVisibility}
                />
            </Route>

            <Route path="/explore">
              <InitLead 
                poem=""
                leadTexts={
                  {
                    leadTitle, 
                    leadHelperText, 
                    leadInfoText, 
                    leadNav
                  }
                } />
              контент оценки других заявок
            </Route>

            <Route path="/complain">
              <InitLead 
                poem={poem}
                leadTexts={
                  {
                    leadTitle, 
                    leadHelperText, 
                    leadInfoText, 
                    leadNav
                  }
                } />
            </Route>

            <Route path="/join">
              <InitLead poem={poem}
                leadTexts={
                  {
                    leadTitle, 
                    leadHelperText, 
                    leadInfoText, 
                    leadNav
                  }
                } />
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
