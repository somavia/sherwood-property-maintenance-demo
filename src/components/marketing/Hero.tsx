import { Phone, ArrowDown } from "lucide-react";
import { business } from "@/business";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-16">
      <img
       src={business.hero.image}
alt={business.hero.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-foreground/40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-sm font-medium text-background backdrop-blur-sm">
        {business.hero.eyebrow}
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl">
            {business.hero.headline}
          </h1>
          <p className="mt-6 text-lg text-background/90 sm:text-xl md:max-w-2xl">
            {business.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] hover:bg-primary/90"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
             Call {business.phone}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 bg-background/10 px-6 py-3 text-base font-semibold text-background backdrop-blur-sm transition-colors hover:bg-background/20"
            >
              View services
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
