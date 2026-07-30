import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-desk.jpg";
import servicesImg from "@/assets/services-flatlay.jpg";

const TITLE = "Fabiola Estrada — Luxury Virtual Administrative Assistant";
const DESCRIPTION =
  "Refined executive support for founders and professionals. Calendar, inbox, travel, and lifestyle management — delivered with discretion and polish.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    title: "Executive Support",
    desc: "Inbox curation, calendar orchestration, and meeting choreography that returns hours to your week.",
  },
  {
    title: "Travel & Itineraries",
    desc: "First-class travel planning, private car coordination, and hotel bookings tailored to your standards.",
  },
  {
    title: "Client & CRM Care",
    desc: "Warm, on-brand client communication, follow-ups, and CRM upkeep that protect every relationship.",
  },
  {
    title: "Project Coordination",
    desc: "Deadlines tracked, vendors managed, deliverables shipped precisely, on time.",
  },
  {
    title: "Lifestyle Concierge",
    desc: "Reservations, gifting, and the invisible details that make a life feel effortless.",
  },
  {
    title: "Bookkeeping Light",
    desc: "Expense tracking, invoicing, and receipts organized so tax season is never a scramble.",
  },
];

const packages = [
  {
    name: "Essential",
    price: "$1,400",
    cadence: "/month",
    tagline: "Steady support for growing professionals",
    features: [
      "10 hours of dedicated support a week",
      "Inbox & calendar management",
      "Weekly priority briefings",
      "Business-hour response",
    ],
  },
  {
    name: "Signature",
    price: "$2,800",
    cadence: "/month",
    tagline: "The signature partnership, most requested",
    features: [
      "20 hours of dedicated support a week",
      "Everything in Essential",
      "Travel coordination",
      "Client communication",
      "CRM Review",
      "Same-day response",
    ],
    featured: true,
  },
];



function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Packages />
      
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2 !text-black">
          <span className="font-serif text-2xl italic !text-black">Fabiola</span>
          <span className="font-serif text-2xl italic !text-black">Estrada</span>
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {[
            ["About", "#about"],
            ["Services", "#services"],
            ["Packages", "#packages"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-luxe pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blush/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-16 h-[28rem] w-[28rem] rounded-full bg-gold-soft/30 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-gradient" />
            Luxury Virtual Assistant
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Your days,{" "}
            <span className="text-gold-gradient italic">effortlessly</span> orchestrated.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I am Fabiola Estrada, your new virtual assistant. I am a discreet, meticulous
            administrative partner for founders, executives, and creative professionals
            who want their business (and their calendar) to feel as refined as their brand.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-luxe transition-transform hover:-translate-y-0.5"
            >
              Book a discovery call
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              ["15+", "Years supporting execs"],
              ["50+", "Clients served"],
              ["24h", "Response window"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-3xl text-foreground">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gold-gradient opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-luxe">
            <img
              src={heroImg}
              alt="Elegant marble desk with pink roses, a gold pen, and a laptop — Fabiola Estrada's refined workspace"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Executive Support",
    "Calendar Mastery",
    "Inbox Zero",
    "Travel Concierge",
    "Client Care",
    "Bespoke Systems",
  ];
  return (
    <div className="border-y border-border/50 bg-background/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 lg:px-10">
        {items.map((i, idx) => (
          <div key={i} className="flex items-center gap-10">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              {i}
            </span>
            {idx < items.length - 1 && (
              <span className="h-1 w-1 rounded-full bg-gold-gradient" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-5 lg:gap-20 lg:px-10">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-gradient">
            ABOUT ME
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            A quiet kind of luxury, the one that shows up on time.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-3">
          <p>
            After nearly a decade supporting C suite leaders and creative founders, I built my
            administrative practice for people who value
            precision, warmth, and the kind of taste that can't be delegated to software.
          </p>
          <p>
            Every partnership begins with listening, to your vision, your standards, and
            the way you want your business to feel to the people it touches. Then I build
            the invisible systems that make it look easy.

          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["Discreet", "Detail Oriented", "Bilingual (EN/ES)"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-gold/40 bg-secondary/50 px-4 py-1.5 text-sm font-medium text-foreground"
                >
                  {chip}
                </span>
              ),
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative bg-luxe py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-gradient">
            Services
          </span>
          <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
            Support crafted for the details that matter.
          </h2>
          <hr className="gold-divider mx-auto mt-6" />
          <p className="mt-6 text-lg text-muted-foreground">
            A curated menu of administrative and lifestyle services combined into a
            partnership that fits the way you live and work.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gold-gradient opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="font-serif text-sm italic text-gold-gradient">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/60 shadow-luxe">
          <img
            src={servicesImg}
            alt="Luxury flat lay of a leather planner, blush ribbon, and gold accessories representing polished administrative support"
            width={1400}
            height={1000}
            loading="lazy"
            className="h-72 w-full object-cover md:h-96"
          />
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="packages" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-gradient">
            Packages
          </span>
          <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
            Investing in your peace.
          </h2>
          <hr className="gold-divider mx-auto mt-6" />
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-4xl">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all ${
                p.featured
                  ? "border-transparent bg-foreground text-background shadow-luxe lg:-translate-y-4 lg:scale-[1.02]"
                  : "border-border/70 bg-card shadow-soft hover:shadow-luxe"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-gradient px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-foreground">
                  Most loved
                </span>
              )}
              <h3 className="font-serif text-3xl">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>
                {p.tagline}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-5xl">{p.price}</span>
                <span className={`text-sm ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>
                  {p.cadence}
                </span>
              </div>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                        p.featured ? "bg-gold-soft" : "bg-gold-gradient"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 rounded-full px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-widest transition-all ${
                  p.featured
                    ? "bg-gold-gradient text-primary-foreground hover:opacity-90"
                    : "border border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                Begin here
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact" className="bg-luxe py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card p-10 shadow-luxe md:p-16">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blush/50 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-soft/40 blur-3xl" />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-gradient">
              Let's begin
            </span>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              Ready for a calmer, more polished business?
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Tell me a little about your world. What keeps you up at night? What is the
              most important thing to you? Let's think of a plan together.
            </p>

            <form
              className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent("New inquiry — Fabiola Estrada");
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company")}\n\n${data.get("message")}`,
                );
                window.location.href = `mailto:hello@fabiolaestrada.com?subject=${subject}&body=${body}`;
              }}
            >
              <Field name="name" label="Full name" required />
              <Field name="email" label="Email" type="email" required />
              <div className="md:col-span-2">
                <Field name="message" label="How can I help?" textarea required />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-luxe transition-transform hover:-translate-y-0.5 md:col-span-2"
              >
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-colors";
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
        <div>
          <p className="font-serif text-xl italic !text-black">
            Fabiola <span className="italic !text-black">Estrada</span>
          </p>
          <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
            Luxury Administrative Partnership
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Fabiola Estrada. Crafted with care.
        </p>
      </div>
    </footer>
  );
}
