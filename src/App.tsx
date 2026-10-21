import { ReactNode, useEffect, useState } from "react"
import DirectionPage from "./pages/DirectionPage"
import ContactSection from "./ContactSection"
import { directionDetails, type DirectionSlug } from "./data/directions"

const image = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

type IconName = "arrow" | "check" | "chevron" | "close" | "location" | "menu" | "phone" | "tractor"

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
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
    slug: "building-materials",
    href: "#/directions/building-materials",
  },
  {
    title: "Металлопрокат",
    text: "Труба, арматура, лист и другое",
    image: image("metal.jpg"),
    slug: "metal-products",
    href: "#/directions/metal-products",
  },
  {
    title: "Комбикорма",
    text: "Молотые и гранулированные",
    image: image("feed.webp"),
    slug: "animal-feed",
    href: "#/directions/animal-feed",
  },
  {
    title: "Аренда спецтехники",
    text: "Техника для разных видов работ",
    image: image("crane.jpg"),
    slug: "special-machinery",
    href: "#/directions/special-machinery",
  },
  {
    title: "Пилорама",
    text: "Распиловка древесины",
    image: image("sawmill.jpg"),
    slug: "sawmill",
    href: "#/directions/sawmill",
  },
  {
    title: "Агроусадьба и баня",
    text: "Отдых рядом с рекой Припять",
    image: image("estate-living.jpg"),
    slug: "guest-house",
    href: "#/directions/guest-house",
  },
  {
    title: "Туристический прокат",
    text: "Экипировка, лодки и катамаран",
    image: image("tourism.jpg"),
    slug: "tourist-rental",
    href: "#/directions/tourist-rental",
  },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isDetailPage = typeof window !== "undefined" && window.location.hash.startsWith("#/directions/")
  const homeHref = (id: string) => isDetailPage ? `${import.meta.env.BASE_URL}#${id}` : `#${id}`
  return (
    <header className="site-header">
      <div className="container header__inner">
        <Brand />
        <nav aria-label="Основная навигация" className="desktop-nav">
          <a className="is-active" href="#top">
            Главная
          </a>
          <a href={homeHref("directions")}>Направления</a>
          <a href="#/directions/guest-house">Отдых в Макаричах</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="header__actions">
          <a className="header__social-link" href="https://yandex.by/maps/-/CXBObByv" target="_blank" rel="noreferrer" aria-label="Открыть карту" title="Карта"><Icon name="location" size={19} /></a>
          <a className="header__social-link" href="viber://chat?number=%2B375298417438" aria-label="Написать в Viber" title="Viber">V</a>
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
              [homeHref("directions"), "Направления"],
              ["#/directions/guest-house", "Отдых в Макаричах"],
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

function DirectionRoute({ slug }: { slug: string }) {
  const isValidSlug = Object.prototype.hasOwnProperty.call(directionDetails, slug)
  if (!isValidSlug) {
    return (
      <div id="top">
        <Header />
        <main className="direction-detail direction-detail--missing">
          <div className="container">
            <p>Такое направление не найдено.</p>
            <a className="button button--primary" href={`${import.meta.env.BASE_URL}#directions`}>Вернуться к направлениям</a>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div id="top">
      <Header />
      <DirectionPage slug={slug as DirectionSlug} />
      <footer className="footer">
        <div className="container footer__top">
          <Brand inverse />
          <nav aria-label="Навигация в подвале">
            <a href="#top">Главная</a>
            <a href={`${import.meta.env.BASE_URL}#directions`}>Направления</a>
            <a href="#/directions/guest-house">Отдых в Макаричах</a>
            <a href={`${import.meta.env.BASE_URL}#contacts`}>Контакты</a>
          </nav>
          <div className="footer__socials">
            <a href="viber://chat?number=%2B375298417438" aria-label="Написать в Viber" title="Viber">Viber</a>
            <a href="https://yandex.by/maps/-/CXBObByv" target="_blank" rel="noreferrer" aria-label="Открыть карту" title="Карта">Карта ↗</a>
          </div>
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

export default function App() {
  const [currentHash, setCurrentHash] = useState(
    typeof window === "undefined" ? "" : window.location.hash,
  )

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash)
    window.addEventListener("hashchange", syncHash)
    return () => window.removeEventListener("hashchange", syncHash)
  }, [])

  useEffect(() => {
    if (currentHash.startsWith("#/directions/")) {
      // Each detail page should open at the top, not at the previous scroll position.
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      return
    }

    if (!currentHash) return
    const targetId = currentHash.slice(1)
    document.getElementById(targetId)?.scrollIntoView()
  }, [currentHash])

  const detailMatch = currentHash.match(/^#\/directions\/([^/]+)$/)
  const detailSlug = detailMatch?.[1]

  if (detailSlug) {
    return <DirectionRoute slug={detailSlug} />
  }

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
              <Button href="#/directions/guest-house">
                Подробнее об отдыхе
                <Icon name="arrow" size={18} />
              </Button>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <footer className="footer">
        <div className="container footer__top">
          <Brand inverse />
          <nav aria-label="Навигация в подвале">
            <a href="#top">Главная</a>
            <a href="#directions">Направления</a>
          <a href="#rest">Отдых в Макаричах</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <div className="footer__socials">
            <a href="viber://chat?number=%2B375298417438" aria-label="Написать в Viber" title="Viber">Viber</a>
            <a href="https://yandex.by/maps/-/CXBObByv" target="_blank" rel="noreferrer" aria-label="Открыть карту" title="Карта">Карта ↗</a>
          </div>
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
