export default {
  colors: {
    blue: '#0142F3',
    deepBlue: '#000087',
    lightGreen: '#43D3B2',
    deepGreen: '#288E78'
  },
  navBarLinks: [
    {
      name: 'Подать жалобу',
      link: '/complain',
    },
    {
      name: 'Выдвинуть инициативу',
      link: '/call',
    },
    {
      name: 'Другие инициативы',
      link: '/explore',
    },
    {
      name: 'Вступить в ряды',
      link: '/join',
    },
  ],
  tipography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
  leadTexts: {
    routeCall: {
      rhyme: 'Первая часть стиха\nНачало подачи инициативы\nНачало инициативы подачи',
      title: 'Выберите организацию в которую хотите обратиться',
      helper: 'Тут будет отображаться Ваше обращение',
      info: 'Создавая обращение в организацию, Вы делаете мир лучше! Сообщите нам о наболевшем, чтобы мы решили эту проблему. Помните, обращение формируется словами классиков.',
      nav: 'Гражданин-поэт/Предложить инициативу',
    },
    routeComplain: {
      title: 'Выберите движение, о неправомерном поведении, которого, Вы хотите сообщить',
      helper: 'Тут будет отображаться Ваше обращение',
      info: 'Если вигилантское движение во время работы действовало неправомерно, сообщите в этом разделе. Нам важно знать о проишествии.',
      nav: 'Гражданин-поэт/Подать жалобу',
    },
    routeJoin: {
      title: 'Выберите организацию, в которую Вы хотите вступить',
      helper: 'Тут будет отображаться Ваше обращение',
      info: 'Если ты стремишься к миру во всем мире, добру и справедливости, то вступай в отряды наших активистов! Тебя ждет незабываемый опыт и ментальное развитие!',
      nav: 'Гражданин-поэт/Вступить в организацию',
    },
    routeExplore: {
      title: 'Оцените другие инициативы',
      helper: '',
      info: 'Оцените инициативы для вигилантских организаций от других пользователей. Определите, насколько, вы согласны с проблемой автора.',
      nav: 'Гражданин-поэт/Другие инициативы',
    }
  },
  templatePoem: `“Граждане,
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
  `,
  rhymes: {
    motivation: {
      call: 'callcallcall',
      complain: 'complaincomplaincomplain',
      join: 'joinjoinjoin',
    },
    organization: [
      {rhyme: 'Вторая часть стиха\nsmp text\nlkfnawk\nwekjfokvgeok', name: 'СМП', id: 'smp'},
      {rhyme: 'Вторая часть стиха\nblueBucket text\nlkfnawk\nwekjfokvgeok', name: 'Синие ведерки', id: 'blueBucket'},
      {rhyme: 'Вторая часть стиха\nantiDealer text\nlkfnawk\nwekjfokvgeok', name: 'Антидилер', id: 'antiDealer'},
      {rhyme: 'Вторая часть стиха\ncyber text\nlkfnawk\nwekjfokvgeok', name: 'Кибер что-то', id: 'cyber'},
      {rhyme: 'Вторая часть стиха\nstopBoor text\nlkfnawk\nwekjfokvgeok', name: 'СтопХам', id: 'stopBoor'},
      {rhyme: 'Вторая часть стиха\nleo text\nlkfnawk\nwekjfokvgeok', name: 'ЛевПротив', id: 'leo'},
      {rhyme: 'Вторая часть стиха\nnightwatch text\nlkfnawk\nwekjfokvgeok', name: 'Ночной дозор', id: 'nightwatch'},
      {rhyme: 'Вторая часть стиха\nPIGGY POEM TEXT \nPIGGI POEM\nPIGGI POEM\nPIGGI POEM TEXT', name: 'Свинка Дося', id: 'piggy'},
    ],
    emotion: [
      {rhyme: 'Третья часть стиха\nanger text anger\nstill another text\nyet another line\nit all ends here...', name: 'Злость', id: 'anger'},
      {rhyme: 'Третья часть стиха\nfear text fear\nstill another text\nyet another line\nit all ends here...', name: 'Страх', id: 'fear'},
      {rhyme: 'Третья часть стиха\njoy text joy\nstill another text\nyet another line\nit all ends here...', name: 'Радость', id: 'joy'},
      {rhyme: 'Третья часть стиха\nsorrow text sorrow\nstill another text\nyet another line\nit all ends here...', name: 'Печаль', id: 'sorrow'},
      {rhyme: 'Третья часть стиха\nrage text rage\nstill another text\nyet another line\nit all ends here...', name: 'Ярость', id: 'rage'},
      {rhyme: 'Третья часть стиха\ndisgust text disgust\nstill another text\nyet another line\nit all ends here...', name: 'Отвращение', id: 'disgust'},
      {rhyme: 'Третья часть стиха\nenvy text envy\nstill another text\nyet another line\nit all ends here...', name: 'Зависть', id: 'envy'},
      {rhyme: 'Третья часть стиха\ndisappointment text disappointment\nstill another text\nyet another line\nit all ends here...', name: 'Разочарование', id: 'disappointment'},
    ]
  }
}
