import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Newspaper,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { ReceiptForm } from "./receipt-form";
import { notice } from "@/lib/notice";

export default function Home() {
  return (
    <>
      <header className="header header-compact">
        <div className="brand-lockup">
          <a className="wordmark" href="https://emizor.com/" aria-label="Ir al sitio principal de EMIZOR">
            <img src="/emizor-logo-transparent.png" alt="EMIZOR — expertos en facturación" width="2170" height="725" />
          </a>
          <span className="brand-divider" aria-hidden="true" />
          <a className="news-title" href="#inicio" aria-label="Ir al inicio de Novedades EMIZOR">
            <Newspaper size={19} aria-hidden="true" />
            <span>Novedades</span>
          </a>
        </div>
        <a className="back-to-emizor" href="https://emizor.com/">
          <ArrowLeft size={16} aria-hidden="true" /> Volver a EMIZOR
        </a>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="featured-title">
          <div className="hero-inner">
            <div className="eyebrow">NOVEDAD DESTACADA <span>NORMATIVA</span></div>
            <div className="hero-grid">
              <div>
                <h1 id="featured-title">EMIZOR avanza en la adecuación<br /><em>a la Ley N.º 1733.</em></h1>
                <p className="hero-copy">
                  Trabajamos en los ajustes de nuestro sistema conforme a los lineamientos del SIN. Consulta aquí el estado del proceso, las etapas previstas y la información oficial.
                </p>
                <div className="hero-actions">
                  <a className="hero-link" href="#etapas">Ver estado de la adecuación <ArrowDown size={18} /></a>
                  <a className="hero-secondary" href="#recepcion">Recibir actualizaciones <ArrowUpRight size={16} /></a>
                </div>
              </div>
              <aside className="status-card" aria-label="Estado actual de la adecuación">
                <ShieldCheck size={34} strokeWidth={1.5} />
                <p className="small-title">ESTADO DE EMIZOR</p>
                <h2>Adecuación<br />en curso</h2>
                <p>Nuestro compromiso es acompañarte con información clara durante la transición.</p>
                <div className="status-foot">Última actualización<br /><strong>15 de septiembre de 2026</strong></div>
              </aside>
            </div>
          </div>
        </section>

        <div className="meta-bar" aria-label="Datos de la publicación">
          <span>NOVEDADES EMIZOR · COMUNICADO A CLIENTES</span>
          <span>15 SEP 2026 <span className="meta-divider">/</span> VERSIÓN 1.2</span>
        </div>

        <article className="featured-story">
          <section className="section process" id="etapas" aria-labelledby="process-title">
            <div className="section-heading">
              <span className="section-kicker">01 / ESTADO DE LA ADECUACIÓN</span>
              <h2 id="process-title">Avanzamos contigo, paso a paso.</h2>
              <p className="process-intro">Este es el progreso de EMIZOR frente a los cambios de la Ley N.º 1733.</p>
            </div>
            <ol className="process-line">
              <li className="step-complete">
                <span className="step-marker">01</span><span className="stage-label">Completada</span>
                <h3>Revisión normativa</h3><p>Análisis de la documentación y de los requisitos técnicos del SIN.</p>
              </li>
              <li className="step-current" aria-current="step">
                <span className="step-marker">02</span><span className="step-badge">En curso</span>
                <h3>Desarrollo de ajustes</h3><p>Adaptación del sistema de facturación a los nuevos requerimientos.</p>
              </li>
              <li>
                <span className="step-marker">03</span><span className="stage-label">Pendiente</span>
                <h3>Pruebas piloto</h3><p>Validación de los cambios en el ambiente de pruebas del SIN.</p>
              </li>
              <li>
                <span className="step-marker">04</span><span className="stage-label">Pendiente</span>
                <h3>Adecuación finalizada</h3><p>Cierre satisfactorio de las validaciones y comunicación de la disponibilidad.</p>
              </li>
            </ol>
            <p className="process-note">La puesta en operación se comunicará conforme a las disposiciones aplicables del SIN.</p>
          </section>

          <section className="content-grid section client-guidance" id="comunicado">
            <div className="section-label">
              <span>02 / LO QUE NECESITAS SABER</span>
              <h2>Te mantenemos<br />informado.</h2>
            </div>
            <div>
              <article className="letter">
                {notice.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                <div className="next-step">
                  <h3>¿Qué debes hacer ahora?</h3>
                  <p>Mantente atento a las próximas comunicaciones de EMIZOR. Publicaremos aquí los avances, fechas y acciones que correspondan para todos nuestros clientes.</p>
                  <a href="#recepcion">Recibir actualizaciones <ArrowUpRight size={16} /></a>
                </div>
                <div className="signature"><strong>Equipo EMIZOR</strong></div>
              </article>
            </div>
          </section>

          <section className="reception-wrap" id="recepcion">
            <div className="section content-grid reception">
              <div className="section-label">
                <span>03 / SIGUE ESTA ACTUALIZACIÓN</span>
                <h2>Recibe novedades<br />sobre este proceso.</h2>
                <p>Déjanos tus datos para recibir avances sobre la adecuación, las pruebas piloto y los próximos pasos.</p>
                <p className="privacy">Usaremos tus datos para comunicarte novedades sobre la adecuación a la Ley N.º 1733. Puedes solicitar la actualización de tus datos o dejar de recibir estas comunicaciones escribiendo a <a href="mailto:contacto@emizor.com">contacto@emizor.com</a>.</p>
              </div>
              <ReceiptForm />
            </div>
          </section>

          <section id="normativa" className="section content-grid">
            <div className="section-label">
              <span>04 / FUENTES OFICIALES</span>
              <h2>Qué cambia.<br />Qué significa.</h2>
              <p>Referencias oficiales para entender el proceso.</p>
            </div>
            <div className="regulations">
              <div className="regulation">
                <span className="number">01</span>
                <div>
                  <h3>El IVA se muestra por separado</h3>
                  <p>La Disposición Adicional Segunda de la Ley N.º 1733 modifica el artículo 5 de la Ley N.º 843: el precio neto corresponde al valor antes de impuestos y el IVA debe figurar separado en la factura.</p>
                  <a href={notice.sources.law} target="_blank" rel="noopener noreferrer">Consultar Ley N.º 1733 · SIN <ArrowUpRight size={15} /></a>
                </div>
              </div>
              <div className="regulation">
                <span className="number">02</span>
                <div>
                  <h3>La preparación técnica tiene su propio calendario</h3>
                  <p>La RND N.º 102600000034 establece el período del <strong>1 de octubre al 16 de noviembre de 2026</strong> para la adecuación al anexo técnico, el inicio de pruebas en ambiente piloto y la posterior autorización de sistemas.</p>
                  <a href={notice.sources.rnd} target="_blank" rel="noopener noreferrer">Consultar resolución del SIN <ArrowUpRight size={15} /></a>
                </div>
              </div>
              <div className="regulation">
                <span className="number">03</span>
                <div>
                  <h3>El anexo técnico está en construcción</h3>
                  <p>El portal técnico del SIN contempla cambios en documentos, formatos, datos y validaciones para el IVA Transparente. Las especificaciones pueden actualizarse durante este proceso.</p>
                  <a href={notice.sources.annex} target="_blank" rel="noopener noreferrer">Consultar anexo técnico · SIN <ArrowUpRight size={15} /></a>
                </div>
              </div>
              <div className="clarification">
                <strong>Una diferencia importante</strong>
                <p>El período de pruebas no equivale, por sí solo, a la entrada en vigencia del nuevo cálculo del IVA. La ley vincula esa vigencia al primer día del mes siguiente a la publicación de su decreto reglamentario. La RND mantiene el marco de facturación de la RND N.º 102100000011 hasta la publicación de la resolución que implemente los cambios.</p>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer className="contact-footer" id="contacto">
        <div className="footer-heading">
          <a href="https://emizor.com/" className="wordmark">
            <img src="/emizor-logo-transparent.png" alt="EMIZOR — expertos en facturación" width="2170" height="725" />
          </a>
          <div><h2>¿Tienes alguna consulta?</h2><p>Estamos para ayudarte. Comunícate con nuestro equipo.</p></div>
        </div>
        <div className="footer-contact-grid">
          <section aria-labelledby="contact-channels">
            <h3 id="contact-channels">Contáctanos</h3>
            <a href="tel:+59172027287"><Phone size={18} aria-hidden="true" /><span><strong>Soporte</strong>+591 72027287</span></a>
            <a href="tel:+591800101404"><Phone size={18} aria-hidden="true" /><span><strong>Ventas</strong>+591 800 10 1404</span></a>
            <a href="tel:+59171558908"><Phone size={18} aria-hidden="true" /><span><strong>Ventas</strong>+591 71558908</span></a>
            <a href="mailto:contacto@emizor.com"><Mail size={18} aria-hidden="true" /><span>contacto@emizor.com</span></a>
          </section>
          <section aria-labelledby="contact-offices">
            <h3 id="contact-offices">Nuestras oficinas</h3>
            <div className="contact-detail"><MapPin size={18} aria-hidden="true" /><address><strong>La Paz</strong>Avenida 16 de Julio (El Prado), N.º 1456, Edif. Caracas, piso 2, oficina 201.<br />La Paz, Bolivia.</address></div>
            <div className="contact-detail"><MapPin size={18} aria-hidden="true" /><address><strong>Santa Cruz</strong>Calle René Moreno N.º 551, Edif. René Moreno, piso 3 (frente al parqueo del Cine Center).</address></div>
          </section>
          <section aria-labelledby="contact-hours">
            <h3 id="contact-hours">Horarios de atención</h3>
            <div className="contact-detail"><Clock size={18} aria-hidden="true" /><div><strong>Lunes a viernes</strong><p>08:30–18:30</p><strong className="saturday">Sábados</strong><p>09:00–12:00</p></div></div>
          </section>
        </div>
        <div className="footer-bottom">
          <p>EMIZOR · Novedades</p>
          <a href="#inicio">Volver al inicio <ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </>
  );
}
