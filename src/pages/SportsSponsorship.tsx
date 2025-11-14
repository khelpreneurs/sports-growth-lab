import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import sponsorshipHero from "@/assets/sponsorship-hero.jpg";
import mentorImage from "@/assets/mentor-sagar.jpeg";

const SportsSponsorship = () => {
  const [stickyVisible, setStickyVisible] = useState(false);

  // Show sticky CTA on scroll
  useState(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={sponsorshipHero}
            alt="The Art & Science of Sports Sponsorship"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-6">
              NOW ENROLLING
            </div>
            <h1 className="mb-6">The Art & Science of Sports Sponsorship</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Hands-on cohort to master pitching, negotiating, and executing sponsorship deals
            </p>

            {/* Quick Facts Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Duration", value: "16 weeks" },
                { label: "Format", value: "Live + Internship" },
                { label: "Stipend", value: "₹10,000/month" },
                { label: "Fee", value: "₹40,000" },
                { label: "Seats", value: "50" },
                { label: "Next Batch", value: "TBA" },
              ].map((fact) => (
                <Card key={fact.label} className="shadow-soft border-none">
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-muted-foreground mb-1">{fact.label}</div>
                    <div className="font-bold">{fact.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover shadow-accent text-lg px-8 py-6"
            >
              <a href="https://payments.cashfree.com/forms/khelpreneurscohort1" target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Curriculum (16 Weeks)</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  weeks: "Week 1-2",
                  title: "Sponsorship Foundations",
                  content: "Sports sponsorship ecosystem, brand objectives & strategies, KPI frameworks for measuring sponsorship success",
                },
                {
                  weeks: "Week 3-4",
                  title: "Athlete Sponsorships",
                  content: "Individual athlete partnerships, contract structures, athlete branding, and workflow management",
                },
                {
                  weeks: "Week 5-6",
                  title: "Team & League Sponsorships",
                  content: "Team partnerships, league-level deals, venue branding, and large-scale activations",
                },
                {
                  weeks: "Week 7-8",
                  title: "Digital & CSR Models",
                  content: "OTT & digital sponsorships, CSR-linked partnerships, community activations, and social impact measurement",
                },
                {
                  weeks: "Week 9-10",
                  title: "Advanced Pitching",
                  content: "Storytelling techniques, deck creation, tailoring pitches to different stakeholders",
                },
                {
                  weeks: "Week 11-12",
                  title: "Negotiation & Closing",
                  content: "Budgeting & pricing strategies, ROI measurement tools, negotiation tactics, closing deals",
                },
                {
                  weeks: "Week 13-14",
                  title: "Internship Phase 1",
                  content: "Onboarding at KIBI Sports, working on live sponsorship projects and deals",
                },
                {
                  weeks: "Week 15",
                  title: "Masterclass Week",
                  content: "Special sessions with senior brand managers and league executives",
                },
                {
                  weeks: "Week 16",
                  title: "Capstone Presentation",
                  content: "Present your sponsorship pitch deck to a panel - portfolio-ready deliverable",
                },
              ].map((module, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-6 shadow-soft">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-primary font-semibold">{module.weeks}</div>
                        <div className="font-bold">{module.title}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4 pb-2">
                    {module.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
