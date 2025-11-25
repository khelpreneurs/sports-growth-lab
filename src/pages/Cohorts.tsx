import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Briefcase,
  Linkedin,
  Target,
  TrendingUp,
  UserCheck,
  Trophy,
  Building2,
  Heart,
  Globe,
  PresentationIcon,
  Calculator,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Handshake,
  Briefcase as BriefcaseAlt,
  Lightbulb,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { useParallax } from "@/hooks/use-parallax";
import mentorImage from "@/assets/mentor-sagar.jpeg";
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
  const mentors = [
    {
      name: "Sagar Rai",
      role: "Founder & CEO, KIBI Sports",
      image: mentorImage,
      highlight: "Leading the Sports Sponsorship Cohort",
      background:
        "Sagar has built KIBI Sports into a recognized name in the Indian sports sponsorship ecosystem. With extensive experience across athlete, team, and league partnerships, he brings deep industry knowledge and a large network of relationships",
      expertise: [
        "Sports Sponsorship Strategy & Execution",
        "Brand Partnerships & Activations",
        "Athlete & Team Representation",
        "Sports Business Development",
      ],
      learn:
        "In the Sports Sponsorship cohort, Sagar shares practical insights from his work structuring and closing sponsorship deals. Participants gain access to live projects at KIBI Sports and learn the complete lifecycle of sports sponsorships - from pitching to execution",
      linkedin: "https://www.linkedin.com/in/sagar-rai-1252901a5/",
    },
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollProgressBar />
      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-3">Cohort Programs</h1>
            <p className="text-lg text-muted-foreground">
              Intensive, industry-led training with placement support
            </p>
          </div>
        </div>
      </section>
      {/* Current Cohort */}
      <section className="section-spacing">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6 md:mb-10">
              <Button
                asChild
                className="inline-flex items-center justify-center h-[32px] md:h-[35px] px-4 py-2 bg-[#FF9A42] text-white text-[10px] md:text-xs font-bold rounded-full mb-3 uppercase">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfiqnKeJOsnlE8-MHjepFUCjOYN_sQLgpNJm_d9pS-cK_b4EQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer">
                  Now Enrolling
                </a>
              </Button>

              <h2 className="mb-3 text-2xl md:text-5xl font-bold">
                The Art & Science of Sports Sponsorship
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Master pitching, negotiating, and executing sponsorship deals
                with hands-on training and a paid internship
              </p>
            </div>

            {/* Video Section */}
            <div className="max-w-3xl mx-auto mb-10 md:mb-12">
              <div className="w-full aspect-video rounded-xl shadow-xl border border-primary/10 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/1zg1ObSrsQ8"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>

            {/* Quick Facts & Highlights */}
            <Card className="shadow-strong border-primary/20">
              <CardContent className="p-6 md:p-10">
                <div className="grid md:grid-cols-2 gap-8 mb-8 text-sm md:text-base">
                  {/* Quick Facts */}
                  <div>
                    <h3 className="font-bold mb-4 text-base md:text-lg">
                      Quick Facts
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          label: "Structure",
                          value:
                            "8 weeks live sessions + 8-week paid internship (₹10,000/month stipend)",
                        },
                        {
                          label: "Format",
                          value: "Live online + recordings + masterclasses",
                        },
                        {
                          label: "Mentor",
                          value: "Sagar Rai (Founder & CEO, KIBI Sports)",
                        },
                        //{ label: "Fee", value: "₹40,000 (incl. taxes)" },
                        { label: "Seats", value: "50 (first-come basis)" },
                        {
                          label: "Stipend",
                          value: "₹10,000/month during internship",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex justify-between gap-2">
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

                  {/* Highlights */}
                  <div>
                    <h3 className="font-bold mb-4 text-base md:text-lg">
                      Key Highlights
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Live mentorship from industry practitioners",
                        "Build a full sponsorship pitch deck",
                        "Paid internship with live deals at KIBI Sports",
                        "Masterclasses with brand & league executives",
                        "PPO pathways & career support",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto bg-accent hover:bg-accent-hover shadow-accent text-base md:text-lg px-6 md:px-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfiqnKeJOsnlE8-MHjepFUCjOYN_sQLgpNJm_d9pS-cK_b4EQ/viewform"
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
      {/* Featured Mentor */}
      {/* <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="mb-4">Mentors & Coaches</h2>
            <p className="text-xl text-muted-foreground">
              Our mentors are practitioners with real-world experience in sports
              business
            </p>
            <Card className="shadow-strong overflow-hidden mt-7">
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
                    <h2 className="text-3xl font-bold mb-2">Sagar Rai</h2>
                    <p className="text-primary font-bold text-lg mb-2">
                      Founder & CEO, KIBI Sports
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Leading the Sports Sponsorship Cohort
                    </p>
                    <div className="space-y-4 mb-8">
                      <div>
                        <h3 className="font-bold mb-2">Background</h3>
                        <p className="text-muted-foreground">
                          Sagar has built KIBI Sports into a recognized name in
                          the Indian sports sponsorship ecosystem. With
                          extensive experience across athlete, team, and league
                          partnerships, he brings deep industry knowledge and a
                          large network of relationships.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Expertise</h3>
                        <ul className="space-y-2">
                          {[
                            "Sports Sponsorship Strategy & Execution",
                            "Brand Partnerships & Activations",
                            "Athlete & Team Representation",
                            "Sports Business Development",
                          ].map((skill, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-muted-foreground text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">What You'll Learn</h3>
                        <p className="text-muted-foreground">
                          In the Sports Sponsorship cohort, Sagar shares
                          practical insights from his work structuring and
                          closing sponsorship deals. Participants gain access to
                          live projects at KIBI Sports and learn the complete
                          lifecycle of sports sponsorships - from pitching to
                          execution.
                        </p>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="gap-2">
                      <a
                        href="https://www.linkedin.com/in/sagar-rai-1252901a5/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      {/* Featured Mentor */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-gradient-to-b from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Expert Guidance from Industry Leaders
            </div>
            <h2 className="mb-4">Mentors & Coaches</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn directly from practitioners shaping India's sports business landscape
            </p>
          </AnimatedSection>

          <div className="grid gap-8">
            {mentors.map((mentor, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
                      {/* Left: Profile Image */}
                      <div className="flex flex-col items-center md:items-start">
                        <div className="relative w-48 h-48 mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
                          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                            <img
                              src={mentor.image}
                              alt={mentor.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full gap-2 hover:bg-primary hover:text-primary-foreground">
                          <a
                            href={mentor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4" /> Connect
                          </a>
                        </Button>
                      </div>

                      {/* Right: Content */}
                      <div className="md:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-3xl font-bold mb-2">{mentor.name}</h3>
                          <p className="text-primary font-semibold text-lg mb-3">
                            {mentor.role}
                          </p>
                          {mentor.highlight && (
                            <p className="text-muted-foreground italic border-l-4 border-primary/30 pl-4">
                              {mentor.highlight}
                            </p>
                          )}
                        </div>

                        {mentor.background && (
                          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
                            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                              <Award className="w-5 h-5 text-primary" />
                              Background
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {mentor.background}
                            </p>
                          </div>
                        )}

                        {mentor.expertise && mentor.expertise.length > 0 && (
                          <div>
                            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                              <Sparkles className="w-5 h-5 text-primary" />
                              Expertise
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {mentor.expertise.map((skill, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 text-muted-foreground bg-secondary/50 rounded-md px-3 py-2">
                                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                  <span className="text-sm">{skill}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {mentor.learn && (
                          <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-6 border border-primary/10">
                            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                              <GraduationCap className="w-5 h-5 text-primary" />
                              What You'll Learn
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {mentor.learn}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* ================== ABOUT THE PROGRAM ================== */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-5xl font-bold">
              About the Program
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
              A complete, industry-focused learning experience covering
              real-world sponsorships across brands, athletes, leagues, OTT, and
              venues.
            </p>
          </div>

          {/* What You’ll Learn */}
          <div className="mb-14 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-5 md:mb-6">
              What You’ll Learn
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {[
                { icon: TrendingUp, title: "Sponsorship Landscape", desc: "Understand trends across digital, OTT, and grassroots sports." },
                { icon: Target, title: "Brand Strategy", desc: "How to set objectives, define KPIs, and align sports properties with brand goals." },
                { icon: UserCheck, title: "Athlete Sponsorships", desc: "Talent scouting, rights management, contracts, and deliverables." },
                { icon: Trophy, title: "Team & League Deals", desc: "Evaluating audience reach and building partnership structures." },
                { icon: Building2, title: "Venue Branding", desc: "Naming rights, signage, hospitality, and revenue models." },
                { icon: Heart, title: "Community & CSR Activations", desc: "Designing fan engagement events and grassroots programs." },
                { icon: Globe, title: "Digital & OTT Partnerships", desc: "Case studies on streaming rights and branded content." },
                { icon: PresentationIcon, title: "Pitching & Proposal Building", desc: "Build compelling sponsorship decks and plans." },
                { icon: Calculator, title: "Budgeting & ROI", desc: "Negotiation strategies, pricing tiers & campaign tracking." },
                { icon: Sparkles, title: "Brand–Property Fit", desc: "Match brands with athletes, teams, or venues for impact." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={i} animation="fade-up" delay={i * 50}>
                    <Card className="h-full group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-strong border-border/50">
                      <CardContent className="p-5 md:p-6">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-foreground text-sm md:text-base mb-2 group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* Structure & Schedule */}
          <div className="mb-14 md:mb-16">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-8 md:mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  <BookOpen className="w-4 h-4" />
                  <span>16-Week Curriculum</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                  Structure & Schedule
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  16 comprehensive modules designed to transform you into a sponsorship expert
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {[
                { week: 1, title: "Sponsorship Landscape", desc: "Understand trends across digital, OTT, and grassroots sports." },
                { week: 2, title: "Brand Strategy", desc: "How to set objectives, define KPIs, and align sports properties with brand goals." },
                { week: 3, title: "Athlete Sponsorships", desc: "Talent scouting, rights management, contracts, digital activations." },
                { week: 4, title: "Team & League Deals", desc: "Audience evaluation, package negotiation, partnership structures." },
                { week: 5, title: "Venue Branding", desc: "Naming rights, signage, hospitality, and shared monetization." },
                { week: 6, title: "Community & CSR Activations", desc: "Fan engagement, grassroots events, corporate tie-ups." },
                { week: 7, title: "Digital & OTT Partnerships", desc: "Case studies from streaming & digital ecosystems." },
                { week: 8, title: "Pitching & Proposal Building", desc: "Creating impactful sponsorship proposals." },
                { week: 9, title: "Budgeting & ROI", desc: "Pricing strategies, negotiation models, and performance tracking." },
                { week: 10, title: "Brand–Property Fit", desc: "Connecting brands with the right athletes, teams, or venues." },
                { week: 11, title: "Hands-on Project Workshops", desc: "" },
                { week: 12, title: "Campaign Execution Frameworks", desc: "" },
                { week: 13, title: "Rights Holder Negotiation Labs", desc: "" },
                { week: 14, title: "Brand Objective Deep Dives", desc: "" },
                { week: 15, title: "Sponsorship Activation Playbooks", desc: "" },
                { week: 16, title: "Final Presentation & Showcase", desc: "" },
              ].map((item, i) => {
                return (
                  <AnimatedSection key={i} animation="fade-up" delay={i * 30}>
                    <div className="group relative p-5 md:p-6 bg-gradient-to-br from-secondary/30 to-secondary/50 border border-border/50 rounded-xl hover:border-primary/40 hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          W{item.week}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-foreground text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          {item.desc && (
                            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-8 md:mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  <Award className="w-4 h-4" />
                  <span>Program Benefits</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                  What You'll Achieve
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transform your career with tangible skills and opportunities
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {[
                { icon: GraduationCap, title: "Professional Portfolio", desc: "A portfolio of real sponsorship proposals and campaign decks." },
                { icon: Briefcase, title: "Hands-on Experience", desc: "Hands-on experience managing sponsorship deals from pitch to activation." },
                { icon: Handshake, title: "Industry Network", desc: "Networking connections with brand managers, leagues, and athletes." },
                { icon: BriefcaseAlt, title: "Career Opportunities", desc: "Eligibility for Pre-Placement Offers (PPOs) and freelance opportunities." },
                { icon: Lightbulb, title: "Deep Expertise", desc: "Deep understanding of how sponsorship drives sports business for brands and rights-holders." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                    <Card className="h-full group border-border/50 hover:border-primary/40 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-secondary/20">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-foreground text-base md:text-lg mb-2 group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* ================== COURSE CONTENT ================== */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                <BookOpen className="w-4 h-4" />
                <span>Detailed Curriculum</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Course Content
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore every chapter and lesson in our comprehensive curriculum
              </p>
            </div>
          </AnimatedSection>

          <Accordion
            type="single"
            collapsible
            className="space-y-4 md:space-y-5">
            {courseContent.map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <AccordionItem
                  value={`chapter-${index}`}
                  className="border-border/50 rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 bg-background">
                  <AccordionTrigger className="w-full text-left px-5 md:px-7 py-4 md:py-5 bg-gradient-to-r from-secondary/30 to-secondary/10 hover:from-secondary/50 hover:to-secondary/30 text-base md:text-lg font-semibold group transition-all [&[data-state=open]]:bg-primary/5">
                    <div className="flex items-center gap-3 flex-1 pr-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <span className="group-hover:text-primary transition-colors">
                        {item.chapter}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="bg-background">
                    <ul className="divide-y divide-border/30">
                      {item.lessons.map((lesson, i) => (
                        <li
                          key={i}
                          className="px-5 md:px-7 py-3 md:py-4 text-muted-foreground text-sm md:text-base hover:bg-secondary/20 transition-colors flex items-start gap-3 group">
                          <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                          <span className="group-hover:text-foreground transition-colors">
                            {lesson}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </section>
      {/* Upcoming Programs */}
      <section className="py-16 md:py-20 ">
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
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">
                      Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
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
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">
                      Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Why Khelpreneurs Cohorts */}
      <section className="py-16 md:py-24 bg-secondary/50">
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

      {/* CTA */}
      <section className="py-8 md:py-12 bg-secondary/50">
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSfiqnKeJOsnlE8-MHjepFUCjOYN_sQLgpNJm_d9pS-cK_b4EQ/viewform"
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
