export const notice = {
  version: "EMIZOR-1733-2026-09-15-v1.0",
  title: "EMIZOR está trabajando en la adecuación a la Ley N.º 1733",
  paragraphs: [
    "En EMIZOR estamos trabajando en la adecuación de nuestro sistema de facturación a los cambios derivados de la Ley N.º 1733, en relación con el IVA Transparente y las disposiciones técnicas del Servicio de Impuestos Nacionales (SIN).",
    "Sabemos lo importante que es tu facturación para la operación de tu empresa. Por eso, nuestro objetivo es acompañarte en una transición ordenada, con información clara sobre los ajustes y los pasos que correspondan a tu servicio.",
    "Este trabajo toma como referencia el proceso de adecuación establecido por el SIN y su anexo técnico en construcción. La disponibilidad de los cambios y su puesta en operación se comunicarán conforme al avance de la adecuación y a las disposiciones aplicables.",
    "Te mantendremos informado sobre los avances y, cuando corresponda, sobre las acciones que debas coordinar con nosotros. Este comunicado informa sobre un trabajo en curso; no anuncia la activación del nuevo esquema de facturación.",
    "Si tu empresa utiliza integraciones con EMIZOR, coordina cualquier ajuste con nuestro equipo a través de tus canales habituales de atención. Gracias por tu confianza."
  ],
  sources: {
    law: "https://www.impuestos.gob.bo/wp-content/uploads/2026/05/L17332051NCPP.pdf",
    rnd: "https://www.impuestos.gob.bo/wp-content/uploads/2026/09/RND-1026000000034.pdf",
    annex: "https://siatanexo.impuestos.gob.bo/index.php/autorizacion-de-sistemas/renovacion-autorizacion/2-uncategorised"
  }
};
export const noticeText = [notice.title, ...notice.paragraphs].join("\n\n");
