import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Linkedin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mentorImage from "@/assets/mentor-sagar.jpeg";

const Mentors = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-secondary via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Mentors & Coaches</h1>
            <p className="text-xl text-muted-foreground">
              Learn from industry leaders with real-world experience
            </p>
          </div>
        </div>
      </section>

      {/* Featured Mentor */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full mb-8">
              LEAD MENTOR
            </div>

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
                          Sagar has built KIBI Sports into a recognized name in the Indian sports sponsorship ecosystem. With extensive experience across athlete, team, and league partnerships, he brings deep industry knowledge and a large network of relationships.
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
                            <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2">What You'll Learn</h3>
                        <p className="text-muted-foreground">
                          In the Sports Sponsorship cohort, Sagar shares practical insights from his work structuring and closing sponsorship deals. Participants gain access to live projects at KIBI Sports and learn the complete lifecycle of sports sponsorships - from pitching to execution.
                        </p>
                      </div>
                    </div>

                    <Button variant="outline" className="gap-2">
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* More Mentors Grid */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Our Growing Mentor Network</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "Coming Soon",
                  role: "Sports Journalism Expert",
                  expertise: "Media & Content",
                  description: "Industry veteran with experience in sports broadcasting and digital media",
                },
                {
                  name: "Coming Soon",
                  role: "Brand Marketing Leader",
                  expertise: "Brand Partnerships",
                  description: "Former brand manager at leading sports companies",
                },
                {
                  name: "Coming Soon",
                  role: "Sports Entrepreneur",
                  expertise: "Business & Startups",
                  description: "Founder of successful sports tech venture",
                },
                {
                  name: "Coming Soon",
                  role: "League Executive",
                  expertise: "League Operations",
                  description: "Senior executive from major sports league",
                },
                {
                  name: "Coming Soon",
                  role: "Athlete Representative",
                  expertise: "Athlete Management",
                  description: "Experienced in athlete representation and career planning",
                },
                {
                  name: "Coming Soon",
                  role: "Digital Sports Expert",
                  expertise: "OTT & Digital",
                  description: "Specialist in digital sports platforms and content",
                },
              ].map((mentor, index) => (
                <Card key={index} className="shadow-medium text-center border-none opacity-75">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 mx-auto mb-4"></div>
                    <h3 className="font-bold text-lg mb-1">{mentor.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-1">{mentor.role}</p>
                    <p className="text-xs text-muted-foreground mb-3">{mentor.expertise}</p>
                    <p className="text-sm text-muted-foreground">{mentor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                We're expanding our mentor network across different sports domains
              </p>
              <p className="text-sm text-muted-foreground">
                Want to mentor with us? <Link to="/contact" className="text-primary hover:underline font-semibold">Get in touch</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mentorship Matters */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">Why Mentorship Matters</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Learning from practitioners gives you insights no textbook can provide
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Real-World Insights",
                  description: "Learn from actual experiences - what works, what doesn't, and why",
                },
                {
                  title: "Industry Context",
                  description: "Understand the unwritten rules and dynamics of the sports business",
                },
                {
                  title: "Network Access",
                  description: "Connect with your mentor's network and unlock hidden opportunities",
                },
                {
                  title: "Career Guidance",
                  description: "Get personalized advice for your unique career journey",
                },
              ].map((benefit, index) => (
                <Card key={index} className="shadow-medium border-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-primary-foreground">Learn from Sagar Rai</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join the Sports Sponsorship cohort and get direct access to industry expertise
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-lg px-8 py-6"
            >
              <Link to="/cohorts/sports-sponsorship">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mentors;
