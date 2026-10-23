import { ContactSection, ImageLinkCards, PhotoGallery } from "./DetailExtras"
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
            {slug === "special-machinery" && (
              <div className="content-related">
                <h3>Выберите технику</h3>
                <ImageLinkCards items={[
                  { label: "Грузовой самосвал", href: "#/services/dump-truck" },
                  { label: "Автокран", href: "#/services/mobile-crane" },
                  { label: "Прокат прицепа МЗСА", href: "#/services/trailer-rental" },
                  { label: "Фронтальный погрузчик", href: "#/services/front-loader" },
                  { label: "Мини-экскаватор-погрузчик", href: "#/services/backhoe-loader" },
                  { label: "Фронтальный погрузчик АМКОДОР", href: "#/services/amkodor-loader" },
                ]} />
              </div>
            )}
            {slug === "building-materials" && (
              <div className="content-related">
                <h3>Материалы в продаже</h3>
                <ImageLinkCards items={[
                  { label: "Песок строительный", href: "#/catalog/sand" },
                  { label: "Щебень гранитный", href: "#/catalog/crushed-stone" },
                  { label: "Отсев", href: "#/catalog/screenings" },
                ]} />
              </div>
            )}
            {slug === "metal-products" && (
              <div className="content-related">
                <h3>Каталог металлопроката</h3>
                <ImageLinkCards items={[{ label: "Металлопрокат", href: "#/catalog/metal" }]} />
              </div>
            )}
            {slug === "animal-feed" && (
              <div className="content-related">
                <h3>Комбикорма в продаже</h3>
                <ImageLinkCards items={[{ label: "Комбикорма", href: "#/catalog/feed" }]} />
              </div>
            )}
            {slug === "guest-house" && (
              <div className="content-related">
                <h3>Планируете отдых?</h3>
                <ImageLinkCards items={[{ label: "Агроусадьба «Припять»", href: "#/services/agroestate" }, { label: "Туристические услуги", href: "#/services/tourism" }]} />
              </div>
            )}
          </article>
          <aside className="direction-detail__aside">
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
          <ImageLinkCards items={otherDirections.filter((item) => item.slug !== slug).map((item) => ({ label: item.label, href: item.slug === "guest-house" ? "#/services/agroestate" : `#/directions/${item.slug}` }))} />
        </div>
      </section>
      <PhotoGallery title={direction.title} images={[direction.image.replace(`${import.meta.env.BASE_URL}images/`, ""), ...(slug === "building-materials" ? ["sand.jpg", "granite.jpg", "screenings.jpg"] : slug === "metal-products" ? ["metal.jpg", "gear.jpg"] : slug === "animal-feed" ? ["feed.webp"] : slug === "special-machinery" ? ["dump-truck.webp", "crane.jpg", "trailer.jpg", "front_mtz.jpg", "mini-excavator.jpg", "amcodor.jpg"] : slug === "guest-house" ? ["usadba.jpg", "estate-bedroom.jpg", "estate-living.jpg", "bath.jpg", "tourism.jpg"] : slug === "sawmill" ? ["sawmill.jpg"] : ["tourism.jpg", "gear.jpg"])]} />
      <ContactSection />
    </main>
  )
}
