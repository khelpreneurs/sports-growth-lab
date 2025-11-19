import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/Company_Logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send email to Google Spreadsheet
      const response = await fetch('https://script.google.com/macros/s/AKfycbzHJSioNcKhsbvxhAVcO1zjnzIVQ4B_s9ZD5qKKVc251UQBxRs8byQl0Bnxq9SZf7Ad-w/exec', {
        method: 'POST',
        mode: 'no-cors', // This bypasses CORS for simple requests
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response type:', response.type);

      // With no-cors mode, we can't read the response body
      // We'll assume success if no error is thrown
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });

      // Request notification permission and show browser notification
      if ('Notification' in window) {
        if (Notification.permission === 'granted') {
          new Notification('Khelpreneurs Newsletter', {
            body: 'Thank you for subscribing! Get the latest updates on new cohorts and events.',
            icon: '/Company_Logo.png',
          });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              new Notification('Khelpreneurs Newsletter', {
                body: 'Thank you for subscribing! Get the latest updates on new cohorts and events.',
                icon: '/Company_Logo.png',
              });
            }
          });
        }
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }

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
      { to: "/faqs", label: "FAQs" },
      { to: "/contact", label: "Contact" },
    ],
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Khelpreneurs"
              className="h-8 mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Launch your sports industry career with industry-led cohorts, mentorship, and real job pathways.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/khelpreneurs/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-fast"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/khelpreneurs/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-fast"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/919942821584"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-fast"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-primary transition-fast inline-block"
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
            <h4 className="font-semibold text-sm mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Get the latest updates on new cohorts and events.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-border h-11 rounded-xl"
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark h-11 rounded-xl font-medium">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Khelpreneurs. All rights reserved.</p>
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
