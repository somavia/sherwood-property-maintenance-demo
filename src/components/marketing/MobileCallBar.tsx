import { Phone } from "lucide-react";
import { business } from "@/business";

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background p-4 md:hidden">
      <a
        href={business.phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call {business.phone}
      </a>
    </div>
  );
}
