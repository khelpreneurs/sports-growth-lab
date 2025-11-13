import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  const footerLinks = {
    Platform: [
      { to: "/cohorts", label: "Cohorts" },
      { to: "/events", label: "Events" },
      { to: "/careers", label: "Careers" },
      { to: "/mentors", label: "Mentors" },
    ],
    Company: [
      { to: "/about", label: "About Us" },
      { to: "/testimonials", label: "Testimonials" },
      { to: "/faqs", label: "FAQs" },
      { to: "/contact", label: "Contact" },
    ],
  };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/company-logo.jpg"
              alt="Khelpreneurs"
              className="h-8 mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Launch your sports industry career with industry-led cohorts, mentorship, and real job pathways.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-fast"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-fast"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-fast"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-primary transition-fast"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates on new cohorts and events.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Khelpreneurs. All rights reserved.</p>
            <p className="text-center">
              In partnership with{" "}
              <span className="font-semibold text-foreground">KIBI Sports</span> and{" "}
              <span className="font-semibold text-foreground">Khelaxy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
