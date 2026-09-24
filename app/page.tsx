import Image from "next/image";
import MobileMenu from "./MobileMenu";

const products = [
  {
    name: "Cashew Nuts",
    image: "/products/cashew.jpg",
    description:
      "Quality Nigerian cashew nuts sourced from reliable farming communities and prepared for international buyers.",
  },
  {
    name: "Sesame Seeds",
    image: "/products/sesame.jpg",
    description:
      "Carefully sourced sesame seeds suitable for international food, processing and trading markets.",
  },
  {
    name: "Cocoa",
    image: "/products/cocoa.jpg",
    description:
      "Quality Nigerian cocoa sourced through trusted supply channels for international buyers.",
  },
  {
    name: "Dried Ginger",
    image: "/products/ginger.jpg",
    description:
      "Naturally dried Nigerian ginger sourced for buyers looking for dependable agricultural commodities.",
  },
  {
    name: "Hibiscus",
    image: "/products/hibiscus.jpg",
    description:
      "Clean, carefully handled dried hibiscus flowers sourced from Nigerian agricultural suppliers.",
  },
  {
    name: "Other Agricultural Commodities",
    image: "/products/agricultural.jpg",
    description:
      "We can source additional agricultural commodities based on buyer specifications and requirements.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFEFB] text-[#0A2E20]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A2E20]/95 shadow-lg backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <div className="flex items-center">
<Image
  src="/logo.jpeg"
  alt="Pure Unity Exports Ltd"
  width={260}
  height={90}
  className="h-24 w-auto object-contain"
  style={{ width: "auto", height: "96px" }}
  priority
/>
</div>

          <nav className="hidden items-center gap-9 md:flex">
           <a href="#about" className="text-sm font-bold tracking-wide text-white/80 transition hover:text-[#C6A558]">
              About
            </a>
            <a
              href="#products"
              className="text-sm font-bold tracking-wide text-white/80 transition hover:text-[#C6A558]"
            >
              Products
            </a>
            <a
  href="#process"
  className="text-sm font-bold tracking-wide text-white/80 transition hover:text-[#C6A558]"
>
  Our Process
</a>
           <a
  href="#contact"
  className="text-sm font-bold tracking-wide text-white/80 transition hover:text-[#C6A558]"
>
  Contact
</a>
          </nav>

          <MobileMenu />

          <a
            href="https://wa.me/2349032983019"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#C6A558] px-5 py-2.5 text-sm font-bold text-[#0A2E20] transition hover:bg-white md:inline-flex"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

     {/* HERO */}
<section className="relative overflow-hidden bg-[#EAF2E5]">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
    <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
      
      {/* HERO TEXT */}
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C6A558]/40 bg-white/60 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#315C3A]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#315C3A]">
            Nigerian Agricultural Trade
          </span>
        </div>

        <h1 className="text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
          QUALITY
          <br />
          FROM{" "}
          <span className="text-[#C6A558]">NATURE.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 lg:text-xl">
          Pure Unity Exports Ltd connects Nigerian agricultural commodities
          with international buyers while sourcing and supplying agricultural
          farm merchandise for businesses and institutional partners.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#products"
            className="rounded-full bg-[#0A2E20] px-7 py-4 text-center font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#164936]"
          >
            Explore Our Products
          </a>

          <a
            href="https://wa.me/2349032983019"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-[#0A2E20] bg-white/40 px-7 py-4 text-center font-bold text-[#0A2E20] transition hover:bg-[#0A2E20] hover:text-white"
          >
            Request a Quote
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600">
          <span>✓ Nigerian sourced</span>
          <span>✓ Buyer-focused</span>
          <span>✓ Export & supply</span>
        </div>
      </div>

      {/* HERO VISUAL */}
      <div className="relative hidden lg:block">
        <div className="relative mx-auto aspect-square max-w-[460px] overflow-hidden rounded-[2rem] bg-[#315C3A] shadow-2xl">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,165,88,0.35),transparent_40%)]" />

          <div className="absolute left-8 top-8 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C6A558]">
              Export
            </p>
            <p className="mt-1 text-lg font-black text-white">
              Agriculture
            </p>
          </div>

          <div className="absolute bottom-8 right-8 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C6A558]">
              Supply
            </p>
            <p className="mt-1 text-lg font-black text-white">
              Farm Merchandise
            </p>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-7xl font-black text-white/10">PUEL</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.3em] text-white/70">
                Pure Unity Exports Ltd
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* Decorative elements */}
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-[#C6A558]/20" />
  <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#C6A558]/20" />
</section>

{/* ABOUT */}
<section id="about" className="bg-white px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

      {/* LEFT */}
      <div>
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#C6A558]">
          Who We Are
        </p>

        <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
          Connecting Nigerian agriculture with
          <span className="text-[#315C3A]"> wider markets.</span>
        </h2>

        <div className="mt-8 h-1 w-20 bg-[#C6A558]" />
      </div>

      {/* RIGHT */}
      <div>
        <p className="text-lg leading-8 text-gray-600">
          Pure Unity Exports Ltd is a Nigerian agricultural trading company
          based in Ibadan, Oyo State. We work across agricultural commodity
          exportation and the sourcing and supply of agricultural farm
          merchandise.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our approach is built around dependable sourcing, clear
          communication and understanding the specific requirements of our
          buyers and business partners.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Whether a buyer needs Nigerian agricultural commodities for
          international markets or businesses require agricultural farm
          merchandise, we aim to build practical and transparent supply
          relationships.
        </p>

        {/* COMPANY DETAILS */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-[#315C3A]/15 bg-[#EAF2E5] p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C6A558]">
              Company
            </p>
            <p className="mt-2 font-black text-[#0A2E20]">
              Pure Unity Exports Ltd
            </p>
          </div>

          <div className="rounded-2xl border border-[#315C3A]/15 bg-[#EAF2E5] p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C6A558]">
              Registration
            </p>
            <p className="mt-2 font-black text-[#0A2E20]">
              RC 9809879
            </p>
          </div>

          <div className="rounded-2xl border border-[#315C3A]/15 bg-[#EAF2E5] p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C6A558]">
              Location
            </p>
            <p className="mt-2 font-black text-[#0A2E20]">
              Ibadan, Oyo State
            </p>
          </div>

          <div className="rounded-2xl border border-[#315C3A]/15 bg-[#EAF2E5] p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C6A558]">
              Focus
            </p>
            <p className="mt-2 font-black text-[#0A2E20]">
              Export & Agricultural Supply
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

     {/* PRODUCTS */}
<section
  id="products"
  className="bg-[#EAF2E5] px-6 py-24 lg:px-8"
>
  <div className="mx-auto max-w-7xl">

    {/* SECTION HEADER */}
    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
      <div className="max-w-3xl">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#C6A558]">
          What We Supply
        </p>

        <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
          Agricultural products sourced for
          <span className="text-[#315C3A]"> serious buyers.</span>
        </h2>
      </div>

      <p className="max-w-md text-lg leading-8 text-gray-600">
        Product specifications, quantity, packaging and availability can be
        discussed according to each buyer&apos;s requirements.
      </p>
    </div>

    {/* PRODUCT GRID */}
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <div
          key={product.name}
          className="group relative overflow-hidden rounded-3xl border border-[#315C3A]/15 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >

          {/* NUMBER */}
          <div className="flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF2E5] text-sm font-black text-[#315C3A]">
              0{index + 1}
            </span>

            <span className="text-xs font-bold uppercase tracking-widest text-[#C6A558]">
              Nigerian Origin
            </span>
          </div>

          {/* ICON / VISUAL */}
         <div className="relative mt-10 h-60 overflow-hidden rounded-2xl bg-[#EAF2E5]">
 <Image
  src={product.image}
  alt={product.name}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
/>
  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E20]/60 via-[#0A2E20]/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
</div>

          {/* CONTENT */}
          <h3 className="mt-7 text-2xl font-black text-[#0A2E20]">
            {product.name}
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            {product.description}
          </p>

          {/* FOOTER */}
          <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Export Supply
            </span>

           <a
  href="#contact"
  className="text-sm font-bold text-[#315C3A] transition hover:text-[#C6A558]"
>
  Enquire →
</a>
          </div>

        </div>
      ))}
    </div>

    {/* BUYER NOTE */}
    <div className="mt-10 rounded-3xl border border-[#C6A558]/30 bg-white/60 p-6 lg:flex lg:items-center lg:justify-between lg:p-8">
      <div>
        <p className="font-black text-[#0A2E20]">
          Looking for a commodity not listed here?
        </p>

        <p className="mt-2 text-gray-600">
          Tell us your product, quantity, specification and destination.
        </p>
      </div>

      <a
        href="https://wa.me/2349032983019"
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-full bg-[#0A2E20] px-6 py-3 font-bold text-white transition hover:bg-[#164936] lg:mt-0"
      >
        Talk to Us
      </a>
    </div>

  </div>
</section>

     {/* FARM MERCHANDISE */}
<section className="relative overflow-hidden bg-[#315C3A] px-6 py-24 text-white lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

      {/* LEFT */}
      <div>
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#C6A558]">
          Agricultural Supply
        </p>

        <h2 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl">
          More than commodities.
          <span className="text-[#C6A558]">
            {" "}We support agriculture.
          </span>
        </h2>

        <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
          In addition to agricultural commodity exportation, Pure Unity
          Exports Ltd can source and supply agricultural farm merchandise
          and related products for businesses, farms and institutional
          buyers.
        </p>

        <a
          href="#contact"
          className="mt-9 inline-flex rounded-full bg-[#C6A558] px-7 py-4 font-bold text-[#0A2E20] transition hover:-translate-y-0.5 hover:bg-white"
        >
          Discuss Your Requirement
        </a>
      </div>

      {/* RIGHT */}
      <div className="grid gap-4 sm:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm transition hover:bg-white/15">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C6A558] text-xl font-black text-[#0A2E20]">
            01
          </div>

          <h3 className="mt-6 text-xl font-black">
            Farm Supplies
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/60">
            Sourcing agricultural supplies according to buyer requirements.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm transition hover:bg-white/15">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C6A558] text-xl font-black text-[#0A2E20]">
            02
          </div>

          <h3 className="mt-6 text-xl font-black">
            Farm Equipment
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/60">
            Agricultural merchandise sourced for farms and business needs.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm transition hover:bg-white/15">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C6A558] text-xl font-black text-[#0A2E20]">
            03
          </div>

          <h3 className="mt-6 text-xl font-black">
            Business Supply
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/60">
            Procurement support for businesses and institutional buyers.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm transition hover:bg-white/15">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C6A558] text-xl font-black text-[#0A2E20]">
            04
          </div>

          <h3 className="mt-6 text-xl font-black">
            Custom Requests
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/60">
            Tell us what you need and we can discuss sourcing options.
          </p>
        </div>

      </div>
    </div>
  </div>

  {/* Decorative circles */}
  <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#C6A558]/20" />
  <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-white/10" />
</section>

     {/* PROCESS */}
<section id="process" className="bg-white px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="max-w-3xl">
      <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#C6A558]">
        Our Process
      </p>

      <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
        From requirement to
        <span className="text-[#315C3A]"> delivery.</span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        We keep our process straightforward, communicating with buyers at
        each stage of the transaction and working toward agreed product,
        quantity and delivery requirements.
      </p>
    </div>

    {/* STEPS */}
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {/* STEP 01 */}
      <div className="group rounded-3xl border border-[#315C3A]/10 bg-[#EAF2E5] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-5xl font-black text-[#315C3A]/15">
            01
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2E20] text-sm font-black text-white">
            →
          </span>
        </div>

        <h3 className="mt-10 text-xl font-black text-[#0A2E20]">
          Understand
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          We discuss the product, quantity, specification, destination and
          other requirements.
        </p>
      </div>

      {/* STEP 02 */}
      <div className="group rounded-3xl border border-[#315C3A]/10 bg-[#EAF2E5] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-5xl font-black text-[#315C3A]/15">
            02
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2E20] text-sm font-black text-white">
            →
          </span>
        </div>

        <h3 className="mt-10 text-xl font-black text-[#0A2E20]">
          Source
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          We work through our supply network to identify suitable products
          and sourcing options.
        </p>
      </div>

      {/* STEP 03 */}
      <div className="group rounded-3xl border border-[#315C3A]/10 bg-[#EAF2E5] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-5xl font-black text-[#315C3A]/15">
            03
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2E20] text-sm font-black text-white">
            →
          </span>
        </div>

        <h3 className="mt-10 text-xl font-black text-[#0A2E20]">
          Prepare
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Products and documentation are coordinated according to the
          agreed transaction and applicable requirements.
        </p>
      </div>

      {/* STEP 04 */}
      <div className="group rounded-3xl border border-[#315C3A]/10 bg-[#EAF2E5] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-5xl font-black text-[#315C3A]/15">
            04
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A558] text-sm font-black text-[#0A2E20]">
            ✓
          </span>
        </div>

        <h3 className="mt-10 text-xl font-black text-[#0A2E20]">
          Deliver
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          We coordinate the agreed logistics and delivery process with the
          buyer or business partner.
        </p>
      </div>

    </div>

    {/* BOTTOM LINE */}
    <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm font-semibold text-gray-500">
        Clear communication • Practical sourcing • Buyer-focused service
      </p>

      <a
        href="#contact"
       className="text-sm font-bold tracking-wide text-[#315C3A] transition hover:text-[#C6A558]"
      >
        Start a conversation →
      </a>
    </div>

  </div>
</section>

   {/* CTA */}
<section
  id="contact"
  className="relative overflow-hidden bg-[#F8F5EE] px-6 py-24 lg:px-8"
>
  <div className="relative z-10 mx-auto max-w-7xl">

    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

      {/* LEFT */}
      <div>
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#C6A558]">
          Start a Conversation
        </p>

        <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Have a product or supply requirement?
        </h2>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
          Tell us what you are looking for, the quantity required,
          specifications and destination. Our team can discuss sourcing,
          supply and export options with you.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://wa.me/2349032983019"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#0A2E20] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#164936]"
          >
            WhatsApp Us
          </a>

          <a
            href="mailto:pureunityexport@gmail.com"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#0A2E20] px-8 py-4 font-bold text-[#0A2E20] transition hover:bg-[#0A2E20] hover:text-white"
          >
            Send an Email
          </a>
        </div>
      </div>

      {/* RIGHT — INQUIRY CARD */}
      <div className="rounded-[2rem] bg-[#0A2E20] p-8 text-white shadow-2xl lg:p-10">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6A558]">
          Buyer Information
        </p>

        <h3 className="mt-4 text-2xl font-black">
          What should you include?
        </h3>

        <div className="mt-8 space-y-5">

          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C6A558] text-sm font-black text-[#0A2E20]">
              1
            </span>
            <div>
              <p className="font-bold">Product</p>
              <p className="mt-1 text-sm leading-6 text-white/60">
                Tell us the agricultural commodity or farm merchandise you
                need.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C6A558] text-sm font-black text-[#0A2E20]">
              2
            </span>
            <div>
              <p className="font-bold">Quantity</p>
              <p className="mt-1 text-sm leading-6 text-white/60">
                Let us know the required quantity or estimated order size.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C6A558] text-sm font-black text-[#0A2E20]">
              3
            </span>
            <div>
              <p className="font-bold">Specification</p>
              <p className="mt-1 text-sm leading-6 text-white/60">
                Include quality, packaging or other relevant requirements.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C6A558] text-sm font-black text-[#0A2E20]">
              4
            </span>
            <div>
              <p className="font-bold">Destination</p>
              <p className="mt-1 text-sm leading-6 text-white/60">
                Tell us where the goods need to be delivered.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-sm text-white/50">
            PURE UNITY EXPORTS LTD
          </p>

          <p className="mt-1 text-sm font-semibold text-white/80">
            Ibadan, Oyo State, Nigeria
          </p>
        </div>

      </div>
    </div>
  </div>

  {/* Decorative circle */}
  <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full border border-[#C6A558]/20" />
</section>

     {/* FOOTER */}
<footer className="bg-[#0A2E20] px-6 pt-16 text-white lg:px-8">
  <div className="mx-auto max-w-7xl">

    {/* FOOTER TOP */}
    <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">

      {/* BRAND */}
      <div className="lg:col-span-2">
       <Image 
          src="/logo.jpeg" 
          alt="Pure Unity Exports Ltd" 
          width={220} 
          height={80} 
          className="h-20 w-auto object-contain"
          style={{ width: "auto", height: "80px" }}
        />

        <p className="mt-6 max-w-md leading-7 text-white/60">
          Connecting Nigerian agricultural commodities with buyers and
          business partners while supporting agricultural supply through
          farm merchandise sourcing.
        </p>

        <p className="mt-5 text-sm font-semibold text-[#C6A558]">
          RC 9809879
        </p>
      </div>

      {/* BUSINESS */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C6A558]">
          Business
        </h3>

        <div className="mt-6 space-y-3 text-sm text-white/60">
          <a
            href="#about"
            className="block transition hover:text-white"
          >
            About Us
          </a>

         <a
  href="#products"
  className="block transition hover:text-white"
>
  Agricultural Commodities
</a>

          <a
            href="#products"
            className="block transition hover:text-white"
          >
            Export Supply
          </a>

         <a
  href="#contact"
  className="block transition hover:text-white"
>
  Contact
</a>

          <a
            href="#process"
           className="block transition hover:text-white"
          >
            Our Process
          </a>
        </div>
      </div>

      {/* CONTACT */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C6A558]">
          Contact
        </h3>

        <div className="mt-6 space-y-4 text-sm leading-6 text-white/60">
          <p>
            13, Olosan,
            <br />
            Ibadan, Oyo State,
            <br />
            Nigeria
          </p>

          <a
            href="mailto:pureunityexport@gmail.com"
            className="block transition hover:text-white"
          >
            pureunityexport@gmail.com
          </a>

          <a
            href="tel:+2349032983019"
            className="block transition hover:text-white"
          >
            +234 903 298 3019
          </a>

          <a
            href="https://wa.me/2349032983019"
            target="_blank"
            rel="noreferrer"
            className="inline-block font-bold text-[#C6A558] transition hover:text-white"
          >
            WhatsApp →
          </a>
        </div>
      </div>

    </div>

    {/* FOOTER BOTTOM */}
    <div className="flex flex-col gap-4 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">

     <p className="text-white/50">
  © 2026 Pure Unity Exports Ltd. All rights reserved.
</p>

      <p className="text-white/50">
  Agricultural Export • Farm Merchandise Supply • Nigeria
</p>

    </div>

  </div>
</footer>
    </main>
  );
}