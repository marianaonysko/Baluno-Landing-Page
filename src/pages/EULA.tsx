import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const EULA = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EULA — Baluno</title>
        <meta name="description" content="End User License Agreement for Baluno ADHD planner app." />
        <link rel="canonical" href="https://baluno.me/eula" />
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
          <h1 className="text-4xl font-bold text-foreground mb-4">End-User License Agreement (EULA)</h1>
          <p className="text-muted-foreground mb-8">Last updated: Nov 17, 2025</p>

          <section className="mb-8">
            <p className="text-foreground">
              This End-User License Agreement ("Agreement") is a legal agreement between you ("User", "you") and Gevorg Madzharyan, an independent developer based in the United Arab Emirates ("Developer", "we", "us"), for the use of the Baluno mobile application ("Baluno", "the App", "Service").
            </p>
            <p className="text-foreground">
              By installing or using Baluno, you agree to be bound by this Agreement. If you do not agree, do not install or use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. License</h2>
            <p className="text-foreground">
              Subject to these terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use Baluno on devices that you own or control and as permitted by the Apple App Store Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Scope of License</h2>
            <p className="text-foreground">You may not:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Copy, modify, translate, or create derivative works of the App</li>
              <li>Reverse engineer, decompile, or dismantle any part of the App</li>
              <li>Rent, lease, sublicense, or distribute the App</li>
              <li>Circumvent security, access controls, or technical limitations</li>
              <li>Use the App for any unlawful or unauthorized purpose</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Privacy and Data</h2>
            <p className="text-foreground">
              Your use of the App is subject to our Privacy Policy, available at:{" "}
              <a href="https://baluno.me/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://baluno.me/privacy
              </a>
            </p>
            <p className="text-foreground">
              The App may integrate with Apple Health (HealthKit) and AppsFlyer for optional analytics and attribution. Health data never leaves your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Services</h2>
            <p className="text-foreground">
              The App may use third-party services such as Apple Health or AppsFlyer.
            </p>
            <p className="text-foreground">
              Your use of third-party services is governed by their own terms and policies.
            </p>
            <p className="text-foreground">
              We are not responsible for third-party behavior, availability, or content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Maintenance and Support</h2>
            <p className="text-foreground">We provide basic support for the App via:</p>
            <p className="text-foreground">
              <a href="mailto:hello@baluno.me" className="text-primary hover:underline">hello@baluno.me</a>
            </p>
            <p className="text-foreground mt-4">
              Apple has no obligation to provide support services for Baluno.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-foreground">
              The App is provided "AS IS" and "AS AVAILABLE."
            </p>
            <p className="text-foreground">
              We do not guarantee uninterrupted, error-free, or secure operation.
            </p>
            <p className="text-foreground">
              To the maximum extent permitted by law, we disclaim all warranties, whether express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-foreground">To the fullest extent permitted by law:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Our total liability will not exceed the amount paid by you for the App (if any)</li>
              <li>Baluno is not a medical or therapeutic tool. It does not diagnose or treat any condition.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
            <p className="text-foreground">
              We may suspend or terminate this Agreement if you violate any terms.
            </p>
            <p className="text-foreground">
              Upon termination, you must stop using the App and delete it from your devices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
            <p className="text-foreground">
              This Agreement is governed by the laws of the United Arab Emirates (UAE).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Apple Third-Party Beneficiary</h2>
            <p className="text-foreground">
              Apple and its subsidiaries are third-party beneficiaries of this Agreement.
            </p>
            <p className="text-foreground">
              Upon your acceptance of this EULA, Apple has the right to enforce this Agreement against you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact</h2>
            <p className="text-foreground">For questions about this Agreement, contact:</p>
            <p className="text-foreground mt-4">
              <a href="mailto:hello@baluno.me" className="text-primary hover:underline">hello@baluno.me</a>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default EULA;
