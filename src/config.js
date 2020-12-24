import {
  antidealer,
  bluebucket,
  cyber,
  leo,
  nightwatch,
  piggy,
  smp,
  stopboor,
} from './utils/images'

export default {
  colors: {
    blue: '#0142F3',
    deepBlue: '#000087',
    lightGreen: '#43D3B2',
    deepGreen: '#288E78',
  },
  socialNetLinks: [
    {
      name: 'Instagram',
      svg: '../img/socNetIcons/instagram.svg',
      link: 'https://Instagram.com',
    },
    {
      name: 'Twitter',
      svg: '../img/socNetIcons/twitter.svg',
      link: 'https://twitter.com/',
    },
    {
      name: 'Telegram',
      svg: '../img/socNetIcons/telegram.svg',
      link: 'https://web.telegram.org/',
    },
    {
      name: 'ВКонтакте',
      svg: '../img/socNetIcons/vkontakte.svg',
      link: 'https://vk.com',
    },
  ],
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
    routeMain: {
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
      поделиться...”
      `,
      title: 'Предложи свою инициативу вигилантам словами классиков',
      info: 'P.S. \'Вигиланты\' (люди, которые самовольно охраняют общественный порядок)',
    },
    routeCall: {
      rhyme: 'Хочу у моря я спросить,\nДля чего оно кипит?\nПук травы зачем висит,\nМежду волн его сокрыт?\nЭто множество воды\nОчень дух смущает мой.\nЛучше 6 выросли сады\nТам, где слышен моря вой.\n',
      title: 'Выберите организацию в которую хотите обратиться',
      title_step2: 'Ваше отношение к инициативе',
      title_step3: 'Ваша инициатива словами классиков',
      helper: 'Тут будет отображаться Ваше обращение',
      info: 'Создавая обращение в организацию, Вы делаете мир лучше! Сообщите нам о наболевшем, чтобы мы решили эту проблему. Помните, обращение формируется словами классиков.',
      info_step2: 'Опишите чувства, которые испытываете, когда сталкиваетесь с этой проблемой.',
      info_step3: 'Полюбуйтесь! Ваша инициатива будет рассмотрена в течении нескольких дней. А пока, остальные пользователи смогут ее оценить в разделе “Другие инициативы”.',
      nav: 'Гражданин-поэт/Предложить инициативу',
      nav_step2: 'Гражданин-поэт/Предложить инициативу/Отношение к проблеме',
      nav_step3: 'Гражданин-поэт/Предложить инициативу/Отношение к проблеме/Сформированная инициатива',
    },
    routeComplain: {
      rhyme: 'Дрожи оттого, что забыла покой\nЯ, собственной мести во всем потакая!\nЕще покажу тебе, кто ты такой,\nЕще покажу тебе, кто я такая.\nПредать постараюсь стоустой молве\nХабар, что мужчиной ты стал недостойным.\nПри всех на ослиной твоей голове\nПопаху ведром заменю я помойным.\n',
      title: 'Выберите движение, о неправомерном поведении, которого, Вы хотите сообщить',
      title_step2: 'Ваше отношение к проблеме',
      title_step3: 'Ваша жалоба словами классиков',
      helper: 'Тут будет отображаться Ваше обращение',
      info: 'Если вигилантское движение во время работы действовало неправомерно, сообщите в этом разделе. Нам важно знать о проишествии.',
      info_step2: 'Опишите чувства в период когда Вы столкнулись с этой проблемой.',
      info_step3: 'Ваша жалоба будет рассмотрена в кратчайшие сроки. В ближайшее время с Вами свяжется оператор. Спасибо, что сообщаете о нарушении!',
      nav: 'Гражданин-поэт/Подать жалобу',
      nav_step2: 'Гражданин-поэт/Подать жалобу/Отношение к проблеме',
      nav_step3: 'Гражданин-поэт/Подать жалобу/Отношение к проблеме/Сформированная жалоба',
    },
    routeJoin: {
      rhyme: 'Я к вам травою прорасту,\nПопробую к вам дотянуться,\nКак почка тянется к листу\nВся в ожидании проснуться.\nОднажды утром зацвести,\nПока ее никто не видит,\nА уж на ней роса блестит\nИ сохнет, если солнце выйдет.\n',
      title: 'Выберите организацию, в которую Вы хотите вступить',
      title_step2: 'Что Вы ожидаете получить от движения?',
      title_step3: 'Ваша заявка в организацию ',
      helper: 'Тут будет отображаться Ваше обращение',
      info: 'Если ты стремишься к миру во всем мире, добру и справедливости, то вступай в отряды наших активистов! Тебя ждет незабываемый опыт и ментальное развитие!',
      info_step2: 'Опишите чувства, которые ожидаете получить от вступления в ряды активистов.',
      info_step3: 'Полюбуйтесь! Ваша инициатива будет рассмотрена в течении нескольких дней. А пока, остальные пользователи смогут ее оценить в разделе “Другие инициативы”.',
      nav: 'Гражданин-поэт/Вступить в организацию',
      nav_step2: 'Гражданин-поэт/Вступить в организацию/Ожидание',
      nav_step3: 'Гражданин-поэт/Вступить в организацию/Ожидание/Сформированная заявка',
    },
    routeExplore: {
      title: 'Оцените другие инициативы',
      helper: '',
      info: 'Оцените инициативы для вигилантских организаций от других пользователей. Определите, насколько, вы согласны с проблемой автора.',
      nav: 'Гражданин-поэт/Другие инициативы',
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
        info: 'Борется с «деструктивными сектами», абортами, лже-благотворителями, подростковыми суицидами',
        image: smp,
      },
      {
        rhyme: 'По асфальту шаркнула резина.\nРаспахнулась дверца лимузина.\nБлагостны, жирны, как караси,\nДва почтенных брата капуцина\nСгинули в подъезде Си-Ай-Си.\n', 
        name: 'Синие ведерки', 
        id: 'bluebucket', 
        info: 'Борется с «деструктивными сектами», абортами, лже-благотворителями, подростковыми суицидами',
        image: bluebucket,
      },
      {
        rhyme: 'Воюет с извечной дурью,\nдля подвига рождена,\nотечественная литература —\nотечественная война.\n', 
        name: 'Антидилер', 
        id: 'antidealer', 
        info: 'Борется с «деструктивными сектами», абортами, лже-благотворителями, подростковыми суицидами',
        image: antidealer,
      },
      {
        rhyme: 'Нечистой силы наважденье\nЕго, быть может, унесло,\nВ знаменованье и значенье,\nЧто в будущем грозится зло?\n', 
        name: 'Кибер патруль', 
        id: 'cyber', 
        info: 'Борется с «деструктивными сектами», абортами, лже-благотворителями, подростковыми суицидами',
        image: cyber,
      },
      {
        rhyme: 'Веселость пасынков Рорбаха*\nБыла безумна и неряха:\nБывало, в замке за столом\nСидят в бронях перед вином.\nИ всякий в буйности природной\nКричит, что пьяному угодно,\nИ непристойность глупых слов\nСлетает нагло с языков.\n', 
        name: 'СтопХам', 
        id: 'stopboor', 
        info: 'Борется с «деструктивными сектами», абортами, лже-благотворителями, подростковыми суицидами',
        image: stopboor,
      },
      {
        rhyme: 'Жил да был\nКрокодил.\nОн по улицам ходил,\nПапиросы курил.\nПо-турецки говорил,-\nКрокодил, Крокодил Крокодилович!\nА за ним-то народ\nИ поёт и орёт:\n- Вот урод так урод!\nЧто за нос, что за рот!\nИ откуда такое чудовище?\n', 
        name: 'ЛевПротив', 
        id: 'leo', 
        info: 'Борется с «деструктивными сектами», абортами, лже-благотворителями, подростковыми суицидами',
        image: leo,
      },
      {
        rhyme: 'Прорвалась луна сквозь чащи:\nПрошумел зефир ночной,\nИ, склоняясь, льют все слаще\nЕй березы ладан свой.\n', 
        name: 'Ночной дозор', 
        id: 'nightwatch', 
        info: 'Борется с «деструктивными сектами», абортами, лже-благотворителями, подростковыми суицидами',
        image: nightwatch,
      },
      {
        rhyme: 'Судьба считает наши вины,\nИ всем понятно: что-то будет —\nЛюбой бы каялся сейчас...\nНо мы — дорвавшиеся свиньи,\nИзголодавшиеся люди,\nИ нам не внятен Божий глас.\n', 
        name: 'Хрюши против', 
        id: 'piggy', 
        info: 'Борется с «деструктивными сектами», абортами, лже-благотворителями, подростковыми суицидами',
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
        name: 'Ярость',
        id: 'rage',
      },
      {
        rhyme: 'Воспоминание безмолвно предо мной\nСвой длинный развивает свиток:\nИ, с отвращением читая жизнь мою,\nЯ трепещу, и проклинаю,\nИ горько жалуюсь, и горько слезы лью',
        name: 'Отвращение',
        id: 'disgust',
      },
      {
        rhyme: 'Улыбаются старушки,\nПриседают старики.\nСмотрят с завистью подружки\nНа шелковы косники.',
        name: 'Зависть',
        id: 'envy',
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
      Это здорово, когда люди объединияются в мощные сообщества и
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
  baseUrl: 'https://api.poet-citizen.students.nomoreparties.xyz',
};
