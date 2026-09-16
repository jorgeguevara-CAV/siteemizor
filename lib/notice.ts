export const notice = {
  version: "EMIZOR-1733-2026-09-15-v1.2",
  title: "EMIZOR está trabajando en la adecuación a la Ley N.º 1733",
  paragraphs: [
    "En EMIZOR estamos trabajando en la adecuación de nuestro sistema de facturación a los cambios de la Ley N.º 1733 y a las especificaciones técnicas del Servicio de Impuestos Nacionales.",
    "Te informaremos sobre la disponibilidad de los ajustes y las acciones que correspondan a tu empresa. La puesta en operación se comunicará conforme al avance de las validaciones y a las disposiciones aplicables del SIN."
  ],
  sources: {
    law: "https://www.impuestos.gob.bo/wp-content/uploads/2026/05/L17332051NCPP.pdf",
    rnd: "https://www.impuestos.gob.bo/wp-content/uploads/2026/09/RND-1026000000034.pdf",
    annex: "https://siatanexo.impuestos.gob.bo/index.php/autorizacion-de-sistemas/renovacion-autorizacion/2-uncategorised"
  }
};
export const noticeText = [notice.title, ...notice.paragraphs].join("\n\n");
