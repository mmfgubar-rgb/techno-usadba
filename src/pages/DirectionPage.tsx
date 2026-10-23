import { FormEvent, useState } from "react"
import { directionDetails, type DirectionSlug } from "../data/directions"

export { directionDetails }
export type { DirectionSlug }


function ContactForm() {
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Ваше имя<input name="name" placeholder="Как к вам обращаться" required /></label>
        <label>Телефон<input name="phone" pattern="[+0-9 ()-]{7,}" placeholder="+375" required type="tel" /></label>
      </div>
      <label>Сообщение<textarea name="message" placeholder="Кратко опишите, что вас интересует" required rows={4} /></label>
      <label className="consent"><input name="consent" required type="checkbox" /><span>Я согласен(на) на обработку персональных данных для обратной связи</span></label>
      <button className="button button--primary" type="submit">Отправить заявку</button>
      <p aria-live="polite" className={`form-note ${sent ? "is-success" : ""}`}>{sent ? "Демонстрация: форма заполнена. Для отправки нужно подключить обработчик." : "Перезвоним по указанному номеру после подключения обработчика формы."}</p>
    </form>
  )
}

export default function DirectionPage({ slug }: { slug: DirectionSlug }) {
  const direction = directionDetails[slug]

  return (
    <main className="direction-detail">
      <section className="direction-detail__hero">
        <img src={direction.image} alt={direction.title} />
        <div className="direction-detail__shade" />
        <div className="container direction-detail__hero-content">
          <a className="direction-detail__back" href="#directions">← Все направления</a>
          <span className="eyebrow">ТЕХНОУСАДЬБА · Петриков</span>
          <h1>{direction.title}</h1>
          <p>{direction.subtitle}</p>
          <a className="button button--light" href="#contacts">Уточнить условия <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="section direction-detail__body">
        <div className="container">
          <div className="direction-catalog__intro">
            <span className="eyebrow">Наш ассортимент</span>
            <h2>{direction.title}</h2>
            <p>{direction.description}</p>
          </div>
          <div className="direction-catalog__grid">
            {direction.cards.map((card) => (
              <article className="direction-item-card" key={card.title}>
                <div className="direction-item-card__image">
                  <img src={card.image} alt={card.title} loading="lazy" />
                </div>
                <div className="direction-item-card__body">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a href="tel:+375298417438">Уточнить по телефону <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contacts section direction-contacts" id="contacts">
        <div className="container contacts__grid">
          <div className="contacts__info">
            <span className="eyebrow">Контакты</span>
            <h2>Обсудим вашу задачу</h2>
            <p className="contacts__lead">Позвоните нам, чтобы уточнить наличие, стоимость и условия заказа.</p>
            <div className="contact-item">
              <span className="contact-item__icon"><span aria-hidden="true">☎</span></span>
              <div><small>Телефоны</small><a href="tel:+375298417438">+375 29 841-74-38 (Viber)</a><a href="tel:+375296599510">+375 29 659-95-10</a></div>
            </div>
            <div className="contact-item">
              <span className="contact-item__icon"><span aria-hidden="true">⌖</span></span>
              <div><small>Адрес</small><address>старая база КБО, ул. Карла Маркса, 80к4, г. Петриков, Гомельская область, 247914, Беларусь</address></div>
            </div>
            <a className="button button--primary direction-contacts__call" href="tel:+375298417438">Позвонить нам</a>
          </div>
          <div className="contacts__form-wrap">
            <div className="form-title"><span>Обратная связь</span><h3>Оставьте заявку</h3></div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
