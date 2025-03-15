import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OneVisa - Soluciones Digitales para tu Negocio",
  description: "Transformamos negocios con soluciones digitales innovadoras. Diseño web, desarrollo y marketing digital para impulsar tu crecimiento.",
  keywords: "diseño web, desarrollo web, marketing digital, SEO, presencia digital, soluciones empresariales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
