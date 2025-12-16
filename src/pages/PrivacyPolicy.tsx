import { Link } from "react-router-dom";
import { Shield, Mail, Lock, Database, Cookie, Users, Clock, UserCheck, MessageSquare, ExternalLink, Baby, RefreshCw, Scale, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: "1. Information We Collect",
      content: (
        <>
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-3 text-foreground">1.1 Personal Information</h3>
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
              We may collect the following personal information when you register, enroll, or communicate with us:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              {["Full name", "Email address", "Phone number", "Date of birth (if required)", "Educational & professional details", "Payment details (via secure gateways)"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-3 text-foreground">1.2 Automatically Collected Information</h3>
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              {["IP address", "Browser type & device info", "Pages visited & interaction data", "Date and time of access", "Cookies and usage analytics"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      )
    },
    {
      icon: Users,
      title: "2. Purpose of Data Collection",
      content: (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
          {[
            "Program enrollment and delivery",
            "Communication about cohorts & events",
            "Processing payments & receipts",
            "Providing customer support",
            "Improving our services",
            "Sending updates & opportunities",
            "Legal compliance & record keeping"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )
    },
    {
      icon: Lock,
      title: "3. Payment Information",
      content: (
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
            All payments are processed through secure third-party payment gateways such as Razorpay.
          </p>
          <p className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
            Khelpreneurs does not store your credit card, debit card, or banking information.
          </p>
          <p className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
            Payment providers process data in accordance with their own privacy and security standards.
          </p>
        </div>
      )
    },
    {
      icon: Cookie,
      title: "4. Use of Cookies & Tracking",
      content: (
        <>
          <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
            We use cookies and similar technologies to:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
            {["Improve website functionality", "Analyze user behavior and traffic", "Enhance user experience"].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground/80 bg-secondary/50 p-3 rounded-lg">
            You may disable cookies through your browser settings; however, certain features may not function properly.
          </p>
        </>
      )
    },
    {
      icon: Users,
      title: "5. Data Sharing & Disclosure",
      content: (
        <>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
            <p className="text-sm font-medium text-foreground">
              We do not sell, rent, or trade your personal information.
            </p>
          </div>
          <p className="text-muted-foreground mb-3 text-sm">We may share your data only with:</p>
          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
              Service partners (e.g., KIBI Sports) for program execution
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
              Technology providers (payment gateways, analytics, communication platforms)
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
              Legal or regulatory authorities if required by law
            </li>
          </ul>
          <p className="text-xs text-muted-foreground/80">
            All partners are required to maintain confidentiality and data protection standards.
          </p>
        </>
      )
    },
    {
      icon: Shield,
      title: "6. Data Storage & Security",
      content: (
        <>
          <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
            We implement reasonable administrative, technical, and physical safeguards to protect your personal data against:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              Unauthorized access
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              Loss, misuse, or alteration
            </li>
          </ul>
          <p className="text-xs text-muted-foreground/80 bg-secondary/50 p-3 rounded-lg">
            While we take strong measures, no digital platform can guarantee absolute security.
          </p>
        </>
      )
    },
    {
      icon: Clock,
      title: "7. Data Retention",
      content: (
        <>
          <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
            We retain personal information only for as long as necessary to:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
            {["Fulfill program obligations", "Maintain legal and accounting records", "Resolve disputes"].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            Data may be securely deleted or anonymized once it is no longer required.
          </p>
        </>
      )
    },
    {
      icon: UserCheck,
      title: "8. Your Rights",
      content: (
        <>
          <p className="text-muted-foreground mb-3 text-sm">You have the right to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { title: "Access", desc: "View personal information we hold" },
              { title: "Correct", desc: "Request correction of inaccurate data" },
              { title: "Withdraw", desc: "Opt out of non-essential communications" },
              { title: "Delete", desc: "Request data deletion (subject to requirements)" }
            ].map((item, i) => (
              <div key={i} className="bg-secondary/50 rounded-lg p-3">
                <p className="font-medium text-sm text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Requests can be sent to <a href="mailto:events@khelpreneurs.com" className="text-primary hover:underline font-medium">events@khelpreneurs.com</a>
          </p>
        </>
      )
    },
    {
      icon: MessageSquare,
      title: "9. Communication Preferences",
      content: (
        <>
          <p className="text-muted-foreground mb-3 text-sm">By registering, you consent to receive:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Emails", "WhatsApp messages", "SMS", "Phone calls"].map((item, i) => (
              <span key={i} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                {item}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            These may include program updates, reminders, announcements, and opportunities.
          </p>
          <p className="text-xs text-muted-foreground/80 bg-secondary/50 p-3 rounded-lg">
            You may opt out of promotional communications, but essential service-related communication will continue.
          </p>
        </>
      )
    },
    {
      icon: ExternalLink,
      title: "10. Third-Party Links",
      content: (
        <p className="text-sm text-muted-foreground leading-relaxed">
          Our website may contain links to third-party websites. Khelpreneurs is not responsible for the privacy practices or content of external websites. We encourage you to review their policies separately.
        </p>
      )
    },
    {
      icon: Baby,
      title: "11. Student's Privacy",
      content: (
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Khelpreneurs does not knowingly collect personal data from individuals under the age of 16.</p>
          <p>If such data is discovered, it will be deleted promptly.</p>
        </div>
      )
    },
    {
      icon: RefreshCw,
      title: "12. Changes to This Policy",
      content: (
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Khelpreneurs reserves the right to update or modify this Privacy Policy at any time.</p>
          <p>Any changes will be reflected on this page with an updated "Last Updated" date.</p>
          <p>Continued use of our services constitutes acceptance of the updated policy.</p>
        </div>
      )
    },
    {
      icon: Scale,
      title: "13. Governing Law",
      content: (
        <p className="text-sm text-muted-foreground leading-relaxed">
          This Privacy Policy is governed by and constructed in accordance with the laws of India, including the Information Technology Act, 2000 and applicable data protection regulations.
        </p>
      )
    },
    {
      icon: Phone,
      title: "14. Contact Information",
      content: (
        <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
          <Mail className="w-5 h-5 text-primary flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">For questions, concerns, or data requests:</p>
            <a href="mailto:events@khelpreneurs.com" className="text-primary hover:underline text-sm">
              events@khelpreneurs.com
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Privacy Policy", url: "/privacy-policy" }
      ]} />
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
              <Shield className="w-7 h-7" />
            </div>
            <h1 className="mb-3">Privacy Policy</h1>
            <p className="text-muted-foreground mb-2">
              Your privacy matters to us
            </p>
            <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Last Updated: November 2025
            </span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/30 rounded-2xl p-6 md:p-8 border border-border/50">
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Khelpreneurs ("we", "our", "us") is committed to protecting the privacy and personal data of users ("you", "your"). This Privacy Policy explains how we collect, use, store, share, and protect your information when you access khelpreneurs.com, enroll in our programs, attend our events, or interact with our services.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-4">
                By using our website or services, you consent to the practices described in this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <section.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold text-foreground mb-4">
                        {section.title}
                      </h2>
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Have Questions?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              If you have any questions about our privacy practices, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild className="btn-primary h-11 md:h-12">
                <Link to="/contact">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-11 md:h-12 rounded-xl border-2">
                <a href="mailto:events@khelpreneurs.com">
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
