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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useParallax } from "@/hooks/use-parallax";
import { useState, useRef, useEffect } from "react";
import { Button as ButtonUI } from "@/components/ui/button";
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

// Panel Speakers Gallery Component
const MentorGallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const panelSpeakers = [
    {
      name: "Aditya Reddy",
      role: "Co-Founder, Gamepoint India",
      image: adityaImage,
      linkedin: "https://www.linkedin.com/in/aditya-reddy/",
    },
    {
      name: "Anjum Qazi",
      role: "VP – Precihole Sports Pvt. Ltd.",
      image: anjumImage,
      linkedin: "https://www.linkedin.com/in/anjum-qazi-542950268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
    },
    {
      name: "Ankita Jain",
      role: "Sports & Counselling Psychologist",
      image: ankitaImage,
      linkedin: "https://www.linkedin.com/in/ankita-jain-psychologist?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
    },
    {
      name: "Karthik Yanamandra",
      role: "Founding Partner, 360D Sports",
      image: karthikImage,
      linkedin: "https://www.linkedin.com/in/karthiky?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
    },
    {
      name: "Minal Patel",
      role: "Co-founder & Head of Investor Relations, StartupLynk",
      image: minalImage,
      linkedin: "https://www.linkedin.com/in/patel-minal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Paresh Kothari",
      role: "Co-founder, The Sports Gurukul",
      image: pareshImage,
      linkedin: "https://www.linkedin.com/in/paresh-kothari-8707921?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
    },
    {
      name: "Puru Modani",
      role: "Founder of The Marwari Angels & Co-founder at BM Capital Family Office",
      image: puruImage,
      linkedin: "https://www.linkedin.com/in/puru-modani-b4b6b01a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
    },
    {
      name: "Rakesh Shah",
      role: "Founder, IVG Fund & Sr Director - Franchise Operations, Delhi Capitals",
      image: rakeshImage,
      linkedin: "https://www.linkedin.com/in/rakeshshahivg?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
    },
    {
      name: "Vikram Medda",
      role: "Founding Member of the All India Gaming Federation (AIGF)",
      image: meddaImage,
      linkedin: "https://www.linkedin.com/in/vikrammedda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
    },
    {
      name: "Vikram Khanna",
      role: "Business Development & Sports | Helping Sports Businesses Thrive",
      image: vikramImage,
      linkedin: "https://www.linkedin.com/in/vikram-khanna-782b2925?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
    },
    {
      name: "Vashney Kapoor",
      role: "Co-Founder, Fanatic Sports",
      image: vashneyImage,
      linkedin: "https://www.linkedin.com/in/vashneykapoor?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
    },
    {
      name: "Ratnakar Shetty",
      role: "Advisor: Khelraha India, Former Director (BCCI)",
      image: ratnakarImage,
      linkedin: "https://www.linkedin.com/in/ratnakar-shetty-41a5b418?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
    },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="relative flex items-center gap-4">
      <ButtonUI
        variant="outline"
        size="icon"
        className="flex-shrink-0 h-10 w-10 rounded-full"
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
      >
        <ChevronLeft className="h-4 w-4" />
      </ButtonUI>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto flex-1 no-scrollbar"
      >
        {panelSpeakers.map((speaker, index) => (
          <Card
            key={index}
            className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px] hover-lift flex-shrink-0"
          >
            <CardContent className="p-0">
              <div>
                <div className="h-[260px] md:h-full">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold line-clamp-1">
                      {speaker.name}
                    </h3>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-primary font-semibold">
                    {speaker.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ButtonUI
        variant="outline"
        size="icon"
        className="flex-shrink-0 h-10 w-10 rounded-full"
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
      >
        <ChevronRight className="h-4 w-4" />
      </ButtonUI>
    </div>
  );
};

const Home = () => {
  const mentors = [
    {
      name: "Sagar Rai",
      role: "Founder & CEO, KIBI Sports",
      image: mentorImage,
      linkedin: "https://www.linkedin.com/in/sagar-rai-1252901a5/",
      bio: `Leading the Sports Sponsorship cohort with years of experience in
            building and executing sponsorship deals across athletes, teams,
            and leagues. KIBI Sports has a proven track record in the Indian
            sports ecosystem`,
    },
    {
      name: "Anjum Qazi",
      role: "VP – Precihole Sports Pvt. Ltd.",
      image: anjumImage,
      linkedin:
        "https://www.linkedin.com/in/anjum-qazi-542950268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: `Serves as Vice President of Precihole Sports Pvt. Ltd., an Indian manufacturer 
            of air‑rifles / air‑guns and sporting goods, which in 2024 made a notable international
             debut in collaboration with UK‑based Air Arms at the IWA Outdoor Classics exhibition. 
             In that release she is quoted regarding the milestone of Precihole entering the global 
             market and its commitment to “Make in India” manufacturing identity. Her role thus spans
              marketing/administration in a niche sports‑equipment and manufacturing business, particularly 
              aligned with the shooting/sports‑goods segment`,
    },
    {
      name: "Ankita Jain",
      role: "Sports & Counselling Psychologist",
      image: ankitaImage,
      linkedin:
        "https://www.linkedin.com/in/ankita-jain-psychologist?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: `Works as a sports & counselling psychologist, and has spoken publicly about the role of psychology in both traditional sports and e‑sports domains. She holds advanced credentials in psychology and has built a practice oriented around athlete performance, mental health, and the emerging esports sector`,
    },
    {
      name: "Karthik Yanamandra",
      role: "Founding Partner, 360D Sports",
      image: karthikImage,
      linkedin:
        "https://www.linkedin.com/in/karthiky?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: `Co‑Founder & Head – Business Initiatives of 360D Sports a Hyderabad‑based firm engaged in sports management, consulting, events, technologies and startup collaboration. Over 17 years of experience in strategic business operations, business development, marketing, revenue expansion, event management, consulting and sports technologies. 360D Sports is a venture/management company working with sports, wellness & fitness startups to build enterprises`,
    },
    {
      name: "Minal Patel",
      role: "Co-founder & Head of Investor Relations, StartupLynk",
      image: minalImage,
      linkedin:
        "https://www.linkedin.com/in/patel-minal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: `Director/Designated Partner of StartupLynk (legal entity StartupLynk Sportvot LLP, which is a platform connecting startups with investors; the company’s public profile lists fundraising, curated deals, and goal of supporting startup‑investment ecosystem`,
    },
    {
      name: "Paresh Kothari",
      role: "Co-founder, The Sports Gurukul",
      image: pareshImage,
      linkedin:
        "https://www.linkedin.com/in/paresh-kothari-8707921?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: `Co‑founding managing director of The Sports Gurukul (TSG), which focuses on sports and fitness training in schools and youth programs.TSG’s mission emphasizes grassroots development of sporting talent and establishing structured sports education programmes in schools across India. His role thus spans crossover between finance/business and sports training/education`,
    },
    {
      name: "Puru Modani",
      role: "Founder of The Marwari Angels & Co-founder at BM Capital Family Office",
      image: puruImage,
      linkedin:
        "https://www.linkedin.com/in/puru-modani-1034375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: `Angel investor and startup ecosystem enabler, currently associated with The Marwari Angels as a Director and Principal Advisor. He also serves as the Co-Founder of BM Capital Family Office, where he focuses on early-stage investment strategies. With more than 20 investments across technology, SaaS, consumer, and enterprise sectors—including companies like Exotel, Hotelogix, Nobero, and Param.ai—Puru brings a strong portfolio and deep market insight. An alumnus of CDAC (Advanced Computing) and IIM Kozhikode, he is widely recognized in the Hyderabad entrepreneurial circle for mentoring founders and supporting scalable innovation`,
    },
    {
      name: "Rakesh Bhatia",
      role: "Founder & CEO, TheCapitalNet",
      image: rakeshImage,
      linkedin:
        "https://www.linkedin.com/in/rbhatia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: `Founder and CEO of TheCapitalNet, a global platform designed to transform the alternative investment and innovation ecosystem. With over 25 years of corporate leadership experience, he previously served as Senior Vice President at RealPage Inc. and Head of Quality & PMO at NextBrick Solutions. Rakesh blends extensive operational expertise with a strong understanding of technology-driven business models. An alumnus of IIM Kozhikode, he is known for driving thought leadership in private markets, entrepreneurship development, and investor enablement`,
    },
    {
      name: "Vikram Gunjal",
      role: "Co-founder, UpUrFit",
      image: vikramImage,
      linkedin:
        "https://www.linkedin.com/in/vikramgunjal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: `Co‑founded UpUrFit, a Mumbai‑based sports‑wellness brand that makes topical recovery products (warm‑up/cool‑down gels, pain‑relief sprays) and on‑the‑go hygiene items tailored for athletes and everyday fitness enthusiasts. The company describes itself as a physiotherapist‑recommended, science‑backed range built around activation, recovery and hygiene needs. In Indian football, UpUrFit has been building credibility through club tie‑ups—most notably a multi‑year partnership with Mumbai City FC as the club’s Official Pain Relief & Recovery Partner for the 2024–25 ISL season`,
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

                      <p className="text-primary font-semibold">
                        {mentor.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Mentor Spotlight */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4"> Past Panel Speakers and Mentors</h2>
            <p className="text-lg text-muted-foreground">
              Our mentors are practitioners with real-world experience in sports
              business
            </p>
          </div>

          <MentorGallery />
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
