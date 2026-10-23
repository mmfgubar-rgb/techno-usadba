export type DirectionCard = {
  title: string
  description: string
  image: string
}

export type DirectionInfo = {
  title: string
  subtitle: string
  image: string
  description: string
  cards: DirectionCard[]
}

const image = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

export const directionDetails = {
  "building-materials": {
    title: "Строительные материалы",
    subtitle: "Песок, щебень и отсев для строительных и хозяйственных задач",
    image: image("sand.jpg"),
    description: "Сыпучие материалы для строительства, благоустройства и хозяйственных работ. Уточняйте наличие, объём и условия доставки по телефону.",
    cards: [
      { title: "Песок строительный", description: "Для строительных работ, подсыпки и благоустройства территории.", image: image("sand.jpg") },
      { title: "Щебень гранитный", description: "Для строительных, дорожных и хозяйственных задач.", image: image("granite.jpg") },
      { title: "Отсев", description: "Мелкий сыпучий материал для подсыпки и благоустройства.", image: image("screenings.jpg") },
    ],
  },
  "metal-products": {
    title: "Металлопрокат",
    subtitle: "Металлическая продукция для строительства, ремонта и производства",
    image: image("metal.jpg"),
    description: "Поможем подобрать металлопрокат для строительных, монтажных и хозяйственных работ. Наличие конкретных позиций уточняйте перед заказом.",
    cards: [
      { title: "Профильная труба", description: "Для каркасов, ограждений и различных конструкций.", image: image("metal.jpg") },
      { title: "Арматура и уголок", description: "Металлические изделия для строительных и монтажных работ.", image: image("metal.jpg") },
      { title: "Лист, полоса и другие изделия", description: "Листовой прокат, шестигранник, металлические круги и сетка — ассортимент уточняйте по телефону.", image: image("metal.jpg") },
    ],
  },
  "animal-feed": {
    title: "Комбикорма",
    subtitle: "Корма для домашнего хозяйства",
    image: image("feed.webp"),
    description: "Предлагаем комбикорма для домашнего хозяйства. Актуальный ассортимент, наличие и фасовку можно уточнить по телефону.",
    cards: [
      { title: "Молотые комбикорма", description: "Вариант кормов для повседневного использования в хозяйстве.", image: image("feed.webp") },
      { title: "Гранулированные комбикорма", description: "Гранулированные корма; доступные позиции уточняйте перед покупкой.", image: image("feed.webp") },
    ],
  },
  "special-machinery": {
    title: "Аренда спецтехники",
    subtitle: "Техника для погрузки, перевозки и выполнения работ на участке",
    image: image("crane.jpg"),
    description: "Выберите подходящую технику и свяжитесь с нами, чтобы согласовать задачу, место и время выполнения работ.",
    cards: [
      { title: "Грузовой самосвал", description: "Перевозка и выгрузка сыпучих материалов. Грузоподъёмность — до 10 тонн.", image: image("dump-truck.webp") },
      { title: "Автокран", description: "Подъём и перемещение грузов. Грузоподъёмность 10 тонн, вылет стрелы 15 метров.", image: image("crane.jpg") },
      { title: "Фронтальный погрузчик МТЗ", description: "Погрузка, разгрузка, планировка грунта и расчистка снега.", image: image("front_mtz.jpg") },
      { title: "Мини-экскаватор-погрузчик", description: "Земляные и погрузочные работы на участке.", image: image("mini-excavator.jpg") },
      { title: "Фронтальный погрузчик АМКОДОР", description: "Погрузочные работы, паллетные вилы, снеговая лопата и расчистка снега.", image: image("amcodor.jpg") },
      { title: "Прицеп МЗСА", description: "Прокат прицепа 2,45 × 1,51 м, грузоподъёмность до 750 кг.", image: image("trailer.jpg") },
    ],
  },
  "sawmill": {
    title: "Пилорама",
    subtitle: "Распиловка древесины и сопутствующая продукция",
    image: image("sawmill.jpg"),
    description: "Уточните параметры и объём заказа — обсудим возможность выполнения работ и сроки.",
    cards: [
      { title: "Распиловка древесины", description: "Услуги распиловки по согласованным параметрам.", image: image("sawmill.jpg") },
      { title: "Опилки", description: "Возможность приобретения и доставки уточняйте по телефону.", image: image("sawmill.jpg") },
    ],
  },
  "guest-house": {
    title: "Агроусадьба и баня",
    subtitle: "Отдых в Макаричах рядом с рекой Припять",
    image: image("estate-living.jpg"),
    description: "Дом со всеми удобствами и баня для загородного отдыха. Уточните свободные даты, стоимость и условия размещения.",
    cards: [
      { title: "Дом для отдыха", description: "Уютный дом со всеми удобствами для отдыха за городом.", image: image("estate-living.jpg") },
      { title: "Баня", description: "Баня для спокойного отдыха в загородной обстановке.", image: image("bath.jpg") },
      { title: "Отдых у реки Припять", description: "Макаричи — возможность провести время на природе вдали от городского шума.", image: image("usadba.jpg") },
    ],
  },
  "tourist-rental": {
    title: "Туристический прокат",
    subtitle: "Снаряжение для активного отдыха и прогулок по воде",
    image: image("tourism.jpg"),
    description: "Оборудование для активного отдыха. Заранее уточняйте наличие, условия проката и подходящее время.",
    cards: [
      { title: "Туристическое снаряжение", description: "Экипировка и снаряжение для отдыха на природе.", image: image("gear.jpg") },
      { title: "Лодки и катамаран", description: "Возможность проката и условия использования уточняйте по телефону.", image: image("tourism.jpg") },
    ],
  },
} satisfies Record<string, DirectionInfo>

export type DirectionSlug = keyof typeof directionDetails
