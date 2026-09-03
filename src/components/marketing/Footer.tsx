import { Leaf, Phone, MapPin } from "lucide-react";
import { business } from "@/business";

const address = [
  business.address.street,
  business.address.city,
  business.address.province,
  business.address.postalCode,
]
  .filter(Boolean)
  .join(", ");
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export function Footer() {
  return (
    <footer className="border-t bg-foreground py-12 text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-lg font-bold">{business.shortName}</span>
          </div>

          <div className="flex flex-col gap-3 text-sm text-background/80">
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-background"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phone}
            </a>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-background"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {address}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-sm text-background/60">
       © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
