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
import Complain from './Complain';
import Join from './Join';
import ExploreLead from './ExploreLead';
import OtherInitiative from './OtherInitiative';
import Loader from './Loader';
import ProtectedRoute from './ProtectedRoute';
import Authorize from './Authorize';
import { login, register, checkToken } from '../utils/auth';
import api from '../utils/api';

const Page = styled.div`
  min-width: 1440px;
  margin: 0 auto;
  color: #E5E5E5;
  padding: 0;
`;

const App = () => {
  /*   const { path, url } = useRouteMatch(); */

  const [loggedIn, setLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [poem, setPoem] = useState('');
  const [userPoemZero, setUserPoemZero] = useState('');
  const [userPoemOne, setUserPoemOne] = useState('');
  const [userPoemTwo, setUserPoemTwo] = useState('');
  const [leadPoemBlockVisibility, setLeadPoemBlockVisibility] = useState(true);
  const [leadTitle, setLeadTitle] = useState('');
  const [leadHelperText, setLeadHelperText] = useState('');
  const [leadInfoText, setLeadInfoText] = useState('');
  const [leadNav, setLeadNav] = useState('');
  const [cards, setCards] = useState([]);
  const [isLoaderVisible, setLoaderVisibible] = useState(false);

  const checkUserToken = (jwt) => {
    checkToken(jwt)
      .then(((res) => {
        setLoggedIn(true);
      }))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setLoaderVisibible(true);
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      checkUserToken(jwt);
      api.getUserData(jwt)
        .then((user) => {
          setCurrentUser(user);
          console.log(user);
        })
        .catch((e) => console.log(e))
    }
    api.getCards()
      .then((serverCards) => setCards(serverCards))
      .catch((e) => console.log(e));
    setLoaderVisibible(false);
  }, []);

  useEffect(() => {
    setPoem(`${userPoemZero}\n${userPoemOne}\n${userPoemTwo}`);
  }, [userPoemZero, userPoemOne, userPoemTwo]);

  const onProfileBtnClick = () => {
    setLoaderVisibible(true);
    setTimeout(() => {
      setLoggedIn(!loggedIn);
      setLoaderVisibible(false);
    }, 3000)
  };

  return (
    <AppContext.Provider value={config}>
      <Page>
        <Header onProfileBtnClick={onProfileBtnClick} />
          <Switch>
            <Route path="/main">
              <Lead texts={config.leadTexts.routeMain}/>
              <Info />
            </Route>
            <Route exact path='/authorize'>
              <Authorize authenticate={onProfileBtnClick}/>
            </Route>
            <Route path="/call">
              {loggedIn 
                ? (
                <> 
                <InitLead
                poem={poem}
                leadPoemBlockVisibility={leadPoemBlockVisibility}
                leadTexts={
                  {
                    leadTitle,
                    leadHelperText,
                    leadInfoText,
                    leadNav,
                  }
                }
                />
              <Call
                poem={poem}
                route="/call"
                setUserPoemZero={setUserPoemZero}
                setUserPoemOne={setUserPoemOne}
                setUserPoemTwo={setUserPoemTwo}
                setLeadTitle={setLeadTitle}
                setLeadHelperText={setLeadHelperText}
                setLeadInfoText={setLeadInfoText}
                setLeadNav={setLeadNav}
                setLeadPoemBlockVisibility={setLeadPoemBlockVisibility}
                />
                </>
                )
              : <Redirect to="/authorize" />}
            </Route>

            <Route path="/explore">
            <ExploreLead
                leadTexts={
                  {
                    leadTitle: config.leadTexts.routeExplore.title,
                    leadHelperText: config.leadTexts.routeExplore.helper,
                    leadInfoText: config.leadTexts.routeExplore.info,
                    leadNav: config.leadTexts.routeExplore.nav,
                  }
                }
                />
                <OtherInitiative cards={cards} />
            </Route>

            <Route path="/complain">
              <InitLead
                  poem={poem}
                  leadPoemBlockVisibility={leadPoemBlockVisibility}
                  leadTexts={
                    {
                      leadTitle,
                      leadHelperText,
                      leadInfoText,
                      leadNav,
                    }
                  }
                  />
                <Complain
                  poem={poem}
                  route="/complain"
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

            <Route path="/join">
            <InitLead
                  poem={poem}
                  leadPoemBlockVisibility={leadPoemBlockVisibility}
                  leadTexts={
                    {
                      leadTitle,
                      leadHelperText,
                      leadInfoText,
                      leadNav,
                    }
                  }
                  />
                <Join
                  poem={poem}
                  route="/join"
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

          <Route path="/">
            <Redirect to="/main" />
          </Route>

        </Switch>
        {isLoaderVisible && (<Loader />)}
      </Page>
    </AppContext.Provider>
  );
};
export default App;
