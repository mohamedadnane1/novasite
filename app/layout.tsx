import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaSite Studio - Création de sites web modernes",
  description:
    "NovaSite Studio, agence spécialisée dans la création de sites web modernes, rapides et orientés conversion. Sites vitrines, e-commerce, refonte, SEO et accompagnement complet.",
  keywords: [
    "création de site web",
    "site vitrine",
    "site e-commerce",
    "agence web",
    "designer freelance",
    "développement web moderne",
    "site internet pas cher",
    "SEO",
    "NovaSite Studio"
  ],
  openGraph: {
    title: "NovaSite Studio - Sites web modernes & premium",
    description:
      "Création de sites web irrésistibles pour développer votre business et attirer plus de clients.",
    url: "https://www.example.com",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaSite Studio - Création de sites web modernes",
    description:
      "Sites vitrines et e-commerce modernes, rapides et pensés pour convertir vos visiteurs en clients."
  },
  icons: {
    icon: "/novasite-logo.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-brand-dark text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

