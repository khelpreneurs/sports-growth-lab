import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Privacy Policy", url: "/privacy-policy" }
      ]} />
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last Updated: November 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Khelpreneurs ("we", "our", "us") is committed to protecting the privacy and personal data of users ("you", "your"). This Privacy Policy explains how we collect, use, store, share, and protect your information when you access khelpreneurs.com, enroll in our programs, attend our events, or interact with our services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              By using our website or services, you consent to the practices described in this Privacy Policy.
            </p>

            {/* Section 1 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">1. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold mb-3">1.1 Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect the following personal information when you register, enroll, or communicate with us:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth (if required for eligibility)</li>
                <li>Educational and professional details</li>
                <li>Payment and transaction details (processed securely via third-party gateways)</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">1.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>IP address</li>
                <li>Browser type and device information</li>
                <li>Pages visited and interaction data</li>
                <li>Date and time of access</li>
                <li>Cookies and usage analytics</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">2. Purpose of Data Collection</h2>
              <p className="text-muted-foreground mb-4">
                We collect and use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Program enrollment and delivery</li>
                <li>Communication related to cohorts, sessions, internships, and events</li>
                <li>Processing payments and issuing receipts</li>
                <li>Providing customer support</li>
                <li>Improving our website, services, and learning experience</li>
                <li>Sending updates, announcements, and relevant opportunities</li>
                <li>Legal compliance and record keeping</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">3. Payment Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>All payments are processed through secure third-party payment gateways such as Razorpay.</li>
                <li>Khelpreneurs does not store your credit card, debit card, or banking information.</li>
                <li>Payment providers process data in accordance with their own privacy and security standards.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">4. Use of Cookies & Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Improve website functionality</li>
                <li>Analyze user behavior and traffic</li>
                <li>Enhance user experience</li>
              </ul>
              <p className="text-muted-foreground">
                You may disable cookies through your browser settings; however, certain features of the website may not function properly.
              </p>
            </div>

            {/* Section 5 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">5. Data Sharing & Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, rent, or trade your personal information.
              </p>
              <p className="text-muted-foreground mb-4">
                We may share your data only with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Service partners (e.g., internship partners such as KIBI Sports) strictly for program execution</li>
                <li>Technology providers (payment gateways, analytics tools, communication platforms)</li>
                <li>Legal or regulatory authorities if required by law</li>
              </ul>
              <p className="text-muted-foreground">
                All partners are required to maintain confidentiality and data protection standards.
              </p>
            </div>

            {/* Section 6 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">6. Data Storage & Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement reasonable administrative, technical, and physical safeguards to protect your personal data against:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Unauthorized access</li>
                <li>Loss, misuse, or alteration</li>
              </ul>
              <p className="text-muted-foreground">
                While we take strong measures, no digital platform can guarantee absolute security.
              </p>
            </div>

            {/* Section 7 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain personal information only for as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Fulfill program obligations</li>
                <li>Maintain legal and accounting records</li>
                <li>Resolve disputes</li>
              </ul>
              <p className="text-muted-foreground">
                Data may be securely deleted or anonymized once it is no longer required.
              </p>
            </div>

            {/* Section 8 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">8. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Withdraw consent for non-essential communications</li>
                <li>Request deletion of your data, subject to legal and operational requirements</li>
              </ul>
              <p className="text-muted-foreground">
                Requests can be sent to <a href="mailto:events@khelpreneurs.com" className="text-primary hover:underline">events@khelpreneurs.com</a>.
              </p>
            </div>

            {/* Section 9 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">9. Communication Preferences</h2>
              <p className="text-muted-foreground mb-4">
                By registering with Khelpreneurs, you consent to receive:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Emails</li>
                <li>WhatsApp messages</li>
                <li>SMS and phone calls</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                These communications may include program updates, reminders, announcements, and opportunities.
              </p>
              <p className="text-muted-foreground">
                You may opt out of promotional communications, but essential service-related communication will continue.
              </p>
            </div>

            {/* Section 10 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">10. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. Khelpreneurs is not responsible for the privacy practices or content of external websites. We encourage you to review their policies separately.
              </p>
            </div>

            {/* Section 11 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">11. Student's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Khelpreneurs does not knowingly collect personal data from individuals under the age of 16.
              </p>
              <p className="text-muted-foreground">
                If such data is discovered, it will be deleted promptly.
              </p>
            </div>

            {/* Section 12 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">12. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                Khelpreneurs reserves the right to update or modify this Privacy Policy at any time.
              </p>
              <p className="text-muted-foreground mb-4">
                Any changes will be reflected on this page with an updated "Last Updated" date.
              </p>
              <p className="text-muted-foreground">
                Continued use of our services constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Section 13 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">13. Governing Law</h2>
              <p className="text-muted-foreground">
                This Privacy Policy is governed by and constructed in accordance with the laws of India, including the Information Technology Act, 2000 and applicable data protection regulations.
              </p>
            </div>

            {/* Section 14 */}
            <div className="card-modern border-border/50 p-6 mb-6">
              <h2 className="text-primary mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground">
                For any questions, concerns, or data requests, please contact: <a href="mailto:events@khelpreneurs.com" className="text-primary hover:underline">events@khelpreneurs.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
