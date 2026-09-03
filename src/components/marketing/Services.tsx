import { Leaf, Snowflake } from "lucide-react";
import { business } from "@/business";


export function Services() {
  return (
<section id="services" className="bg-background pt-28 pb-16 sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services
          </h2>
      <p className="mt-2 text-lg text-muted-foreground">
        Year-round property maintenance and snow removal for homes and businesses in {business.city}.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
         {business.services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
  {index === 0 ? (
    <Leaf className="h-6 w-6" aria-hidden="true" />
  ) : (
    <Snowflake className="h-6 w-6" aria-hidden="true" />
  )}
</div>
              <h3 className="mt-6 text-xl font-semibold text-card-foreground">{service.title}</h3>
              <p className="mt-3 text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
