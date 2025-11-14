import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cohorts = () => {
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-4">
                NOW ENROLLING
              </div>
              <h2 className="mb-4">The Art & Science of Sports Sponsorship</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Master pitching, negotiating, and executing sponsorship deals with hands-on training and a paid internship
              </p>
            </div>

            <Card className="shadow-strong border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-bold mb-4 text-lg">Quick Facts</h3>
                    <div className="space-y-3">
                      {[
                        { label: "Structure", value: "16 weeks (8 live + 8 internship)" },
                        { label: "Format", value: "Live online + recordings + masterclasses" },
                        { label: "Mentor", value: "Sagar Rai (Founder & CEO, KIBI Sports)" },
                        { label: "Seats", value: "50 (first-come basis)" },
                        { label: "Type", value: "Cohort-based learning" },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between">
                          <span className="text-muted-foreground">{item.label}:</span>
                          <span className="font-semibold text-right">{item.value}</span>
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
                        "Applied internship opportunity at KIBI Sports",
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
                  className="w-full md:w-auto bg-accent hover:bg-accent-hover shadow-accent text-lg px-8"
                >
                  <a href="https://payments.cashfree.com/forms/khelpreneurscohort1" target="_blank" rel="noopener noreferrer">
                    View Full Details & Apply <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
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
                    Learn storytelling, reporting, and content creation for sports media. Master the skills needed for roles in sports publications, broadcast, and digital platforms.
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
                  <h3 className="text-2xl font-bold mb-4">Sports Entrepreneurship</h3>
                  <p className="text-muted-foreground mb-6">
                    Build and scale sports businesses with guidance from industry founders. Learn fundraising, product development, and go-to-market strategies.
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
            <h2 className="mb-12 text-center">Why Choose Khelpreneurs Cohorts?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Users />,
                  title: "Live Experts",
                  description: "Learn directly from practitioners with real-world experience",
                },
                {
                  icon: <BookOpen />,
                  title: "Hands-On",
                  description: "Work on real projects and build portfolio-ready deliverables",
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
                <Card key={index} className="shadow-medium text-center border-none">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
              Check out our comprehensive FAQ section for program details, admissions, and more
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
              Start your sports industry career with our Sports Sponsorship cohort
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-lg px-8 py-6 shadow-accent"
            >
              <a href="https://payments.cashfree.com/forms/khelpreneurscohort1" target="_blank" rel="noopener noreferrer">Apply Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cohorts;
