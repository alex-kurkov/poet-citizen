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
import OtherInitiative from './OtherInitiative';

const Page = styled.div`
  min-width: 1440px;
  margin: 0 auto;
  color: #E5E5E5;
  padding: 0;
`;

const App = () => {
  /*   const { path, url } = useRouteMatch(); */

  const [poem, setPoem] = useState('');
  const [userPoemZero, setUserPoemZero] = useState('');
  const [userPoemOne, setUserPoemOne] = useState('');
  const [userPoemTwo, setUserPoemTwo] = useState('');
  const [leadPoemBlockVisibility, setLeadPoemBlockVisibility] = useState(true);
  const [leadTitle, setLeadTitle] = useState('');
  const [leadHelperText, setLeadHelperText] = useState('');
  const [leadInfoText, setLeadInfoText] = useState('');
  const [leadNav, setLeadNav] = useState('');

  useEffect(() => {
    setPoem(`${userPoemZero}\n${userPoemOne}\n${userPoemTwo}`);
  }, [userPoemZero, userPoemOne, userPoemTwo]);

  /* --> для блока других инициатив */
  // const [otherInitiatives, setOtherInitiatives] = React.useState([]);
  const otherInitiativeArray = [
    {
      rhyme: 'Зачем вы посетили нас?\nВ глуши забытого селенья\nЯ никогда не знала б вас,\nНе знала б горького мученья.\nДуши неопытной волненья\nСмирив со временем(как знать?),\nПо сердцу я нашла бы друга,\nБыла бы верная супруга\nИ добродетельная мать.',
      date: '20/12/2020',
      link: 'https://news.files.bbci.co.uk/include/shorthand/41212/media/rm1920-2-mr.jpg ',
      _id: 'sdfr334srTTTwe4r3',
      owner: { _id: 'rofijf33434wed7' }, // тут объект в значении
      likes: [{}], // тут массив объектов пользователей
      dislikes: [{}], // аналогично
    },
    {
      rhyme: 'стих-стих-стих',
      date: '27/12/2020',
      link: 'https://bipbap.ru/wp-content/uploads/2017/05/082844d0e1239dd57ba68bfebc1928f4.jpeg',
      _id: 'fffffdddfrTTTwe4r4',
      owner: { _id: 'qwedfdfwed2' },
      likes: [{}, {}, {}],
      dislikes: [],
    },
    {
      rhyme: 'Я люблю подмосковные рощи, и мосты над\nМосквою рекой \nЯ люблю твою Красную площадь,\nи Кемлёвских курантов бой\nВ городах и далёких станицах о тебе не\nумолкнет молва\nДорогая моя столица, золотая моя Москва\nДорогая моя столица, золотая моя Москва',
      date: '27/12/2020',
      link: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      _id: 'fffffdddfrTTTwe4r5',
      owner: { _id: 'qwedfdfwed2' },
      likes: [{}, {}, {}],
      dislikes: [],
    },
    {
      rhyme: 'стих-стих-стих',
      date: '31/12/2020',
      link: 'https://bipbap.ru/wp-content/uploads/2017/05/082844d0e1239dd57ba68bfebc1928f4.jpeg',
      _id: 'fffffdddfrTTTwe4r8',
      owner: { _id: 'qwedfdfwed6' },
      likes: [],
      dislikes: [{}, {}],
    },
  ];
  // setOtherInitiatives(otherInitiativeArray);
  /* <-- для блока других инициатив */

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
      </Page>
    </AppContext.Provider>
  );
};
export default App;
