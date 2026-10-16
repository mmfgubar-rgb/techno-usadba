import { directionDetails, type DirectionSlug } from "../data/directions"

export { directionDetails }
export type { DirectionSlug }

const otherDirections: { slug: DirectionSlug; label: string }[] = [
  { slug: "building-materials", label: "Строительные материалы" },
  { slug: "metal-products", label: "Металлопрокат" },
  { slug: "animal-feed", label: "Комбикорма" },
  { slug: "special-machinery", label: "Аренда спецтехники" },
  { slug: "sawmill", label: "Пилорама" },
  { slug: "guest-house", label: "Агроусадьба и баня" },
  { slug: "tourist-rental", label: "Туристический прокат" },
]

export default function DirectionPage({ slug }: { slug: DirectionSlug }) {
  const direction = directionDetails[slug]

  return (
    <main className="direction-detail">
      <section className="direction-detail__hero">
        <img src={direction.image} alt={direction.title} />
        <div className="direction-detail__shade" />
        <div className="container direction-detail__hero-content">
          <a className="direction-detail__back" href="#directions">
            ← Все направления
          </a>
          <span className="eyebrow">ТЕХНОУСАДЬБА · Петриков</span>
          <h1>{direction.title}</h1>
          <p>{direction.subtitle}</p>
          <a className="button button--light" href="#contacts">
            Уточнить условия <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="section direction-detail__body">
        <div className="container direction-detail__layout">
          <article className="direction-detail__main">
            <span className="eyebrow">Направление деятельности</span>
            <h2>{direction.title}</h2>
            <p className="direction-detail__lead">{direction.description}</p>
            {direction.sections.map((section) => (
              <section className="direction-detail__section" key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
                {section.items && (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </article>
          <aside className="direction-detail__aside" id="contacts">
            <span className="eyebrow">Есть вопросы?</span>
            <h3>Обсудим вашу задачу</h3>
            <p>Позвоните нам, чтобы уточнить наличие, стоимость и условия.</p>
            <a className="button button--primary" href="tel:+375298417438">
              +375 29 841-74-38
            </a>
            <a className="direction-detail__phone" href="tel:+375295699510">
              +375 29 569-95-10
            </a>
          </aside>
        </div>
      </section>

      <section className="direction-detail__more">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Другие направления</span>
            <h2>Чем ещё можем помочь</h2>
          </div>
          <div className="direction-detail__links">
            {otherDirections.filter((item) => item.slug !== slug).map((item) => (
              <a href={`#/directions/${item.slug}`} key={item.slug}>
                {item.label}<span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
