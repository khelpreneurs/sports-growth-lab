import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Users, BookOpen, Award, Briefcase, ArrowRight, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { useParallax } from "@/hooks/use-parallax";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import StatCard from "@/components/StatCard";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import sponsorshipHero from "@/assets/sponsorship-hero.jpg";
import mentorImage from "@/assets/mentor-sagar.jpeg";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

// Extend Window type for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Types
type WeekModule = {
  range: string;
  title: string;
  bullets: string[];
};

type FAQItem = {
  question: string;
  answer: string;
};

const SportsSponsorship = () => {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Show sticky CTA on scroll
  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 500);

      // Update active section for navigation
      const sections = ["hero", "why-now", "mentor", "curriculum", "internship", "outcomes", "who-should-join", "projects", "compare", "testimonials", "faq", "apply"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Analytics events
  useEffect(() => {
    // Fire view_cohort_page event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_cohort_page', {
        page_title: 'Sports Sponsorship Cohort',
        page_location: window.location.href
      });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data
  const modules: WeekModule[] = [
    {
      range: "Weeks 1–2",
      title: "Foundations of Sports Sponsorship",
      bullets: ["Sports sponsorship ecosystem overview", "Brand objectives & strategies", "KPI frameworks for measuring success"]
    },
    {
      range: "Weeks 3–4",
      title: "Athlete Sponsorships",
      bullets: ["Individual athlete partnerships", "Contract structures", "Athlete branding & workflow management"]
    },
    {
      range: "Weeks 5–6",
      title: "Team & League Sponsorships",
      bullets: ["Team partnerships", "League-level deals", "Venue branding & large-scale activations"]
    },
    {
      range: "Weeks 7–8",
      title: "Digital & CSR Models",
      bullets: ["OTT & digital sponsorships", "CSR-linked partnerships", "Community activations & social impact"]
    },
    {
      range: "Weeks 9–10",
      title: "Advanced Pitching",
      bullets: ["Storytelling techniques", "Deck creation", "Tailoring pitches to stakeholders"]
    },
    {
      range: "Weeks 11–12",
      title: "Negotiation & Closing",
      bullets: ["Budgeting & pricing strategies", "ROI measurement tools", "Negotiation tactics & closing deals"]
    },
    {
      range: "Weeks 13–14",
      title: "Internship Onboarding",
      bullets: ["Onboarding at KIBI Sports", "Working on live sponsorship projects", "Real deal execution"]
    },
    {
      range: "Week 15",
      title: "Industry Masterclass",
      bullets: ["Special sessions with brand managers", "League executives insights", "Advanced industry knowledge"]
    },
    {
      range: "Week 16",
      title: "Capstone Presentation",
      bullets: ["Present sponsorship pitch deck", "Panel review", "Portfolio-ready deliverable"]
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "What is the time commitment?",
      answer: "8 weeks of live sessions (2-3 hours per week) plus self-paced work, followed by 8 weeks of full-time internship. All sessions are recorded for flexibility."
    },
    {
      question: "Who is this program for?",
      answer: "Students, fresh graduates, freelancers, early professionals, athletes, creators, coaches, career switchers, agency/league staff. No prior experience required."
    },
    {
      question: "What if I miss a live session?",
      answer: "All live sessions are recorded and available for replay. You can catch up at your convenience without missing key content."
    },
    {
      question: "Is the internship guaranteed?",
      answer: "Yes, all participants who complete the live cohort phase are guaranteed a paid internship at KIBI Sports working on real sponsorship deals."
    },
    {
      question: "What is the refund policy?",
      answer: "Full refund within the first 2 weeks if the program isn't the right fit. Partial refund available up to week 4. No refunds after internship begins."
    },
    {
      question: "Will I get a PPO?",
      answer: "PPO eligibility based on internship performance. Top performers may receive Pre-Placement Offers from KIBI Sports or partner organizations."
    }
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Cohorts", url: "/cohorts" },
        { name: "Sports Sponsorship", url: "/cohorts/sports-sponsorship" }
      ]} />
      <Header />
      <ScrollProgressBar />

      {/* Anchor Navigation */}
      <nav className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border hidden md:block">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-center gap-6 text-sm">
            {[
              { id: "curriculum", label: "Curriculum" },
              { id: "outcomes", label: "Outcomes" },
              { id: "faq", label: "FAQs" },
              { id: "apply", label: "Apply" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-primary transition-colors ${
                  activeSection === item.id ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 -z-10"
          style={{ transform: `translateY(${useParallax(0.3)}px)` }}
        >
          <img
            src={sponsorshipHero}
            alt="The Art & Science of Sports Sponsorship"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-6">
                  Cohort 01 · Seats: 50 · Applications Open
                </div>
                <h1 className="mb-6">Become a Sports Sponsorship Professional in 16 Weeks</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Live cohort + paid internship with KIBI Sports. Learn to pitch, price, and close real sponsorship deals.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>8 weeks live + 8 weeks paid internship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>₹10,000/month stipend during internship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Mentor: Sagar Rai, Founder & CEO – KIBI Sports</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent-hover shadow-accent text-lg px-8"
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.gtag) {
                        window.gtag('event', 'click_apply_now', { source: 'hero_primary' });
                      }
                    }}
                  >
                    <a href="https://payments.cashfree.com/forms/khelpreneurscohort1" target="_blank" rel="noopener noreferrer">
                      Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8"
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.gtag) {
                        window.gtag('event', 'click_download_brochure', { source: 'hero_secondary' });
                      }
                    }}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Brochure
                  </Button>
                </div>
              </div>

              <div className="lg:text-right">
                <Card className="shadow-strong border-primary/20 inline-block">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Program Quick Facts</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold">16 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="font-semibold">Live + Internship</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fee:</span>
                        <span className="font-semibold">₹40,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Stipend:</span>
                        <span className="font-semibold">₹10,000/month</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Program Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                This cohort is designed for anyone looking to build a career in sports sponsorship - whether you're a student, early professional, athlete, league staff member, or considering a career switch.
              </p>
              <p>
                What makes it different? You'll learn directly from industry practitioners, work on real projects, complete a paid internship with live deals, and gain access to career pathways including PPO opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Live Mentorship",
                  description: "Learn directly from practitioners with real-world sponsorship experience",
                },
                {
                  title: "Real Projects",
                  description: "Build a complete sponsorship pitch deck for your portfolio",
                },
                {
                  title: "Paid Internship @ KIBI",
                  description: "8-week internship (₹10,000/month) working on live deals",
                },
                {
                  title: "Masterclasses",
                  description: "Sessions with brand managers and league executives",
                },
                {
                  title: "PPO & Career Support",
                  description: "Pre-Placement Offer eligibility, resume help, mock interviews, and referrals",
                },
                {
                  title: "Community Access",
                  description: "Lifetime access to alumni network and industry connections",
                },
              ].map((highlight, index) => (
                <Card key={index} className="shadow-medium border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">{highlight.title}</h3>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Curriculum (16 Weeks)</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {modules.map((module, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-6 shadow-soft">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-primary font-semibold">{module.range}</div>
                        <div className="font-bold">{module.title}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2">
                    <ul className="space-y-2">
                      {module.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                          <span className="text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Internship */}
      <section id="internship" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Paid Internship Included</Badge>
              <h2 className="mb-4">2-Month Internship @ KIBI Sports</h2>
              <p className="text-xl text-muted-foreground">₹10,000/month stipend + PPO eligibility</p>
            </div>

            <Card className="shadow-strong border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-bold mb-4">What You'll Do</h3>
                    <ul className="space-y-3">
                      {[
                        "Work on live sponsorship deals with real brands",
                        "Assist in athlete/venue partnership negotiations",
                        "Create sponsorship proposals and pitch decks",
                        "Learn deal structuring and contract management",
                        "Get exposure to brand activation strategies",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-4">Timeline</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <div>
                          <div className="font-semibold">Weeks 13-14</div>
                          <div className="text-sm text-muted-foreground">Onboarding & Training</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div>
                          <div className="font-semibold">Weeks 15-16</div>
                          <div className="text-sm text-muted-foreground">Live Projects & PPO Assessment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Your Mentor</h2>
            <Card className="shadow-strong overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2">
                    <img
                      src={mentorImage}
                      alt="Sagar Rai"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-2">Sagar Rai</h3>
                    <p className="text-primary font-semibold mb-4">
                      Founder & CEO, KIBI Sports
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Sagar has built KIBI Sports into a recognized name in sports sponsorship across India. With a large network spanning athletes, teams, and institutions, he brings hands-on experience in structuring and executing sponsorship deals.
                    </p>
                    <p className="text-muted-foreground">
                      In this cohort, he'll share real insights from his work, give you access to live projects, and guide you through the complete sponsorship lifecycle.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">Outcomes & Career Support</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              This cohort is designed to be a direct pathway into the sports industry
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-medium border-none">
                <CardContent className="p-8">
                  <h3 className="font-bold mb-4 text-lg">During the Program</h3>
                  <ul className="space-y-3">
                    {[
                      "8-week paid internship at KIBI Sports",
                      "Work on live sponsorship deals",
                      "Build a portfolio-ready pitch deck",
                      "Masterclasses with industry leaders",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-none">
                <CardContent className="p-8">
                  <h3 className="font-bold mb-4 text-lg">After Completion</h3>
                  <ul className="space-y-3">
                    {[
                      "PPO eligibility based on performance",
                      "Resume & portfolio review",
                      "Mock interviews & career coaching",
                      "Referrals to hiring partners",
                      "Lifetime alumni community access",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Who is this program for?",
                  a: "This cohort is for students, early professionals, freelancers, athletes, league staff, and anyone looking to build a career in sports sponsorship - regardless of prior experience.",
                },
                {
                  q: "What is the time commitment?",
                  a: "8 weeks of live sessions (typically 2-3 hours per week) plus self-paced work, followed by an 8-week full-time or part-time internship. All live sessions are recorded.",
                },
                {
                  q: "What if I miss a live session?",
                  a: "All sessions are recorded and available for replay. You can catch up at your convenience.",
                },
                {
                  q: "What is the selection process?",
                  a: "Applications are reviewed on a rolling, first-come basis. We look for genuine interest in sports and commitment to complete the program.",
                },
                {
                  q: "Is there a refund policy?",
                  a: "Yes, we offer a refund within the first 2 weeks if the program isn't the right fit for you.",
                },
                {
                  q: "Will I get a certificate?",
                  a: "Yes, participants who complete the program and internship receive a certificate of completion.",
                },
                {
                  q: "What about job placement?",
                  a: "While we don't guarantee jobs, we provide PPO pathways, referrals to our hiring network, and comprehensive career support to maximize your chances.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-xl px-6 shadow-soft">
                  <AccordionTrigger className="hover:no-underline font-semibold text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Start Your Sponsorship Career?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Applications are open. Secure your seat in the next cohort.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover shadow-accent text-lg px-8 py-6"
            >
              <a href="https://payments.cashfree.com/forms/khelpreneurscohort1" target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              You'll be redirected to our secure application portal
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      {stickyVisible && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border shadow-strong z-40">
          <Button
            asChild
            size="lg"
            className="w-full bg-accent hover:bg-accent-hover"
          >
            <a href="https://payments.cashfree.com/forms/khelpreneurscohort1" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SportsSponsorship;
