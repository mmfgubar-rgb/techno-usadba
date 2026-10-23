import { FormEvent, useState } from "react"

const image = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

const imageByLabel: Record<string, string> = {
  "Песок строительный": "sand.jpg", "Щебень гранитный": "granite.jpg", "Отсев": "screenings.jpg",
  "Комбикорма": "feed.webp", "Металлопрокат": "metal.jpg", "Грузовой самосвал": "dump-truck.webp",
  "Автокран": "crane.jpg", "Прокат прицепа МЗСА": "trailer.jpg", "Фронтальный погрузчик": "front_mtz.jpg",
  "Мини-экскаватор-погрузчик": "mini-excavator.jpg", "Фронтальный погрузчик АМКОДОР": "amcodor.jpg",
  "Пилорама": "sawmill.jpg", "Агроусадьба «Припять»": "usadba.jpg", "Агроусадьба и баня": "estate-living.jpg",
  "Туристические услуги": "tourism.jpg", "Туристический прокат": "gear.jpg", "Аренда спецтехники": "crane.jpg",
  "Строительные материалы": "sand.jpg", "Направление «Металлопрокат»": "metal.jpg", "Все направления": "feed.webp",
}

export function ImageLinkCards({ items }: { items: { label: string; href: string }[] }) {
  return <div className="visual-link-grid">
    {items.map((item) => <a className="visual-link-card" href={item.href} key={item.href}>
      <img src={image(imageByLabel[item.label] || "gear.jpg")} alt="" loading="lazy" />
      <span className="visual-link-card__shade" />
      <strong>{item.label}</strong><span className="visual-link-card__arrow" aria-hidden="true">↗</span>
    </a>)}
  </div>
}

export function ContactSection() {
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true) }
  return <section className="contacts section" id="contacts">
    <div className="container contacts__grid">
      <div className="contacts__info"><span className="eyebrow">Контакты</span><h2>Обсудим вашу задачу</h2>
        <p className="contacts__lead">Позвоните нам или оставьте номер — подскажем по товарам, технике и отдыху.</p>
        <div className="contact-item"><span className="contact-item__icon">☎</span><div><small>Телефоны</small><a href="tel:+375298417438">+375 29 841-74-38 (Viber)</a><a href="tel:+375296599510">+375 29 659-95-10</a></div></div>
        <div className="contact-item"><span className="contact-item__icon">⌖</span><div><small>Адрес</small><address>старая база КБО, ул. Карла Маркса, 80к4, г. Петриков, Гомельская область, 247914, Беларусь</address></div></div>
        <a className="map-placeholder" href="https://yandex.by/maps/-/CXBObByv" target="_blank" rel="noreferrer"><span style={{fontSize:28}}>⌖</span><span>Открыть карту проезда</span></a>
      </div>
      <div className="contacts__form-wrap"><div className="form-title"><span>Обратная связь</span><h3>Оставьте заявку</h3></div>
        <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Ваше имя<input name="name" placeholder="Как к вам обращаться" required /></label><label>Телефон<input name="phone" pattern="[+0-9 ()-]{7,}" placeholder="+375" required type="tel" /></label></div><label>Сообщение<textarea name="message" placeholder="Кратко опишите, что вас интересует" required rows={4} /></label><label className="consent"><input name="consent" required type="checkbox" /><span>Я согласен(на) на обработку персональных данных для обратной связи</span></label><button className="button button--primary" type="submit">Отправить заявку</button><p aria-live="polite" className={`form-note ${sent ? "is-success" : ""}`}>{sent ? "Заявка заполнена. Для отправки необходимо подключить обработчик формы." : "Перезвоним по указанному номеру после подключения обработчика формы."}</p></form>
      </div>
    </div>
  </section>
}
