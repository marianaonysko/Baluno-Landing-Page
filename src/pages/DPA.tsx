import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const DPA = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Data Processing Addendum — Baluno</title>
        <meta name="description" content="Data Processing Addendum (DPA) for Baluno. Details on how we process personal data." />
        <link rel="canonical" href="https://baluno.me/dpa" />
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Data Processing Addendum (DPA)</h1>
          <p className="text-muted-foreground mb-8">Last updated: Nov 17, 2025</p>

          <section className="mb-8">
            <p className="text-foreground">
              This Data Processing Addendum ("DPA") forms part of the Terms of Service between the User ("Controller") and Gevorg Madzharyan, developer of Baluno ("Processor"), when processing personal data governed by the EU General Data Protection Regulation ("GDPR").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Definitions</h2>
            <ul className="list-none pl-0 text-foreground space-y-2">
              <li><strong>Controller:</strong> The User who determines the purposes of processing.</li>
              <li><strong>Processor:</strong> Baluno (operated by Gevorg Madzharyan).</li>
              <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
              <li><strong>Processing:</strong> Any operation performed on Personal Data.</li>
              <li><strong>Sub-processor:</strong> A third party engaged by the Processor to support the Service.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Roles and Responsibilities</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.1. Controller Responsibilities</h3>
            <p className="text-foreground">
              The User determines the purposes and legal basis for processing Personal Data.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.2. Processor Responsibilities</h3>
            <p className="text-foreground">The Processor shall:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Process Personal Data only on documented instructions from the Controller</li>
              <li>Ensure confidentiality</li>
              <li>Implement appropriate technical and organizational measures</li>
              <li>Delete or return Personal Data upon request or account deletion</li>
              <li>Assist in fulfilling GDPR obligations where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Nature and Purpose of Processing</h2>
            <p className="text-foreground">Baluno processes Personal Data solely for:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Providing the Service</li>
              <li>Personalizing user experience</li>
              <li>Analytics and attribution (via AppsFlyer)</li>
              <li>App functionality, security, and improvements</li>
            </ul>
            <p className="text-foreground mt-4">No Personal Data is processed for advertising purposes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Categories of Data</h2>
            <p className="text-foreground">Baluno may process the following personal data:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Email address</li>
              <li>Account information</li>
              <li>Mood, stress, energy levels, manually entered sleep</li>
              <li>Usage data and analytics</li>
              <li>Device data</li>
              <li>Crash logs</li>
            </ul>
            <p className="text-foreground mt-4">
              HealthKit data is not processed by the Processor — it remains on the user's device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Sub-processors</h2>
            <p className="text-foreground">
              The Processor may engage sub-processors for hosting, analytics, and attribution, including:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Cloud service providers</li>
              <li>Analytics providers</li>
              <li>AppsFlyer (attribution only)</li>
            </ul>
            <p className="text-foreground mt-4">
              All sub-processors are bound by equivalent data protection obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. International Transfers</h2>
            <p className="text-foreground">Data may be processed outside the EU.</p>
            <p className="text-foreground">The Processor will ensure appropriate safeguards, such as:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Standard Contractual Clauses</li>
              <li>Adequate protection under applicable laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Security Measures</h2>
            <p className="text-foreground">The Processor implements:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Encryption in transit</li>
              <li>Secure data storage</li>
              <li>Access controls and authentication</li>
              <li>Regular monitoring and maintenance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Subject Rights</h2>
            <p className="text-foreground">The Processor shall assist the Controller in responding to:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Access requests</li>
              <li>Rectification</li>
              <li>Erasure</li>
              <li>Restriction</li>
              <li>Data portability</li>
            </ul>
            <p className="text-foreground mt-4">
              Requests can be sent to:{" "}
              <a href="mailto:hello@baluno.me" className="text-primary hover:underline">hello@baluno.me</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Data Retention and Deletion</h2>
            <p className="text-foreground">Upon account deletion or request:</p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>All Personal Data will be deleted or anonymized</li>
              <li>Backups will be purged within a reasonable timeframe</li>
              <li>HealthKit data is never stored outside the device</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Liability</h2>
            <p className="text-foreground">
              Each party's liability under this DPA is subject to the limitations in the main Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Term and Termination</h2>
            <p className="text-foreground">
              This DPA remains in effect as long as Baluno processes Personal Data on behalf of the Controller.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
            <p className="text-foreground font-semibold">Baluno / Data Processor</p>
            <ul className="list-none pl-0 text-foreground space-y-2 mt-4">
              <li>Developer: Gevorg Madzharyan</li>
              <li>Email: <a href="mailto:hello@baluno.me" className="text-primary hover:underline">hello@baluno.me</a></li>
              <li>Website: <a href="https://baluno.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://baluno.me</a></li>
              <li>Location: United Arab Emirates (UAE)</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default DPA;
