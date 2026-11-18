import '../style/AboutUs.css';
import AboutUsImage from '../assets/AboutUs.png';

const VALUES = [
  {
    title: 'Diseño con propósito',
    text: 'Transformamos ideas y referencias en espacios coherentes y bien resueltos.',
  },
  {
    title: 'Acompañamiento constante',
    text: 'Reuniones de seguimiento semanales durante todo el proceso.',
  },
  {
    title: 'Visión integral',
    text: 'Del anteproyecto a los planos constructivos, permisos y presupuesto de obra.',
  },
];

export default function AboutUs({
  image = AboutUsImage,
  logo = '/VARQS.png',
}) {
  return (
    <section className="about" id="about">
      <div className="about__media">
        <img
          src={image}
          alt="Antonio y Gabriel, arquitectos fundadores de VARQS Studio"
        />
        <div className="about__brand">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="about__content">
        <h2 className="about__title" tabIndex={0}>
          Quiénes somos
        </h2>

        <p className="about__lead">
          Somos Antonio y Gabriel, dos Arquitectos graduados de la Universidad de
          Costa Rica. Nos especializamos en diseño residencial desde cero para
          viviendas entre 50&nbsp;m² y 400&nbsp;m², con propuestas contemporáneas
          que equilibran funcionalidad, estética y viabilidad constructiva.
          Nuestro enfoque combina arquitectura tropical y minimalista, adaptando
          cada proyecto a la realidad económica y necesidades de quienes lo
          habitan.
        </p>

        <ul className="about__list">
          {VALUES.map(({ title, text }, index) => (
            <li
              key={title}
              className="about__item reveal"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}