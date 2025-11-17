import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Award, Users, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-secondary via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Career Outcomes</h1>
            <p className="text-xl text-muted-foreground">
              Your path into the sports industry starts
            </p>
          </div>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Our Impact</h2>

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
                <Card key={index} className="shadow-medium text-center border-none">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-2xl font-bold mb-2 text-white bg-primary-light/100 px-4 py-1 rounded-xl shadow-md">
                      {stat.value}
                    </div>
                    <div className="font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
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
                  description: "Get expert feedback on your resume and portfolio to make them industry-ready",
                  items: ["CV optimization", "Portfolio building", "LinkedIn profile enhancement"],
                },
                {
                  title: "Mock Interviews",
                  description: "Practice with industry professionals to ace your job interviews",
                  items: ["Technical interviews", "Behavioral questions", "Case study prep"],
                },
                {
                  title: "Job Alerts & Referrals",
                  description: "Access exclusive job openings and referrals through our network",
                  items: ["Early access to opportunities", "Referrals to hiring partners", "Application support"],
                },
                {
                  title: "1:1 Mentorship",
                  description: "Get personalized career guidance from industry mentors",
                  items: ["Career path planning", "Skill gap analysis", "Growth strategy"],
                },
              ].map((service, index) => (
                <Card key={index} className="shadow-medium border-none">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
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
            <h2 className="mb-6">Our Hiring Partners</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We work with leading sports organizations to connect our participants with opportunities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {[
                "KIBI Sports",
                "GamePoint India",
                "SFL",
                "UpUrFit",
                "The Sports Gurukul",
                "Hudle",
                "Khelaxy",
                "And more...",
              ].map((partner, index) => (
                <div
                  key={index}
                  className="p-6 bg-background rounded-xl shadow-soft flex items-center justify-center text-center font-semibold text-sm"
                >
                  {partner}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Want to partner with us for hiring? <Link to="/contact" className="text-primary hover:underline">Get in touch</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Job Board Teaser */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Sample Job Opportunities</h2>
            <p className="text-center text-muted-foreground mb-8">
              Examples of roles our participants have access to
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Sponsorship Associate",
                  company: "KIBI Sports",
                  location: "Remote",
                  type: "Full-time",
                },
                {
                  title: "Sports Marketing Coordinator",
                  company: "League Partner",
                  location: "Hybrid",
                  type: "Full-time",
                },
                {
                  title: "Brand Partnerships Intern",
                  company: "Sports Franchise",
                  location: "On-site",
                  type: "Internship",
                },
                {
                  title: "Content Creator - Sports",
                  company: "Media Company",
                  location: "Remote",
                  type: "Contract",
                },
              ].map((job, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-none">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span>{job.company}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Exclusive opportunities shared with cohort participants via community platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-primary-foreground">Start Your Sports Career Journey</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join the Sports Sponsorship cohort and unlock your career potential
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-lg px-8 py-6"
            >
              <Link to="/cohorts/sports-sponsorship">
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
