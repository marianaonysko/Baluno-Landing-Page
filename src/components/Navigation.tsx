import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import balunoLogo from "@/assets/baluno-logo.png";
import appStoreBadge from "@/assets/app-store-badge.svg";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleNavLink = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  const linkClass = "text-sm text-muted-foreground hover:text-primary transition-colors font-medium";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <img src={balunoLogo} alt="Baluno Logo" className="h-8 w-8 transition-transform group-hover:scale-105" />
            <span className="text-xl font-bold text-foreground">Baluno</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/blog" className={linkClass}>Blog</Link>
            <Link to="/citations" className={linkClass}>Methodology</Link>
            <button onClick={() => scrollToSection("features")} className={linkClass}>Features</button>
            <Link to="/faq" className={linkClass}>FAQ</Link>
          </div>

          <a
            href="https://apps.apple.com/us/app/baluno-adhd-daily-planner/id6755287584"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block hover:opacity-80 transition-opacity"
          >
            <img src={appStoreBadge} alt="Download on the App Store" className="h-9" />
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border/50 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => handleNavLink("/blog")} className={linkClass + " text-left text-base"}>Blog</button>
            <button onClick={() => handleNavLink("/citations")} className={linkClass + " text-left text-base"}>Methodology</button>
            <button onClick={() => scrollToSection("features")} className={linkClass + " text-left text-base"}>Features</button>
            <button onClick={() => handleNavLink("/faq")} className={linkClass + " text-left text-base"}>FAQ</button>
            <a
              href="https://apps.apple.com/us/app/baluno-adhd-daily-planner/id6755287584"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity mt-2"
            >
              <img src={appStoreBadge} alt="Download on the App Store" className="h-10" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
