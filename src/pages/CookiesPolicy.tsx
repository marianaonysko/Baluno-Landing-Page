import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CookiesPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cookies Policy — Baluno</title>
        <meta name="description" content="Cookies Policy for Baluno. Learn about the cookies we use and how to manage your preferences." />
        <link rel="canonical" href="https://baluno.me/cookies" />
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Cookies Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: Nov 17, 2025</p>

          <section className="mb-8">
            <p className="text-foreground">
              This Cookies Policy explains how Baluno ("we", "our", "us") uses cookies and similar technologies on{" "}
              <a href="https://baluno.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://baluno.me</a>{" "}
              ("Website").
            </p>
            <p className="text-foreground">
              By using the Website, you agree to the use of cookies as described here.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
            <p className="text-foreground">
              Cookies are small text files placed on your device to store information.
            </p>
            <p className="text-foreground">
              They help us improve our Website, analyze traffic, and remember your preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.1. Essential Cookies</h3>
            <p className="text-foreground">Necessary for the Website to function, such as:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Page navigation</li>
              <li>Security</li>
              <li>Basic functionality</li>
            </ul>
            <p className="text-foreground mt-4">These cannot be disabled.</p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.2. Analytics Cookies</h3>
            <p className="text-foreground">Used to understand how visitors use the Website.</p>
            <p className="text-foreground">We may use tools like:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Google Analytics</li>
              <li>Privacy-focused analytics alternatives</li>
            </ul>
            <p className="text-foreground mt-4">These cookies help us improve user experience.</p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.3. Functional Cookies</h3>
            <p className="text-foreground">Used to remember preferences such as:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Language</li>
              <li>Display options</li>
              <li>Session states</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Third-Party Cookies</h2>
            <p className="text-foreground">
              We may use third-party services (e.g., analytics providers).
            </p>
            <p className="text-foreground">
              These third parties may place their own cookies on your device.
            </p>
            <p className="text-foreground">
              We do not use cookies for advertising or behavioral targeting.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Managing Cookies</h2>
            <p className="text-foreground">
              You can control or delete cookies through your browser settings.
            </p>
            <p className="text-foreground">
              Options include blocking cookies, deleting existing cookies, and restricting third-party cookies.
            </p>
            <p className="text-foreground">
              Note: Disabling cookies may affect Website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Changes to This Policy</h2>
            <p className="text-foreground">
              We may update this Cookies Policy from time to time.
            </p>
            <p className="text-foreground">
              The "Last updated" date reflects the latest version.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact</h2>
            <p className="text-foreground">If you have questions about this Cookies Policy, contact us at:</p>
            <p className="text-foreground mt-4">
              <a href="mailto:hello@baluno.me" className="text-primary hover:underline">hello@baluno.me</a>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default CookiesPolicy;
