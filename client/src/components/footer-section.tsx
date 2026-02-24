export function FooterSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" data-testid="text-footer-products-heading">
              Products
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollTo("#products")} className="hover:text-foreground transition-colors" data-testid="link-footer-oils">
                  Oils & Body Lotion
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#products")} className="hover:text-foreground transition-colors" data-testid="link-footer-hair">
                  Hair
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#products")} className="hover:text-foreground transition-colors" data-testid="link-footer-new">
                  New Release
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" data-testid="text-footer-company-heading">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollTo("#story")} className="hover:text-foreground transition-colors" data-testid="link-footer-about">
                  About Us
                </button>
              </li>
              <li>
                <a href="mailto:info@hairqure.ae" className="hover:text-foreground transition-colors" data-testid="link-footer-contact">
                  Contact Us
                </a>
              </li>
              <li>
                <span className="cursor-default" data-testid="link-footer-delivery">Delivery</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" data-testid="text-footer-help-heading">
              Help & Information
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="cursor-default" data-testid="link-footer-faq">FAQ</span>
              </li>
              <li>
                <span className="cursor-default" data-testid="link-footer-info">Information</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="/images/logo.jpg" alt="Hair Qure" className="h-8 w-auto" data-testid="img-footer-logo" />
          </div>
          <p className="text-xs text-muted-foreground" data-testid="text-footer-copyright">
            &copy; {new Date().getFullYear()} HairQure. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground" data-testid="text-footer-currency">
            Currency: AED
          </div>
        </div>
      </div>
    </footer>
  );
}
