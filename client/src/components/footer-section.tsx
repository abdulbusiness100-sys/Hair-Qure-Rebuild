import { SiInstagram, SiTiktok, SiFacebook } from "react-icons/si";
import { Mail, MapPin, Phone } from "lucide-react";

const productLinks = [
  { label: "Hair Growth Oil", href: "#products" },
  { label: "Herbal Mist", href: "#products" },
  { label: "Whipped Shea Butter", href: "#products" },
  { label: "Hair Growth Combo", href: "#products" },
  { label: "Bonnets", href: "#products" },
];

const companyLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks = [
  { icon: SiInstagram, href: "https://instagram.com/hairqure", label: "Instagram" },
  { icon: SiTiktok, href: "https://tiktok.com/@hairqure", label: "TikTok" },
  { icon: SiFacebook, href: "https://facebook.com/hairqure", label: "Facebook" },
];

export function FooterSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-4" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <span className="font-serif text-2xl font-bold tracking-tight">
                Hair<span className="text-primary">Qure</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Clinically-inspired natural hair care. Rooted in ritual, perfected by nature.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/80"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@hairqure.ae"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-email"
                >
                  hello@hairqure.ae
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Dubai, United Arab Emirates
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} HairQure by MissK. All rights reserved.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs text-muted-foreground">Privacy Policy</span>
              <span className="text-xs text-muted-foreground">Terms of Service</span>
              <span className="text-xs text-muted-foreground">Shipping & Returns</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
