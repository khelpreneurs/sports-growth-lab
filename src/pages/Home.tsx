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
import adityaImage from "@/assets/mentor-adity.png";
import ankitaImage from "@/assets/mentor-ankita.png";
import anjumImage from "@/assets/mentor-anjum.png";
import karthikImage from "@/assets/mentor-karthik.png";
import minalImage from "@/assets/mentor-minal.png";
import pareshImage from "@/assets/mentor-paresh.png";
import puruImage from "@/assets/mentor-puru.png";
import rakeshImage from "@/assets/mentor-rakesh.png";
import vikramImage from "@/assets/mentor-vikram.png";
import meddaImage from "@/assets/mentor-medda.png";
import vashneyImage from "@/assets/mentor-vashney.png";
import ratnakarImage from "@/assets/mentor-ratnakar.png";
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

      {/* Past Panel Speakers and Mentors */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Past Panel Speakers and Mentors</h2>
            <p className="text-lg text-muted-foreground">
              Our mentors are practitioners with real-world experience in sports
              business
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
            <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift">
              <CardContent className="p-0">
                <div className="">
                  <div className="h-[260px] md:h-full">
                    <img
                      src={adityaImage}
                      alt="Aditya Reddy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold line-clamp-1">
                        Aditya Reddy
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/aditya-reddy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>

                    <p className="text-primary font-semibold mb-4">
                      Founder & CEO, Aethleti
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Founded Aethleti in 2022 to address gaps in Indian sports
                      by connecting young athletes with professional academies,
                      sponsors and high-performance training opportunities
                    </p>

                    <Button asChild variant="outline" className="w-fit">
                      <Link to="/mentors">
                        View Bio <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift">
              <CardContent className="p-0">
                <div className="">
                  <div className="h-[260px] md:h-full">
                    <img
                      src={ankitaImage}
                      alt="Ankita Jain"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold line-clamp-1">
                        Ankita Jain
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/ankita-jain-psychologist?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>

                    <p className="text-primary font-semibold mb-4">
                      Sports & Counselling Psychologist
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Works as a sports & counselling psychologist, and has spoken publicly about the role of psychology in both traditional sports and e‑sports domains. She holds advanced credentials in psychology and has built a practice oriented around athlete performance, mental health, and the emerging esports sector
                    </p>

                    <Button asChild variant="outline" className="w-fit">
                      <Link to="/mentors">
                        View Bio <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift">
              <CardContent className="p-0">
                <div className="">
                  <div className="h-[260px] md:h-full">
                    <img
                      src={anjumImage}
                      alt="Anjum Qazi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold line-clamp-1">
                        Anjum Qazi
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/anjum-qazi-542950268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>

                    <p className="text-primary font-semibold mb-4">
                      VP – Precihole Sports Pvt. Ltd.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Serves as Vice President of Precihole Sports Pvt. Ltd., an Indian manufacturer of air‑rifles / air‑guns and sporting goods, which in 2024 made a notable international debut in collaboration with UK‑based Air Arms at the IWA Outdoor Classics exhibition. In that release she is quoted regarding the milestone of Precihole entering the global market and its commitment to "Make in India" manufacturing identity. Her role thus spans marketing/administration in a niche sports‑equipment and manufacturing business, particularly aligned with the shooting/sports‑goods segment
                    </p>

                    <Button asChild variant="outline" className="w-fit">
                      <Link to="/mentors">
                        View Bio <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift">
              <CardContent className="p-0">
                <div className="">
                  <div className="h-[260px] md:h-full">
                    <img
                      src={karthikImage}
                      alt="Karthik Yanamandra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold line-clamp-1">
                        Karthik Yanamandra
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/karthiky?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>

                    <p className="text-primary font-semibold mb-4">
                      Founding Partner, 360D Sports
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Co‑Founder & Head – Business Initiatives of 360D Sports a Hyderabad‑based firm engaged in sports management, consulting, events, technologies and startup collaboration. Over 17 years of experience in strategic business operations, business development, marketing, revenue expansion, event management, consulting and sports technologies. 360D Sports is a venture/management company working with sports, wellness & fitness startups to build enterprises
                    </p>

                    <Button asChild variant="outline" className="w-fit">
                      <Link to="/mentors">
                        View Bio <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift">
              <CardContent className="p-0">
                <div className="">
                  <div className="h-[260px] md:h-full">
                    <img
                      src={minalImage}
                      alt="Minal Patel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold line-clamp-1">
                        Minal Patel
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/patel-minal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>

                    <p className="text-primary font-semibold mb-4">
                      Co-founder & Head of Investor Relations, StartupLynk
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Director/Designated Partner of StartupLynk (legal entity StartupLynk Sportvot LLP, which is a platform connecting startups with investors; the company's public profile lists fundraising, curated deals, and goal of supporting startup‑investment ecosystem
                    </p>

                    <Button asChild variant="outline" className="w-fit">
                      <Link to="/mentors">
                        View Bio <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift">
              <CardContent className="p-0">
                <div className="">
                  <div className="h-[260px] md:h-full">
                    <img
                      src={pareshImage}
                      alt="Paresh Kothari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold line-clamp-1">
                        Paresh Kothari
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/paresh-kothari-8707921?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>

                    <p className="text-primary font-semibold mb-4">
                      Co-founder, The Sports Gurukul
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Co‑founding managing director of The Sports Gurukul (TSG), which focuses on sports and fitness training in schools and youth programs.TSG's mission emphasizes grassroots development of sporting talent and establishing structured sports education programmes in schools across India. His role thus spans crossover between finance/business and sports training/education
                    </p>

                    <Button asChild variant="outline" className="w-fit">
                      <Link to="/mentors">
                        View Bio <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift">
              <CardContent className="p-0">
                <div className="">
                  <div className="h-[260px] md:h-full">
                    <img
                      src={puruImage}
                      alt="Puru Modani"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold line-clamp-1">
                        Puru Modani
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/puru-modani-1034375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>

                    <p className="text-primary font-semibold mb-4">
                      Founder of The Marwari Angels & Co-founder at BM Capital Family Office
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Angel investor and startup ecosystem enabler, currently associated with The Marwari Angels as a Director and Principal Advisor. He also serves as the Co-Founder of BM Capital Family Office, where he focuses on early-stage investment strategies. With more than 20 investments across technology, SaaS, consumer, and enterprise sectors—including companies like Exotel, Hotelogix, Nobero, and Param.ai—Puru brings a strong portfolio and deep market insight. An alumnus of CDAC (Advanced Computing) and IIM Kozhikode, he is widely recognized in the Hyderabad entrepreneurial circle for mentoring founders and supporting scalable innovation
                    </p>

                    <Button asChild variant="outline" className="w-fit">
                      <Link to="/mentors">
                        View Bio <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift">
              <CardContent className="p-0">
                <div className="">
                  <div className="h-[260px] md:h-full">
                    <img
                      src={rakeshImage}
                      alt="Rakesh Bhatia"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold line-clamp-1">
                        Rakesh Bhatia
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/rbhatia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>

                    <p className="text-primary font-semibold mb-4">
                      Founder & CEO, TheCapitalNet
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Founder and CEO of TheCapitalNet, a global platform designed to transform the alternative investment and innovation ecosystem. With over 25 years of corporate leadership experience, he previously served as Senior Vice President at RealPage Inc. and Head of Quality & PMO at NextBrick Solutions. Rakesh blends extensive operational expertise with a strong understanding of technology-driven business models. An alumnus of IIM Kozhikode, he is known for driving thought leadership in private markets, entrepreneurship development, and investor enablement
                    </p>

                    <Button asChild variant="outline" className="w-fit">
                      <Link to="/mentors">
                        View Bio <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift">
              <CardContent className="p-0">
                <div className="">
                  <div className="h-[260px] md:h-full">
                    <img
                      src={vikramImage}
                      alt="Vikram Gunjal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold line-clamp-1">
                        Vikram Gunjal
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/vikramgunjal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>

                    <p className="text-primary font-semibold mb-4">
                      Co-founder, UpUrFit
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Co‑founded UpUrFit, a Mumbai‑based sports‑wellness brand that makes topical recovery products (warm‑up/cool‑down gels, pain‑relief sprays) and on‑the‑go hygiene items tailored for athletes and everyday fitness enthusiasts. The company describes itself as a physiotherapist‑recommended, science‑backed range built around activation, recovery and hygiene needs. In Indian football, UpUrFit has been building credibility through club tie‑ups—most notably a multi‑year partnership with Mumbai City FC as the club's Official Pain Relief & Recovery Partner for the 2024–25 ISL season
                    </p>

                    <Button asChild variant="outline" className="w-fit">
                      <Link to="/mentors">
                        View Bio <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift">
              <CardContent className="p-0">
                <div className="">
                  <div className="h-[260px] md:h-full">
                    <img
                      src={meddaImage}
                      alt="Medda Venkata Rakesh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold line-clamp-1">
                        Medda Venkata Rakesh
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/rakesh-medda-6b23a521?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>

                    <p className="text-primary font-semibold mb-4">
                      Head – Commercial & Sponsorships, Pro Kabaddi League
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Head of Commercial & Sponsorships for the Pro Kabaddi League at Mashal Sports, one of India's premier kabaddi properties. In this capacity he oversees brand partnerships, sponsorship activations and revenue strategy for the league's franchise ecosystem. The Pro Kabaddi League is broadcast widely (Star Sports network), so his role focuses on delivering value to sponsors through on-ground and digital engagement.
                    </p>

                    <Button asChild variant="outline" className="w-fit">
                      <Link to="/mentors">
                        View Bio <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift">
              <CardContent className="p-0">
                <div className="">
                  <div className="h-[260px] md:h-full">
                    <img
                      src={vashneyImage}
                      alt="Vashney Jadeja"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold line-clamp-1">
                        Vashney Jadeja
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/vashney-jadeja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>

                    <p className="text-primary font-semibold mb-4">
                      Founder, SpotMyRun
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Founder of SpotMyRun, a Hyderabad‑based grassroots sports community that organises running events, walkathons, and community fitness initiatives. SpotMyRun has become a well‑known name in the city for engaging everyday athletes—from beginners to experienced runners—and building an inclusive culture around running. His work exemplifies community‑level sports activation
                    </p>

                    <Button asChild variant="outline" className="w-fit">
                      <Link to="/mentors">
                        View Bio <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift">
              <CardContent className="p-0">
                <div className="">
                  <div className="h-[260px] md:h-full">
                    <img
                      src={ratnakarImage}
                      alt="Ratnakar Gadi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold line-clamp-1">
                        Ratnakar Gadi
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/ratnakar-gadi-a90b7433?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>

                    <p className="text-primary font-semibold mb-4">
                      Co-founder, Sportvot Analytics
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Co‑founded Sportvot Analytics to bring data‑driven insights into Indian sports. Sportvot focuses on performance analytics, scouting, and fan‑engagement tools that help clubs, academies and broadcasters make more informed decisions. His work bridges technology and sports strategy, reflecting the growing importance of data in modern sports management
                    </p>

                    <Button asChild variant="outline" className="w-fit">
                      <Link to="/mentors">
                        View Bio <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Kickstart Your Sports Career?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our next cohort and transform your passion for sports into a
              thriving career
            </p>

            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-accent hover:bg-accent-hover shadow-accent"
              onClick={() => {
                toast({
                  title: "Opening Application Form",
                  description:
                    "You'll be redirected to the secure payment portal.",
                });
              }}>
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

export default Home;
