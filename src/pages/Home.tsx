import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Briefcase, ArrowRight, Award, TrendingUp, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-main.jpg";
import mentorImage from "@/assets/mentor-sagar.jpeg";
import saurabhImage from "@/assets/mentor-saurabh.png";
import amitImage from "@/assets/mentor-amit.jpeg";
import hussainImage from "@/assets/mentor-hussain.jpeg";
import adityaImage from "@/assets/mentor-adity.png";
import ankitaImage from "@/assets/mentor-ankita.png";
import anjumImage from "@/assets/mentor-anjum.png";
import karthikImage from "@/assets/mentor-karthik.png";
import minalImage from "@/assets/mentor-minal.png";


const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Khelpreneurs - Launch Your Sports Industry Career"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/company-logo.jpg"
                alt="Company Logo"
                className="h-16 md:h-24 mx-auto mb-6"
              />
            </div>
            <h1 className="mb-6 leading-tight">
              Launch Your Sports Industry Career
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Industry-led cohorts with real internships & job pathways in sports
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-accent hover:bg-accent-hover shadow-accent"
              >
                <a href="https://payments.cashfree.com/forms/khelpreneurscohort1" target="_blank" rel="noopener noreferrer">Apply Now</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2"
              >
                <Link to="/cohorts">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Industry-Led Training",
                description: "Learn from sports business leaders & mentors with real-world experience",
              },
              {
                icon: <Briefcase className="w-10 h-10" />,
                title: "Placement-Driven",
                description: "Internships, PPO pathways, and access to our hiring network",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Community & Network",
                description: "Join a thriving, supportive ecosystem of sports professionals",
              },
            ].map((item, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth border-none">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cohorts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Cohort Programs</h2>
            <p className="text-lg text-muted-foreground">
              Intensive, industry-led programs designed to launch your sports career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sports Sponsorship - Current */}
            <Card className="shadow-strong hover:shadow-primary transition-smooth border-primary/20">
              <CardContent className="p-8">
                <div className="inline-block px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-4">
                  Now Open
                </div>
                <h3 className="text-2xl font-bold mb-3">Sports Sponsorship</h3>
                <p className="text-muted-foreground mb-6">
                  Master the art of pitching, negotiating, and executing sports sponsorship deals
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-semibold">16 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span className="font-semibold">Live + Internship</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mentor:</span>
                    <span className="font-semibold">Sagar Rai, KIBI Sports</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-accent hover:bg-accent-hover">
                  <a href="https://payments.cashfree.com/forms/khelpreneurscohort1" target="_blank" rel="noopener noreferrer">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Sports Journalism - Coming Soon */}
            <Card className="shadow-medium hover:shadow-strong transition-smooth opacity-90">
              <CardContent className="p-8">
                <div className="inline-block px-4 py-1 bg-muted text-muted-foreground text-sm font-semibold rounded-full mb-4">
                  Coming Soon
                </div>
                <h3 className="text-2xl font-bold mb-3">Sports Journalism</h3>
                <p className="text-muted-foreground mb-6">
                  Learn storytelling, reporting, and content creation for sports media
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-semibold">TBA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span className="font-semibold">Live Online</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/cohorts">
                    Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Sports Entrepreneurship - Coming Soon */}
            <Card className="shadow-medium hover:shadow-strong transition-smooth opacity-90">
              <CardContent className="p-8">
                <div className="inline-block px-4 py-1 bg-muted text-muted-foreground text-sm font-semibold rounded-full mb-4">
                  Coming Soon
                </div>
                <h3 className="text-2xl font-bold mb-3">Sports Entrepreneurship</h3>
                <p className="text-muted-foreground mb-6">
                  Build and scale sports businesses with guidance from industry founders
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-semibold">TBA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span className="font-semibold">Live Online</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/cohorts">
                    Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes & Social Proof */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-primary-foreground">Real Outcomes, Real Impact</h2>
            <p className="text-lg text-primary-foreground/80">
              Our cohorts are designed for placement and career acceleration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Award />, value: "50+", label: "Cohort Seats" },
              { icon: <Briefcase />, value: "₹10,000", label: "Monthly Internship Stipend" },
              { icon: <TrendingUp />, value: "PPO", label: "Pathways Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 mb-4">
                  <div className="text-primary-foreground w-8 h-8">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Mentor Spotlight */}
<section className="py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="mb-4">Learn from Industry Leaders</h2>
      <p className="text-lg text-muted-foreground">
        Our mentors are practitioners with real-world experience in sports business
      </p>
    </div>


<div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
  <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px]">
    <CardContent className="p-0">
      <div className="">

        <div className="h-[260px] md:h-full">
          <img
            src={mentorImage}
            alt="Sagar Rai - Founder & CEO, KIBI Sports"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold">Sagar Rai</h3>
            <a href="https://www.linkedin.com/in/sagar-rai-1252901a5/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-primary font-semibold mb-4">
            Founder & CEO, KIBI Sports
          </p>

          <p className="text-muted-foreground mb-4">
            Leading the Sports Sponsorship cohort with years of experience in
            building and executing sponsorship deals across athletes, teams,
            and leagues. KIBI Sports has a proven track record in the Indian
            sports ecosystem.
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

  <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px]">
    <CardContent className="p-0">
      <div className="">
        <div className="h-[260px] md:h-full">
          <img
            src={saurabhImage}
            alt="Sagar Rai - Founder & CEO, KIBI Sports"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold line-clamp-1">Saurabh Aggarwal</h3>
            <a href="https://www.linkedin.com/in/saurabh-aggarwal-86426723" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-primary font-semibold mb-4">
            Co-Founder of Hyfit(Bengaluru)
          </p>
          <p className="text-muted-foreground mb-4">
            Saurabh is a fitness entrepreneur and endurance athlete. 
            He co-founded Hyfit, a hybrid fitness club offering multi-format 
            training journeys combining strength, skill, endurance and recovery 
            for urban members in Bengaluru.
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
  <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px]">
    <CardContent className="p-0">
      <div className="">

        <div className="h-[260px] md:h-full">
          <img
            src={amitImage}
            alt="Sagar Rai - Founder & CEO, KIBI Sports"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold line-clamp-1">Amit Kumar Sahu</h3>
            <a href=" https://www.linkedin.com/in/amitsahu90?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-primary font-semibold mb-4">
            Co-Founder, Finnoto Solutions Private Limited
          </p>

          <p className="text-muted-foreground mb-4">
            Amit is a Bengaluru-based entrepreneur who co-founded Finnoto Solutions in 2022,
            a fintech platform focused on financial management. He holds an engineering degree
            from Motilal Nehru National Institute of Technology, Allahabad. Prior to Finnoto, 
            his experience spans business development, operations and startup roles.
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

  <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px]">
    <CardContent className="p-0">
      <div className="">

        <div className="h-[260px] md:h-full">
          <img
            src={hussainImage}
            alt="Sagar Rai - Founder & CEO, KIBI Sports"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold line-clamp-1">Hussa K</h3>
            <a href="https://www.linkedin.com/in/hussak/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-primary font-semibold mb-4">
            Strategic Investor & Board Director in Global Sport
          </p>
          <p className="text-muted-foreground mb-4">
            With over 20 years of leadership in sport governance and emerging markets,
             Hussa specialises in aligning governance frameworks with commercial strategies 
             for federations, clubs and investors. Based in the Middle East, she serves on multiple 
             regional and international boards, writes and speaks internationally on governance, gender and 
             sport-for-development, and focuses on building “trust capital” as a foundation for sustainable 
             sport investment and growth. 
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

  <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px]">
    <CardContent className="p-0">
      <div className="">

        <div className="h-[260px] md:h-full">
          <img
            src={adityaImage}
            alt="Sagar Rai - Founder & CEO, KIBI Sports"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold line-clamp-1">Aditya Reddy</h3>
            <a href="https://www.linkedin.com/in/aditya-reddy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-primary font-semibold mb-4">
            Co-Founder, Gamepoint India
          </p>
          <p className="text-muted-foreground mb-4">
            The co‑founder and CEO of Gamepoint India (via Netplay Sports Pvt. Ltd.), 
            a Hyderabad‑based company founded in 2016 that operates multi‑sport centres 
            offering coaching, book‑and‑play, tournaments and equipment retail. Under his leadership, 
            Gamepoint has expanded its footprint in Hyderabad and plans national expansion, touting a 
            vision of making sports accessible to a larger population and converting “game watchers” into “game players”.
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

    <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px]">
    <CardContent className="p-0">
      <div className="">

        <div className="h-[260px] md:h-full">
          <img
            src={ankitaImage}
            alt="Sagar Rai - Founder & CEO, KIBI Sports"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold line-clamp-1">Ankita Jain</h3>
            <a href="https://www.linkedin.com/in/ankita-jain-psychologist?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-primary font-semibold mb-4">
            Sports & Counselling Psychologist
          </p>
          <p className="text-muted-foreground mb-4">
            Works as a sports & counselling psychologist, and has spoken publicly about 
            the role of psychology in both traditional sports and e‑sports domains. 
            She holds advanced credentials in psychology and has built a practice oriented 
            around athlete performance, mental health, and the emerging esports sector.
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

  <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px]">
    <CardContent className="p-0">
      <div className="">

        <div className="h-[260px] md:h-full">
          <img
            src={anjumImage}
            alt="Sagar Rai - Founder & CEO, KIBI Sports"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold line-clamp-1">Anjum Qazi</h3>
            <a href="https://www.linkedin.com/in/anjum-qazi-542950268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-primary font-semibold mb-4">
            VP – Precihole Sports Pvt. Ltd.
          </p>
          <p className="text-muted-foreground mb-4">
            Serves as Vice President of Precihole Sports Pvt. Ltd., an Indian manufacturer 
            of air‑rifles / air‑guns and sporting goods, which in 2024 made a notable international
             debut in collaboration with UK‑based Air Arms at the IWA Outdoor Classics exhibition. 
             In that release she is quoted regarding the milestone of Precihole entering the global 
             market and its commitment to “Make in India” manufacturing identity. Her role thus spans
              marketing/administration in a niche sports‑equipment and manufacturing business, particularly 
              aligned with the shooting/sports‑goods segment. 
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

  <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px]">
    <CardContent className="p-0">
      <div className="">

        <div className="h-[260px] md:h-full">
          <img
            src={karthikImage}
            alt="Sagar Rai - Founder & CEO, KIBI Sports"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold line-clamp-1">Karthik Yanamandra</h3>
            <a href="https://www.linkedin.com/in/hussak/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-primary font-semibold mb-4">
            Founding Partner, 360D Sports
          </p>
          <p className="text-muted-foreground mb-4">
            Co‑Founder & Head – Business Initiatives of 360D Sports a Hyderabad‑based 
            firm engaged in sports management, consulting, events, technologies and startup 
            collaboration. Over 17 years of experience in strategic business operations, 
            business development, marketing, revenue expansion, event management, consulting 
            and sports technologies. 360D Sports is a venture/management company working with sports, 
            wellness & fitness startups to build enterprises. 
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

  <Card className="shadow-strong overflow-hidden min-w-[350px] md:min-w-[420px]">
    <CardContent className="p-0">
      <div className="">
        <div className="h-[260px] md:h-full">
          <img
            src={minalImage}
            alt="Sagar Rai - Founder & CEO, KIBI Sports"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold line-clamp-1">Minal Patel</h3>
            <a href="https://www.linkedin.com/in/saurabh-aggarwal-86426723" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-primary font-semibold mb-4">
            Co-founder & Head of Investor Relations, StartupLynk
          </p>
          <p className="text-muted-foreground mb-4">
            Director/Designated Partner of StartupLynk (legal entity StartupLynk Sportvot LLP,
             which is a platform connecting startups with investors; the company’s public profile
              lists fundraising, curated deals, and goal of supporting startup‑investment ecosystem.
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
              Join our next cohort and transform your passion for sports into a thriving career
            </p>
            
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-accent hover:bg-accent-hover shadow-accent"
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

export default Home;
