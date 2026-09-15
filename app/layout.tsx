import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMIZOR | Adecuación a la Ley 1733",
  description: "Estamos trabajando en la adecuación de nuestro sistema de facturación a los cambios de la Ley 1733.",
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
