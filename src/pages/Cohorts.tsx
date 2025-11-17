import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cohortsSponsorship from "@/assets/sagar-english-horizontal.mp4";
import poster from "@/assets/poster.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Cohorts = () => {
  const courseContent = [
    {
      chapter: "Chapter 1: Introduction to Sponsorships & Sports Marketing",
      lessons: [
        "Lesson 1.1: What is Sports Sponsorship?",
        "Lesson 1.2: Types of Sponsorship Models",
        "Lesson 1.3: Understanding the Indian Sports Sponsorship Ecosystem",
      ],
    },
    {
      chapter: "Chapter 2: Brand Objectives & KPI Frameworks",
      lessons: [
        "Lesson 2.1: What Do Brands Want?",
        "Lesson 2.2: KPI-Driven Sponsorship Planning",
        "Lesson 2.3: Decoding a Brand Brief",
      ],
    },
    {
      chapter: "Chapter 3: Athlete Sponsorship Mechanics",
      lessons: [
        "Lesson 3.1: Talent Scouting & Athlete Profiling",
        "Lesson 3.2: Deliverables & Activation",
        "Lesson 3.3: Contracts, Rights & Legalities",
      ],
    },
    {
      chapter: "Chapter 4: Team & League Sponsorships",
      lessons: [
        "Lesson 4.1: Structuring League & Team Packages",
        "Lesson 4.2: Evaluating Property Value",
        "Lesson 4.3: Negotiation & Brand Alignment",
      ],
    },
    {
      chapter: "Chapter 5: Venue Branding & Physical Asset Monetization",
      lessons: [
        "Lesson 5.1: Inventory Mapping for Venues",
        "Lesson 5.2: Partnership Structures for Physical Assets",
        "Lesson 5.3: Success Stories & Pitfalls",
      ],
    },
    {
      chapter: "Chapter 6: Community & CSR Activations",
      lessons: [
        "Lesson 6.1: The Power of Community in Sports",
        "Lesson 6.2: CSR & Sports Tie-ups",
        "Lesson 6.3: Measurement & Storytelling",
      ],
    },
    {
      chapter: "Chapter 7: OTT & Digital Sponsorships",
      lessons: [
        "Lesson 7.1: Modern Fan Behavior & Digital Consumption",
        "Lesson 7.2: Digital Campaign Planning",
        "Lesson 7.3: Case Studies from OTT Sponsorships",
      ],
    },
    {
      chapter: "Chapter 8: Pitching & Deck Building",
      lessons: [
        "Lesson 8.1: Deck Structure & Flow",
        "Lesson 8.2: Customization & Brand Fit",
        "Lesson 8.3: Mock Pitch Workshop",
      ],
    },
    {
      chapter: "Chapter 9: Budgeting, Pricing & ROI",
      lessons: [
        "Lesson 9.1: Budgeting for Sponsorship Campaigns",
        "Lesson 9.2: Pricing Tiers & Rate Cards",
        "Lesson 9.3: ROI Frameworks & Reporting",
      ],
    },
    {
      chapter: "Chapter 10: Brand–Property Matchmaking",
      lessons: [
        "Lesson 10.1: Brand Category Mapping",
        "Lesson 10.2: Understanding Property Strengths",
        "Lesson 10.3: Activation Potential Fit",
      ],
    },
    {
      chapter: "Chapter 11: Internship Orientation & Project Workflows",
      lessons: [
        "Internship Introduction",
        "Tools & Communication",
        "Work Ethics & Output Expectations",
      ],
    },
    {
      chapter:
        "Chapter 12: Live Projects – Athlete, League, Venue, CSR, Digital",
      lessons: [
        "Project Allocation & Roles",
        "Mentorship Support & Feedback Loops",
        "Presentation & Impact Report",
      ],
    },
    {
      chapter: "Chapter 13: Guest Masterclass",
      lessons: ["Live Q&A with a Brand Manager or League Owner"],
    },
    {
      chapter: "Chapter 14: Final Submission & Showcase",
      lessons: [
        "Capstone Deck Submission",
        "Showcase Day",
        "Feedback & Career Mapping",
      ],
    },
  ];
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-secondary via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Cohort Programs</h1>
            <p className="text-xl text-muted-foreground">
              Intensive, industry-led training with placement support
            </p>
          </div>
        </div>
      </section>

      {/* Current Cohort - Featured */}
      <section className="py-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <Button
                asChild
                className="inline-flex items-center justify-center h-[35px] px-4 py-2 bg-[#FF9A42] text-white text-xs font-bold rounded-full mb-4 uppercase">
                <a
                  href="https://payments.cashfree.com/forms/khelpreneurscohort1"
                  target="_blank"
                  rel="noopener noreferrer">
                  Now Enrolling
                </a>
              </Button>
              <h2 className="mb-4">The Art & Science of Sports Sponsorship</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Master pitching, negotiating, and executing sponsorship deals
                with hands-on training and a paid internship
              </p>
            </div>

            {/* Video Section */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="w-full h-[420px] rounded-xl shadow-xl border border-primary/10 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/1zg1ObSrsQ8"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>

            <Card className="shadow-strong border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-bold mb-4 text-lg">Quick Facts</h3>
                    <div className="space-y-3">
                      {[
                        {
                          label: "Structure",
                          value: "8 weeks live + 8-week paid internship",
                        },
                        {
                          label: "Format",
                          value: "Live online + recordings + masterclasses",
                        },
                        {
                          label: "Mentor",
                          value: "Sagar Rai (Founder & CEO, KIBI Sports)",
                        },
                        { label: "Fee", value: "₹40,000 (incl. taxes)" },
                        { label: "Seats", value: "50 (first-come basis)" },
                        {
                          label: "Stipend",
                          value: "₹10,000/month during internship",
                        },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between">
                          <span className="text-muted-foreground">
                            {item.label}:
                          </span>
                          <span className="font-semibold text-right">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-4 text-lg">Key Highlights</h3>
                    <ul className="space-y-3">
                      {[
                        "Live mentorship from industry practitioners",
                        "Build a full sponsorship pitch deck",
                        "Paid internship with live deals at KIBI Sports",
                        "Masterclasses with brand & league executives",
                        "PPO pathways & career support",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto bg-accent hover:bg-accent-hover shadow-accent text-lg px-8">
                  <a
                    href="https://payments.cashfree.com/forms/khelpreneurscohort1"
                    target="_blank"
                    rel="noopener noreferrer">
                    Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-5xl font-semibold">About the Program</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              A complete, industry-focused learning experience covering
              real-world sponsorships across brands, athletes, leagues, OTT, and
              venues.
            </p>
          </div>

          {/* =================== WHAT YOU'LL LEARN =================== */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">What You’ll Learn</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Sponsorship Landscape: Understand trends across digital, OTT, and grassroots sports.",
                "Brand Strategy: How to set objectives, define KPIs, and align sports properties with brand goals.",
                "Athlete Sponsorships: Talent scouting, rights management, contracts, and deliverables.",
                "Team & League Deals: Evaluating audience reach and building partnership structures.",
                "Venue Branding: Naming rights, signage, hospitality, and revenue models.",
                "Community & CSR Activations: Designing fan engagement events and grassroots programs.",
                "Digital & OTT Partnerships: Case studies on streaming rights and branded content.",
                "Pitching & Proposal Building: Build compelling sponsorship decks and plans.",
                "Budgeting & ROI: Negotiation strategies, pricing tiers & campaign tracking.",
                "Brand–Property Fit: Match brands with athletes, teams, or venues for impact.",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-gray-50 border rounded-2xl shadow-sm hover:shadow-md transition">
                  <p className="text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* =================== STRUCTURE & SCHEDULE =================== */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">
              Structure & Schedule (16 Modules Across 16 Weeks)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Sponsorship Landscape: Understand trends across digital, OTT, and grassroots sports.",
                "Brand Strategy: How to set objectives, define KPIs, and align sports properties with brand goals.",
                "Athlete Sponsorships: Talent scouting, rights management, contracts, digital activations.",
                "Team & League Deals: Audience evaluation, package negotiation, partnership structures.",
                "Venue Branding: Naming rights, signage, hospitality, and shared monetization.",
                "Community & CSR Activations: Fan engagement, grassroots events, corporate tie-ups.",
                "Digital & OTT Partnerships: Case studies from streaming & digital ecosystems.",
                "Pitching & Proposal Building: Creating impactful sponsorship proposals.",
                "Budgeting & ROI: Pricing strategies, negotiation models, and performance tracking.",
                "Brand–Property Fit: Connecting brands with the right athletes, teams, or venues.",
                "Hands-on Project Workshops",
                "Campaign Execution Frameworks",
                "Rights Holder Negotiation Labs",
                "Brand Objective Deep Dives",
                "Sponsorship Activation Playbooks",
                "Final Presentation & Showcase",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-blue-50 border rounded-xl shadow-sm">
                  <p className="text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* =================== OUTCOMES =================== */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Outcomes</h3>

            <ul className="space-y-4">
              {[
                "A portfolio of real sponsorship proposals and campaign decks.",
                "Hands-on experience managing sponsorship deals from pitch to activation.",
                "Networking connections with brand managers, leagues, and athletes.",
                "Eligibility for Pre-Placement Offers (PPOs) and freelance opportunities.",
                "Deep understanding of how sponsorship drives sports business for brands and rights-holders.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-green-600 text-2xl leading-none">
                    ✔
                  </span>
                  <p className="text-gray-800">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Course Content</h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {courseContent.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`chapter-${index}`}
                  className="border rounded-2xl overflow-hidden shadow-sm">
                  {/* HEADER */}
                  <AccordionTrigger
                    className="
                w-full text-left px-6 py-4 
                bg-gray-100 hover:no-underline
                text-lg font-medium flex justify-between items-center
              ">
                    {item.chapter}
                  </AccordionTrigger>

                  {/* CONTENT */}
                  <AccordionContent className="bg-white">
                    <ul className="divide-y">
                      {item.lessons.map((lesson, i) => (
                        <li
                          key={i}
                          className="px-6 py-4 text-gray-700 hover:bg-gray-50">
                          {lesson}
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

      {/* Upcoming Programs */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Upcoming Programs</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-8">
                  <div className="inline-block px-4 py-1 bg-muted text-muted-foreground text-sm font-semibold rounded-full mb-4">
                    Coming Soon
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Sports Journalism</h3>
                  <p className="text-muted-foreground mb-6">
                    Learn storytelling, reporting, and content creation for
                    sports media. Master the skills needed for roles in sports
                    publications, broadcast, and digital platforms.
                  </p>
                  <Button variant="outline" className="w-full">
                    Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-8">
                  <div className="inline-block px-4 py-1 bg-muted text-muted-foreground text-sm font-semibold rounded-full mb-4">
                    Coming Soon
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Sports Entrepreneurship
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Build and scale sports businesses with guidance from
                    industry founders. Learn fundraising, product development,
                    and go-to-market strategies.
                  </p>
                  <Button variant="outline" className="w-full">
                    Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Khelpreneurs Cohorts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">
              Why Choose Khelpreneurs Cohorts?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Users />,
                  title: "Live Experts",
                  description:
                    "Learn directly from practitioners with real-world experience",
                },
                {
                  icon: <BookOpen />,
                  title: "Hands-On",
                  description:
                    "Work on real projects and build portfolio-ready deliverables",
                },
                {
                  icon: <Award />,
                  title: "Network",
                  description: "Access to mentors, alumni, and hiring partners",
                },
                {
                  icon: <Briefcase />,
                  title: "Placement",
                  description: "Internships, PPO pathways, and career support",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="shadow-medium text-center border-none">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4">Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Check out our comprehensive FAQ section for program details,
              admissions, and more
            </p>
            <Button asChild size="lg" variant="outline">
              <Link to="/faqs">
                View FAQs <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">Applications Are Open</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your sports industry career with our Sports Sponsorship
              cohort
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-lg px-8 py-6 shadow-accent">
              <a
                href="https://payments.cashfree.com/forms/khelpreneurscohort1"
                target="_blank"
                rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cohorts;
