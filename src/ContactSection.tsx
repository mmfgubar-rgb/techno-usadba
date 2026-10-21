export default function ContactSection() {
  return (
    <section className="contacts section" id="contacts">
      <div className="container contacts__grid contacts__grid--single">
        <div className="contacts__info">
          <span className="eyebrow">Контакты</span>
          <h2>Обсудим вашу задачу</h2>
          <p className="contacts__lead">Позвоните нам, чтобы уточнить наличие товаров, условия аренды техники или детали отдыха.</p>
          <div className="contact-item">
            <span className="contact-item__icon"><PhoneIcon /></span>
            <div><small>Телефоны</small>
              <a href="tel:+375298417438">+375 29 841-74-38 (Viber)</a>
              <a href="tel:+375295699510">+375 29 659-95-10</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-item__icon"><PinIcon /></span>
            <div><small>Адрес</small><address>старая база КБО, ул. Карла Маркса, 80к4, г. Петриков, Гомельская область, 247914, Беларусь</address></div>
          </div>
          <a className="map-placeholder" href="https://yandex.by/maps/-/CXBObByv" target="_blank" rel="noreferrer" aria-label="Открыть местоположение на Яндекс Картах">
            <PinIcon /><span>Открыть на Яндекс Картах ↗</span>
          </a>
        </div>
        <div className="contacts__extra">
          <span className="eyebrow">Техноусадьба · Петриков</span>
          <h3>Товары, техника и отдых</h3>
          <p>Выберите нужное направление или свяжитесь с нами напрямую. Поможем уточнить наличие и условия заказа.</p>
          <a className="button button--primary" href="tel:+375298417438"><PhoneIcon /> Позвонить</a>
        </div>
      </div>
    </section>
  )
}
function PhoneIcon() { return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z"/></svg> }
function PinIcon() { return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg> }
