import { useState, useRef, useEffect } from "react";
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
import heroImage from "@/assets/hero-main.jpg";
import mentorImage from "@/assets/mentor-sagar.jpeg";
import mentorAbhinav from "@/assets/mentor-abhinav.jpg";
import mentorDrishti from "@/assets/mentor-drishti.jpg";
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

const PastSpeakersGallery = () => {
  const pastSpeakers = [
    {
      name: "Aditya Reddy",
      role: "Founder & CEO, Aethleti",
      image: adityaImage,
      linkedin: "https://www.linkedin.com/in/aditya-reddy/",
      bio: "The co‑founder and CEO of Gamepoint India (via Netplay Sports Pvt. Ltd.), a Hyderabad‑based company founded in 2016 that operates multi‑sport centres offering coaching, book‑and‑play, tournaments and equipment retail. Under his leadership, Gamepoint has expanded its footprint in Hyderabad and plans national expansion, touting a vision of making sports accessible to a larger population and converting “game watchers” into “game players”",
    },
    {
      name: "Ankita Jain",
      role: "Sports & Counselling Psychologist",
      image: ankitaImage,
      linkedin: "https://www.linkedin.com/in/ankita-jain-psychologist?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: "Works as a sports & counselling psychologist, and has spoken publicly about the role of psychology in both traditional sports and e‑sports domains. She holds advanced credentials in psychology and has built a practice oriented around athlete performance, mental health, and the emerging esports sector",
    },
    {
      name: "Anjum Qazi",
      role: "VP – Precihole Sports Pvt. Ltd.",
      image: anjumImage,
      linkedin: "https://www.linkedin.com/in/anjum-qazi-542950268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: "Serves as Vice President of Precihole Sports Pvt. Ltd., an Indian manufacturer of air‑rifles / air‑guns and sporting goods, which in 2024 made a notable international debut in collaboration with UK‑based Air Arms at the IWA Outdoor Classics exhibition. In that release she is quoted regarding the milestone of Precihole entering the global market and its commitment to \"Make in India\" manufacturing identity. Her role thus spans marketing/administration in a niche sports‑equipment and manufacturing business, particularly aligned with the shooting/sports‑goods segment",
    },
    {
      name: "Karthik Yanamandra",
      role: "Founding Partner, 360D Sports",
      image: karthikImage,
      linkedin: "https://www.linkedin.com/in/karthiky?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: "Co‑Founder & Head – Business Initiatives of 360D Sports a Hyderabad‑based firm engaged in sports management, consulting, events, technologies and startup collaboration. Over 17 years of experience in strategic business operations, business development, marketing, revenue expansion, event management, consulting and sports technologies. 360D Sports is a venture/management company working with sports, wellness & fitness startups to build enterprises",
    },
    {
      name: "Minal Patel",
      role: "Co-founder & Head of Investor Relations, StartupLynk",
      image: minalImage,
      linkedin: "https://www.linkedin.com/in/patel-minal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: "Director/Designated Partner of StartupLynk (legal entity StartupLynk Sportvot LLP, which is a platform connecting startups with investors; the company's public profile lists fundraising, curated deals, and goal of supporting startup‑investment ecosystem",
    },
    {
      name: "Paresh Kothari",
      role: "Co-founder, The Sports Gurukul",
      image: pareshImage,
      linkedin: "https://www.linkedin.com/in/paresh-kothari-8707921?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: "Co‑founding managing director of The Sports Gurukul (TSG), which focuses on sports and fitness training in schools and youth programs.TSG's mission emphasizes grassroots development of sporting talent and establishing structured sports education programmes in schools across India. His role thus spans crossover between finance/business and sports training/education",
    },
    {
      name: "Puru Modani",
      role: "Founder of The Marwari Angels & Co-founder at BM Capital Family Office",
      image: puruImage,
      linkedin: "https://www.linkedin.com/in/puru-modani-1034375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: "Angel investor and startup ecosystem enabler, currently associated with The Marwari Angels as a Director and Principal Advisor. He also serves as the Co-Founder of BM Capital Family Office, where he focuses on early-stage investment strategies. With more than 20 investments across technology, SaaS, consumer, and enterprise sectors—including companies like Exotel, Hotelogix, Nobero, and Param.ai—Puru brings a strong portfolio and deep market insight. An alumnus of CDAC (Advanced Computing) and IIM Kozhikode, he is widely recognized in the Hyderabad entrepreneurial circle for mentoring founders and supporting scalable innovation",
    },
    {
      name: "Rakesh Bhatia",
      role: "Founder & CEO, TheCapitalNet",
      image: rakeshImage,
      linkedin: "https://www.linkedin.com/in/rbhatia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: "Founder and CEO of TheCapitalNet, a global platform designed to transform the alternative investment and innovation ecosystem. With over 25 years of corporate leadership experience, he previously served as Senior Vice President at RealPage Inc. and Head of Quality & PMO at NextBrick Solutions. Rakesh blends extensive operational expertise with a strong understanding of technology-driven business models. An alumnus of IIM Kozhikode, he is known for driving thought leadership in private markets, entrepreneurship development, and investor enablement",
    },
    {
      name: "Vikram Gunjal",
      role: "Co-founder, UpUrFit",
      image: vikramImage,
      linkedin: "https://www.linkedin.com/in/vikramgunjal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: "Co‑founded UpUrFit, a Mumbai‑based sports‑wellness brand that makes topical recovery products (warm‑up/cool‑down gels, pain‑relief sprays) and on‑the‑go hygiene items tailored for athletes and everyday fitness enthusiasts. The company describes itself as a physiotherapist‑recommended, science‑backed range built around activation, recovery and hygiene needs. In Indian football, UpUrFit has been building credibility through club tie‑ups—most notably a multi‑year partnership with Mumbai City FC as the club's Official Pain Relief & Recovery Partner for the 2024–25 ISL season",
    },
    {
      name: "Sourjyendu Medda",
      role: "Founder, SFL - Sports For Life",
      image: meddaImage,
      linkedin: "https://www.linkedin.com/in/sourjyendumedda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: "Founder of Sports For Life (SFL), a new-age sportstech platform focused on strengthening India’s grassroots sports ecosystem and academies. He is also the Co-Founder of DealShare, one of India’s fastest-growing social commerce startups. Through SFL, Sourjyendu is building infrastructure, technology, and programs to support athlete development and sports training across the country. His entrepreneurial journey spans consumer commerce, operations, and sportstech, backed by successful fundraising efforts and active participation as an angel investor in emerging startups",
    },
    {
      name: "Vikrant Varshney",
      role: "Managing Partner, SucSeed Ventures",
      image: vashneyImage,
      linkedin: "https://www.linkedin.com/in/vikrantvarshney-indovation?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: "Co‑founder and Managing Partner of SucSEED Indovation Ventures, a Hyderabad‑based early‑stage venture capital and seed‑fund firm (AIF Cat 1), focused on deep‑tech, fintech, gaming, e‑sports, SaaS, and related startup sectors. At SucSEED he has helped build a portfolio of over 75 start‑ups and has had multiple exits. His focus is more on investment/mentorship in the startup ecosystem than on running sports operations per se",
    },
    {
      name: "Rathnakar Samavedam",
      role: "Investment Director & CEO, Hyderabad Angels",
      image: ratnakarImage,
      linkedin: "https://www.linkedin.com/in/rathnakar-samavedam-816085a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: "Investment Director and CEO of Hyderabad Angels, one of India’s most active angel investment networks. With more than two decades of experience in finance, corporate strategy, and venture investing, he plays a pivotal role in nurturing early-stage startups and facilitating high-potential investments. Rathnakar has previously worked as VP Finance at MapRecruit.ai and as a Partner at S. Ramesh Babu & Co., bringing strong financial and operational insight to the investor community. Under his leadership, Hyderabad Angels has expanded its portfolio activities and launched a ₹100-crore fund to accelerate the growth of promising Indian startups",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {pastSpeakers.map((speaker, index) => (
        <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
          <Card className="border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative bg-gradient-to-br from-accent/5 to-primary/5 p-6 md:p-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl"></div>
                    <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        {speaker.name}
                      </h3>
                      <p className="text-primary font-semibold text-base">
                        {speaker.role}
                      </p>
                    </div>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
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
      bio: `Leading the Sports Sponsorship cohort with years of experience in building and executing sponsorship deals across athletes, teams, and leagues. KIBI Sports has a proven track record in the Indian sports ecosystem`,
    },
    {
      name: "Abhinav Das",
      role: "Co-Founder & CEO, Superjoin.ai",
      image: mentorAbhinav,
      linkedin: "https://www.linkedin.com/in/abhinavdas-in",
      bio: "Product and technology leader with extensive experience across fintech, mobility, and SaaS platforms. At Superjoin.ai, he leads product strategy, technology, and growth building AI-powered solutions for creators, operators, and emerging digital businesses",
    },
    {
      name: "Drishti Bagla",
      role: "Sports Media & Communications Specialist",
      image: mentorDrishti,
      linkedin: "https://www.linkedin.com/in/drishtibagla009",
      bio: "Sports media and communications professional with strong experience in journalism, content strategy, and digital storytelling. She plays a key role in shaping communication frameworks and strengthening the media presence of sports-driven initiatives",
    },
  ];
  const parallaxOffset = useParallax(0.3);
  const { toast } = useToast();

  const handleApplyClick = () => {
    // Removed toast notification for redirecting to cohorts page
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Meet Your Mentor
            </div>
            <h2 className="mb-4">Expert Guidance from Industry Leaders</h2>
            <p className="text-lg text-muted-foreground">
              Learn directly from practitioners shaping India's sports business landscape
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {mentors.map((mentor, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 relative bg-gradient-to-br from-primary/5 to-accent/5 p-8 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
                        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            {mentor.name}
                          </h3>
                          <p className="text-primary font-semibold text-lg">
                            {mentor.role}
                          </p>
                        </div>
                        <a
                          href={mentor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {mentor.bio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Panel Speakers and Mentors */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              Industry Voices
            </div>
            <h2 className="mb-4">Past Panel Speakers</h2>
            <p className="text-lg text-muted-foreground">
              Learn from professionals who've shaped the Indian sports ecosystem
            </p>
          </div>

          <PastSpeakersGallery />
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
                  title: "Contacting Expert",
                  description:
                    "Redirecting you to speak with our expert.",
                });
              }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfiqnKeJOsnlE8-MHjepFUCjOYN_sQLgpNJm_d9pS-cK_b4EQ/viewform?usp=sharing&ouid=116225979965456336365"
                target="_blank"
                rel="noopener noreferrer">
                Talk to Our Expert
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
