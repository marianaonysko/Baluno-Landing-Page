import { Mail } from "lucide-react";
import balunoLogo from "@/assets/baluno-logo.png";
import appStoreBadge from "@/assets/app-store-badge.svg";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={balunoLogo} 
                alt="Baluno Logo" 
                className="h-8 w-8" 
              />
              <h3 className="text-2xl font-bold text-foreground">Baluno</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              A gentle planner for ADHD minds.
            </p>
          </div>
          
          {/* Legal Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/citations" className="text-muted-foreground hover:text-indigo transition-colors">
                  Methodology and Sources
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-indigo transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-indigo transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-muted-foreground hover:text-indigo transition-colors">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="/eula" className="text-muted-foreground hover:text-indigo transition-colors">
                  EULA
                </a>
              </li>
              <li>
                <a href="/dpa" className="text-muted-foreground hover:text-indigo transition-colors">
                  Data Processing Addendum
                </a>
              </li>
            </ul>
          </div>
          
          {/* Help Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-indigo transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-indigo transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@baluno.me" 
                  className="text-muted-foreground hover:text-indigo transition-colors inline-flex items-center gap-1"
                >
                  <Mail className="h-3 w-3" />
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
          
          {/* Download Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground mb-4">Download</h4>
            <a 
              href="https://apps.apple.com/us/app/baluno-adhd-daily-planner/id6755287584"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src={appStoreBadge} 
                alt="Download on the App Store" 
                className="h-10"
              />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Baluno. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
