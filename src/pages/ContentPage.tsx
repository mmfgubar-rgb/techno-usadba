import { ContactSection, ImageLinkCards, PhotoGallery } from "./DetailExtras"
export type ContentType = "catalog" | "services"

export type ContentInfo = {
  type: ContentType
  title: string
  subtitle: string
  image: string
  description: string
  sections: { title: string; text: string; items?: string[] }[]
  related?: { label: string; href: string }[]
  cta?: string
}

const image = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

export const contentDetails: Record<string, ContentInfo> = {
  "catalog/sand": {
    type: "catalog", title: "Песок строительный",
    subtitle: "Для выполнения строительных работ и подсыпки",
    image: image("sand.jpg"),
    description: "Строительный песок для строительных, подготовительных и хозяйственных работ. Наличие, объём, стоимость и возможность доставки уточняйте перед заказом.",
    sections: [
      { title: "Для каких задач подходит", text: "Песок используют для различных строительных и благоустроительных работ. Подходящий материал и требуемый объём зависят от вашей задачи." },
      { title: "Заказ и доставка", text: "Сообщите нужный объём и адрес доставки — мы уточним наличие, стоимость и возможность привезти материал самосвалом." },
    ],
    related: [{ label: "Щебень гранитный", href: "#/catalog/crushed-stone" }, { label: "Отсев", href: "#/catalog/screenings" }, { label: "Грузовой самосвал", href: "#/services/dump-truck" }],
  },
  "catalog/crushed-stone": {
    type: "catalog", title: "Щебень гранитный",
    subtitle: "Гранитный щебень разных фракций",
    image: image("granite.jpg"),
    description: "Гранитный щебень для строительных работ, подготовки оснований и благоустройства. Доступные фракции, наличие и стоимость уточняйте по телефону.",
    sections: [
      { title: "Подбор материала", text: "При обращении расскажите, для каких работ нужен щебень и какой объём требуется. Это поможет уточнить подходящий вариант." },
      { title: "Доставка", text: "Возможность и стоимость доставки зависят от объёма и адреса объекта. Условия согласовываются при заказе." },
    ],
    related: [{ label: "Песок строительный", href: "#/catalog/sand" }, { label: "Отсев", href: "#/catalog/screenings" }, { label: "Грузовой самосвал", href: "#/services/dump-truck" }],
  },
  "catalog/screenings": {
    type: "catalog", title: "Отсев",
    subtitle: "Мелкий сыпучий материал с размером зёрен от 0 до 5 мм",
    image: image("screenings.jpg"),
    description: "Отсев — мелкий сыпучий материал, который применяют в строительных и хозяйственных работах. Наличие и условия поставки уточняйте перед заказом.",
    sections: [
      { title: "Применение", text: "Материал может использоваться для разных задач в зависимости от требований к основанию и свойств конкретного участка." },
      { title: "Как заказать", text: "Уточните нужный объём и адрес доставки. Мы сообщим актуальные условия и возможность доставки." },
    ],
    related: [{ label: "Песок строительный", href: "#/catalog/sand" }, { label: "Щебень гранитный", href: "#/catalog/crushed-stone" }, { label: "Грузовой самосвал", href: "#/services/dump-truck" }],
  },
  "catalog/feed": {
    type: "catalog", title: "Комбикорма",
    subtitle: "Корма для домашнего хозяйства — молотые и гранулированные",
    image: image("feed.webp"),
    description: "Предлагаем комбикорма для домашнего хозяйства. Доступны молотые и гранулированные варианты; актуальный ассортимент и условия приобретения уточняйте по телефону.",
    sections: [
      { title: "Варианты комбикормов", text: "Ассортимент зависит от текущего наличия.", items: ["Молотые комбикорма", "Гранулированные комбикорма"] },
      { title: "Перед покупкой", text: "Свяжитесь с нами, чтобы уточнить наличие, фасовку и характеристики доступных позиций." },
    ],
    related: [{ label: "Все направления", href: "#/directions/animal-feed" }],
  },
  "catalog/metal": {
    type: "catalog", title: "Металлопрокат",
    subtitle: "Металлическая продукция для строительства, ремонта и производства",
    image: image("metal.jpg"),
    description: "Подберём металлопрокат для строительных, монтажных и хозяйственных задач. Наличие и размеры конкретных позиций уточняйте перед заказом.",
    sections: [
      { title: "Ассортимент", text: "В ассортименте могут быть представлены:", items: ["Профильная труба", "Арматура", "Уголок и металлическая полоса", "Листовой прокат", "Шестигранник, металлические круги и сварная оцинкованная сетка"] },
      { title: "Как подобрать", text: "При обращении сообщите тип изделия, нужные размеры и количество — поможем уточнить доступные варианты." },
    ],
    related: [{ label: "Направление «Металлопрокат»", href: "#/directions/metal-products" }],
  },
  "services/dump-truck": {
    type: "services", title: "Грузовой самосвал",
    subtitle: "Грузоподъёмность 10 тонн · доставка сыпучих материалов с самосвальной выгрузкой",
    image: image("dump-truck.webp"),
    description: "Доставка сыпучих строительных материалов и перевозка грузов, для которых подходит самосвальная выгрузка. Возможность выполнения заказа зависит от объёма, адреса и даты.",
    sections: [
      { title: "Что можно заказать", text: "Доставку песка, щебня, отсева и других согласованных сыпучих материалов." },
      { title: "Условия работы", text: "При обращении укажите материал, требуемый объём, адрес и желаемую дату доставки. Стоимость и возможность выполнения заказа согласуются индивидуально." },
    ],
    related: [{ label: "Песок строительный", href: "#/catalog/sand" }, { label: "Щебень гранитный", href: "#/catalog/crushed-stone" }, { label: "Отсев", href: "#/catalog/screenings" }],
  },
  "services/mobile-crane": {
    type: "services", title: "Автокран",
    subtitle: "Грузоподъёмность 10 тонн · вылет стрелы 15 метров",
    image: image("crane.jpg"),
    description: "Услуги автокрана для подъёма и перемещения грузов. Перед заказом необходимо согласовать задачу, условия подъезда и место проведения работ.",
    sections: [
      { title: "Характеристики", text: "Грузоподъёмность — 10 тонн. Вылет стрелы — 15 метров." },
      { title: "Заказ услуги", text: "Опишите груз, место проведения работ и желаемую дату. Мы уточним возможность выполнения заказа." },
    ],
    related: [{ label: "Аренда спецтехники", href: "#/directions/special-machinery" }],
  },
  "services/trailer-rental": {
    type: "services", title: "Прокат прицепа МЗСА",
    subtitle: "Размеры 2,45 × 1,51 м · грузоподъёмность до 750 кг",
    image: image("trailer.jpg"),
    description: "Прицеп для перевозки подходящих по размерам и весу грузов. До оформления аренды уточните доступность на нужную дату и условия использования.",
    sections: [
      { title: "Характеристики", text: "Размеры платформы — 2,45 × 1,51 м. Допустимая грузоподъёмность — до 750 кг." },
      { title: "Условия проката", text: "Уточните срок аренды, дату получения и возврата, а также требования к перевозке." },
    ],
    related: [{ label: "Аренда спецтехники", href: "#/directions/special-machinery" }],
  },
  "services/front-loader": {
    type: "services", title: "Фронтальный погрузчик",
    subtitle: "Погрузка, разгрузка, планировка грунта и расчистка снега",
    image: image("front_mtz.jpg"),
    description: "Техника для погрузочно-разгрузочных и хозяйственных работ на территории объекта.",
    sections: [
      { title: "Виды работ", text: "В зависимости от задачи можно согласовать:", items: ["Погрузку и разгрузку материалов", "Планировку грунта", "Расчистку снега"] },
      { title: "Заказ", text: "Сообщите адрес, характер работ, объём и желаемую дату — уточним доступность техники и условия." },
    ],
    related: [{ label: "Аренда спецтехники", href: "#/directions/special-machinery" }, { label: "Погрузчик АМКОДОР", href: "#/services/amkodor-loader" }],
  },
  "services/backhoe-loader": {
    type: "services", title: "Мини-экскаватор-погрузчик",
    subtitle: "Грузоподъёмность 400 кг · глубина копания 1,5 метра",
    image: image("loader.png"),
    description: "Компактная техника для земляных работ и задач на участке. Возможность выполнения конкретной работы согласовывается перед заказом.",
    sections: [
      { title: "Характеристики", text: "Грузоподъёмность — 400 кг. Глубина копания — 1,5 метра." },
      { title: "Заказ техники", text: "Опишите задачу, место работ и желаемую дату, чтобы уточнить возможность предоставления техники." },
    ],
    related: [{ label: "Аренда спецтехники", href: "#/directions/special-machinery" }],
  },
  "services/amkodor-loader": {
    type: "services", title: "Фронтальный погрузчик АМКОДОР",
    subtitle: "Погрузочно-разгрузочные работы и помощь на территории",
    image: image("amcodor.jpg"),
    description: "Погрузчик АМКОДОР для согласованных погрузочно-разгрузочных и хозяйственных задач.",
    sections: [
      { title: "Возможные работы", text: "В зависимости от оснащения и условий объекта можно согласовать:", items: ["Погрузку и разгрузку", "Работы с паллетными вилами", "Расчистку снега снеговой лопатой", "Эвакуацию транспорта — после предварительного согласования"] },
      { title: "Перед заказом", text: "Уточните тип работ, условия доступа к объекту и желаемое время." },
    ],
    related: [{ label: "Фронтальный погрузчик", href: "#/services/front-loader" }, { label: "Аренда спецтехники", href: "#/directions/special-machinery" }],
  },
  "services/agroestate": {
    type: "services", title: "Агроусадьба «Припять»",
    subtitle: "Дом для отдыха и баня в д. Макаричи рядом с рекой Припять",
    image: image("usadba.jpg"),
    description: "Загородный отдых в Макаричах: дом со всеми удобствами, баня и природа рядом с рекой Припять.",
    sections: [
      { title: "Что доступно", text: "Для гостей предусмотрены:", items: ["Дом для отдыха со всеми удобствами", "Баня", "Отдых рядом с рекой Припять"] },
      { title: "Уточнить даты", text: "Свяжитесь с нами, чтобы уточнить свободные даты, условия размещения и стоимость." },
    ],
    related: [{ label: "Туристические услуги", href: "#/services/tourism" }],
  },
  "services/sawmill": {
    type: "services", title: "Пилорама",
    subtitle: "Распиловка древесины · реализация и доставка опилок",
    image: image("sawmill.jpg"),
    description: "Услуги распиловки древесины и реализация сопутствующей продукции. Конкретные параметры и сроки работ необходимо согласовать заранее.",
    sections: [
      { title: "Услуги и продукция", text: "Можно уточнить условия выполнения следующих работ:", items: ["Распиловка древесины", "Реализация опилок при наличии", "Доставка опилок по согласованию"] },
      { title: "Заказ услуги", text: "Сообщите требуемые размеры, объём и желаемые сроки — обсудим возможность выполнения заказа." },
    ],
    related: [{ label: "Направление «Пилорама»", href: "#/directions/sawmill" }],
  },
  "services/tourism": {
    type: "services", title: "Туристические услуги",
    subtitle: "Прокат туристического снаряжения, лодок и катамарана",
    image: image("tourism.jpg"),
    description: "Прокат туристического снаряжения и оборудования для отдыха. Наличие и условия аренды уточняйте заранее.",
    sections: [
      { title: "Что можно взять напрокат", text: "Уточните доступность на выбранные даты:", items: ["Туристическое снаряжение", "Лодки", "Катамаран"] },
      { title: "Перед поездкой", text: "Заранее согласуйте наличие оборудования, срок проката, порядок получения и возврата." },
    ],
    related: [{ label: "Агроусадьба «Припять»", href: "#/services/agroestate" }],
  },
}

export default function ContentPage({ content }: { content: ContentInfo }) {
  const isCatalog = content.type === "catalog"
  return (
    <main className="direction-detail content-detail">
      <section className="direction-detail__hero">
        <img src={content.image} alt={content.title} />
        <div className="direction-detail__shade" />
        <div className="container direction-detail__hero-content">
          <a className="direction-detail__back" href={isCatalog ? "#sale" : "#services"}>← {isCatalog ? "К продаже" : "К услугам"}</a>
          <span className="eyebrow">ТЕХНОУСАДЬБА · Петриков</span>
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>
          <a className="button button--light" href="tel:+375298417438">Уточнить условия <span aria-hidden="true">→</span></a>
        </div>
      </section>
      <section className="section direction-detail__body">
        <div className="container direction-detail__layout">
          <article className="direction-detail__main">
            <span className="eyebrow">{isCatalog ? "Продажа" : "Услуги"}</span>
            <h2>{content.title}</h2>
            <p className="direction-detail__lead">{content.description}</p>
            {content.sections.map(section => (
              <section className="direction-detail__section" key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
                {section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
              </section>
            ))}
            {content.related && <div className="content-related">
              <h3>Также может быть полезно</h3>
              <ImageLinkCards items={content.related} />
            </div>}
          </article>
          <aside className="direction-detail__aside">
            <span className="eyebrow">Есть вопросы?</span>
            <h3>{isCatalog ? "Уточнить наличие и доставку" : "Обсудим вашу задачу"}</h3>
            <p>Позвоните нам, чтобы уточнить стоимость, наличие и условия.</p>
            <a className="button button--primary" href="tel:+375298417438">+375 29 841-74-38</a>
            <a className="direction-detail__phone" href="tel:+375295699510">+375 29 569-95-10</a>
          </aside>
        </div>
      </section>
      <PhotoGallery title={content.title} images={[content.image.replace(`${import.meta.env.BASE_URL}images/`, ""), ...(content.type === "catalog" ? ["sand.jpg", "granite.jpg", "screenings.jpg", "metal.jpg", "feed.webp"] : ["dump-truck.webp", "crane.jpg", "trailer.jpg", "front_mtz.jpg", "amcodor.jpg", "usadba.jpg", "sawmill.jpg", "tourism.jpg"])]} />
      <ContactSection />
    </main>
  )
}
