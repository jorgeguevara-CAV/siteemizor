import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  CircleAlert,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  UserRoundCheck,
} from "lucide-react";
import { ReceiptForm } from "../receipt-form";
import { notice } from "@/lib/notice";

const mainSiteUrl = "/";

export default function Home() {
  return (
    <>
      <header className="main-site-header">
        <div className="main-site-header-inner">
          <a className="main-site-logo" href={mainSiteUrl} aria-label="EMIZOR, ir al inicio">
            <img src="/emizor-logo-transparent.png" alt="EMIZOR — expertos en facturación" width="2170" height="725" />
          </a>
          <nav className="main-desktop-nav" aria-label="Navegación principal">
            <a href="/caracteristicas.html">Características</a>
            <a href="/integraciones.html">Integraciones</a>
            <a href="/nosotros.html">¿Quiénes somos?</a>
            <a href="/novedades/" aria-current="page">Novedades</a>
          </nav>
          <a className="main-header-cta" href="/contacto.html">Solicita una demostración</a>
          <details className="main-mobile-menu">
            <summary>Menú <Menu size={22} aria-hidden="true" /></summary>
            <nav aria-label="Navegación principal móvil">
              <a href="/caracteristicas.html">Características</a>
              <a href="/integraciones.html">Integraciones</a>
              <a href="/nosotros.html">¿Quiénes somos?</a>
              <a href="/contacto.html">Contacto</a>
              <a href="/novedades/" aria-current="page">Novedades</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="featured-title">
          <div className="hero-inner">
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
              <aside className="status-card official-calendar" aria-label="Resumen del estado actual de la adecuación">
                <p className="small-title">Estado actual</p>
                <h2>Adecuación en curso</h2>
                <p>Por el momento, no necesitas realizar cambios. EMIZOR comunicará las acciones cuando correspondan.</p>
                <div className="status-foot"><strong>Próximo hito</strong><br />Pruebas piloto y autorización: 1 de octubre al 16 de noviembre de 2026.</div>
              </aside>
            </div>
          </div>
        </section>

        <div className="meta-bar" aria-label="Datos de la publicación">
          <span>16 SEP 2026 <span className="meta-divider">/</span> VERSIÓN 1.4</span>
        </div>

        <article className="featured-story">
          <section className="section process" id="etapas" aria-labelledby="process-title">
            <div className="section-heading">
              <h2 id="process-title">Avanzamos contigo, paso a paso.</h2>
              <p className="process-intro">Fechas y estados actualizados con base en la documentación publicada por el SIN.</p>
            </div>
            <ol className="process-line">
              <li className="step-current" aria-current="step"><span className="step-badge">En curso</span>
                <span className="stage-date">Aportes hasta el 21 SEP 2026</span>
                <h3>Revisión normativa</h3><p>El Anexo Técnico continúa en construcción. El SIN recibe sugerencias y aportes hasta el 21 de septiembre; esta fecha no implica necesariamente el cierre del documento.</p>
              </li>
              <li className="step-active"><span className="stage-label">En desarrollo</span>
                <span className="stage-date">Según las versiones del anexo</span>
                <h3>Adecuación técnica de EMIZOR</h3><p>Trabajamos sobre las especificaciones disponibles y ajustaremos el desarrollo si el SIN publica nuevas versiones.</p>
              </li>
              <li><span className="stage-label">Programada</span>
                <span className="stage-date">1 OCT — 16 NOV 2026</span>
                <h3>Pruebas piloto y autorización</h3><p>Periodo definido por el SIN para las pruebas en ambiente piloto y el proceso de autorización.</p>
              </li>
              <li><span className="stage-label">Pendiente</span>
                <span className="stage-date">Fecha por confirmar</span>
                <h3>Implementación final</h3><p>La disponibilidad y las acciones para los clientes se comunicarán cuando correspondan.</p>
              </li>
            </ol>
            <p className="process-note">El SIN puede actualizar el Anexo Técnico durante su construcción. EMIZOR actualizará este calendario cuando exista nueva información oficial.</p>
          </section>

          <section className="content-grid section client-guidance" id="comunicado">
            <div className="section-label">
              <h2>Qué corresponde<br />a cada parte.</h2>
            </div>
            <div>
              <article className="letter">
                {notice.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                <div className="current-action">
                  <h3>Por el momento, no debes realizar cambios.</h3>
                  <p>Mantente atento a las próximas comunicaciones de EMIZOR. Informaremos de manera expresa cuándo debas actuar y proporcionaremos las instrucciones, guías y plazos correspondientes.</p>
                </div>
                <div className="responsibility-grid" aria-label="Responsabilidades durante la adecuación">
                  <section>
                    <Building2 size={23} aria-hidden="true" />
                    <h3>Responsabilidad de EMIZOR</h3>
                    <p>Realizar los ajustes que correspondan a nuestra plataforma, validar su funcionamiento y comunicar oportunamente las acciones requeridas a nuestros clientes.</p>
                  </section>
                  <section>
                    <UserRoundCheck size={23} aria-hidden="true" />
                    <h3>Responsabilidad del cliente</h3>
                    <p>Cuando EMIZOR comunique que un ajuste es necesario, cada cliente deberá implementar y validar dentro del plazo informado las modificaciones que se encuentren bajo su control.</p>
                  </section>
                </div>
                <div className="responsibility-detail">
                  <h3>¿Qué puede estar bajo el control del cliente?</h3>
                  <p>Según corresponda a su servicio: configuraciones, datos, catálogos, integraciones, desarrollos propios y procesos internos. Cada comunicación indicará las acciones aplicables.</p>
                </div>
                <div className="compliance-alert">
                  <CircleAlert size={25} aria-hidden="true" />
                  <div>
                    <h3>Importante</h3>
                    <p>No realizar dentro de los plazos informados las modificaciones que correspondan al cliente podría ocasionar rechazos en la emisión de facturas, inconsistencias en la información tributaria, interrupciones operativas u otras contingencias relacionadas con el cumplimiento de la normativa vigente.</p>
                    <p>La disponibilidad de la plataforma EMIZOR no sustituye las obligaciones que corresponden al contribuyente ni las validaciones realizadas por el SIN.</p>
                  </div>
                </div>
                <a className="updates-link" href="#recepcion">Recibir actualizaciones <ArrowUpRight size={16} /></a>
                <div className="signature"><strong>Equipo EMIZOR</strong></div>
              </article>
            </div>
          </section>

          <section className="reception-wrap" id="recepcion">
            <div className="section content-grid reception">
              <div className="section-label">
                <h2>Recibe novedades<br />sobre este proceso.</h2>
                <p>Déjanos tus datos para recibir avances sobre la adecuación, las pruebas piloto y los próximos pasos.</p>
                <p className="privacy">Usaremos tus datos para comunicarte novedades sobre la adecuación a la Ley N.º 1733. Puedes solicitar la actualización de tus datos o dejar de recibir estas comunicaciones escribiendo a <a href="mailto:contacto@emizor.com">contacto@emizor.com</a>.</p>
              </div>
              <ReceiptForm />
            </div>
          </section>

          <section id="normativa" className="section content-grid">
            <div className="section-label">
              <h2>Comunicado<br />y fuentes del SIN.</h2>
              <p>Información oficial que respalda este proceso de adecuación.</p>
            </div>
            <div className="regulations">
              <figure className="sin-communique">
                <img src="/comunicado-sin-ley-1733.png" alt="Comunicado del Servicio de Impuestos Nacionales sobre la preparación y adecuación del Sistema de Facturación a la Ley N.º 1733" width="1254" height="1254" />
                <figcaption>
                  <h3>Preparación y adecuación del Sistema de Facturación</h3>
                  <p>El SIN puso a disposición el Anexo Técnico Ley N.º 1733 para conocer las especificaciones y preparar la implementación. Las pruebas en ambiente piloto y el proceso de autorización están previstos del 1 de octubre al 16 de noviembre de 2026.</p>
                  <div className="official-links">
                    <a href={notice.sources.rnd} target="_blank" rel="noopener noreferrer">Consultar RND N.º 102600000034 <ArrowUpRight size={15} /></a>
                    <a href={notice.sources.annex} target="_blank" rel="noopener noreferrer">Consultar Anexo Técnico <ArrowUpRight size={15} /></a>
                  </div>
                </figcaption>
              </figure>
              <div className="regulation">
                <div>
                  <h3>El IVA se muestra por separado</h3>
                  <p>La Disposición Adicional Segunda de la Ley N.º 1733 modifica el artículo 5 de la Ley N.º 843: el precio neto corresponde al valor antes de impuestos y el IVA debe figurar separado en la factura.</p>
                  <a href={notice.sources.law} target="_blank" rel="noopener noreferrer">Consultar Ley N.º 1733 · SIN <ArrowUpRight size={15} /></a>
                </div>
              </div>
              <div className="regulation">
                <div>
                  <h3>La preparación técnica tiene su propio calendario</h3>
                  <p>La RND N.º 102600000034 establece el período del <strong>1 de octubre al 16 de noviembre de 2026</strong> para la adecuación al anexo técnico, el inicio de pruebas en ambiente piloto y la posterior autorización de sistemas.</p>
                  <a href={notice.sources.rnd} target="_blank" rel="noopener noreferrer">Consultar resolución del SIN <ArrowUpRight size={15} /></a>
                </div>
              </div>
              <div className="regulation">
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
          <a href={mainSiteUrl} className="wordmark" aria-label="Ir al sitio principal de EMIZOR">
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
        </div>
      </footer>
    </>
  );
}
