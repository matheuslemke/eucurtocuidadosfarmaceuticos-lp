import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Curso IA para Farmácias - Transforme seu Atendimento",
  description: "Aprenda a usar Inteligência Artificial para dominar os 200 medicamentos mais vendidos e transformar atendimentos básicos em consultas especializadas. Kit 200 Prompts Ouro incluído!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
