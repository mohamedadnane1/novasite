"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const whatsappUrl = "https://wa.me/33767351649";
const snapchatUrl = "https://www.snapchat.com/add/mohaa.adn";

const services = [
  {
    title: "Création de sites web professionnels",
    description:
      "Sites vitrines et portfolios modernes, pensés pour convertir vos visiteurs en clients.",
    icon: "🌐"
  },
  {
    title: "Refonte de site web",
    description:
      "Modernisez votre image avec un design 2025 et une UX optimisée.",
    icon: "♻️"
  },
  {
    title: "Sites e-commerce",
    description:
      "Boutiques en ligne rapides, sécurisées et pensées pour vendre.",
    icon: "🛒"
  },
  {
    title: "Optimisation SEO",
    description:
      "Soyez visible sur Google grâce à une optimisation technique avancée.",
    icon: "🚀"
  },
  {
    title: "Maintenance & support",
    description:
      "Nous veillons sur votre site au quotidien pour qu’il reste performant.",
    icon: "🛡️"
  },
  {
    title: "Design UI/UX",
    description:
      "Expériences ultra fluides, typographies modernes et interfaces premium.",
    icon: "🎨"
  }
];

const projects = [
  {
    name: "afi-connect.com",
    description:
      "Plateforme moderne pour une entreprise de services avec mise en avant claire de l’offre et des appels à l’action.",
    url: "https://afi-connect.com"
  }
];

const advantages = [
  {
    title: "Design moderne",
    description: "Un univers visuel premium, inspiré des meilleures agences.",
    icon: "✨"
  },
  {
    title: "Sites rapides",
    description: "Performances optimisées pour un chargement quasi instantané.",
    icon: "⚡"
  },
  {
    title: "Optimisation SEO",
    description:
      "Code propre, structure optimisée et balises pensées pour Google.",
    icon: "📈"
  },
  {
    title: "Compatible mobile",
    description: "Responsive parfait sur mobile, tablette et desktop.",
    icon: "📱"
  },
  {
    title: "Support client",
    description: "Disponible et réactif pour vous accompagner au quotidien.",
    icon: "🤝"
  }
];

const pricing = [
  {
    label: "🎨 Identité visuelle",
    tag: "Paiement en 2x",
    price: "À partir de 40 €",
    delay: "Livré en 1 semaine",
    items: [
      "Logo principal + déclinaisons",
      "Palette de couleurs & typographies",
      "Icônes et éléments graphiques",
      "Visuels supports (posts, bannières, stories)",
      "Mini charte graphique prête à l'emploi"
    ],
    highlight: "Idéal pour lancer une marque avec une image cohérente et professionnelle."
  },
  {
    label: "🖥️ Site vitrine",
    tag: "Paiement en 3x",
    price: "À partir de 220 €",
    delay: "Livré en 2 semaines",
    items: [
      "Design moderne et personnalisé",
      "Version mobile (responsive)",
      "Formulaire de contact, devis ou réservation",
      "SEO technique de base",
      "Intégration de vos textes, photos et avis"
    ],
    highlight: "Parfait pour présenter votre entreprise et vos services en ligne."
  },
  {
    label: "🛒 Site e‑commerce",
    tag: "Paiement en 3x",
    price: "À partir de 400 €",
    delay: "Livré en 2 semaines",
    items: [
      "Boutique en ligne complète",
      "Gestion produits & commandes",
      "Paiement en ligne (Stripe / PayPal, etc.)",
      "SEO de base & intégration des avis",
      "Formation de prise en main incluse"
    ],
    highlight: "La solution pour commencer à vendre vos produits en ligne sereinement."
  },
  {
    label: "🚀 Identité + Site",
    tag: "Formule populaire",
    price: "À partir de 420 €",
    delay: "Livré en 2 à 3 semaines",
    items: [
      "Identité visuelle complète",
      "Site vitrine moderne",
      "Visuels pour vos réseaux sociaux",
      "Templates réutilisables",
      "Accompagnement sur la mise en ligne"
    ],
    highlight: "Pack clé en main pour lancer une marque avec une image forte et un site prêt à performer."
  },
  {
    label: "💻 Site vitrine en abonnement",
    tag: "Sans coût initial",
    price: "25,00 € / mois",
    delay: "Création incluse",
    items: [
      "Création du site incluse",
      "Hébergement et maintenance",
      "Mises à jour & support",
      "Évolutif selon vos besoins",
      "Sécurité et sauvegardes gérées"
    ],
    highlight: "Idéal pour indépendants et petites entreprises qui veulent un site sans gros investissement."
  },
  {
    label: "🛍️ E‑commerce en abonnement",
    tag: "Sans coût initial",
    price: "45,00 € / mois",
    delay: "Création incluse",
    items: [
      "Boutique en ligne clé en main",
      "Paiement en ligne configuré",
      "Hébergement, maintenance et mises à jour",
      "Support et évolutions régulières",
      "Accompagnement sur la gestion des commandes"
    ],
    highlight: "Lancer une boutique en ligne sans frais de départ, avec un suivi dans la durée."
  }
];

const siteTypeBase = {
  vitrine: 220,
  ecommerce: 400
} as const;

const featureOptions = [
  { id: "contact", label: "Formulaire de contact ou devis", price: 15 },
  { id: "rdv", label: "Calendrier de prise de rendez‑vous", price: 40 },
  { id: "avis", label: "Section avis clients", price: 15 },
  { id: "newsletter", label: "Newsletter / emailing", price: 30 },
  { id: "whatsapp", label: "Bouton WhatsApp mis en avant", price: 8 },
  { id: "popup", label: "Pop‑up d'accueil (promo, annonce)", price: 20 }
] as const;

const promoFeaturesFree = true;

const pageOptions = [
  { id: "1-3", label: "1 à 3 pages (+0€)", price: 0 },
  { id: "4-6", label: "4 à 6 pages (+40€)", price: 40 },
  { id: "7-10", label: "7 à 10 pages (+80€)", price: 80 },
  { id: "10+", label: "10+ pages (+140€)", price: 140 }
] as const;

const maintenanceOptions = [
  { id: "none", label: "Sans maintenance", price: 0 },
  { id: "annuelle", label: "Maintenance annuelle", price: 60 },
  { id: "trimestrielle", label: "Maintenance trimestrielle", price: 45 }
] as const;

const communicationOptions = [
  { id: "google", label: "Création page Google Business", price: 15 },
  { id: "reseaux", label: "Kit visuels pour réseaux sociaux", price: 25 }
] as const;

const designOptions = [
  { id: "identite", label: "Identité visuelle complète", price: 200 },
  {
    id: "photo-profil",
    label: "Photo profil + couverture réseaux",
    price: 60
  },
  { id: "carte-visite", label: "Carte de visite", price: 25 },
  { id: "flyers", label: "Flyers", price: 25 },
  { id: "carte-cadeau", label: "Carte cadeau", price: 15 },
  { id: "pack-icones", label: "Pack icônes Instagram", price: 20 },
  { id: "story-avis", label: "Visuel story “Avis client”", price: 15 },
  { id: "modele-devis", label: "Modèle de devis modifiable", price: 20 },
  { id: "modele-facture", label: "Modèle de facture modifiable", price: 20 },
  {
    id: "mini-kit",
    label: "Mini‑kit branding (3 posts + 3 stories)",
    price: 30
  },
  { id: "banniere-linkedin", label: "Bannière LinkedIn", price: 25 },
  { id: "menu-resto", label: "Menu/Carte (restaurants, boulangeries…)", price: 20 },
  {
    id: "templates-mensuels",
    label: "Templates publications mensuelles",
    price: 35
  }
] as const;

const faqs = [
  {
    question: "Comment se déroule un projet de création de site ?",
    answer:
      "Tout commence par un échange (WhatsApp ou appel) pour comprendre vos objectifs. Ensuite, je prépare une proposition, je conçois les maquettes, puis je développe le site. Vous validez chaque étape avant la mise en ligne."
  },
  {
    question: "Combien de temps faut‑il pour créer un site ?",
    answer:
      "Un site vitrine simple prend en général entre 1 et 2 semaines. Un e‑commerce peut aller de 2 à 4 semaines selon le nombre de pages, de produits et de fonctionnalités."
  },
  {
    question: "Est‑ce que le site sera optimisé pour le mobile ?",
    answer:
      "Oui, chaque site est conçu en mobile‑first. L’affichage est optimisé pour smartphones, tablettes et ordinateurs, avec une attention particulière à la lisibilité et à la vitesse."
  },
  {
    question: "Proposez‑vous la maintenance après la mise en ligne ?",
    answer:
      "Oui, je peux gérer les mises à jour, la sécurité, les sauvegardes et les petites modifications du contenu via une offre de maintenance ou un abonnement mensuel."
  },
  {
    question: "Comment se passe le paiement du projet ?",
    answer:
      "Un acompte est demandé pour réserver le créneau, puis le reste est réglé en une ou plusieurs fois selon la formule choisie. Le planning et les modalités sont toujours clairs dès le départ."
  }
];

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(
    faqs[0]?.question ?? null
  );
  const [selectedSiteType, setSelectedSiteType] =
    useState<keyof typeof siteTypeBase>("vitrine");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedPages, setSelectedPages] = useState<string>("1-3");
  const [selectedMaintenance, setSelectedMaintenance] =
    useState<string>("none");
  const [selectedCommunication, setSelectedCommunication] = useState<string[]>(
    []
  );
  const [selectedDesign, setSelectedDesign] = useState<string[]>([]);
  const handleWhatsapp = () => {
    window.open(whatsappUrl, "_blank");
  };

  const handleSnapchat = () => {
    window.open(snapchatUrl, "_blank");
  };

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const toggleCommunication = (id: string) => {
    setSelectedCommunication((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const toggleDesign = (id: string) => {
    setSelectedDesign((prev) => {
      // Si on coche "Identité visuelle complète", on coche tout le pack graphisme
      if (id === "identite") {
        const allIds = designOptions.map((d) => d.id);
        const isAlreadyFull =
          prev.length === allIds.length &&
          allIds.every((designId) => prev.includes(designId));
        // Si tout est déjà coché, on vide tout, sinon on coche tout
        return isAlreadyFull ? [] : allIds;
      }

      // Sinon, comportement normal toggle
      return prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];
    });
  };

  const totalEstimate = (() => {
    const base = siteTypeBase[selectedSiteType] ?? 0;
    const featuresTotal = featureOptions
      .filter((f) => selectedFeatures.includes(f.id))
      .reduce(
        (sum, f) => sum + (promoFeaturesFree ? 0 : f.price),
        0
      );
    const pagesTotal =
      pageOptions.find((p) => p.id === selectedPages)?.price ?? 0;
    const maintenanceTotal =
      maintenanceOptions.find((m) => m.id === selectedMaintenance)?.price ?? 0;
    const communicationTotal = communicationOptions
      .filter((c) => selectedCommunication.includes(c.id))
      .reduce((sum, c) => sum + c.price, 0);
    // Pour le graphisme : si "Identité visuelle complète" est sélectionnée,
    // on facture seulement 150€ pour tout le pack, sans additionner chaque ligne.
    const designTotal = selectedDesign.includes("identite")
      ? designOptions.find((d) => d.id === "identite")?.price ?? 0
      : designOptions
          .filter((d) => selectedDesign.includes(d.id))
          .reduce((sum, d) => sum + d.price, 0);
    return (
      base + featuresTotal + pagesTotal + maintenanceTotal + communicationTotal + designTotal
    );
  })();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NovaSite Studio",
    url: "https://www.example.com",
    description:
      "Agence spécialisée dans la création de sites web modernes, rapides et orientés conversion.",
    inLanguage: "fr-FR",
    sameAs: [whatsappUrl, snapchatUrl]
  };

  const sendDevisOnWhatsApp = () => {
    const baseLabel =
      selectedSiteType === "ecommerce" ? "Site e‑commerce" : "Site vitrine";
    const selectedFeatureLabels = featureOptions
      .filter((f) => selectedFeatures.includes(f.id))
      .map((f) => `- ${f.label} (+${f.price}€)`)
      .join("%0A");
    const selectedCommLabels = communicationOptions
      .filter((c) => selectedCommunication.includes(c.id))
      .map((c) => `- ${c.label} (+${c.price}€)`)
      .join("%0A");
    const pages = pageOptions.find((p) => p.id === selectedPages)?.label ?? "";
    const maintenance =
      maintenanceOptions.find((m) => m.id === selectedMaintenance)?.label ??
      "";

    const message = `Bonjour, je viens de faire une estimation de devis sur votre site.%0A%0AType de site : ${baseLabel}%0ANombre de pages : ${pages}%0AMaintenance : ${maintenance}%0A%0AFonctionnalités :%0A${
      selectedFeatureLabels || "- Aucune option sélectionnée"
    }%0A%0ACommunication & réseaux :%0A${
      selectedCommLabels || "- Aucune option sélectionnée"
    }%0A%0APrix total estimé : ${totalEstimate.toLocaleString(
      "fr-FR"
    )}€ TTC.%0A%0APouvez-vous me faire un devis précis en fonction de ces éléments ?`;

    window.open(`${whatsappUrl}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-brand-dark text-slate-50">
      <script
        type="application/ld+json"
        // SEO : données structurées pour le site
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-slate-950/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8 lg:px-12">
          <button
            onClick={() =>
              document
                .getElementById("top")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2"
          >
            <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-slate-950/80 ring-1 ring-cyan-400/60 shadow-soft">
              <Image
                src="/novasite-logo.png"
                alt="Logo NovaSite"
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </span>
            <span className="flex flex-col text-left">
              <span className="text-[13px] font-semibold text-slate-50">
                NovaSite Studio
              </span>
              <span className="text-[11px] text-slate-400">
                Création de sites web modernes
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-slate-900/40 px-2 py-1 text-xs font-medium text-slate-300 shadow-soft md:flex">
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full px-3 py-1 transition hover:bg-white/5 hover:text-slate-50"
            >
              Accueil
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("realisations")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full px-3 py-1 transition hover:bg-white/5 hover:text-slate-50"
            >
              Portfolio
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("tarifs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full px-3 py-1 transition hover:bg-white/5 hover:text-slate-50"
            >
              Tarifs
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("devis")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full px-3 py-1 transition hover:bg-white/5 hover:text-slate-50"
            >
              Devis
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full px-3 py-1 transition hover:bg-white/5 hover:text-slate-50"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsapp}
              className="hidden rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-brand-dark shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald-300 md:inline-flex"
            >
              Devis WhatsApp
            </button>
            <button
              onClick={handleSnapchat}
              className="inline-flex items-center rounded-full border border-yellow-400/30 bg-slate-900/60 px-3 py-1.5 text-[11px] font-medium text-yellow-300 shadow-soft transition hover:-translate-y-0.5 hover:border-yellow-300/70 hover:bg-slate-900/80"
            >
              Snapchat : mohaa.adn
            </button>
          </div>
        </div>
      </header>

      <div id="top" />

      {/* HERO */}
      <div className="relative overflow-hidden border-b border-white/5 bg-hero-gradient">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#6366f1_0,transparent_45%),radial-gradient(circle_at_bottom,#7c3aed_0,transparent_45%)] opacity-60" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-28 md:flex-row md:px-12 lg:px-24 lg:pb-32 lg:pt-32">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/60 px-4 py-1.5 text-[11px] text-slate-300 backdrop-blur-xl"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/10 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-400/40">
                NS
              </span>
              <span className="uppercase tracking-[0.24em] text-slate-400">
                NovaSite Studio · Agence web
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-50 md:text-5xl lg:text-6xl"
            >
              Des{" "}
              <span className="gradient-text">sites web irrésistibles</span>{" "}
              pour lancer votre projet numérique.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="max-w-xl text-balance text-sm text-slate-300 md:text-base"
            >
              Studio spécialisé dans la création de sites web modernes, rapides
              et centrés sur la conversion. Un design premium, une expérience
              ultra fluide et une image de marque qui donne confiance dès la
              première seconde.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("realisations");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-full bg-slate-50 px-6 py-3 text-sm font-medium text-brand-dark shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-200"
              >
                Voir nos réalisations
              </button>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleWhatsapp}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-slate-950/40 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-emerald-400/60 hover:bg-slate-900/60"
                >
                  Prendre rendez-vous WhatsApp
                </button>
                <button
                  onClick={handleSnapchat}
                  className="inline-flex items-center justify-center rounded-full border border-yellow-400/40 bg-slate-950/50 px-5 py-2.5 text-xs font-medium text-yellow-200 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-yellow-300/80 hover:bg-slate-900/70"
                >
                  Suivre sur Snapchat : mohaa.adn
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-400 md:text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-slate-900/70 ring-1 ring-white/10" />
                <span>Design inspiré des grandes agences digitales</span>
              </div>
              <div className="h-6 w-px bg-gradient-to-b from-slate-600/40 via-slate-600/60 to-slate-600/20" />
              <span>Sites performants, sécurisés et SEO friendly</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-1 items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.45),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.3),transparent_55%)] opacity-90 blur-3xl" />

              <div className="glass relative flex flex-col gap-4 overflow-hidden p-5">
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Studio créatif
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    Sites modernes, identités visuelles et accompagnement digital.
                  </p>
                </div>

                <div className="grid gap-3 text-[11px] text-slate-300 md:grid-cols-3">
                  <div className="rounded-xl bg-slate-900/80 px-3 py-2 ring-1 ring-white/5">
                    <p className="text-[11px] text-slate-400">Sites réalisés</p>
                    <p className="mt-1 text-sm font-semibold text-emerald-400">
                      10+
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-900/80 px-3 py-2 ring-1 ring-white/5">
                    <p className="text-[11px] text-slate-400">Délai moyen</p>
                    <p className="mt-1 text-sm font-semibold">1–2 semaines</p>
                  </div>
                  <div className="rounded-xl bg-slate-900/80 px-3 py-2 ring-1 ring-white/5">
                    <p className="text-[11px] text-slate-400">Accompagnement</p>
                    <p className="mt-1 text-sm font-semibold text-sky-300">
                      WhatsApp & Snapchat
                    </p>
                  </div>
                </div>

                <div className="mt-1 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
                  <span>On s&apos;occupe du design, de la technique et du SEO.</span>
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-medium text-emerald-300 ring-1 ring-emerald-400/50">
                    Disponible pour votre projet
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SERVICES */}
      <SectionWrapper id="services" delay={0.1}>
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="space-y-3">
            <p className="section-title">Services</p>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Tout ce qu&apos;il vous faut pour{" "}
                <span className="gradient-text">un site web professionnel</span>.
              </h2>
              <p className="max-w-xl text-sm text-slate-400 md:text-[15px]">
                De la première maquette jusqu&apos;à la mise en ligne, nous
                gérons l&apos;ensemble du projet avec un accompagnement personnalisé
                et une approche orientée résultats.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass group relative overflow-hidden p-5"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent" />
                </div>
                <div className="relative space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/80 text-xl ring-1 ring-white/10">
                    <span>{service.icon}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50 md:text-[15px]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 md:text-[13px]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* TARIFS */}
      <SectionWrapper id="tarifs" delay={0.1}>
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="space-y-3">
            <p className="section-title">Mes tarifs</p>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Des offres claires pour{" "}
                <span className="gradient-text">lancer votre site</span>.
              </h2>
              <p className="max-w-xl text-sm text-slate-400 md:text-[15px]">
                Choisissez la formule qui correspond le mieux à votre projet :
                paiement classique ou abonnement sans investissement de départ.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricing.map((offer) => (
              <motion.div
                key={offer.label}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass relative flex h-full flex-col overflow-hidden p-5"
              >
                <div className="relative flex flex-1 flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-slate-50 md:text-[15px]">
                      {offer.label}
                    </h3>
                    <span className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-300 ring-1 ring-white/10">
                      {offer.tag}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-slate-50">
                      {offer.price}
                    </p>
                    <p className="text-xs text-slate-400">{offer.delay}</p>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-300 md:text-[13px]">
                    {offer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-slate-400">{offer.highlight}</p>
                  <button
                    onClick={handleWhatsapp}
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-50 px-4 py-2 text-xs font-medium text-brand-dark shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-200"
                  >
                    Discuter du projet sur WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* DEVIS EN LIGNE */}
      <SectionWrapper id="devis" delay={0.1}>
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <div className="space-y-3 text-center">
            <p className="section-title">Devis en ligne</p>
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Votre devis{" "}
              <span className="gradient-text">en quelques clics</span>.
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-400 md:text-[15px]">
              Sélectionnez le type de site et les options dont vous avez besoin.
              Le prix total estimé se met à jour automatiquement. Vous pouvez
              ensuite m&apos;envoyer votre devis directement sur WhatsApp.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-5">
              <div className="glass p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Type de site
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Base du calcul
                  </p>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedSiteType("vitrine")}
                    className={`rounded-2xl border px-3 py-2 text-left ${
                      selectedSiteType === "vitrine"
                        ? "border-indigo-400 bg-indigo-500/20 text-slate-50"
                        : "border-white/10 bg-slate-900/60 text-slate-300 hover:border-indigo-400/60"
                    }`}
                  >
                    <span className="block text-[11px] text-slate-400">
                      Site vitrine
                    </span>
                    <span className="text-sm font-semibold">
                      {siteTypeBase.vitrine} €
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSiteType("ecommerce")}
                    className={`rounded-2xl border px-3 py-2 text-left ${
                      selectedSiteType === "ecommerce"
                        ? "border-indigo-400 bg-indigo-500/20 text-slate-50"
                        : "border-white/10 bg-slate-900/60 text-slate-300 hover:border-indigo-400/60"
                    }`}
                  >
                    <span className="block text-[11px] text-slate-400">
                      Site e‑commerce
                    </span>
                    <span className="text-sm font-semibold">
                      {siteTypeBase.ecommerce} €
                    </span>
                  </button>
                </div>
              </div>

              <div className="glass p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Fonctionnalités
                  </p>
                  {promoFeaturesFree && (
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/40">
                      Offre limitée : options offertes
                    </span>
                  )}
                </div>
                <div className="mt-3 space-y-2 text-xs text-slate-300">
                  {featureOptions.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex cursor-pointer items-center justify-between gap-3 rounded-xl bg-slate-900/60 px-3 py-2 text-[13px] hover:bg-slate-900/80"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-900 text-indigo-500"
                          checked={selectedFeatures.includes(opt.id)}
                          onChange={() => toggleFeature(opt.id)}
                        />
                        <span>{opt.label}</span>
                      </div>
                      {promoFeaturesFree ? (
                        <span className="text-[11px] text-emerald-400">
                          Gratuit cette semaine{" "}
                          <span className="ml-1 text-[10px] text-slate-500 line-through">
                            +{opt.price}€
                          </span>
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400">
                          +{opt.price}€
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="glass p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Nombre de pages
                </p>
                <div className="mt-3">
                  <select
                    value={selectedPages}
                    onChange={(e) => setSelectedPages(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-xs text-slate-200 outline-none ring-0 focus:border-indigo-400"
                  >
                    {pageOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-[11px] text-slate-500">
                    La page d&apos;accueil est incluse. Les pages
                    supplémentaires ajoutent du contenu et du temps de
                    conception.
                  </p>
                </div>
              </div>

              <div className="glass space-y-4 p-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Maintenance
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    {maintenanceOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedMaintenance(opt.id)}
                        className={`rounded-full border px-3 py-1 ${
                          selectedMaintenance === opt.id
                            ? "border-indigo-400 bg-indigo-500/20 text-slate-50"
                            : "border-white/10 bg-slate-900/70 text-slate-300 hover:border-indigo-400/60"
                        }`}
                      >
                        {opt.label} (+{opt.price}
                        €)
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Communication & réseaux
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    {communicationOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleCommunication(opt.id)}
                        className={`rounded-full border px-3 py-1 ${
                          selectedCommunication.includes(opt.id)
                            ? "border-indigo-400 bg-indigo-500/20 text-slate-50"
                            : "border-white/10 bg-slate-900/70 text-slate-300 hover:border-indigo-400/60"
                        }`}
                      >
                        {opt.label} (+{opt.price}
                        €)
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Graphisme
                  </p>
                  <div className="mt-2 space-y-2 text-xs text-slate-300">
                    {designOptions.map((opt) => (
                      <label
                        key={opt.id}
                        className="flex cursor-pointer items-center justify-between gap-3 rounded-xl bg-slate-900/60 px-3 py-2 text-[13px] hover:bg-slate-900/80"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-900 text-indigo-500"
                            checked={selectedDesign.includes(opt.id)}
                            onChange={() => toggleDesign(opt.id)}
                          />
                          <span>{opt.label}</span>
                        </div>
                        <span className="text-[11px] text-slate-400">
                          +{opt.price}€
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass space-y-3 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Prix total estimé
                </p>
                <p className="text-3xl font-semibold text-slate-50">
                  {totalEstimate.toLocaleString("fr-FR")}€
                </p>
                <p className="text-[11px] text-slate-500">
                  Prix indicatif TTC – le montant final est confirmé après un
                  échange rapide sur votre projet.
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={sendDevisOnWhatsApp}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-brand-dark shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald-300"
                  >
                    Envoyer ce devis sur WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* RÉALISATIONS / PORTFOLIO */}
              <SectionWrapper id="realisations" delay={0.1}>
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="space-y-3">
            <p className="section-title">Portfolio & réalisations</p>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Nous concevons des{" "}
                <span className="gradient-text">portfolios et sites vitrines</span>{" "}
                sur‑mesure.
              </h2>
              <p className="max-w-xl text-sm text-slate-400 md:text-[15px]">
                Que ce soit pour présenter votre activité, vos services ou votre
                portfolio créatif, nous créons des interfaces modernes, lisibles
                et pensées pour mettre vos contenus en valeur. Voici un exemple
                de type de projet que nous pouvons réaliser.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.name}
                whileHover={{ y: -8 }}
                className="glass flex flex-col overflow-hidden"
              >
                <div className="relative overflow-hidden border-b border-white/5 bg-slate-900">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/afi-hero.png"
                      alt="Association Familiale Irbaïyne"
                      fill
                      className="object-cover object-[20%_center]"
                      sizes="(min-width: 1024px) 520px, 100vw"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-50">
                      {project.name}
                    </h3>
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                      Exemple de site réalisé
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 md:text-[13px]">
                    {project.description} Ce type de structure peut aussi être
                    adapté à un portfolio de photographe, designer, freelance,
                    etc.
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-2 text-[11px] text-slate-400">
                    <span>Design moderne, parcours optimisé, CTA visibles.</span>
                    <button
                      onClick={() => window.open(project.url, "_blank")}
                      className="inline-flex items-center text-[11px] font-medium text-sky-300 hover:text-sky-200"
                    >
                      Voir le site
                      <span className="ml-1 text-[9px]">↗</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* POURQUOI NOUS CHOISIR */}
      <SectionWrapper id="avantages" delay={0.1}>
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="space-y-3">
            <p className="section-title">Pourquoi nous choisir</p>
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Une approche <span className="gradient-text">orientée résultats</span>.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {advantages.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass group relative overflow-hidden p-5"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/5 via-indigo-500/10 to-transparent" />
                </div>
                <div className="relative space-y-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/80 text-lg ring-1 ring-white/10">
                    <span>{item.icon}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 md:text-[13px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper id="faq" delay={0.1}>
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <div className="space-y-3 text-center">
            <p className="section-title">FAQ</p>
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Toutes vos <span className="gradient-text">questions</span>, répondues.
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-400 md:text-[15px]">
              Vous avez un doute avant de vous lancer ? Cliquez sur une question
              pour afficher la réponse. Et si besoin, je suis disponible sur
              WhatsApp pour vous répondre directement.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((item) => {
              const isActive = activeFaq === item.question;
              return (
                <div
                  key={item.question}
                  className="glass overflow-hidden px-4 py-3 md:px-5 md:py-4"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveFaq(isActive ? null : item.question)
                    }
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-sm font-medium text-slate-50 md:text-[15px]">
                      {item.question}
                    </span>
                    <span className="text-lg text-slate-400">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 text-xs text-slate-300 md:text-[13px]"
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center pt-2 text-xs text-slate-400">
            <span className="mr-2">Une autre question ?</span>
            <button
              onClick={handleWhatsapp}
              className="text-xs font-medium text-sky-300 hover:text-sky-200"
            >
              Écrire sur WhatsApp →
            </button>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA PRINCIPAL */}
      <SectionWrapper id="contact" delay={0.1}>
        <div className="mx-auto max-w-4xl">
          <div className="glass relative overflow-hidden px-6 py-10 text-center md:px-12 md:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.28),transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25),transparent_55%)]" />
            <div className="relative space-y-4">
              <p className="section-title">Passer à l&apos;action</p>
              <h2 className="text-balance text-2xl font-semibold text-slate-50 md:text-3xl">
                Besoin d&apos;un <span className="gradient-text">site web professionnel</span> ?
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-slate-300 md:text-[15px]">
                Expliquez-nous votre projet en quelques messages et nous vous
                proposons une solution sur-mesure, avec un site moderne, rapide et
                optimisé pour générer des clients.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={handleWhatsapp}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-brand-dark shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  WhatsApp : 07 67 35 16 49
                </button>
                <button
                  onClick={handleSnapchat}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-slate-950/40 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-yellow-400/60 hover:bg-slate-900/60"
                >
                  Snapchat : mohaa.adn
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-slate-950/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-12 lg:px-24">
          <div className="space-y-2 text-sm text-slate-400">
            <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              Agence Web Moderne
            </span>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Tous droits réservés.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <button
              onClick={handleWhatsapp}
              className="hover:text-slate-200"
            >
              WhatsApp
            </button>
            <button
              onClick={handleSnapchat}
              className="hover:text-slate-200"
            >
              Snapchat
            </button>
            <a
              href="#services"
              className="hover:text-slate-200"
            >
              Services
            </a>
            <a
              href="#realisations"
              className="hover:text-slate-200"
            >
              Réalisations
            </a>
            <a
              href="#contact"
              className="hover:text-slate-200"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

