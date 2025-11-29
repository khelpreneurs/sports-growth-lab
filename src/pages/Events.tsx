import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, ArrowRight, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { useParallax } from "@/hooks/use-parallax";
import eventsHero from "@/assets/events-hero.jpg";
import adityaImage from "@/assets/mentor-adity.png";
import anjumImage from "@/assets/mentor-anjum.png";
import ankitaImage from "@/assets/mentor-ankita.png";
import karthikImage from "@/assets/mentor-karthik.png";
import minalImage from "@/assets/mentor-minal.png";
import pareshImage from "@/assets/mentor-paresh.png";
import puruImage from "@/assets/mentor-puru.png";
import rakeshImage from "@/assets/mentor-Rakesh.png";
import rathnakarImage from "@/assets/mentor-Rathnakar.png";
import SourjyenduImage from "@/assets/mentor-Sourjyendu.png";
import vikramImage from "@/assets/mentor-Vikram.png";
import vikrantImage from "@/assets/mentor-Vikrant.png";
import pic1 from "@/assets/hyderabad_event/pic1.jpeg";
import pic2 from "@/assets/hyderabad_event/pic2.jpeg";
import pic3 from "@/assets/hyderabad_event/pic3.jpeg";
import pic4 from "@/assets/hyderabad_event/pic4.jpeg";
import pic5 from "@/assets/hyderabad_event/pic5.jpeg";
import pic6 from "@/assets/hyderabad_event/pic6.jpeg";
import pic7 from "@/assets/hyderabad_event/pic7.jpeg";
import pic8 from "@/assets/hyderabad_event/pic8.jpeg";
import pic9 from "@/assets/hyderabad_event/pic9.jpeg";
import pic10 from "@/assets/hyderabad_event/pic10.jpeg";
import pic11 from "@/assets/hyderabad_event/pic11.jpeg";
import pic12 from "@/assets/hyderabad_event/pic12.jpeg";
import pic13 from "@/assets/hyderabad_event/pic13.jpeg";
import pic14 from "@/assets/hyderabad_event/pic14.jpeg";
import pic15 from "@/assets/hyderabad_event/pic15.jpeg";
import { Link } from "react-router-dom";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const HyderabadGallery = ({ mediaGallery }: { mediaGallery: Array<{ type: string; url: string }> }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      setTimeout(checkScroll, 100);
    }
  };

  return (
    <div className="relative flex items-center gap-4">
      <Button
        variant="outline"
        size="icon"
        className="h-12 w-12 rounded-full bg-background border-border hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-md disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        onLoad={checkScroll}
        className="flex gap-6 overflow-x-auto pb-4 flex-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {mediaGallery.map((item, index) => (
          <div
            key={index}
            className="shadow-strong rounded-xl overflow-hidden min-w-[300px] md:min-w-[420px] flex-shrink-0 scrollbar-hide">
            {item.type === "image" && (
              <img
                src={item.url}
                className="w-full h-[260px] md:h-[320px] object-cover"
                alt={`Hyderabad event photo ${index + 1}`}
              />
            )}

            {item.type === "youtube" && (
              <iframe
                src={item.url}
                className="w-full h-[260px] md:h-[320px] object-cover"
                allow="autoplay; encrypted-media"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Hyderabad event video ${index + 1}`}
              />
            )}
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="h-12 w-12 rounded-full bg-background border-border hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-md disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

const Events = () => {
  const mentors = [
    {
      name: "Aditya Reddy",
      role: "Co-Founder, Gamepoint India",
      image: adityaImage,
      linkedin: "https://www.linkedin.com/in/aditya-reddy/",
      bio: `The co‑founder and CEO of Gamepoint India (via Netplay Sports Pvt. Ltd.), 
            a Hyderabad‑based company founded in 2016 that operates multi‑sport centres 
            offering coaching, book‑and‑play, tournaments and equipment retail. Under his leadership, 
            Gamepoint has expanded its footprint in Hyderabad and plans national expansion, touting a 
            vision of making sports accessible to a larger population and converting “game watchers” into “game players”`,
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
    {
      name: "Vikrant Varshney",
      role: "Managing Partner, SucSeed Ventures",
      image: vikrantImage,
      linkedin:
        "https://www.linkedin.com/in/vikrantvarshney-indovation?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: `Co‑founder and Managing Partner of SucSEED Indovation Ventures, a Hyderabad‑based early‑stage venture capital and seed‑fund firm (AIF Cat 1), focused on deep‑tech, fintech, gaming, e‑sports, SaaS, and related startup sectors. At SucSEED he has helped build a portfolio of over 75 start‑ups and has had multiple exits. His focus is more on investment/mentorship in the startup ecosystem than on running sports operations per se`,
    },
    {
      name: "Sourjyendu Medda",
      role: "Founder, SFL - Sports For Life",
      image: SourjyenduImage,
      linkedin:
        "https://www.linkedin.com/in/sourjyendumedda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: `Founder of Sports For Life (SFL), a new-age sportstech platform focused on strengthening India’s grassroots sports ecosystem and academies. He is also the Co-Founder of DealShare, one of India’s fastest-growing social commerce startups. Through SFL, Sourjyendu is building infrastructure, technology, and programs to support athlete development and sports training across the country. His entrepreneurial journey spans consumer commerce, operations, and sportstech, backed by successful fundraising efforts and active participation as an angel investor in emerging startups`,
    },
    {
      name: "Rathnakar Samavedam",
      role: "Investment Director & CEO, Hyderabad Angels",
      image: rathnakarImage,
      linkedin:
        "https://www.linkedin.com/in/rathnakar-samavedam-816085a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
      bio: `Investment Director and CEO of Hyderabad Angels, one of India’s most active angel investment networks. With more than two decades of experience in finance, corporate strategy, and venture investing, he plays a pivotal role in nurturing early-stage startups and facilitating high-potential investments. Rathnakar has previously worked as VP Finance at MapRecruit.ai and as a Partner at S. Ramesh Babu & Co., bringing strong financial and operational insight to the investor community. Under his leadership, Hyderabad Angels has expanded its portfolio activities and launched a ₹100-crore fund to accelerate the growth of promising Indian startups`,
    },
  ];
  const mediaGallery = [
    {
      type: "image",
      url: pic1,
    },
    {
      type: "image",
      url: pic2,
    },
    {
      type: "image",
      url: pic3,
    },
    {
      type: "image",
      url: pic4,
    },
    {
      type: "image",
      url: pic5,
    },
    {
      type: "image",
      url: pic6,
    },
    {
      type: "image",
      url: pic7,
    },
    {
      type: "image",
      url: pic8,
    },
    {
      type: "image",
      url: pic9,
    },
    {
      type: "image",
      url: pic10,
    },
    {
      type: "image",
      url: pic11,
    },
    {
      type: "image",
      url: pic12,
    },
    {
      type: "image",
      url: pic13,
    },
    {
      type: "image",
      url: pic14,
    },
    {
      type: "image",
      url: pic15,
    },
    {
      type: "youtube",
      url: "https://www.youtube.com/embed/qQRUSYndOAs?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=qQRUSYndOAs",
    },
    {
      type: "youtube",
      url: "https://www.youtube.com/embed/5iKLbDxaPlA?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=5iKLbDxaPlA",
    },
    {
      type: "youtube",
      url: "https://www.youtube.com/embed/iFcFssJAU-8?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=iFcFssJAU-8",
    },
    {
      type: "youtube",
      url: "https://www.youtube.com/embed/fajGjg83cXA?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=fajGjg83cXA",
    },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Events", url: "/events" }
      ]} />
      <Header />
      <ScrollProgressBar />

      {/* Hero */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden">
        <div 
          className="absolute inset-0 -z-10"
          style={{ transform: `translateY(${useParallax(0.3)}px)` }}
        >
          <img
            src={eventsHero}
            alt="Khelpreneurs Events & Workshops"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-2">Events & Workshops</h1>
            <p className="text-muted-foreground">
              Connect, learn, and grow through our offline meetups and networking events
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up">
              <Card className="shadow-strong overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-gradient-to-br from-primary via-primary-light to-primary-dark p-8 md:p-12 text-primary-foreground flex flex-col justify-center">
                    <div className="text-sm font-semibold mb-2">
                      Featured Event
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-primary-foreground">
                      Khelpreneurs Hyderabad
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">
                            Draper Startup House
                          </div>
                          <div className="text-sm text-primary-foreground/80">
                            Hyderabad
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Date</div>
                          <div className="text-sm text-primary-foreground/80">
                            10th May, 2025{" "}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">
                            Networking & Panels
                          </div>
                          <div className="text-sm text-primary-foreground/80">
                            Founders & Investors
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-6">Event Agenda</h3>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                            1
                          </div>
                          Founder Panel
                        </h4>
                        <p className="text-muted-foreground text-sm ml-10">
                          Hear from sports startup founders including
                          representatives from GamePoint India, SFL, UpUrFit,
                          The Sports Gurukul, Hudle, and more. Learn about
                          building in the sports ecosystem, fundraising
                          challenges, and growth strategies.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                            2
                          </div>
                          Investor Panel
                        </h4>
                        <p className="text-muted-foreground text-sm ml-10">
                          Connect with investors from StartupLynk, SucSeed
                          Ventures, The Marwari Angels/BM Capital, and others.
                          Understand what investors look for in sports ventures
                          and how to pitch effectively.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                            3
                          </div>
                          Networking Session
                        </h4>
                        <p className="text-muted-foreground text-sm ml-10">
                          Mingle with fellow sports professionals,
                          entrepreneurs, and industry leaders. Build meaningful
                          connections in a relaxed setting.
                        </p>
                      </div>
                    </div>

                    {/* <Button size="lg" className="bg-accent hover:bg-accent-hover shadow-accent">
                      Register for Event <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">
                      Registration details will be announced soon
                    </p> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Past Panel Speakers */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
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

          <div className="max-w-5xl mx-auto space-y-8">
            {mentors.map((mentor, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <Card className="border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 relative bg-gradient-to-br from-accent/5 to-primary/5 p-6 md:p-8 flex items-center justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl"></div>
                          <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
                            <img
                              src={mentor.image}
                              alt={mentor.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                              {mentor.name}
                            </h3>
                            <p className="text-primary font-semibold text-base">
                              {mentor.role}
                            </p>
                          </div>
                          <a
                            href={mentor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </div>

                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {mentor.bio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* Photos & Videos Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="text-center mb-10 text-2xl md:text-5xl font-bold">
              Hyderabad Event
            </h2>
          </AnimatedSection>

          <HyderabadGallery mediaGallery={mediaGallery} />
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">What We Organize</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Offline Meetups",
                  description:
                    "Regional gatherings for networking, panels, and workshops with industry leaders",
                  icon: <Users className="w-8 h-8" />,
                },
                {
                  title: "Webinars",
                  description:
                    "Online sessions covering sports business topics, career guidance, and industry trends",
                  icon: <Calendar className="w-8 h-8" />,
                },
                {
                  title: "Workshops",
                  description:
                    "Hands-on skill-building sessions on specific topics like pitching, content creation, and more",
                  icon: <MapPin className="w-8 h-8" />,
                },
              ].map((type, index) => (
                <Card
                  key={index}
                  className="shadow-medium text-center border-none">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Teaser */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="mb-6">More Events Coming Soon</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay tuned for announcements of upcoming events across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://www.linkedin.com/company/khelpreneurs/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer">
                  Follow on LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://www.instagram.com/khelpreneurs/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-primary-foreground">
              Interested in Hosting an Event?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Partner with us to bring Khelpreneurs events to your city
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
