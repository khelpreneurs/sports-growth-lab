import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Briefcase,
  ArrowRight,
  Award,
  TrendingUp,
  Linkedin,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useParallax } from "@/hooks/use-parallax";
import heroImage from "@/assets/hero-main.jpg";
import mentorImage from "@/assets/mentor-sagar.jpeg";
import logo from "@/assets/Company_Logo.png";

const Home = () => {
  const mentors = [
    {
      name: "Sagar Rai",
      role: "Founder & CEO, KIBI Sports",
      image: mentorImage,
      linkedin: "https://www.linkedin.com/in/sagar-rai-1252901a5/",
      bio: `Leading the Sports Sponsorship cohort with years of experience in building and executing sponsorship deals across athletes, teams, and leagues. KIBI Sports has a proven track record in the Indian sports ecosystem`,
    },
  ];
  const parallaxOffset = useParallax(0.3);
  const { toast } = useToast();

  const handleApplyClick = () => {
    toast({
      title: "Redirecting to Application",
      description: "You'll be directed to the cohort application page.",
    });
  };

  const handleWaitlistClick = () => {
    toast({
      title: "Joining Waitlist",
      description: "We'll notify you when new cohorts are announced!",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ transform: `translateY(${parallaxOffset}px)` }}>
          <img
            src={heroImage}
            alt="Khelpreneurs - Launch Your Sports Industry Career"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 leading-tight">
              Launch Your Sports Industry Career
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Industry-led cohorts with real internships & job pathways in
              sports
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-hover shadow-accent text-lg px-8"
                onClick={handleApplyClick}>
                <Link to="/cohorts">
                  Apply Now <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-spacing bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Industry-Led Training",
                description:
                  "Learn from sports business leaders with real-world experience",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Placement-Driven",
                description:
                  "Internships, PPO pathways, and access to our hiring network",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community & Network",
                description:
                  "Join a thriving ecosystem of sports professionals",
              },
            ].map((item, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}>
                <Card className="card-modern border-none text-center h-full">
                  <CardContent className="card-padding">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cohorts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="mb-4">Our Cohort Programs</h2>
              <p className="text-lg text-muted-foreground">
                Intensive, industry-led programs designed to launch your sports
                career
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Sports Sponsorship - Current */}
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="card-interactive border-primary/20 h-full">
                <CardContent className="card-padding">
                  <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full mb-4">
                    NOW OPEN
                  </div>
                  <h3 className="text-xl font-bold mb-3">Sports Sponsorship</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    Master pitching, negotiating, and executing sponsorship
                    deals
                  </p>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-semibold">16 weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Format:</span>
                      <span className="font-semibold">Live + Internship</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Mentor:</span>
                      <span className="font-semibold text-right">
                        Sagar Rai
                      </span>
                    </div>
                  </div>
                  <Button asChild className="w-full btn-primary h-11">
                    <Link to="/cohorts">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Sports Journalism - Coming Soon */}
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="card-modern opacity-75 h-full">
                <CardContent className="card-padding">
                  <div className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full mb-4">
                    COMING SOON
                  </div>
                  <h3 className="text-xl font-bold mb-3">Sports Journalism</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    Learn storytelling, reporting, and content creation
                  </p>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-semibold">TBA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Format:</span>
                      <span className="font-semibold">Live Online</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-11 rounded-xl border-2"
                    onClick={handleWaitlistClick}>
                    <Link to="/contact">
                      Join Waitlist <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Sports Entrepreneurship - Coming Soon */}
            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="card-modern opacity-75 h-full">
                <CardContent className="card-padding">
                  <div className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full mb-4">
                    COMING SOON
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Sports Entrepreneurship
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    Build and scale sports businesses with industry founders
                  </p>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-semibold">TBA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Format:</span>
                      <span className="font-semibold">Live Online</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-11 rounded-xl border-2"
                    onClick={handleWaitlistClick}>
                    <Link to="/contact">
                      Join Waitlist <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Outcomes & Social Proof */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-primary-foreground">
              Real Outcomes, Real Impact
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Our cohorts are designed for placement and career acceleration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 mb-4">
                <Award className="text-primary-foreground w-8 h-8" />
              </div>
              <AnimatedCounter
                end={50}
                suffix="+"
                className="text-4xl font-bold mb-2 block"
              />
              <div className="text-primary-foreground/80">Cohort Seats</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 mb-4">
                <Briefcase className="text-primary-foreground w-8 h-8" />
              </div>
              <AnimatedCounter
                end={10000}
                prefix="₹"
                className="text-4xl font-bold mb-2 block"
              />
              <div className="text-primary-foreground/80">
                Monthly Internship Stipend
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 mb-4">
                <TrendingUp className="text-primary-foreground w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">PPO</div>
              <div className="text-primary-foreground/80">
                Pathways Available
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Mentor */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Mentors & Coaches</h2>
            <p className="text-lg text-muted-foreground">
              Our mentors are practitioners with real-world experience in sports
              business
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
            {mentors.map((mentor, index) => (
              <Card
                key={index}
                className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px]">
                <CardContent className="p-0">
                  <div>
                    <div className="h-[260px] md:h-full">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold line-clamp-1">
                          {mentor.name}
                        </h3>
                        <a
                          href={mentor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80">
                          <Linkedin className="w-6 h-6" />
                        </a>
                      </div>

                      <p className="text-primary font-semibold mb-4">
                        {mentor.role}
                      </p>

                      <p className="text-muted-foreground mb-4">{mentor.bio}</p>

                      <Button asChild variant="outline" className="w-fit">
                        <Link to="/mentors">
                          View Bio <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
