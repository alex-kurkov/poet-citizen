import React, { useEffect, useState } from 'react';
import {
  Switch, Redirect, Route, useHistory/* useRouteMatch */
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
import Authorize from './Authorize';
import RegisterPopup from './Popups/RegisterPopup';
import { login, register, checkToken } from '../utils/auth';
import api from '../utils/api';
import InfoTooltip from './Popups/InfoTooltip';
import LoginPopup from './Popups/LoginPopup';
import EditProfilePopup from './Popups/EditProfilePopup';
import Footer from './Footer';

const Page = styled.div`
  min-width: 1440px;
  margin: 0 auto;
  color: #E5E5E5;
  padding: 0;
`;

const App = () => {
  const history = useHistory();
  /*   const { path, url } = useRouteMatch(); */

  const [loggedIn, setLoggedIn] = useState(false);
  const [registerPopupVisible, setRegisterPopupVisible] = useState(false);
  const [profilePopupVisible, setProfilePopupVisible] = useState(false);
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [poem, setPoem] = useState('');
  const [userOrganizationId, setUserOrganizationId] = useState('');
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

  const clearPoem = () => {
    setUserPoemZero('');
    setUserPoemOne('');
    setUserPoemTwo('');
  };

  const closePopups = () => {
    setRegisterPopupVisible(false);
    setLoginPopupVisible(false);
    setProfilePopupVisible(false);
/*     setInfoTooltipOpen(false); */
  }

  const checkUserToken = (jwt) => {
    checkToken(jwt)
      .then(((res) => {
        setLoggedIn(true);
      }))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setLoaderVisibible(true);
    api.getCards()
      .then((serverCards) => setCards(serverCards))
      .catch((e) => console.log(e));
    const jwt = localStorage.getItem('jwt');
    if (jwt) checkUserToken(jwt);
    setLoaderVisibible(false);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (loggedIn && jwt) {
      setLoaderVisibible(true);
      api.getUserData(jwt)
        .then((user) => setCurrentUser(user))
        .catch((e) => console.log('status', e))
        .finally(() => {
          setLoaderVisibible(false);
        })
    }
  }, [loggedIn]);

  useEffect(() => {
    setPoem(`${userPoemZero}\n${userPoemOne}\n${userPoemTwo}`);
  }, [userPoemZero, userPoemOne, userPoemTwo]);

  const onProfileBtnClick = () => {
    if (!loggedIn) {
      setRegisterPopupVisible(true)
    } else {
      setProfilePopupVisible(true);
    }
  };

  const handleLogin = (data) => {
    setLoaderVisibible(true);
    login(data)
      .then((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          setTooltipMessage('Вы успешно прошли аутентификацию!');
          setInfoTooltipOpen(true);
        }
      })
      .catch((e) => {
        console.log(e);
        setTooltipMessage(e.message);
        setInfoTooltipOpen(true);
      })
      .finally(() => {
        setLoaderVisibible(false);
        closePopups();
      })
  };

  const handleRegister = (data) => {
    setLoaderVisibible(true);
    register(data)
      .then((res) => {
        if (res.data.email) {
          setTooltipMessage('Вы успешно зарегистрировались!');
          setInfoTooltipOpen(true);
        }
      })
      .catch((e) => {
        console.log(e);
        setTooltipMessage(e.message);
        setInfoTooltipOpen(true);
      })
      .finally(() => {
        setLoaderVisibible(false)
        closePopups();
      });
  };
  const handleAuthLinkClick = () => {
      setRegisterPopupVisible(!registerPopupVisible);
      setLoginPopupVisible(!loginPopupVisible);
  }
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    closePopups();
  };

  const handleUserUpdate = (data) => {
    setLoaderVisibible(true);
    const jwt = localStorage.getItem('jwt');
    api.setUserData(data, jwt)
      .then((userData) => {
        setCurrentUser(userData);
        closePopups();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoaderVisibible(false);
        closePopups();
      });
  };

  const handleCallSubmit = (e) => {
    e.preventDefault();
    if (!loggedIn) {
      setLoginPopupVisible(true)
    } else {
      setLoaderVisibible(true);
      const jwt = localStorage.getItem('jwt');
      api.postCard({ rhyme: poem }, jwt)
        .then((newCard) => {
          console.log(newCard);
          setCards([newCard, ...cards]);
          closePopups();
          clearPoem();
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoaderVisibible(false);
          history.push('/explore');
        });
    }
  }
  const handleCardLike = (card) => {
    if (!currentUser.email) return setLoginPopupVisible(true);
    const jwt = localStorage.getItem('jwt');
    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    api.changeLikeStatus(card._id, !isLiked, jwt)
      .then((data) => {
        const newCard = data.card;
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((error) => console.log(error));
  };
  const handleCardDislike = (card) => {
    if (!currentUser.email) return setLoginPopupVisible(true);
    const jwt = localStorage.getItem('jwt');
    const isDisliked = card.dislikes.some((item) => item._id === currentUser._id);
    api.changeDislikeStatus(card._id, !isDisliked, jwt)
      .then((data) => {
        const newCard = data.card;
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((error) => console.log(error));
  };

  return (
    <AppContext.Provider value={config}>
      <Page>
        <Header loggedIn={loggedIn} onProfileBtnClick={onProfileBtnClick} />
          <Switch>
            <Route path="/main">
              <Lead texts={config.leadTexts.routeMain}/>
              <Info />
            </Route>
            <Route exact path='/authorize'>
              <Authorize authenticate={onProfileBtnClick}/>
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
                    leadNav,
                  }
                }
                />
              <Call
                poem={poem}
                route="/call"
                handleCallSubmit={handleCallSubmit}
                setUserOrganizationId={setUserOrganizationId}
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
                <OtherInitiative
                  currentUser={currentUser}
                  cards={cards}
                  onCardLike={handleCardLike}
                  onCardDislike={handleCardDislike}
                  />
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
                  handleCallSubmit={handleCallSubmit}
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
                  handleCallSubmit={handleCallSubmit}
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
        <Footer />
              {isLoaderVisible && (<Loader />)}
        <RegisterPopup 
          handleRegister={handleRegister}
          isOpen={registerPopupVisible}
          onClose={closePopups}
          authStatus={{
            text: 'Уже зарегистрированы?',
            link: '/sign-in',
            linkText: 'Войти',
          }}
          handleAuthLinkClick={handleAuthLinkClick}
        />
        <LoginPopup 
          handleLogin={handleLogin}
          isOpen={loginPopupVisible}
          onClose={closePopups}
          authStatus={{
            text: 'Еще не зарегистрированы?',
            linkText: 'Зарегистрироваться',
          }}
          handleAuthLinkClick={handleAuthLinkClick}
        />
        <EditProfilePopup 
          handleUserUpdate={handleUserUpdate}
          isOpen={profilePopupVisible}
          onClose={closePopups}
          authStatus={{
            text: 'Хотите выйти?',
            linkText: 'Нажмите сюда',
          }}
          handleAuthLinkClick={handleLogout}
          currentUser={currentUser}
        />
        {infoTooltipOpen && <InfoTooltip
          isOpen={infoTooltipOpen}
          onClose={() => setInfoTooltipOpen(false)}
          message={tooltipMessage}
          success={tooltipMessage === 'Вы успешно зарегистрировались!' ? true : loggedIn} />}
        
      </Page>
    </AppContext.Provider>
  );
};
export default App;
