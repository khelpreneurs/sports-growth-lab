import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Award, Users, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { useParallax } from "@/hooks/use-parallax";

// Import partner logos
import logo17 from "@/assets/Career Opportunities/17-removebg-preview.png";
import logo19 from "@/assets/Career Opportunities/19-removebg-preview.png";
import logo21 from "@/assets/Career Opportunities/21-removebg-preview.png";
import logo22 from "@/assets/Career Opportunities/22-removebg-preview.png";
import logo23 from "@/assets/Career Opportunities/23-removebg-preview.png";
import logo24 from "@/assets/Career Opportunities/24-removebg-preview.png";
import logo26 from "@/assets/Career Opportunities/26-removebg-preview.png";
import logo28 from "@/assets/Career Opportunities/28-removebg-preview.png";
import logo46 from "@/assets/Career Opportunities/46-removebg-preview.png";
import logo47 from "@/assets/Career Opportunities/47-removebg-preview.png";
import logo48 from "@/assets/Career Opportunities/48-removebg-preview.png";
import logo49 from "@/assets/Career Opportunities/49-removebg-preview.png";
import logo50 from "@/assets/Career Opportunities/50-removebg-preview.png";
import logo51 from "@/assets/Career Opportunities/51-removebg-preview.png";
import logo52 from "@/assets/Career Opportunities/52-removebg-preview.png";
import aethletiCircle from "@/assets/Career Opportunities/Aethleti_Circle-removebg-preview.png";
import cornerstone from "@/assets/Career Opportunities/Cornerstone-removebg-preview.png";
import gamepoint from "@/assets/Career Opportunities/Gamepoint-removebg-preview.png";
import gosports from "@/assets/Career Opportunities/GoSports-removebg-preview.png";
import hudle from "@/assets/Career Opportunities/Hudle-removebg-preview.png";
import khelomore from "@/assets/Career Opportunities/KheloMore-removebg-preview.png";
import rise from "@/assets/Career Opportunities/RISE-removebg-preview.png";
import sfl from "@/assets/Career Opportunities/SFL-removebg-preview.png";
import sportvot from "@/assets/Career Opportunities/Sportvot-removebg-preview.png";
import sportzInteractive from "@/assets/Career Opportunities/Sportz_Interactive-removebg-preview.png";
import sportzVillage from "@/assets/Career Opportunities/Sportz_Village-removebg-preview.png";
import untitledDesign from "@/assets/Career Opportunities/Untitled_design-removebg-preview.png";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollProgressBar />

      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-3">Career Outcomes</h1>
            <p className="text-lg text-muted-foreground">
              Your path into the sports industry starts here
            </p>
          </div>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="section-spacing">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="mb-8 text-center">Our Impact</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: <Users />,
                  value: "50+",
                  label: "Cohort Seats",
                  description: "Per program batch",
                },
                {
                  icon: <Briefcase />,
                  value: "8 Weeks",
                  label: "Paid Internship",
                  description: "At KIBI Sports",
                },
                {
                  icon: <Award />,
                  value: "₹10K",
                  label: "Monthly Stipend",
                  description: "During internship",
                },
                {
                  icon: <TrendingUp />,
                  value: "PPO",
                  label: "Pathways",
                  description: "Based on performance",
                },
              ].map((stat, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card
                  key={index}
                  className="shadow-medium text-center border-none">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-2xl font-bold mb-2 text-white bg-primary-light/100 px-4 py-1 rounded-xl shadow-md">
                      {stat.value}
                    </div>
                    <div className="font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Success Stories</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  role: "Sponsorship Associate",
                  company: "Sports Marketing Agency",
                  quote: "The Sports Sponsorship cohort gave me the practical skills and network I needed to break into the industry. The paid internship at KIBI Sports was invaluable.",
                },
                {
                  name: "Rahul Verma",
                  role: "Brand Partnerships Manager",
                  company: "Cricket Franchise",
                  quote: "Learning from Sagar Rai and working on real deals during the internship prepared me for my current role. Highly recommend this program!",
                },
                {
                  name: "Ananya Reddy",
                  role: "Sports Consultant",
                  company: "Freelance",
                  quote: "The hands-on approach and industry connections from Khelpreneurs helped me launch my consulting practice. The community support continues even after the cohort ends.",
                },
              ].map((story, index) => (
                <Card key={index} className="shadow-strong border-none">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary mb-4"></div>
                      <div className="font-bold text-lg mb-1">{story.name}</div>
                      <div className="text-sm text-primary font-semibold">{story.role}</div>
                      <div className="text-sm text-muted-foreground">{story.company}</div>
                    </div>
                    <p className="text-muted-foreground italic">"{story.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Career Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Career Support Services</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Resume & Portfolio Review",
                  description:
                    "Get expert feedback on your resume and portfolio to make them industry-ready",
                  items: [
                    "CV optimization",
                    "Portfolio building",
                    "LinkedIn profile enhancement",
                  ],
                },
                {
                  title: "Mock Interviews",
                  description:
                    "Practice with industry professionals to ace your job interviews",
                  items: [
                    "Technical interviews",
                    "Behavioral questions",
                    "Case study prep",
                  ],
                },
                {
                  title: "Job Alerts & Referrals",
                  description:
                    "Access exclusive job openings and referrals through our network",
                  items: [
                    "Early access to opportunities",
                    "Referrals to hiring partners",
                    "Application support",
                  ],
                },
                {
                  title: "1:1 Mentorship",
                  description:
                    "Get personalized career guidance from industry mentors",
                  items: [
                    "Career path planning",
                    "Skill gap analysis",
                    "Growth strategy",
                  ],
                },
              ].map((service, index) => (
                <Card key={index} className="shadow-medium border-none">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="mb-6">Career Opportunities</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We work with leading sports organizations to connect our
              participants with opportunities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
              {[
                logo17,
                logo19,
                logo21,
                logo22,
                logo23,
                logo24,
                logo26,
                logo28,
                logo46,
                logo47,
                logo48,
                logo49,
                logo50,
                logo51,
                logo52,
                aethletiCircle,
                cornerstone,
                gamepoint,
                gosports,
                hudle,
                khelomore,
                rise,
                sfl,
                sportvot,
                sportzInteractive,
                sportzVillage,
                untitledDesign,
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-2"
                >
                  <img src={logo} alt="Partner Logo" className="h-24 w-auto object-contain" />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Want to partner with us for hiring?{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Get in touch
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Job Board Teaser */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <h2 className="text-center mb-4">Career Opportunities</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
              Example roles our cohort participants can pursue in the sports
              industry
            </p>

            {/* Job List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                "Sponsorship Executive",
                "Sponsorship Coordinator",
                "Sponsorship Activation Executive",
                "Sponsorship Acquisition Executive",
                "Brand Partnership Executive",
                "Athlete Relations Executive",
                "Athlete Partnership Coordinator",
                "Sports Marketing Executive",
                "Sports Communications Executive",
                "Event Sponsorship Executive",
                "Event Activation Coordinator",
              ].map((title, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-medium transition-smooth border border-gray-200 rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[17px] text-gray-800">
                      {title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Footer Note */}
            <div className="text-center mt-10">
              <p className="text-sm text-muted-foreground">
                Opportunities are shared exclusively with cohort participants
                via the community platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-primary-foreground">
              Start Your Sports Career Journey
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join the Sports Sponsorship cohort and unlock your career
              potential
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-lg px-8 py-6"
            >
              <Link to="/cohorts">
                Apply to Sports Sponsorship Cohort <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
