import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import weddingImg from "@/assets/service-wedding.jpg";
import babyImg from "@/assets/service-baby.jpg";
import engagementImg from "@/assets/service-engagement.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Candids By Kumarans Photografii — Wedding Photographer in Puducherry" },
      {
        name: "description",
        content:
          "Cinematic candid wedding photography in Puducherry. Weddings, engagements, receptions and baby shoots — 5.0 ★ rated by 49+ families.",
      },
      { property: "og:title", content: "Candids By Kumarans Photografii" },
      {
        property: "og:description",
        content: "Cinematic candid wedding photography rooted in South Indian warmth — Puducherry.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Candids By Kumarans Photografii",
          image: heroImg,
          telephone: "+91 96007 69401",
          address: {
            "@type": "PostalAddress",
            streetAddress: "No.27, Pillaiyar Koil Street, G.N Palayam",
            addressLocality: "Arumparthapuram, Puducherry",
            postalCode: "605110",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "49" },
          openingHours: "Mo-Su 09:00-20:00",
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    img: weddingImg,
    eyebrow: "Wedding Photography",
    title: "The Big Day",
    body: "Cinematic coverage of rituals, joy, and unscripted candid exchanges.",
  },
  {
    img: babyImg,
    eyebrow: "Baby & Portrait",
    title: "New Beginnings",
    body: "Tender moments of early childhood, motherhood and family bonding.",
  },
  {
    img: engagementImg,
    eyebrow: "Engagements & Reception",
    title: "Pre-Wedding",
    body: "Creative outdoor sessions that showcase the bond that began it all.",
  },
];

const testimonials = [
  {
    quote:
      "Every picture looks so natural and beautifully captured. The photography feels very real and lively, as if the moments are happening right in front of us.",
    name: "Ragul Krish",
  },
  {
    quote:
      "The results were really amazing and beyond my expectations. The album quality is too good, and every moment was captured beautifully.",
    name: "Praveen Karthi",
  },
  {
    quote:
      "We just finished looking through our album, and we are absolutely speechless. You captured the exact feeling of the day — the lighting, the composition, the small candid moments.",
    name: "Vignesh Vicky",
  },
];

function Index() {
  return (
    <div className="bg-brand-cream text-brand-onyx selection:bg-brand-gold/20" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-brand-onyx/5">
        <a href="#top" className="text-xl font-bold tracking-tight uppercase leading-none" style={{ fontFamily: "var(--font-serif)" }}>
          Kumarans
          <br />
          <span className="text-brand-gold text-[10px] tracking-[0.3em] font-normal" style={{ fontFamily: "var(--font-sans)" }}>
            Photografii
          </span>
        </a>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">
          <a href="#portfolio" className="hover:text-brand-gold transition-colors">The Portfolio</a>
          <a href="#services" className="hover:text-brand-gold transition-colors">Weddings</a>
          <a href="#reviews" className="hover:text-brand-gold transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
        </div>
        <a
          href="tel:+919600769401"
          className="px-5 py-2 border border-brand-onyx text-[10px] uppercase tracking-widest hover:bg-brand-onyx hover:text-brand-cream transition-all"
        >
          Book a Session
        </a>
      </nav>

      {/* Hero */}
      <header id="top" className="relative px-6 md:px-12 pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 z-10">
            <h2 className="text-brand-gold text-xs uppercase tracking-[0.4em] mb-4">
              Based in Puducherry · Available Worldwide
            </h2>
            <h1 className="text-6xl md:text-8xl leading-[0.9] mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Every Moment <br /> <span className="italic">is a Story.</span>
            </h1>
            <p
              className="text-brand-gold text-xl md:text-2xl mb-8"
              style={{ fontFamily: "'Noto Serif Tamil', serif" }}
            >
              கேண்டிட் பி குமரன்ஸ் போட்டோகிராபி
            </p>
            <p className="text-brand-onyx/70 max-w-sm mb-10 leading-relaxed">
              Candid wedding photography that captures the raw, unscripted emotions of your most significant
              celebrations — rooted in South Indian warmth.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2" aria-hidden>
                <div className="size-10 rounded-full border-2 border-brand-cream bg-brand-gold/20" />
                <div className="size-10 rounded-full border-2 border-brand-cream bg-brand-gold/40" />
                <div className="size-10 rounded-full border-2 border-brand-cream bg-brand-gold/60" />
              </div>
              <div className="text-xs tracking-tight">
                <span className="font-bold">5.0 ★ Rating</span>
                <span className="text-brand-onyx/50 block">49+ Happy Couples on Google</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <img
              src={heroImg}
              alt="South Indian bride and groom laughing under marigold canopy"
              width={1200}
              height={1504}
              className="w-full aspect-[4/5] object-cover shadow-2xl shadow-brand-onyx/20"
            />
            <div className="absolute -bottom-8 -left-8 size-48 border border-brand-gold/30 hidden md:block -z-0" />
          </div>
        </div>
      </header>

      {/* Portfolio strip */}
      <section id="portfolio" className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-brand-onyx/10 pb-4 mb-10 gap-4">
          <h2 className="text-3xl italic" style={{ fontFamily: "var(--font-serif)" }}>
            Selected Frames
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-onyx/50">
            Weddings · Receptions · Candids
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <img
            src={weddingImg}
            alt="Bride's hand with mehendi and gold ring"
            loading="lazy"
            width={800}
            height={1024}
            className="md:col-span-5 w-full aspect-[4/5] object-cover"
          />
          <img
            src={engagementImg}
            alt="Couple in Puducherry at golden hour"
            loading="lazy"
            width={800}
            height={1024}
            className="md:col-span-7 w-full aspect-video md:aspect-[16/10] object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-brand-onyx text-brand-cream py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl" style={{ fontFamily: "var(--font-serif)" }}>
              Specializations
            </h2>
            <p className="text-brand-cream/50 text-xs uppercase tracking-widest max-w-xs">
              Crafting visual legacies for every milestone of your life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <article key={s.title} className="group cursor-pointer">
                <div className="overflow-hidden mb-6">
                  <img
                    src={s.img}
                    alt={s.eyebrow}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-2">{s.eyebrow}</p>
                <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-brand-cream/50 font-light">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-xs uppercase tracking-[0.3em]">Voices of Trust</span>
            <p className="mt-4 text-brand-onyx/60">5.0 ★ on Google · 49 reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t) => (
              <figure key={t.name} className="space-y-6">
                <blockquote
                  className="text-xl italic leading-relaxed text-brand-onyx/90"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <span className="h-px w-8 bg-brand-gold" />
                  <span className="text-xs uppercase tracking-widest font-bold">{t.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-brand-onyx/10 pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4 space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Find Our Studio</h4>
                <address className="not-italic text-sm text-brand-onyx/60 leading-relaxed">
                  No.27, Pillaiyar Koil Street,
                  <br />
                  G.N Palayam, Arumparthapuram,
                  <br />
                  Puducherry, 605110
                </address>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Call</h4>
                <a href="tel:+919600769401" className="text-brand-gold font-bold text-lg hover:underline">
                  +91 96007 69401
                </a>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Hours</h4>
                <p className="text-sm text-brand-onyx/60">Daily · 9:00 am — 8:00 pm</p>
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col items-start md:items-end justify-between gap-8">
              <h2
                className="text-5xl md:text-7xl text-left md:text-right leading-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Let's Capture <br />
                Your Forever.
              </h2>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <a
                  href="tel:+919600769401"
                  className="bg-brand-onyx text-brand-cream px-6 py-3 text-[10px] uppercase tracking-[0.3em] hover:bg-brand-gold transition-colors"
                >
                  Call to Book
                </a>
                <a
                  href="https://wa.me/919600769401"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-gold text-sm border-b border-brand-gold pb-1 hover:text-brand-onyx transition-colors uppercase tracking-widest"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-onyx/5 pt-10 gap-4">
            <p className="text-[10px] uppercase tracking-widest text-brand-onyx/40">
              © {new Date().getFullYear()} Candids By Kumarans Photografii. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest text-brand-onyx/60">
              <a href="#" className="hover:text-brand-gold">Instagram</a>
              <a href="#" className="hover:text-brand-gold">Facebook</a>
              <a href="https://wa.me/919600769401" className="hover:text-brand-gold">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}