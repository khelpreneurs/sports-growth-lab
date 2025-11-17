import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQs = () => {
  const faqCategories = [
    {
      category: "Programs & Cohorts",
      faqs: [
        {
          q: "Who are these programs for?",
          a: "Our programs are designed for students, early professionals, freelancers, athletes, league staff members, and anyone looking to build or transition into a sports industry career. No prior experience in sports business is required - just passion and commitment.",
        },
        {
          q: "Are the programs online or offline?",
          a: "Currently, our cohort sessions are conducted live online with recordings available. This allows participants from across India to join. We also organize offline events and networking meetups in various cities.",
        },
        {
          q: "What is the time commitment?",
          a: "The Sports Sponsorship cohort requires 8 weeks of part-time commitment (2-3 hours per week for live sessions plus self-paced work), followed by an 8-week internship which can be part-time or full-time depending on your availability.",
        },
        {
          q: "What if I miss a live session?",
          a: "All live sessions are recorded and available on our learning platform. You can watch them at your convenience. However, we encourage live attendance for better interaction and networking.",
        },
        {
          q: "Will I get a certificate?",
          a: "Yes! Participants who complete the program and internship receive a certificate of completion from Khelpreneurs and KIBI Sports.",
        },
        {
          q: "What is the cohort size?",
          a: "We keep our cohorts intimate with a maximum of 50 participants. This ensures personalized attention, better peer learning, and stronger community bonds.",
        },
      ],
    },
    {
      category: "Admissions & Fees",
      faqs: [
        {
          q: "What is the selection process?",
          a: "Applications are reviewed on a rolling, first-come basis. We evaluate applications based on genuine interest in sports, career goals, and commitment to complete the program. Selected candidates are notified via email.",
        },
        {
          q: "What is the program fee?",
          a: "The Sports Sponsorship cohort fee is ₹40,000 (inclusive of all taxes). This covers 8 weeks of live training, all course materials, internship placement, and career support.",
        },
        {
          q: "Are there any scholarships available?",
          a: "We offer need-based scholarships on a case-by-case basis. If cost is a barrier, please mention it in your application and we'll reach out to discuss options.",
        },
        {
          q: "What is the refund policy?",
          a: "We offer a full refund within the first 2 weeks of the program if you feel it's not the right fit for you. After that, refunds are handled on a case-by-case basis.",
        },
        {
          q: "When does the next batch start?",
          a: "Batch start dates are announced on our website and social media channels. Applications typically open 4-6 weeks before the start date. Check the cohort page for the latest schedule.",
        },
      ],
    },
    {
      category: "Career Outcomes & Placement",
      faqs: [
        {
          q: "Do you guarantee job placement?",
          a: "While we don't guarantee jobs, we provide comprehensive career support including: paid internship at KIBI Sports, PPO eligibility based on performance, resume/portfolio review, mock interviews, referrals to hiring partners, and access to our job network.",
        },
        {
          q: "What is the internship arrangement?",
          a: "All Sports Sponsorship cohort participants complete an 8-week paid internship (₹10,000/month) at KIBI Sports, working on live sponsorship projects. Top performers are eligible for Pre-Placement Offers (PPO).",
        },
        {
          q: "What kind of roles can I apply for after the program?",
          a: "Graduates typically pursue roles like: Sponsorship Associate, Brand Partnerships Coordinator, Sports Marketing Executive, Athlete Management roles, and positions in sports agencies, leagues, and brands.",
        },
        {
          q: "Can I access career support after completing the program?",
          a: "Absolutely! You get lifetime access to our alumni community, job board, and ongoing career support. We're invested in your long-term success.",
        },
      ],
    },
    {
      category: "Miscellaneous",
      faqs: [
        {
          q: "How do offline events fit in?",
          a: "Offline events are separate from cohorts - they're open networking and learning opportunities. While cohort participants get priority access, anyone interested in sports careers can attend our events.",
        },
        {
          q: "Can I take multiple cohorts?",
          a: "Yes! Once you complete one cohort, you can enroll in others (like Sports Journalism or Entrepreneurship when they launch). Alumni get special pricing for additional cohorts.",
        },
        {
          q: "What makes Khelpreneurs different from other programs?",
          a: "Three things: (1) Industry practitioners as mentors, not just academics, (2) Paid internships with live projects, not simulations, (3) Strong community and hiring network specific to Indian sports industry.",
        },
        {
          q: "I'm not based in India. Can I still join?",
          a: "Yes! Our online format allows international participation. However, the internship component is currently India-focused. International participants can explore remote internship options on a case-by-case basis.",
        },
        {
          q: "How can I stay updated on new programs?",
          a: "Follow us on LinkedIn and Instagram, and subscribe to our newsletter. We announce all new programs, events, and updates through these channels.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-secondary via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Khelpreneurs programs
            </p>
          </div>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="mb-8">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border rounded-xl px-6 shadow-soft"
                    >
                      <AccordionTrigger className="hover:no-underline font-semibold text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 pb-2">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the answer you're looking for? Reach out to our team and we'll get back to you promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:events@khelpreneurs.com">
                  Email: events@khelpreneurs.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Apply?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the Sports Sponsorship cohort and kickstart your sports career
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

export default FAQs;
