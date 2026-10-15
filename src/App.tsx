import { FormEvent, ReactNode, useState } from "react"

const image = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

type IconName = "arrow" | "check" | "chevron" | "close" | "location" | "menu" | "phone" | "tractor"

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />
    ),
    tractor: (
      <>
        <circle cx="7" cy="17" r="3" />
        <circle cx="18" cy="17" r="2" />
        <path d="M10 17h6M4 14V8h7l3 6h6l2 3h-2M7 8V5h5v3" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand ${inverse ? "brand--inverse" : ""}`} href="#top">
      <span className="brand__mark">
        <Icon name="tractor" size={25} />
      </span>
      <span className="brand__text">
        <strong>ТЕХНОУСАДЬБА</strong>
        <small>Петриков</small>
      </span>
    </a>
  )
}

function Button({
  children,
  href,
  kind = "primary",
  type,
}: {
  children: ReactNode
  href?: string
  kind?: "primary" | "secondary" | "light" | "text"
  type?: "button" | "submit"
}) {
  const className = `button button--${kind}`
  return href ? (
    <a className={className} href={href}>
      {children}
    </a>
  ) : (
    <button className={className} type={type ?? "button"}>
      {children}
    </button>
  )
}

const directions = [
  {
    title: "Строительные материалы",
    text: "Песок, щебень и отсев",
    image: image("sand.jpg"),
    href: "#sale",
  },
  {
    title: "Металлопрокат",
    text: "Труба, арматура, лист и другое",
    image: image("metal.jpg"),
    href: "#sale",
  },
  {
    title: "Комбикорма",
    text: "Молотые и гранулированные",
    image: image("feed.webp"),
    href: "#sale",
  },
  {
    title: "Аренда спецтехники",
    text: "Техника для разных видов работ",
    image: image("loader.png"),
    href: "#services",
  },
  {
    title: "Пилорама",
    text: "Распиловка древесины",
    image: image("sawmill.jpg"),
    href: "#services",
  },
  {
    title: "Агроусадьба и баня",
    text: "Отдых рядом с рекой Припять",
    image: image("estate-living.jpg"),
    href: "#rest",
  },
  {
    title: "Туристический прокат",
    text: "Экипировка, лодки и катамаран",
    image: image("tourism.jpg"),
    href: "#services",
  },
]

const products = [
  {
    name: "Песок строительный",
    description: "Для выполнения строительных работ и подсыпки",
    image: image("sand.jpg"),
  },
  {
    name: "Щебень гранитный",
    description: "Гранитный щебень разной фракции",
    image: image("granite.jpg"),
  },
  {
    name: "Отсев",
    description: "Мелкий сыпучий материал с размером зёрен от 0 до 5 мм",
    image: image("screenings.jpg"),
  },
  {
    name: "Комбикорма",
    description:
      "Корма для домашнего хозяйства, молотые и гранулированные в ассортименте",
    image: image("feed.webp"),
  },
  {
    name: "Металлопрокат",
    description: "Профильная труба, арматура, уголок, лист и другая продукция",
    image: image("metal.jpg"),
  },
]

const services = [
  {
    name: "Фронтальный погрузчик",
    details: "Погрузка, разгрузка, планировка грунта, расчистка снега",
    image: image("loader.png"),
  },
  {
    name: "Грузовой самосвал",
    details: "10 тонн · доставка сыпучих материалов с самосвальной выгрузкой",
    image: image("dump-truck.webp"),
  },
  {
    name: "Автокран",
    details: "Грузоподъёмность 10 тонн · вылет стрелы 15 метров",
    image: image("crane.jpg"),
  },
  {
    name: "Мини-экскаватор-погрузчик",
    details: "Грузоподъёмность 400 кг · глубина копания 1,5 метра",
    image: image("mini-excavator.jpg"),
  },
  {
    name: "Прокат прицепа МЗСА",
    details: "2,45 × 1,51 м · грузоподъёмность до 750 кг",
    image: image("trailer.jpg"),
  },
  {
    name: "Пилорама",
    details: "Распиловка древесины · доставка и реализация опилок",
    image: image("sawmill.jpg"),
  },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header__inner">
        <Brand />
        <nav aria-label="Основная навигация" className="desktop-nav">
          <a className="is-active" href="#top">
            Главная
          </a>
          <a href="#sale">Продажа</a>
          <a href="#services">Услуги</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="header__actions">
          <a className="header__phone" href="tel:+375298417438">
            <Icon name="phone" size={17} />
            +375 29 841-74-38
          </a>
          <Button href="#contacts">Связаться</Button>
        </div>
        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <Icon name={isOpen ? "close" : "menu"} size={25} />
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <nav aria-label="Мобильная навигация">
            {[
              ["#top", "Главная"],
              ["#sale", "Продажа"],
              ["#services", "Услуги"],
              ["#contacts", "Контакты"],
            ].map(([href, label]) => (
              <a href={href} key={href} onClick={() => setIsOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a className="mobile-menu__phone" href="tel:+375298417438">
            <Icon name="phone" size={18} />
            +375 29 841-74-38
          </a>
        </div>
      )}
    </header>
  )
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string
  title: string
  text?: string
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Ваше имя
          <input name="name" placeholder="Как к вам обращаться" required />
        </label>
        <label>
          Телефон
          <input
            name="phone"
            pattern="[+0-9 ()-]{7,}"
            placeholder="+375"
            required
            type="tel"
          />
        </label>
      </div>
      <label>
        Сообщение
        <textarea
          name="message"
          placeholder="Кратко опишите, что вас интересует"
          required
          rows={4}
        />
      </label>
      <label className="consent">
        <input name="consent" required type="checkbox" />
        <span>
          Я согласен(на) на обработку персональных данных для обратной связи
        </span>
      </label>
      <Button type="submit">Отправить заявку</Button>
      <p aria-live="polite" className={`form-note ${sent ? "is-success" : ""}`}>
        {sent ? (
          <>
            <Icon name="check" size={18} />
            Демонстрация: форма заполнена. Для отправки нужно подключить
            обработчик.
          </>
        ) : (
          "Перезвоним по указанному номеру после подключения обработчика формы."
        )}
      </p>
    </form>
  )
}

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <section className="hero">
          <img
            alt="Направления работы компании: строительство и загородный отдых"
            className="hero__image"
            src={image("hero-enterprise.jpg")}
          />
          <div className="hero__shade" />
          <div className="container hero__content">
            <span className="hero__location">
              <Icon name="location" size={17} />
              Петриков, Беларусь
            </span>
            <h1>ТЕХНОУСАДЬБА</h1>
            <p className="hero__tagline">Территория возможностей</p>
            <p className="hero__intro">
              Строительные материалы, металлопрокат, комбикорма, аренда
              спецтехники, пилорама и загородный отдых в одном месте.
            </p>
            <div className="hero__actions">
              <Button href="#directions" kind="light">
                Наши товары и услуги
                <Icon name="arrow" size={19} />
              </Button>
              <Button href="#contacts" kind="secondary">
                Связаться с нами
              </Button>
            </div>
          </div>
          <div className="hero__scroll">
            <span>Листайте вниз</span>
            <span className="hero__scroll-line" />
          </div>
        </section>

        <section className="directions section" id="directions">
          <div className="container">
            <div className="heading-row">
              <SectionHeading
                eyebrow="Всё необходимое рядом"
                text="Решаем практические задачи: от материалов и техники до отдыха на природе."
                title="Направления деятельности"
              />
              <Button href="#contacts" kind="text">
                Обсудить задачу
                <Icon name="arrow" size={18} />
              </Button>
            </div>
            <div className="directions-grid">
              {directions.map((item, index) => (
                <a
                  className={`direction-card direction-card--${index + 1}`}
                  href={item.href}
                  key={item.title}
                >
                  <img alt="" src={item.image} />
                  <span className="direction-card__shade" />
                  <span className="direction-card__content">
                    <small>{item.text}</small>
                    <strong>{item.title}</strong>
                    <span className="circle-arrow">
                      <Icon name="arrow" size={19} />
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sale section" id="sale">
          <div className="container">
            <div className="heading-row heading-row--light">
              <SectionHeading
                eyebrow="Продажа"
                text="Актуальное наличие и условия покупки уточняйте по телефону."
                title="Материалы для ваших задач"
              />
              <Button href="tel:+375298417438" kind="secondary">
                <Icon name="phone" size={18} />
                Уточнить наличие
              </Button>
            </div>
            <div className="products-grid">
              {products.map((item) => (
                <article className="product-card" key={item.name}>
                  <div className="product-card__image">
                    <img alt={item.name} loading="lazy" src={item.image} />
                  </div>
                  <div className="product-card__body">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a href="tel:+375298417438">
                      Уточнить наличие
                      <Icon name="chevron" size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="metal-note">
              <div>
                <span className="eyebrow">Металлопрокат в ассортименте</span>
                <h3>Подберём нужный вид продукции</h3>
              </div>
              <p>
                Профильная труба, сварная оцинкованная сетка, шестигранник,
                арматура, металлические круги, уголок, оцинкованный,
                горячекатаный и холоднокатаный лист, металлическая полоса.
              </p>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="heading-row">
              <SectionHeading
                eyebrow="Услуги"
                text="Каждый вид техники представлен отдельно — выбирайте подходящий под вашу задачу."
                title="Техника и производственные услуги"
              />
              <Button href="tel:+375295699510" kind="text">
                Позвонить
                <Icon name="phone" size={17} />
              </Button>
            </div>
            <div className="services-grid">
              {services.map((item, index) => (
                <article className="service-card" key={item.name}>
                  <div className="service-card__image">
                    <img alt={item.name} loading="lazy" src={item.image} />
                    <span>0{index + 1}</span>
                  </div>
                  <div className="service-card__body">
                    <h3>{item.name}</h3>
                    <p>{item.details}</p>
                    <Button href="#contacts" kind="text">
                      Оставить заявку
                      <Icon name="arrow" size={18} />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
            <div className="tourism-strip">
              <img alt="Туристическое снаряжение" src={image("gear.jpg")} />
              <div>
                <span className="eyebrow">Для активного отдыха</span>
                <h3>Прокат туристической экипировки</h3>
                <p>
                  Туристическая экипировка, снаряжение для активного отдыха,
                  прокат лодок и катамарана.
                </p>
              </div>
              <Button href="#contacts">Узнать подробнее</Button>
            </div>
          </div>
        </section>

        <section className="rest section" id="rest">
          <div className="container rest__grid">
            <div className="rest__image-wrap">
              <img
                alt="Интерьер дома для отдыха"
                className="rest__image"
                loading="lazy"
                src={image("estate-living.jpg")}
              />
              <div className="rest__small-image">
                <img
                  alt="Комната агроусадьбы"
                  loading="lazy"
                  src={image("estate-bedroom.jpg")}
                />
              </div>
            </div>
            <div className="rest__content">
              <span className="eyebrow">Отдых в Макаричах</span>
              <h2>Агроусадьба рядом с рекой Припять</h2>
              <p>
                Дом для отдыха со всеми удобствами и баня — место, где можно
                сменить городской ритм на тишину и природу.
              </p>
              <ul>
                {["Дом со всеми удобствами", "Баня", "Рядом река Припять"].map(
                  (x) => (
                    <li key={x}>
                      <Icon name="check" size={18} />
                      {x}
                    </li>
                  ),
                )}
              </ul>
              <Button href="#contacts">
                Связаться по отдыху
                <Icon name="arrow" size={18} />
              </Button>
            </div>
          </div>
        </section>

        <section className="practical">
          <div className="container practical__grid">
            {[
              [
                "01",
                "Разные направления",
                "Материалы, техника, производство и отдых в одной компании.",
              ],
              [
                "02",
                "Понятный выбор",
                "Каждая категория и услуга представлена отдельно.",
              ],
              [
                "03",
                "Прямая связь",
                "Уточняйте наличие и детали напрямую по телефону.",
              ],
            ].map(([n, t, p]) => (
              <div key={n}>
                <span className="practical__number">{n}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contacts section" id="contacts">
          <div className="container contacts__grid">
            <div className="contacts__info">
              <span className="eyebrow">Контакты</span>
              <h2>Обсудим вашу задачу</h2>
              <p className="contacts__lead">
                Позвоните нам или оставьте номер — подскажем по товарам, технике
                и отдыху.
              </p>
              <div className="contact-item">
                <span className="contact-item__icon">
                  <Icon name="phone" />
                </span>
                <div>
                  <small>Телефоны</small>
                  <a href="tel:+375298417438">+375 29 841-74-38 (Viber)</a>
                  <a href="tel:+375295699510">+375 29 569-95-10</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item__icon">
                  <Icon name="location" />
                </span>
                <div>
                  <small>Адрес</small>
                  <address>
                    старая база КБО, ул. Карла Маркса, 80к4, г. Петриков,
                    Гомельская область, 247914, Беларусь
                  </address>
                </div>
              </div>
              <div className="map-placeholder">
                <Icon name="location" size={28} />
                <span>Место для подключения карты</span>
              </div>
            </div>
            <div className="contacts__form-wrap">
              <div className="form-title">
                <span>Обратная связь</span>
                <h3>Оставьте заявку</h3>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer__top">
          <Brand inverse />
          <nav aria-label="Навигация в подвале">
            <a href="#top">Главная</a>
            <a href="#sale">Продажа</a>
            <a href="#services">Услуги</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <a className="footer__phone" href="tel:+375298417438">
            <small>Связаться с нами</small>+375 29 841-74-38
          </a>
        </div>
        <div className="container footer__bottom">
          <span>© 2026 ТЕХНОУСАДЬБА</span>
          <span>Петриков, Беларусь</span>
        </div>
      </footer>
    </div>
  )
}
