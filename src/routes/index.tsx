import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Gem,
  Heart,
  Cake,
  Building2,
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Menu,
  X,
} from "lucide-react";

import ballroomAsset from "@/assets/photos/ballroom.jpg.asset.json";
import facadeGateAsset from "@/assets/photos/facade-gate.jpg.asset.json";
import facadeNightAsset from "@/assets/photos/facade-night.jpg.asset.json";
import loungeAsset from "@/assets/photos/lounge.jpg.asset.json";
import staircaseAsset from "@/assets/photos/staircase.jpg.asset.json";
import courtyardAsset from "@/assets/photos/courtyard.jpg.asset.json";

const heroHall = ballroomAsset.url;
const venueMain = facadeGateAsset.url;
const gallery1 = loungeAsset.url;
const gallery2 = staircaseAsset.url;
const gallery3 = ballroomAsset.url;
const gallery4 = courtyardAsset.url;
const gallery5 = facadeNightAsset.url;
const gallery6 = facadeGateAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Palais Layel — Salle des Fêtes de luxe à Bordj El Bahri, Alger" },
      {
        name: "description",
        content:
          "Salle Des Fêtes Palais Layel — Mariages, fiançailles et événements à Bordj El Bahri. Décoration luxueuse, service organisé, 4,4/5 sur 303 avis Google.",
      },
      { property: "og:title", content: "Palais Layel — Salle des Fêtes à Alger" },
      {
        property: "og:description",
        content: "Où chaque fête devient un souvenir éternel.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "accueil", label: "Accueil" },
  { id: "salle", label: "La Salle" },
  { id: "prestations", label: "Prestations" },
  { id: "galerie", label: "Galerie" },
  { id: "avis", label: "Avis" },
  { id: "contact", label: "Contact" },
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Salle+Des+F%C3%AAtes+Palais+Layel+Bordj+El+Bahri";

function Index() {
  return (
    <div className="font-body bg-ivory text-foreground">
      <Nav />
      <Hero />
      <Venue />
      <Services />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingFacebook />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------- Floating Facebook ---------- */
function FloatingFacebook() {
  return (
    <a
      href="https://www.facebook.com/profile.php?id=100075888410027"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-plum)] shadow-lg hover:bg-[var(--color-gold-soft)] hover:scale-110 transition-all duration-300"
    >
      <Facebook size={22} />
    </a>
  );
}

/* ---------- Floating WhatsApp ---------- */
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/213554021807"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-20 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-all duration-300"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

/* ---------- Navigation ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-plum)]/95 backdrop-blur-md border-b border-[var(--color-gold)]/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#accueil" className="flex items-center gap-3 group">
          <span className="font-script text-3xl text-[var(--color-gold)] leading-none">
            Palais
          </span>
          <span className="font-display italic text-xl text-[var(--color-gold-soft)] tracking-wide">
            Layel
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative text-[13px] uppercase tracking-[0.18em] text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-[var(--color-gold)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex btn-gold btn-gold-hover text-[11px] py-3 px-5"
        >
          Réserver
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[var(--color-gold)] p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--color-plum)] border-t border-[var(--color-gold)]/15">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-[var(--color-ivory)] hover:text-[var(--color-gold)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold btn-gold-hover mt-2 self-start"
            >
              Réserver votre date
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-plum)]"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroHall}
          alt="Intérieur somptueux du Palais Layel"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-plum-deep)] via-[var(--color-plum)]/85 to-[var(--color-plum-deep)]" />
      </div>

      {/* Golden shimmer overlays */}
      <div
        aria-hidden
        className="shimmer-1 absolute -top-32 left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.35) 0%, rgba(201,169,110,0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="shimmer-2 absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,196,184,0.18) 0%, rgba(232,196,184,0) 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-4xl animate-fade-up">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="gold-divider" />
          <span className="eyebrow text-[var(--color-gold)]">Salle des Fêtes</span>
          <span className="gold-divider" />
        </div>

        <h1 className="font-display italic text-[var(--color-ivory)] text-7xl sm:text-8xl md:text-9xl leading-[0.95] tracking-tight">
          Palais{" "}
          <span className="text-[var(--color-gold)]">Layel</span>
        </h1>

        <p className="mt-8 font-display italic text-xl sm:text-2xl text-[var(--color-ivory)]/85 max-w-2xl mx-auto font-light">
          Où chaque fête devient un souvenir éternel.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-gold btn-gold-hover">
            Réserver votre date
          </a>
          <a href="#salle" className="btn-ghost-gold">
            Découvrir la salle
          </a>
        </div>

        <div className="mt-14 flex items-center justify-center gap-3 text-[var(--color-gold-soft)]/80">
          <Star size={14} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
          <span className="text-xs tracking-[0.25em] uppercase">
            4,4/5 · 303 avis Google
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-gold)]/70">
          Explorer
        </span>
        <div className="relative h-12 w-px overflow-hidden">
          <div className="animate-scroll-line absolute inset-0 bg-[var(--color-gold)]" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Venue ---------- */
function Venue() {
  return (
    <section id="salle" className="py-28 sm:py-36 bg-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="relative">
            <img
              src={venueMain}
              alt="Grande salle décorée du Palais Layel"
              width={1400}
              height={1600}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block border border-[var(--color-gold)] p-8 bg-[var(--color-warm-white)] w-56">
              <div className="font-display italic text-5xl text-[var(--color-gold)] leading-none">
                15+
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--color-plum)]/70">
                Années d'excellence
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <span className="font-script text-4xl text-[var(--color-gold)] block">
              Notre Salle
            </span>
            <h2 className="font-display italic text-5xl sm:text-6xl text-[var(--color-plum)] mt-2 leading-tight">
              Une salle d'exception
            </h2>
            <div className="gold-divider mt-6 mb-8" />

            <p className="text-lg leading-relaxed text-[var(--color-plum)]/80 font-light">
              Niché au cœur de Bordj El Bahri, le Palais Layel accueille vos plus
              grandes célébrations dans un cadre somptueux. Notre salle
              majestueuse, son décor raffiné et sa propreté irréprochable offrent
              le décor parfait pour des moments inoubliables.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-plum)]/70 font-light">
              De la cérémonie au dernier toast, notre équipe attentionnée veille
              à chaque détail avec sérieux et passion — pour que votre seul
              souci soit de profiter.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <Feature
                icon={<Gem size={20} />}
                title="Décoration luxueuse"
                desc="Un cadre fastueux taillé pour vos plus beaux clichés."
              />
              <Feature
                icon={<ShieldCheck size={20} />}
                title="Service organisé"
                desc="Une équipe sérieuse, attentive à chaque détail."
              />
              <Feature
                icon={<Sparkles size={20} />}
                title="Propreté irréprochable"
                desc="Un lieu impeccable, à la hauteur de votre jour."
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <div className="inline-flex h-11 w-11 items-center justify-center border border-[var(--color-gold)] text-[var(--color-gold)] rounded-full">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-xl text-[var(--color-plum)] not-italic font-semibold">
        {title}
      </h3>
      <p className="mt-2 text-sm text-[var(--color-plum)]/65 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

/* ---------- Services ---------- */
function Services() {
  const services = [
    {
      icon: <Heart size={22} />,
      title: "Mariages",
      desc: "Des cérémonies somptueuses, orchestrées de A à Z avec élégance et raffinement.",
    },
    {
      icon: <Gem size={22} />,
      title: "Fiançailles",
      desc: "Un cadre intime et lumineux pour célébrer le début de votre histoire.",
    },
    {
      icon: <Cake size={22} />,
      title: "Fêtes Familiales",
      desc: "Anniversaires, baptêmes, fêtes religieuses — vos joies, magnifiées.",
    },
    {
      icon: <Building2 size={22} />,
      title: "Événements Privés",
      desc: "Soirées d'entreprise, galas et réceptions de prestige sur mesure.",
    },
  ];

  return (
    <section
      id="prestations"
      className="py-28 sm:py-36 bg-[var(--color-plum)] text-[var(--color-ivory)] relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.25), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-script text-4xl text-[var(--color-gold)]">
              Prestations
            </span>
            <h2 className="font-display italic text-5xl sm:text-6xl mt-2 leading-tight">
              Tout pour votre jour parfait
            </h2>
            <div className="flex justify-center mt-6">
              <span className="gold-divider" />
            </div>
            <p className="mt-6 text-[var(--color-ivory)]/70 font-light">
              Un savoir-faire complet, pensé pour transformer chaque événement
              en souvenir précieux.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 gap-px bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/15">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group bg-[var(--color-plum)] p-10 sm:p-12 h-full transition-all duration-500 hover:bg-[var(--color-plum-deep)] hover:-translate-y-1">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-gold)]/40 text-[var(--color-gold)] group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-plum)] transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="mt-6 font-display italic text-3xl text-[var(--color-ivory)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[var(--color-ivory)]/65 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews ---------- */
function Reviews() {
  const reviews = [
    {
      initials: "AB",
      name: "Amina B.",
      text: "Une salle magnifique, décorée avec goût. Le service était irréprochable — tout s'est passé à merveille.",
    },
    {
      initials: "KM",
      name: "Karim M.",
      text: "Personnel accueillant, organisation parfaite. Notre mariage restera gravé dans nos mémoires.",
    },
    {
      initials: "SL",
      name: "Sara L.",
      text: "Très belle salle, propre et bien tenue. Un vrai palais pour notre fête de famille.",
    },
  ];

  return (
    <section id="avis" className="py-28 sm:py-36 bg-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-script text-4xl text-[var(--color-gold)]">
              Témoignages
            </span>
            <h2 className="font-display italic text-5xl sm:text-6xl text-[var(--color-plum)] mt-2 leading-tight">
              Ils nous ont fait confiance
            </h2>
            <div className="mt-6 flex items-center justify-center gap-1 text-[var(--color-gold)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-[var(--color-gold)] text-[var(--color-gold)]"
                />
              ))}
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--color-plum)]/60">
              4,4 / 5 — 303 avis Google
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <article className="bg-[var(--color-warm-white)] p-8 border-l-2 border-[var(--color-rose)] h-full flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-500">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)]/15 border border-[var(--color-gold)] text-[var(--color-gold)] font-display italic text-lg">
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-display text-lg text-[var(--color-plum)] font-semibold">
                      {r.name}
                    </div>
                    <div className="flex gap-0.5 mt-0.5 text-[var(--color-gold)]">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star
                          key={k}
                          size={12}
                          className="fill-[var(--color-gold)]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-[var(--color-plum)]/75 leading-relaxed font-light italic">
                  « {r.text} »
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-gold"
          >
            Lire tous les avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery() {
  const photos = [
    { src: gallery2, alt: "Escalier fleuri décoré pour mariage", span: "row-span-2" },
    { src: gallery1, alt: "Dressage de table luxueux", span: "" },
    { src: gallery4, alt: "Salle décorée pour cérémonie", span: "" },
    { src: gallery3, alt: "Pièce montée de mariage", span: "row-span-2" },
    { src: gallery6, alt: "Centre de table floral", span: "" },
    { src: gallery5, alt: "Lustre en cristal de la salle", span: "" },
  ];

  return (
    <section id="galerie" className="py-28 sm:py-36 bg-[var(--color-warm-white)]">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-script text-4xl text-[var(--color-gold)]">
              Galerie
            </span>
            <h2 className="font-display italic text-5xl sm:text-6xl text-[var(--color-plum)] mt-2 leading-tight">
              La magie en images
            </h2>
            <div className="flex justify-center mt-6">
              <span className="gold-divider" />
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {photos.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <div
                className={`relative overflow-hidden group h-full ${p.span}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[var(--color-plum)]/0 group-hover:bg-[var(--color-plum)]/20 transition-colors duration-500" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="#contact" className="btn-ghost-gold">
            Visiter la salle
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-ivory)]">
      <div className="grid lg:grid-cols-2">
        {/* Left: address + map */}
        <div className="bg-[var(--color-plum)] text-[var(--color-ivory)] p-10 sm:p-16 lg:p-20 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(201,169,110,0.35), transparent 70%)",
            }}
          />
          <Reveal>
            <div className="relative">
              <span className="font-script text-4xl text-[var(--color-gold)]">
                Réservation
              </span>
              <h2 className="font-display italic text-4xl sm:text-5xl mt-2 leading-tight">
                Venez nous rencontrer
              </h2>
              <div className="gold-divider mt-6 mb-10" />

              <ul className="space-y-6 text-[var(--color-ivory)]/85">
                <li className="flex gap-4">
                  <MapPin
                    size={20}
                    className="text-[var(--color-gold)] shrink-0 mt-1"
                  />
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-gold)]/80 mb-1">
                      Adresse
                    </div>
                    <div className="font-light">
                      117 Route Nationale 24
                      <br />
                      Bordj El Bahri, Alger
                      <br />
                      Algérie
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone
                    size={20}
                    className="text-[var(--color-gold)] shrink-0 mt-1"
                  />
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-gold)]/80 mb-1">
                      Téléphone
                    </div>
                    <a
                      href="tel:+213554021807"
                      className="font-light hover:text-[var(--color-gold)] transition-colors"
                    >
                      0554 02 18 07
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail
                    size={20}
                    className="text-[var(--color-gold)] shrink-0 mt-1"
                  />
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-gold)]/80 mb-1">
                      Horaires
                    </div>
                    <div className="font-light">Tous les jours · sur rendez-vous</div>
                  </div>
                </li>
              </ul>

              <div className="mt-10 border border-[var(--color-gold)]/30 overflow-hidden">
                <iframe
                  title="Carte Palais Layel"
                  src="https://www.google.com/maps?q=117+Route+Nationale+24,+Bordj+El+Bahri,+Algiers,+Algeria&output=embed"
                  width="100%"
                  height="240"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block grayscale-[40%] contrast-110"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <div className="p-10 sm:p-16 lg:p-20 bg-[var(--color-warm-white)]">
          <Reveal>
            <div>
              <div className="border border-[var(--color-gold)]/40 bg-[var(--color-rose)]/20 px-5 py-3 text-sm text-[var(--color-plum)] inline-block">
                ✦ Disponibilités limitées — réservez tôt pour assurer votre date
              </div>
              <h3 className="mt-8 font-display italic text-4xl sm:text-5xl text-[var(--color-plum)] leading-tight">
                Demande de réservation
              </h3>
              <p className="mt-3 text-[var(--color-plum)]/70 font-light">
                Remplissez ce formulaire — nous vous recontactons sous 24h.
              </p>

              <form
                action="https://formspree.io/f/mpqebnyz"
                method="POST"
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                <Field label="Nom complet" name="nom-complet" required />
                <Field
                  label="Numéro de téléphone"
                  name="telephone"
                  type="tel"
                  required
                />
                <div className="sm:col-span-1">
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-[var(--color-plum)]/70 mb-2">
                    Type d'événement
                  </label>
                  <select
                    name="type-evenement"
                    required
                    className="w-full bg-transparent border-b border-[var(--color-plum)]/30 py-3 text-[var(--color-plum)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                  >
                    <option>Mariage</option>
                    <option>Fiançailles</option>
                    <option>Anniversaire</option>
                    <option>Autre</option>
                  </select>
                </div>
                <Field label="Date souhaitée" name="date" type="date" required />
                <div className="sm:col-span-2">
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-[var(--color-plum)]/70 mb-2">
                    Message / Remarques
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-[var(--color-plum)]/30 py-3 text-[var(--color-plum)] focus:outline-none focus:border-[var(--color-gold)] transition-colors resize-none"
                  />
                </div>

                <div className="sm:col-span-2 mt-4">
                  <button type="submit" className="btn-gold btn-gold-hover w-full sm:w-auto">
                    Envoyer ma demande
                  </button>
                </div>
              </form>

              <div className="mt-6 text-sm text-[var(--color-plum)]/60">
                Votre demande sera envoyée directement à notre équipe.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.22em] text-[var(--color-plum)]/70 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-[var(--color-plum)]/30 py-3 text-[var(--color-plum)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
      />
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-[var(--color-plum-deep)] text-[var(--color-ivory)] border-t border-[var(--color-gold)]/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-script text-4xl text-[var(--color-gold)] leading-none">
              Palais
            </span>
            <span className="font-display italic text-2xl text-[var(--color-gold-soft)]">
              Layel
            </span>
          </div>
          <p className="mt-5 text-sm text-[var(--color-ivory)]/65 font-light leading-relaxed max-w-xs">
            Salle des fêtes d'exception à Bordj El Bahri — où chaque
            célébration devient un souvenir éternel.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-5">Navigation</div>
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="text-[var(--color-ivory)]/75 hover:text-[var(--color-gold)] transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-5">Nous trouver</div>
          <p className="text-sm text-[var(--color-ivory)]/75 font-light leading-relaxed">
            117 Route Nationale 24
            <br />
            Bordj El Bahri, Alger
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100075888410027"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center border border-[var(--color-gold)]/40 text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-plum)] transition-all"
            >
              <Facebook size={16} />
            </a>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
              className="inline-flex h-10 w-10 items-center justify-center border border-[var(--color-gold)]/40 text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-plum)] transition-all"
            >
              <Star size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-gold)]/15">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-ivory)]/50">
          <div>© 2025 Salle Des Fêtes Palais Layel · Bordj El Bahri, Alger</div>
          <div className="tracking-[0.2em] uppercase">Conçu avec amour ✦</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Reveal helper ---------- */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("is-visible"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
