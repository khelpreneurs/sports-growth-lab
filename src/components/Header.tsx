import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import logo from "@/assets/Company_Logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/cohorts", label: "Cohorts" },
    { to: "/events", label: "Events" },
    { to: "/careers", label: "Careers" },
    { to: "/faqs", label: "FAQs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md shadow-medium border-b border-border/50"
          : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Company Logo"
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isContact = link.to === '/contact';
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-fast relative ${
                    isContact
                      ? "px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent-hover shadow-sm"
                      : location.pathname === link.to
                        ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary hover:text-primary"
                        : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <DarkModeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <DarkModeToggle />
            <button
              className="p-3 -mr-3 text-foreground hover:text-primary transition-fast"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isContact = link.to === '/contact';
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block py-3 px-2 text-base font-medium rounded-lg transition-fast ${
                      isContact
                        ? "bg-accent text-accent-foreground hover:bg-accent-hover"
                        : location.pathname === link.to
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:bg-secondary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
