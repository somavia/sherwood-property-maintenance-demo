import { MapPin, Phone, Leaf } from "lucide-react";
import { business } from "@/business";

export function WhyChooseUs() {
  return (
    <section className="bg-primary/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Property Care Made Simple
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Straightforward lawn care and property maintenance in {business.city}.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <MapPin className="h-7 w-7 text-primary" />
            <h3 className="mt-5 text-xl font-semibold">Local Service</h3>
            <p className="mt-2 text-muted-foreground">
              Based in {business.city} and ready to help with your property.
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <Leaf className="h-7 w-7 text-primary" />
            <h3 className="mt-5 text-xl font-semibold">Property Focused</h3>
            <p className="mt-2 text-muted-foreground">
              Practical lawn care and maintenance focused on keeping your property looking its best.
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <Phone className="h-7 w-7 text-primary" />
            <h3 className="mt-5 text-xl font-semibold">Easy to Reach</h3>
            <p className="mt-2 text-muted-foreground">
              Call directly to discuss lawn care or property maintenance for your property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}