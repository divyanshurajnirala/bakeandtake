import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CakeSlice,
  Clock,
  Coffee,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sandwich,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";

const phone = "6306681171";
const tel = `tel:+91${phone}`;
const whatsapp =
  "https://wa.me/916306681171?text=Hi%20Bake%20%26%20Take%2C%20I%20want%20to%20place%20an%20order.";
const instagram = "https://www.instagram.com/bakeandtake.in/";
const zomato = "https://www.zomato.com/jaunpur/bake-and-take-1-jaunpur-locality";

const photos = {
  hero: "https://img02.restaurantguru.com/cd9e-Bake-and-Take-Jaunpur-food.jpg",
  cake: "https://img02.restaurantguru.com/c0d2-Bake-and-Take-Jaunpur-red-velvet-cake.jpg",
  ambience: "https://img02.restaurantguru.com/cda1-Bake-and-Take-Jaunpur-design.jpg",
  counter: "https://img02.restaurantguru.com/cd9e-Bake-and-Take-Jaunpur-food.jpg",
};

const navItems = [
  ["About", "#about"],
  ["Menu", "#menu"],
  ["Ambience", "#ambience"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

const products = [
  {
    name: "Celebration Cakes",
    note: "Custom chocolate, red velvet, butterscotch, pineapple, Oreo and fresh cream cakes.",
    icon: CakeSlice,
    image: photos.cake,
    badge: "Most loved",
  },
  {
    name: "Pastries & Desserts",
    note: "Soft slices, choco lava, donuts, cold coffee pairings, and sweet little treats.",
    icon: Coffee,
    image: photos.hero,
    badge: "Fresh daily",
  },
  {
    name: "Butter Maggi",
    note: "The cozy comfort order for after-college cravings and quick hangouts.",
    icon: Utensils,
    image: photos.ambience,
    badge: "Crowd pick",
  },
  {
    name: "Snacks & Bites",
    note: "Sandwiches, burgers, pizza, momos, noodles, shakes, and bakery-style combos.",
    icon: Sandwich,
    image: photos.counter,
    badge: "Order online",
  },
];

const gallery = [
  {
    title: "Warm dessert counter",
    image: photos.hero,
    span: "md:col-span-2",
  },
  {
    title: "Celebration cakes",
    image: photos.cake,
    span: "",
  },
  {
    title: "Cozy seating",
    image: photos.ambience,
    span: "",
  },
  {
    title: "Evening treats",
    image: photos.counter,
    span: "md:col-span-2",
  },
];

const testimonials = [
  {
    name: "Ritesh S.",
    text: "I like all food, specially cold coffee, sandwich and burger.",
    detail: "Food 4/5 | Service 5/5",
  },
  {
    name: "Luna",
    text: "Good one. Neatness, lighting and food are good. Must check out once.",
    detail: "Atmosphere 5/5",
  },
  {
    name: "Local Guest",
    text: "Fresh and delicious pastries with a peaceful vibe.",
    detail: "Worth every rupee",
  },
];

const reasons = [
  ["Freshly Baked Daily", "Cakes, pastries, desserts, and snacks made for happy walk-ins.", CakeSlice],
  ["Affordable Luxury", "Premium-looking treats that still feel friendly for everyday cravings.", Star],
  ["Aesthetic Ambience", "Soft lights, cozy corners, and photo-ready bakery moments.", Sparkles],
  ["Friendly Staff", "Warm service that makes a quick order feel personal.", Heart],
  ["Custom Cakes", "Birthday, anniversary, and celebration cakes made to order.", MessageCircle],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function SectionLabel({ children }) {
  return (
    <motion.p
      variants={fadeUp}
      className="mb-4 inline-flex items-center gap-2 rounded-full border border-caramel/40 bg-white/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cocoa"
    >
      <Sparkles size={14} />
      {children}
    </motion.p>
  );
}

function PrimaryButton({ href, children, icon: Icon = ArrowRight, dark = false }) {
  return (
    <motion.a
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-glow transition ${
        dark
          ? "bg-chocolate text-cream hover:bg-cocoa"
          : "bg-caramel text-chocolate hover:bg-[#e2b685]"
      }`}
    >
      {children}
      <Icon size={18} className="transition group-hover:translate-x-0.5" />
    </motion.a>
  );
}

function SecondaryButton({ href, children, icon: Icon = ArrowRight }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-chocolate/15 bg-white/70 px-6 py-3 text-sm font-bold text-chocolate shadow-soft backdrop-blur transition hover:border-caramel hover:bg-white"
    >
      {children}
      <Icon size={18} />
    </motion.a>
  );
}

function FloatingTreats() {
  const treats = ["✦", "●", "✧", "◌", "✦", "●"];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {treats.map((treat, index) => (
        <motion.span
          key={`${treat}-${index}`}
          animate={{ y: [-14, 18, -14], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full text-caramel/70"
          style={{
            left: `${12 + index * 15}%`,
            top: `${18 + (index % 3) * 24}%`,
            fontSize: `${16 + index * 2}px`,
          }}
        >
          {treat}
        </motion.span>
      ))}
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/55 bg-cream/78 px-4 py-3 shadow-soft backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-chocolate text-cream shadow-glow">
            <CakeSlice size={19} />
          </span>
          <span>
            <span className="block font-serif text-lg font-bold leading-none text-chocolate">
              Bake & Take
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-cocoa/75 sm:block">
              Jaunpur
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-chocolate/72 transition hover:text-chocolate"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={zomato}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-caramel/40 bg-white/65 px-4 py-2 text-sm font-bold text-chocolate transition hover:bg-white sm:inline-flex"
          >
            Zomato
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-chocolate px-4 py-2 text-sm font-bold text-cream shadow-glow transition hover:bg-cocoa"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Order Now</span>
          </a>
          <button
            className="grid size-10 place-items-center rounded-full border border-chocolate/10 bg-white/60 text-chocolate lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 650], [0, 90]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-cream-radial px-4 pt-28 sm:px-6 lg:pt-32">
      <FloatingTreats />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-rosecream to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 pb-20 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/55 px-4 py-2 text-sm font-bold text-chocolate shadow-soft backdrop-blur">
            <Star size={16} className="fill-caramel text-caramel" />
            4.5 Rating | 140+ Google Reviews
          </div>
          <h1 className="max-w-4xl break-words font-serif text-[3.25rem] font-extrabold leading-[0.95] text-chocolate sm:text-6xl lg:text-7xl">
            Freshly Baked Happiness,{" "}
            <span className="block lg:inline">
              <span className="soft-underline">Served Daily</span> 🍰
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cocoa/88 sm:text-xl">
            Handcrafted cakes, pastries, and treats made with love on TD College Road.
            A cozy dessert stop for birthdays, dates, family evenings, and after-college cravings.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={whatsapp} icon={MessageCircle} dark>
              Order on WhatsApp
            </PrimaryButton>
            <SecondaryButton href="#menu" icon={CakeSlice}>
              View Menu
            </SecondaryButton>
            <SecondaryButton href={zomato} icon={Utensils}>
              Order Online
            </SecondaryButton>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-2 sm:gap-3">
            {[
              ["10 AM", "Opening"],
              ["₹300", "For two"],
              ["TD Road", "Jaunpur"],
            ].map(([value, label]) => (
              <div key={label} className="glass min-w-0 rounded-2xl px-2 py-4 text-center sm:px-4">
                <p className="truncate font-serif text-xl font-bold text-chocolate sm:text-2xl">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-cocoa/65">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: imageY }} className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute -left-3 top-12 z-20 hidden rounded-full bg-pink/80 px-5 py-3 text-sm font-bold text-chocolate shadow-glow lg:block">
            Custom cakes available
          </div>
          <div className="absolute -right-2 bottom-16 z-10 hidden rounded-3xl bg-chocolate px-5 py-4 text-cream shadow-glow lg:block">
            <p className="text-xs uppercase tracking-[0.2em] text-cream/70">Best for</p>
            <p className="font-serif text-2xl font-bold">Sweet dates</p>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2.2rem] border border-white/65 bg-white/40 p-3 shadow-glow"
          >
            <img
              src={photos.hero}
              alt="Bake & Take dessert counter"
              className="h-[450px] w-full rounded-[1.6rem] object-cover sm:h-[560px]"
            />
            <div className="absolute inset-3 rounded-[1.6rem] bg-gradient-to-t from-chocolate/68 via-transparent to-white/8" />
            <div className="absolute bottom-8 left-8 right-32 text-cream sm:right-44">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-cream/78">
                Bake & Take Jaunpur
              </p>
              <p className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
                Cakes, pastries & cozy moments.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="bg-rosecream px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
          <img
            src={photos.cake}
            alt="Red velvet cake at Bake & Take"
            className="h-72 w-full rounded-[1.75rem] object-cover shadow-soft"
          />
          <img
            src={photos.ambience}
            alt="Bake & Take interior"
            className="mt-10 h-72 w-full rounded-[1.75rem] object-cover shadow-soft"
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight text-chocolate sm:text-5xl">
            A softer, sweeter corner of Jaunpur.
          </h2>
          <p className="mt-6 text-lg leading-8 text-cocoa/86">
            Bake & Take is built around the little rituals that make a day feel special:
            choosing a birthday cake, sharing a pastry after class, getting coffee with someone
            you like, or finding a peaceful table when the city feels busy.
          </p>
          <p className="mt-4 text-lg leading-8 text-cocoa/86">
            The feeling is warm, handcrafted, and quietly premium. Fresh bakery shelves,
            friendly staff, cozy lights, and treats that look good enough for your camera
            before they disappear from the plate.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Fresh bakery products", "Peaceful ambience", "Friendly service"].map((item) => (
              <div key={item} className="rounded-2xl bg-white/70 p-4 shadow-soft">
                <Heart size={20} className="mb-3 fill-pink text-pink" />
                <p className="text-sm font-bold text-chocolate">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function SignatureProducts() {
  return (
    <motion.section
      id="menu"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="bg-cream-radial px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionLabel>Signature Products</SectionLabel>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-chocolate sm:text-5xl">
            Sweet classics, comfort snacks, and celebration-ready cakes.
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.article
                key={product.name}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -10, scale: 1.015 }}
                className="group overflow-hidden rounded-[1.75rem] bg-white shadow-soft"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/62 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-bold text-chocolate">
                    {product.badge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-pink/35 text-chocolate">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-chocolate">{product.name}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-6 text-cocoa/78">{product.note}</p>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-bold text-chocolate transition hover:text-cocoa"
                  >
                    Order Now <ArrowRight size={17} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function Ambience() {
  return (
    <motion.section
      id="ambience"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="bg-chocolate px-4 py-20 text-cream sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel>Experience</SectionLabel>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold sm:text-5xl">
              Made for slow bites, soft lights, and happy photos.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-cream/78">
            Come for the cake, stay for the calm. Bake & Take brings together cozy seating,
            plated treats, and a peaceful vibe that works for couples, friends, and family tables.
          </motion.p>
        </div>

        <div className="mt-12 grid auto-rows-[260px] gap-5 md:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              variants={fadeUp}
              whileHover={{ scale: 1.018 }}
              className={`group relative overflow-hidden rounded-[1.75rem] ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/78 via-chocolate/12 to-transparent" />
              <p className="absolute bottom-5 left-5 font-serif text-2xl font-bold">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Reviews() {
  return (
    <motion.section
      id="reviews"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="bg-rosecream px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <motion.div variants={fadeUp} className="glass rounded-[2rem] p-8 text-center">
            <div className="mx-auto mb-5 flex w-max gap-1 rounded-full bg-white px-4 py-2 text-caramel">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={18} className="fill-caramel" />
              ))}
            </div>
            <p className="font-serif text-6xl font-bold text-chocolate">4.5</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.22em] text-cocoa/70">
              Rating | 140+ Reviews
            </p>
            <p className="mt-5 text-cocoa/78">
              Google rating signal reflected on Restaurant Guru, with happy notes for food,
              service, lighting, and atmosphere.
            </p>
          </motion.div>

          <div>
            <SectionLabel>Social Proof</SectionLabel>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-chocolate sm:text-5xl">
              Loved for taste, ambience, and value.
            </motion.h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {testimonials.map((review, index) => (
                <motion.article
                  key={review.name}
                  variants={fadeUp}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[1.5rem] bg-white p-6 shadow-soft"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="grid size-12 place-items-center rounded-full bg-pink/45 font-serif text-xl font-bold text-chocolate">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-chocolate">{review.name}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cocoa/55">
                        Verified vibe
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-cocoa/82">“{review.text}”</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-caramel">
                    {review.detail}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function WhyChooseUs() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="bg-cream-radial px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <motion.h2 variants={fadeUp} className="mx-auto max-w-3xl font-serif text-4xl font-bold text-chocolate sm:text-5xl">
            The little details that make a bakery visit feel memorable.
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map(([title, body, Icon], index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-white/70 bg-white/72 p-6 shadow-soft backdrop-blur"
            >
              <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-chocolate text-cream">
                <Icon size={22} />
              </div>
              <h3 className="font-serif text-xl font-bold text-chocolate">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-cocoa/74">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function OrderOnline() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="bg-rosecream px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-chocolate shadow-glow lg:grid-cols-[1fr_0.92fr]">
        <motion.div variants={fadeUp} className="p-8 text-cream sm:p-12 lg:p-16">
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cream/75">
            Order Online
          </p>
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">
            Cake cravings? Get Bake & Take delivered through Zomato.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/76">
            Browse cakes, pastries, snacks, burgers, sandwiches, pizza, desserts, shakes,
            and combos from the official Zomato listing.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={zomato} icon={Utensils}>
              Open Zomato
            </PrimaryButton>
            <SecondaryButton href={whatsapp} icon={MessageCircle}>
              Custom Cake Enquiry
            </SecondaryButton>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="relative min-h-[360px]">
          <img src={photos.cake} alt="Bake & Take cake" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-chocolate/30 to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  );
}

function Contact() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="bg-cream-radial px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div variants={fadeUp}>
          <SectionLabel>Visit Us</SectionLabel>
          <h2 className="font-serif text-4xl font-bold text-chocolate sm:text-5xl">
            TD College Road, Husainabad, Jaunpur.
          </h2>
          <div className="mt-8 space-y-4">
            {[
              [MapPin, "Address", "TD College Road, Husainabad, Jaunpur, Uttar Pradesh"],
              [Phone, "Phone / WhatsApp", "063066 81171"],
              [Clock, "Opening Time", "10 AM onwards"],
              [Instagram, "Instagram", "@bakeandtake.in"],
            ].map(([Icon, label, value]) => (
              <div key={label} className="flex gap-4 rounded-2xl bg-white/72 p-5 shadow-soft">
                <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-pink/40 text-chocolate">
                  <Icon size={21} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cocoa/58">{label}</p>
                  <p className="mt-1 font-semibold text-chocolate">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={tel} icon={Phone} dark>
              Call Now
            </PrimaryButton>
            <SecondaryButton href={instagram} icon={Instagram}>
              DM on Instagram
            </SecondaryButton>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-soft">
          <iframe
            title="Bake & Take location map"
            src="https://www.google.com/maps?q=Bake%20And%20Take%20TD%20College%20Road%20Jaunpur&output=embed"
            className="h-[520px] w-full rounded-[1.45rem] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-chocolate px-4 py-20 text-center text-cream sm:px-6 lg:py-28">
      <FloatingTreats />
      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-caramel">
          Freshly baked happiness
        </p>
        <h2 className="font-serif text-5xl font-bold leading-tight sm:text-6xl">
          Turn Every Moment Into Something Sweet.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/76">
          Birthday coming up, evening craving, first date, family treat, or just a day that needs cake:
          Bake & Take is ready.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <PrimaryButton href={whatsapp} icon={MessageCircle}>
            Order Now
          </PrimaryButton>
          <SecondaryButton href="#contact" icon={MapPin}>
            Visit Store
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="grain overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <SignatureProducts />
      <Ambience />
      <Reviews />
      <WhyChooseUs />
      <OrderOnline />
      <Contact />
      <FinalCta />
    </main>
  );
}

export default App;
