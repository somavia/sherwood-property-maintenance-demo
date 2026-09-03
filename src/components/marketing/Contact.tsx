import { Phone, MapPin } from "lucide-react";
import { business } from "@/business";

const address = `${business.address.street}, ${business.address.city}, ${business.address.province} ${business.address.postalCode}`;
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export function Contact() {
  return (
  <section id="contact" className="bg-secondary/50 pt-24 pb-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
           {business.contact.intro}
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
               <a href={business.phoneHref} className="group">
                  <span className="block text-sm font-medium text-muted-foreground">Phone</span>{" "}
                  <span className="block text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {business.phone}
                  </span>
                </a>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="group">
                  <span className="block text-sm font-medium text-muted-foreground">Address</span>{" "}
                  <span className="block text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {address}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-card-foreground">
  Ready to get started?
</h3>
     <p className="mt-3 text-muted-foreground">
  {business.contact.ctaDescription}
</p>

<a
  href={business.phoneHref}
  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
>
  <Phone className="h-5 w-5" aria-hidden="true" />
  {business.phone}
</a>
          </div>
        </div>
      </div>
    </section>
  );
}
