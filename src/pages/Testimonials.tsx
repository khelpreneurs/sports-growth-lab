import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Quote, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Sponsorship Associate",
      company: "Sports Marketing Agency",
      image: null,
      quote: "The Sports Sponsorship cohort gave me the practical skills and network I needed to break into the industry. The paid internship at KIBI Sports was invaluable in building my confidence and understanding of real-world sponsorship deals.",
      program: "Sports Sponsorship",
    },
    {
      name: "Rahul Verma",
      role: "Brand Partnerships Manager",
      company: "Cricket Franchise",
      image: null,
      quote: "Learning from Sagar Rai and working on actual deals during the internship prepared me perfectly for my current role. The curriculum was spot-on and the hands-on approach made all the difference. Highly recommend this program!",
      program: "Sports Sponsorship",
    },
    {
      name: "Ananya Reddy",
      role: "Sports Consultant",
      company: "Freelance",
      image: null,
      quote: "The hands-on approach and industry connections from Khelpreneurs helped me launch my consulting practice. The community support continues even after the cohort ends - it's like having a professional family in the sports industry.",
      program: "Sports Sponsorship",
    },
    {
      name: "Arjun Patel",
      role: "Marketing Intern",
      company: "Sports Startup",
      image: null,
      quote: "As a student, this cohort opened doors I didn't even know existed. The combination of structured learning, real projects, and mentorship accelerated my career by years. I landed my dream internship within weeks of completing the program.",
      program: "Sports Sponsorship",
    },
    {
      name: "Meera Kapoor",
      role: "Former Athlete, Now Sponsorship Analyst",
      company: "League Partner",
      image: null,
      quote: "Transitioning from being an athlete to the business side of sports seemed daunting. Khelpreneurs made it smooth with practical training and a supportive community. Sagar's mentorship was particularly valuable in understanding the sponsor perspective.",
      program: "Sports Sponsorship",
    },
    {
      name: "Vikram Singh",
      role: "Sports Marketing Professional",
      company: "Brand Agency",
      image: null,
      quote: "I was already working in marketing but wanted to specialize in sports. This cohort gave me the specialized skills and credentials I needed. The capstone project alone has been a talking point in multiple interviews!",
      program: "Sports Sponsorship",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-secondary via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">What Our Members Say</h1>
            <p className="text-xl text-muted-foreground">
              Hear from students, professionals, and athletes who've transformed their careers through Khelpreneurs
            </p>
          </div>
        </div>
      </section>

      Testimonials Grid
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-strong border-none relative">
                  <CardContent className="p-8">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary shrink-0"></div>
                      <div>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-primary font-semibold">{testimonial.role}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="text-xs text-muted-foreground">
                        Program: <span className="font-semibold text-foreground">{testimonial.program}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Video Testimonials Teaser */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Video Testimonials</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Coming soon - Watch video stories from our community members
            </p>
            <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🎥</div>
                <p className="text-muted-foreground">Video testimonials will be added soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "Active Participants" },
                { value: "95%", label: "Completion Rate" },
                { value: "100%", label: "Would Recommend" },
                { value: "8 Weeks", label: "Paid Internship" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div  className="text-4xl md:text-3xl font-bold mb-2 text-white bg-primary-light/100 px-4 py-1 rounded-xl shadow-md">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* From Different Backgrounds */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Success from All Backgrounds</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  category: "Students",
                  description: "Fresh graduates breaking into sports industry",
                },
                {
                  category: "Professionals",
                  description: "Career switchers finding their sports calling",
                },
                {
                  category: "Athletes",
                  description: "Current & former athletes transitioning to business roles",
                },
                {
                  category: "Entrepreneurs",
                  description: "Building sports ventures with new skills",
                },
              ].map((group, index) => (
                <Card key={index} className="shadow-medium text-center border-none">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">
                      {index === 0 ? "🎓" : index === 1 ? "💼" : index === 2 ? "⚽" : "🚀"}
                    </div>
                    <h3 className="font-bold mb-2">{group.category}</h3>
                    <p className="text-sm text-muted-foreground">{group.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">Join Our Success Stories</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of the next cohort and write your own success story in the sports industry
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover shadow-accent text-lg px-8 py-6"
            >
              <a href="https://payments.cashfree.com/forms/khelpreneurscohort1"target="_blank"rel="noopener noreferrer">
                 Apply to Sports Sponsorship Cohort<ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
