import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service — Baluno</title>
        <meta name="description" content="Terms of Service for the Baluno ADHD planner app. Read our terms before using the service." />
        <link rel="canonical" href="https://baluno.me/terms" />
      </Helmet>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: Nov 17, 2025</p>

          <section className="mb-8">
            <p className="text-foreground">Welcome to Baluno!</p>
            <p className="text-foreground">
              These Terms of Service ("Terms", "Agreement") govern your access to and use of the Baluno mobile application and website located at{" "}
              <a href="https://baluno.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://baluno.me</a>{" "}
              (together referred to as the "Service", "Baluno", "the App").
            </p>
            <p className="text-foreground">
              The Service is developed and operated by Gevorg Madzharyan, an independent developer based in the United Arab Emirates ("we", "us", "our").
            </p>
            <p className="text-foreground">
              By creating an account or using Baluno, you agree to these Terms. If you do not agree, please discontinue use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Eligibility</h2>
            <p className="text-foreground">To use Baluno, you must:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Be at least 13 years old</li>
              <li>Have the legal capacity to enter into this Agreement</li>
              <li>Agree to comply with all applicable laws</li>
            </ul>
            <p className="text-foreground mt-4">
              If you are under 18, you may use the Service only with consent from a parent or legal guardian.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of the Service</h2>
            <p className="text-foreground">
              Baluno is an energy-based daily planner designed to help users manage tasks, routines, and well-being in a balanced and gentle way. The Service may include:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Task and schedule planning</li>
              <li>Mood, energy, and stress tracking</li>
              <li>On-device Apple Health sleep data processing (optional)</li>
              <li>Calendar integrations (optional)</li>
              <li>Personalized suggestions and insights</li>
              <li>Various productivity and self-management tools</li>
            </ul>
            <p className="text-foreground mt-4">The Service may be updated, improved, or changed over time.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Accounts</h2>
            <p className="text-foreground">You may need to create an account to use certain features.</p>
            <p className="text-foreground">You agree to:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Keep your login credentials secure</li>
              <li>Notify us immediately of unauthorized access</li>
            </ul>
            <p className="text-foreground mt-4">You are responsible for all activity under your account.</p>
            <p className="text-foreground">We reserve the right to suspend or terminate accounts that violate these Terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Subscriptions & Payments</h2>
            <p className="text-foreground">Baluno may offer:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Free trials</li>
              <li>Monthly or annual subscriptions</li>
              <li>One-time purchases or promotions</li>
            </ul>
            <p className="text-foreground mt-4">
              Pricing, billing terms, and renewal details will be displayed inside the App and in the App Store.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Automatic Renewal</h3>
            <p className="text-foreground">
              Subscriptions automatically renew unless canceled at least 24 hours before the renewal date.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Billing and Refunds</h3>
            <p className="text-foreground">
              All billing and refund requests are handled directly through the Apple App Store, subject to Apple's policies. We do not issue refunds ourselves.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. User Content</h2>
            <p className="text-foreground">Baluno allows you to input personal data such as:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Tasks, notes, routines</li>
              <li>Mood, stress, energy levels</li>
              <li>Manually entered sleep hours</li>
            </ul>
            <p className="text-foreground mt-4">You retain all rights to your content.</p>
            <p className="text-foreground">
              By using the Service, you grant us a limited license to process your content solely for the purpose of operating the Service. We do not claim ownership over your personal entries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Apple Health / HealthKit Data</h2>
            <p className="text-foreground">If you choose to connect Apple Health:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Baluno may read sleep data (Sleep Analysis)</li>
              <li>This data is processed locally on your device</li>
              <li>We never store, transmit, upload, or share Health Data</li>
              <li>Health Data is never used for marketing or analytics</li>
              <li>You can revoke access at any time in iOS Settings</li>
            </ul>
            <p className="text-foreground mt-4">
              Baluno fully complies with Apple's HealthKit and Health Data policy requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Calendar Integrations (Optional)</h2>
            <p className="text-foreground">If you connect a calendar, the App may:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Access your events</li>
              <li>Use them for daily planning</li>
              <li>Store relevant metadata only as required for functionality</li>
            </ul>
            <p className="text-foreground mt-4">Calendar data is not shared externally.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. AppsFlyer & Analytics</h2>
            <p className="text-foreground">Baluno uses AppsFlyer for user acquisition analytics and attribution.</p>
            <p className="text-foreground">This may include:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Device identifiers (e.g., IDFA if permitted)</li>
              <li>Basic usage events (app open, signup, subscription purchase)</li>
            </ul>
            <p className="text-foreground mt-4">
              AppsFlyer data helps us understand where users come from so we can improve marketing performance. We do not use AppsFlyer for behavioral advertising.
            </p>
            <p className="text-foreground">
              You can learn more about AppsFlyer's privacy practices at:{" "}
              <a href="https://www.appsflyer.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://www.appsflyer.com/privacy/
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Acceptable Use</h2>
            <p className="text-foreground">You agree not to:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Use Baluno for unlawful purposes</li>
              <li>Reverse engineer, modify, or copy the App</li>
              <li>Interfere with the Service's operation</li>
              <li>Attempt unauthorized access to the App or its servers</li>
              <li>Use automation, bots, or scraping tools</li>
              <li>Upload harmful or malicious content</li>
            </ul>
            <p className="text-foreground mt-4">
              We may take appropriate action against violations, including account termination.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Intellectual Property</h2>
            <p className="text-foreground">
              All content in Baluno—including design, text, graphics, trademarks, code, and software—is the exclusive property of Gevorg Madzharyan.
            </p>
            <p className="text-foreground">
              You are granted a personal, non-transferable, revocable license to use the App in accordance with these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Service Availability</h2>
            <p className="text-foreground">Baluno is provided "as is" and "as available."</p>
            <p className="text-foreground">We do not guarantee:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Uninterrupted availability</li>
              <li>Error-free operation</li>
              <li>Compatibility with all devices or operating systems</li>
            </ul>
            <p className="text-foreground mt-4">We may suspend or discontinue parts of the Service at any time.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Third-Party Services</h2>
            <p className="text-foreground">
              Baluno may include integrations or links to third-party services (e.g., Apple Health, AppsFlyer, app stores).
            </p>
            <p className="text-foreground">
              We are not responsible for third-party products or their privacy practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Termination</h2>
            <p className="text-foreground">We may suspend or terminate your access to the Service if:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>You violate these Terms</li>
              <li>We discontinue or modify the Service</li>
              <li>Required by law or security concerns</li>
            </ul>
            <p className="text-foreground mt-4">
              Upon termination, your right to use Baluno ends immediately. You may delete your account at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Limitation of Liability</h2>
            <p className="text-foreground">To the fullest extent permitted by law:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Baluno is not liable for indirect, incidental, or consequential damages</li>
              <li>Total liability for any claim will not exceed the amount paid by you for the Service (if any)</li>
              <li>We are not responsible for data loss, device damage, or reliance on planning outputs</li>
            </ul>
            <p className="text-foreground mt-4">Nothing in these Terms affects your statutory rights where applicable.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">15. Disclaimer</h2>
            <p className="text-foreground">Baluno is not a medical, psychological, or therapeutic service.</p>
            <p className="text-foreground">
              The App does not diagnose, treat, or cure any medical condition, including ADHD, anxiety, or burnout.
            </p>
            <p className="text-foreground">Baluno provides organizational tools and planning support only.</p>
            <p className="text-foreground">For medical concerns, consult qualified professionals.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">16. Governing Law</h2>
            <p className="text-foreground">
              These Terms are governed by the laws of the United Arab Emirates (UAE), without regard to conflict-of-law principles.
            </p>
            <p className="text-foreground">
              Any disputes shall be resolved through competent courts in the UAE unless applicable local law requires otherwise.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">17. Changes to These Terms</h2>
            <p className="text-foreground">We may update these Terms from time to time.</p>
            <p className="text-foreground">
              If changes are significant, we will notify you via the App or through our website.
            </p>
            <p className="text-foreground">The "Last updated" date always reflects the latest version.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">18. Contact Us</h2>
            <p className="text-foreground">For any questions about these Terms or the Service, contact us at:</p>
            <ul className="list-none pl-0 text-foreground space-y-2 mt-4">
              <li>Email: <a href="mailto:hello@baluno.me" className="text-primary hover:underline">hello@baluno.me</a></li>
              <li>Website: <a href="https://baluno.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://baluno.me</a></li>
              <li>Developer: Gevorg Madzharyan</li>
              <li>Location: United Arab Emirates (UAE)</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TermsOfService;
