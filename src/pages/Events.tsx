import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import eventsHero from "@/assets/events-hero.jpg";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={eventsHero}
            alt="Khelpreneurs Events & Workshops"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Events & Workshops</h1>
            <p className="text-xl text-muted-foreground">
              Connect, learn, and grow through our offline meetups, webinars, and networking events
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-8">
              UPCOMING EVENT
            </div>

            <Card className="shadow-strong overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-gradient-to-br from-primary via-primary-light to-primary-dark p-8 md:p-12 text-primary-foreground flex flex-col justify-center">
                    <div className="text-sm font-semibold mb-2">Featured Event</div>
                    <h2 className="text-3xl font-bold mb-6 text-primary-foreground">
                      Khelpreneurs Hyderabad
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Draper Startup House</div>
                          <div className="text-sm text-primary-foreground/80">Hyderabad</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Date</div>
                          <div className="text-sm text-primary-foreground/80">10th May, 2025 </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Networking & Panels</div>
                          <div className="text-sm text-primary-foreground/80">Founders & Investors</div>
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
                          Hear from sports startup founders including representatives from GamePoint India, SFL, UpUrFit, The Sports Gurukul, Hudle, and more. Learn about building in the sports ecosystem, fundraising challenges, and growth strategies.
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
                          Connect with investors from StartupLynk, SucSeed Ventures, The Marwari Angels/BM Capital, and others. Understand what investors look for in sports ventures and how to pitch effectively.
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
                          Mingle with fellow sports professionals, entrepreneurs, and industry leaders. Build meaningful connections in a relaxed setting.
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
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">What We Organize</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Offline Meetups",
                  description: "Regional gatherings for networking, panels, and workshops with industry leaders",
                  icon: <Users className="w-8 h-8" />,
                },
                {
                  title: "Webinars",
                  description: "Online sessions covering sports business topics, career guidance, and industry trends",
                  icon: <Calendar className="w-8 h-8" />,
                },
                {
                  title: "Workshops",
                  description: "Hands-on skill-building sessions on specific topics like pitching, content creation, and more",
                  icon: <MapPin className="w-8 h-8" />,
                },
              ].map((type, index) => (
                <Card key={index} className="shadow-medium text-center border-none">
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="mb-6">More Events Coming Soon</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay tuned for announcements of upcoming events across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline">
                <a href="https://www.linkedin.com/company/khelpreneurs/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                  Follow on LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://www.instagram.com/khelpreneurs/" target="_blank" rel="noopener noreferrer">
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
            <h2 className="mb-6 text-primary-foreground">Interested in Hosting an Event?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Partner with us to bring Khelpreneurs events to your city
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover"
            >
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
