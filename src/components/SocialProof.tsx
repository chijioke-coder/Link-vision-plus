import { Star, Truck, ShieldCheck, BadgeDollarSign, Sparkles } from "lucide-react";

const trustPoints = [
  {
    icon: Truck,
    title: "Nationwide Delivery Available",
    copy: "We deliver across Nigeria with insured packaging.",
  },
  {
    icon: BadgeDollarSign,
    title: "Pay On Delivery",
    copy: "Pay on delivery — inspect before payment.",
  },
  {
    icon: ShieldCheck,
    title: "100% Wireless",
    copy: "Solar-powered systems — zero grid electricity required.",
  },
];

const testimonials = [
  {
    name: "Tunde A. from Lagos",
    quote: "Installed the 4G Solar camera last week — live view is crisp and installation was easy.",
  },
  {
    name: "Aisha M. from Ibadan",
    quote: "Great customer service and pay-on-delivery made the purchase simple.",
  },
];

const SocialProof = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="glass rounded-card p-8 md:p-10 text-center">
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-[hsl(var(--gold))] text-gold" />
          ))}
        </div>
        <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Verified Results</h3>
        <p className="text-muted-foreground text-lg mb-8">
          Trusted security solutions across Nigeria.
        </p>

        <div className="grid gap-4 md:grid-cols-3 mb-8 text-left">
          {trustPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-border/70 bg-background/70 p-4">
                <div className="mb-3 inline-flex rounded-full bg-emerald-50 p-2 text-emerald-600">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{item.copy}</p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <article key={testimonial.name} className="rounded-2xl border border-border/70 bg-background/80 p-5 text-left shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-amber-500">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={`${testimonial.name}-${starIndex}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-amber-100 text-lg font-semibold text-emerald-700">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Verified buyer</p>
                </div>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">“{testimonial.quote}”</p>
              {index === 0 ? (
                <div className="mt-4 flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Trusted performance
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
