import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Users, TrendingUp, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mentorImage from "@/assets/mentor-sagar.jpeg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">About Khelpreneurs</h1>
            <p className="text-xl text-muted-foreground">
              Khelpreneurs designs outcome‑driven, cohort‑based programs that turn passion for sport into real careers.
              In collaboration with KIBI Sports and the Khelaxy community platform, learners build practical skills through
              live sessions, hands‑on projects, and a paid internship—then convert that into portfolios, PPOs, and freelance
              opportunities. Our approach is community‑first and industry‑linked, with mentorship from practitioners like Sagar Rai (Founder & CEO, KIBI Sports)
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              We bridge the gap between passion and career with hands-on training, mentorship, and a powerful network
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Target />,
                  title: "Industry-First Approach",
                  description: "Every cohort is designed by practitioners who understand what the industry really needs",
                },
                {
                  icon: <Users />,
                  title: "Community Powered",
                  description: "Join a thriving ecosystem of sports professionals, mentors, and hiring partners",
                },
                {
                  icon: <TrendingUp />,
                  title: "Placement Focused",
                  description: "We don't just teach - we connect you to real internships and job opportunities",
                },
                {
                  icon: <Heart />,
                  title: "Passion to Profession",
                  description: "Transform your love for sports into a sustainable and rewarding career",
                },
              ].map((item, index) => (
                <Card key={index} className="shadow-medium border-none">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Our Partners</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-strong">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">KIBI Sports</h3>
                  <p className="text-muted-foreground">
                    Co-creating the Sports Sponsorship cohort and providing live project opportunities. KIBI Sports brings a large network of athletes and institutions with proven sponsorship expertise in the Indian sports ecosystem.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-strong">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Khelaxy</h3>
                  <p className="text-muted-foreground">
                    Powering our community platform and enabling seamless connections between learners, mentors, and the broader sports industry network.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder/Team */}
      {/* <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Meet Our Team</h2>
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
                      Sagar brings extensive experience in sports sponsorships and brand partnerships. Under his leadership, KIBI Sports has built a strong network across athletes, teams, and leagues in India.
                    </p>
                    <p className="text-muted-foreground">
                      He leads the Sports Sponsorship cohort, sharing real-world insights and providing participants with access to live sponsorship opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Outcomes */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Our Impact</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Building pathways from learning to careers in the sports industry
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
              { value: "50+", label: "Cohort Seats" },
              { value: "16", label: "Week Program" },
              { value: "₹10K", label: "Monthly Stipend" },
              ].map((stat, index) => (
              <div key={index}>
               <div
             className="text-4xl md:text-5xl font-bold mb-2 text-white bg-primary-light/100 px-4 py-1 rounded-xl shadow-md"
            >
          {stat.value}
          </div>
          <div className="text-muted-foreground">{stat.label}</div>
          </div>
          ))}
          </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-primary-foreground">Ready to Join Us?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start your journey with our Sports Sponsorship cohort
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-lg px-8 py-6"
            >
              <Link to="/cohorts">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
