const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Header() {
  return (
    <header className="relative z-20 mx-auto flex h-24 w-[calc(100%-176px)] max-w-[1390px] items-center border-b border-ink/15 max-xl:w-[calc(100%-96px)] max-md:h-20 max-md:w-[calc(100%-40px)]">
      <div className="flex min-w-[360px] items-center gap-16 max-lg:min-w-0 max-lg:gap-8">
        <a
          href="#"
          className="font-serifDisplay text-[34px] font-medium leading-none tracking-[-0.02em] text-ink max-md:text-[29px]"
        >
          rinddata
        </a>
        <p className="max-w-[160px] font-sansFine text-[10px] font-medium uppercase leading-[1.45] tracking-blueprint text-ink/58 max-lg:hidden">
          Simulation engines
          <br />
          for complex datasets
        </p>
      </div>
    </header>
  );
}

function HeroBackground() {
  return (
    <div className="hero-background pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <img
        src={`${assetBasePath}/rinddata-hero-composed-v5.jpeg`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

function HeroCopy() {
  return (
    <section className="relative z-10 ml-[132px] mt-[176px] w-[430px] max-lg:ml-10 max-lg:mt-20 max-md:ml-6 max-md:w-[calc(100%-48px)]">
      <div className="absolute -left-[44px] top-[-13px] h-5 w-5 max-md:hidden">
        <span className="absolute left-1/2 top-0 h-full w-px bg-citrus/50" />
        <span className="absolute left-0 top-1/2 h-px w-full bg-citrus/50" />
      </div>
      <p className="font-sansFine text-[9px] font-semibold uppercase tracking-[0.28em] text-ink/45">
        Pushing data to its limits
      </p>
      <h1 className="mt-[25px] font-serifDisplay text-[72px] font-light leading-[0.92] tracking-[-0.025em] text-ink max-xl:text-[64px] max-md:text-[54px]">
        Coming
        <br />
        soon.
      </h1>
      <p className="mt-8 max-w-[360px] font-sansFine text-[15px] leading-[1.6] text-ink/62 max-md:text-[14px]">
        Rinddata builds simulation engines for complex datasets, helping teams
        stress-test systems with data at the edge of what models can handle.
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <div className="page-shell relative min-h-screen">
        <HeroBackground />
        <Header />
        <HeroCopy />
      </div>
    </main>
  );
}
