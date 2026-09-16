import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novedades EMIZOR | Adecuación a la Ley 1733",
  description: "Consulta las novedades de EMIZOR y el avance de la adecuación de nuestro sistema de facturación a la Ley 1733.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
