import {
  antidealer,
  bluebucket,
  cyber,
  leo,
  nightwatch,
  piggy,
  smp,
  stopboor,
} from './utils/images';


export default {
  colors: {
    blue: '#0142F3',
    deepBlue: '#000087',
    lightGreen: '#43D3B2',
    deepGreen: '#288E78',
  },
  socialNetLinks: {
    instagram: 'https://Instagram.com',
    twitter: 'https://twitter.com/',
    telegram: 'https://web.telegram.org/',
    vkontakte: 'https://vk.com',
    },
  navBarLinks: [
    {
      name: 'Предложить инициативу',
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
    {
      name: 'Подать жалобу',
      link: '/complain',
    },
  ],
  tipography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
  leadTexts: {
    routeCall: {
      rhymeArr: [
        'Хочу у моря я спросить,\nДля чего оно кипит?\nПук травы зачем висит,\nМежду волн его сокрыт?\nЭто множество воды\nОчень дух смущает мой.\nЛучше 6 выросли сады\nТам, где слышен моря вой.\n',
        `Стихов я не читаю – но люблю
Марать шутя бумаги лист летучий;
Свой стих за хвост отважно я ловлю;
Я без ума от тройственных созвучий...
`,
        `Здорово, друг, здорово, брат, здорово.
Рассказывай, чай у тебя готово
Собранье важное вестей?
Садись-ка, объяви скорей.
        `,
      ],
      rhyme: 'Хочу у моря я спросить,\nДля чего оно кипит?\nПук травы зачем висит,\nМежду волн его сокрыт?\nЭто множество воды\nОчень дух смущает мой.\nЛучше 6 выросли сады\nТам, где слышен моря вой.\n',
      title: 'Выберите организацию в которую хотите обратиться',
      title_step2: 'Ваше отношение к инициативе',
      title_step3: 'Ваша инициатива словами классиков',
      helper: 'Тут будет отображаться Ваше обращение',
      info: 'Создавая обращение в организацию, Вы делаете мир лучше! Сообщите нам о наболевшем, чтобы мы решили эту проблему. Помните, обращение формируется словами классиков.',
      info_step2: 'Опишите чувства, которые испытываете, когда сталкиваетесь с этой проблемой.',
      info_step3: 'Полюбуйтесь! Ваша инициатива будет рассмотрена в течении нескольких дней. А пока, остальные пользователи смогут ее оценить в разделе “Другие инициативы”.',
    },
    routeComplain: {
      rhymeArr: [
        'Дрожи оттого, что забыла покой\nЯ, собственной мести во всем потакая!\nЕще покажу тебе, кто ты такой,\nЕще покажу тебе, кто я такая.\nПредать постараюсь стоустой молве\nХабар, что мужчиной ты стал недостойным.\nПри всех на ослиной твоей голове\nПопаху ведром заменю я помойным.\n',
        'Вот попрекать мне станут,\nЧто без толку всегда журю.\nНе плачь, я дело говорю:\nУж об твоем ли не радели\nОб воспитаньи! с колыбели!\n',
        'Ты даешь мне утром хлебный квас -\nНу что тебе придумать в оправданье!\nИнтеллекты разные у нас,-\nПовышай свое образованье!\n',
      ],
      title: 'Выберите движение, о неправомерном поведении, которого, Вы хотите сообщить',
      title_step2: 'Ваше отношение к проблеме',
      title_step3: 'Ваша жалоба словами классиков',
      helper: 'Тут будет отображаться Ваше обращение',
      info: 'Если вигилантское движение во время работы действовало неправомерно, сообщите в этом разделе. Нам важно знать о проишествии.',
      info_step2: 'Опишите чувства в период когда Вы столкнулись с этой проблемой.',
      info_step3: 'Ваша жалоба будет рассмотрена в кратчайшие сроки. В ближайшее время с Вами свяжется оператор. Спасибо, что сообщаете о нарушении!',
    },
    routeJoin: {
      rhymeArr: [
        `Дети разных народов,
Мы мечтою о мире живем.
В эти грозные годы
Мы за счастье бороться идем.
В разных землях и странах,
На морях-океанах
Каждый, кто молод,
Дайте нам руки, - 
В наши ряды, друзья!
`,
        `«Единство, – возвестил оракул прежних дней, – 
Быть может спаяно железом лишь и кровью…»
Но мы попробуем спаять его любовью –
А там увидим, что прочней…
`,
        `Я к вам травою прорасту,\nПопробую к вам дотянуться,\nКак почка тянется к листу\nВся в ожидании проснуться.\nОднажды утром зацвести,\nПока ее никто не видит,\nА уж на ней роса блестит\nИ сохнет, если солнце выйдет.\n`,

      ],
      title: 'Выберите организацию, в которую Вы хотите вступить',
      title_step2: 'Что Вы ожидаете получить от движения?',
      title_step3: 'Ваша заявка в организацию ',
      helper: 'Тут будет отображаться Ваше обращение',
      info: 'Если ты стремишься к миру во всем мире, добру и справедливости, то вступай в отряды наших активистов! Тебя ждет незабываемый опыт и ментальное развитие!',
      info_step2: 'Опишите чувства, которые ожидаете получить от вступления в ряды активистов.',
      info_step3: 'Полюбуйтесь! Ваша инициатива будет рассмотрена в течении нескольких дней. А пока, остальные пользователи смогут ее оценить в разделе “Другие инициативы”.',
    },
    routeExplore: {
      title: 'Оцените другие инициативы',
      helper: '',
      info: 'Оцените инициативы для вигилантских организаций от других пользователей. Определите, насколько, вы согласны с проблемой автора.',
    },
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
    organization: [
      {
        rhyme: 'Пришла и говорю: как нынешнему снегу\nлегко лететь с небес в угоду февралю,\nтак мне в угоду вам легко взойти на сцену.\nНе верьте мне, когда я это говорю.\n', 
        name: 'СМП', 
        id: 'smp', 
        info: 'Борется с «деструктивными сектами», лже-благотворителями, подростковыми суицидами',
        image: smp,
      },
      {
        rhyme: 'По асфальту шаркнула резина.\nРаспахнулась дверца лимузина.\nБлагостны, жирны, как караси,\nДва почтенных брата капуцина\nСгинули в подъезде Си-Ай-Си.\n', 
        name: 'Синие ведерки', 
        id: 'bluebucket', 
        info: 'Борьба с произволом чиновников и хамством на дорогах. Добиваются, чтобы «мигалки» использовались только на транспорте экстренных служб',
        image: bluebucket,
      },
      {
        rhyme: 'Воюет с извечной дурью,\nдля подвига рождена,\nотечественная литература —\nотечественная война.\n', 
        name: 'АнтиДилер', 
        id: 'antidealer', 
        info: 'Борьба с наркоманией, с незаконной реализацией алкогольной и табачной продукции, пропаганда «здорового образа жизни»',
        image: antidealer,
      },
      {
        rhyme: 'Нечистой силы наважденье\nЕго, быть может, унесло,\nВ знаменованье и значенье,\nЧто в будущем грозится зло?\n', 
        name: 'Кибер Дружины', 
        id: 'cyber', 
        info: 'Пресекание сайтов с пропагандой экстремизма, наркотиков, призывами к суициду и другими видами «опасного контента»',
        image: cyber,
      },
      {
        rhyme: 'Веселость пасынков Рорбаха*\nБыла безумна и неряха:\nБывало, в замке за столом\nСидят в бронях перед вином.\nИ всякий в буйности природной\nКричит, что пьяному угодно,\nИ непристойность глупых слов\nСлетает нагло с языков.\n', 
        name: 'СтопХам', 
        id: 'stopboor', 
        info: 'Противостояние хамству и нарушению водителями правил дорожного движения, в первую очередь — парковки в неположенном месте. ',
        image: stopboor,
      },
      {
        rhyme: 'Жил да был\nКрокодил.\nОн по улицам ходил,\nПапиросы курил.\nПо-турецки говорил,-\nКрокодил, Крокодил Крокодилович!\nА за ним-то народ\nИ поёт и орёт:\n- Вот урод так урод!\nЧто за нос, что за рот!\nИ откуда такое чудовище?\n', 
        name: 'ЛевПротив', 
        id: 'leo', 
        info: 'Борьба с курением и распитием алкогольных напитков в общественных местах.',
        image: leo,
      },
      {
        rhyme: 'Прорвалась луна сквозь чащи:\nПрошумел зефир ночной,\nИ, склоняясь, льют все слаще\nЕй березы ладан свой.\n', 
        name: 'Ночной патруль', 
        id: 'nightwatch', 
        info: 'Патруль ночных дорог, чтобы вовремя предупредить аварии по вине пьяных водителей.',
        image: nightwatch,
      },
      {
        rhyme: 'Судьба считает наши вины,\nИ всем понятно: что-то будет —\nЛюбой бы каялся сейчас...\nНо мы — дорвавшиеся свиньи,\nИзголодавшиеся люди,\nИ нам не внятен Божий глас.\n', 
        name: 'Хрюши против', 
        id: 'piggy', 
        info: 'Поиск просроченных продуктов, некорректных ценников, обвесов покупателей. Борьба с хамством продавцов, незаконным применением силы охранниками',
        image: piggy,
      },
    ],
    emotion: [
      {
        rhyme: 'Ночь! Скоро ли поглотит мир\nТвоя бессонная утроба?\nНо длится полдень, зреет злоба,\nИ ослепителен эфир.',
        name: 'Злость',
        id: 'anger',
      },
      {
        rhyme: 'Мне лошадь встретилась в кустах.\nИ вздрогнул я. А было поздно.\nВ любой воде таился страх,\nВ любом сарае сенокосном...\n',
        name: 'Страх',
        id: 'fear',
      },
      {
        rhyme: 'Куда столь быстро и легко,\nИ гордо, и прелестно,\nТы пролетаешь, облачко,\nСкиталец поднебесной?\nЗемли бездомное дитя,\nИгралище погоды,\nНапрасно, радугой блестя,\nТы, радостью природы!\n',
        name: 'Радость',
        id: 'joy',
      },
      {
        rhyme: 'Поздняя осень. Грачи улетели,\nЛес обнажился, поля опустели,\nТолько не сжата полоска одна...\nГрустную думу наводит она.\n',
        name: 'Печаль',
        id: 'sorrow',
      },
      {
        rhyme: 'Она томит, как ярость, злость и месть.\nОна не чтит причин. Она равновелика,\nКогда причины нет, когда причина есть.',
        name: 'Паника',
        id: 'panic',
      },
      {
        rhyme: 'Воспоминание безмолвно предо мной\nСвой длинный развивает свиток:\nИ, с отвращением читая жизнь мою,\nЯ трепещу, и проклинаю,\nИ горько жалуюсь, и горько слезы лью',
        name: 'Отвращение',
        id: 'disgust',
      },
      {
        rhyme: 'Улыбаются старушки,\nПриседают старики.\nСмотрят с завистью подружки\nНа шелковы косники.',
        name: 'Гордость',
        id: 'pride',
      },
      {
        rhyme: 'О, дайте вечность мне,- и вечность я отдам\nЗа равнодушие к обидам и годам.\n',
        name: 'Разочарование',
        id: 'disappointment',
      },
    ],
  },
  infoTexts: {
    intro: [
      `Сейчас вигилантские общества получили ширкое распространение в России.
      Это здорово, когда люди объединяются в мощные сообщества и
      поддерживают баланс справедливости со стороны граждан и
      правоохранительных органов.`,
      `Но, к сожалению, вигилантские движения плохо развиты, и зачастую их
      поведение становится камнем преткновения для популяризации этой
      культуры.`,
    ],
    introGoal: `Данный портал создан для развития вигилантской идеалогии и
    регулирования ее действий в социуме. Сейчас мы находимся на пути,
    когда хорошая идея получает развитие!`,
    activitiesInfo: [
      'Распространение наркотиков и наркозависимость',
      'Незаконная продажа алкоголя',
      'Пьяное вождение, нарушение ПДД и правил парковки',
      'Просроченные продукты и прочие нарушения потребительских прав граждан',
      'Распитие спиртных напитков и курение в «неположенных местах»',
      '«Майдан», угроза «цветных» революций',
      'Педофилия и незаконные мигранты(были популярны до разгрома «Реструкта»)',
      '«Экстремизм» в интернете',
      'Редко встречающаяся тематика: аборты, незаконный сбор пожертвований, борьба с сектами, борьба за нравственность',
    ],
  },
  sliders: {
    '1': {
      rhyme: `“Граждане,
у меня
огромная радость.
Разулыбьте
сочувственные лица.
Мне
обязательно
поделиться надо,
стихами
хотя бы
поделиться...”`,
      info: 'P.S. \'Вигиланты\' (люди, которые самовольно охраняют общественный порядок)',
      title: 'Предложи свою инициативу вигилантам словами классиков',
      route: '/call',
      btnText: 'Предложить',
    },
    '2': {
      rhyme: `Для чего устроена неделя профдвижения?
Надо укрепить свою организацию:
победа над разрухой только с ней.
Надо друг с другом связь установить тесней.`,
      title: 'Стань частью большой семьи',
      info: 'Вступи в организацию, чтобы следить за порядком в своем городе.',
      route: '/join',
      btnText: 'Вступить',
    },
    '3': {
      rhyme: `...Всем равный жребий, вровень хлеба
Отмерит справедливый век.
А все-таки порой на небо
Посмотрит смирный человек, –
И одиночество взыграет,
И душу гордость окрылит:
Он неравенство оценит
И дерзновенья пожелает…
Так нынче травка проpaстaeт
Сквозь трещины гранитных плит.`,
      title: 'Оцени инициативы других пользователей',
      info: 'Поддержи инициативы других пользователей, чтобы предложения поскорее вступили в силу.',
      route: '/explore',
      btnText: 'Оценить',
    },
    '4': {
      rhyme: `Дрожи оттого, что забыла покой\nЯ, собственной мести во всем потакая!\nЕще покажу тебе, кто ты такой,\nЕще покажу тебе, кто я такая.\nПредать постараюсь стоустой молве\nХабар, что мужчиной ты стал недостойным.\nПри всех на ослиной твоей голове\nПопаху ведром заменю я помойным.\n`,
      title: 'Пожалуйся на вигилантов, которые вели себя неправомерно',
      info: 'Лицам, охраняющим общественный порядок, категорически, нельзя превышать собственных полномочий! Нам важно знать Ваше мнение, для регулирования отрасли вигалантских движений. ',
      route: '/complain',
      btnText: 'Подать жалобу',
    },
  },
  baseUrl: 'https://api.poet-citizen.students.nomoreparties.xyz',
};