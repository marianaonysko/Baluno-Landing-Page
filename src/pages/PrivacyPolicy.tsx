import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy — Baluno</title>
        <meta name="description" content="Privacy Policy for Baluno. Learn how we handle your data, what we collect, and your privacy rights." />
        <link rel="canonical" href="https://baluno.me/privacy" />
      </Helmet>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-indigo/10 hover:text-indigo"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy for Baluno</h1>
        <p className="text-muted-foreground mb-8">Last updated: Nov 17, 2025</p>

        <div className="prose prose-gray max-w-none space-y-6 text-foreground">
          <p>
            Baluno ("Baluno", "the App", "we", "our", "us") is developed and operated by Gevorg Madzharyan, 
            an independent developer based in the United Arab Emirates (UAE).
          </p>
          <p>
            This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="font-semibold">By using Baluno, you agree to this Policy.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect only the minimal data required to operate the App.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">1.1. Account Information</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email address</li>
            <li>Display name (optional)</li>
            <li>User identifier</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">1.2. Usage Data</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>App interactions</li>
            <li>Session timestamps</li>
            <li>Feature usage metrics</li>
            <li>Diagnostics and crash logs</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">1.3. Well-being & Energy Inputs (User-entered)</h3>
          <p>If you choose, you may provide:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Mood</li>
            <li>Stress levels</li>
            <li>Energy levels</li>
            <li>Sleep hours (manually entered)</li>
          </ul>
          <p>These inputs are optional and used only within the App's features.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">1.4. Calendar Data (Optional)</h3>
          <p>If you connect a calendar, we access only events needed for planning.</p>
          <p>Calendar content is never shared with external services.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">1.5. Device & Technical Data</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Device type, OS version</li>
            <li>IP address (security)</li>
            <li>App version</li>
            <li>Error logs</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Apple Health / HealthKit Data</h2>
          <p>
            Baluno optionally integrates with Apple Health (HealthKit) to improve energy-based planning 
            using sleep information.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2.1. What Health Data We Access</h3>
          <p>If you grant permission, we may read:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Sleep data (e.g., hours slept, sleep analysis)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">2.2. How Health Data Is Used</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Health data is used only to personalize your energy insights inside the App.</li>
            <li>HealthKit data is processed locally on your device.</li>
            <li>We never store, transmit, or upload Health data to our servers or any third-party services.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">2.3. What We Do NOT Do</h3>
          <p>Baluno:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Does NOT share Health data with anyone</li>
            <li>Does NOT store Health data on external servers</li>
            <li>Does NOT use Health data for marketing, analytics, or advertising</li>
            <li>Does NOT sell or monetize any Health data</li>
            <li>Does NOT use Health data for user profiling beyond on-device computation</li>
          </ul>
          <p className="font-semibold">Your Health data stays entirely on your device and under your control.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2.4. Revoking Access</h3>
          <p>You can revoke Baluno's access to Health data at any time in:</p>
          <p className="font-mono bg-muted px-2 py-1 rounded inline-block">Settings → Privacy → Health → Baluno</p>
          <p>Apple Health permissions remain optional.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use your data only to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Operate and improve Baluno</li>
            <li>Provide personalized planning suggestions</li>
            <li>Ensure app stability and security</li>
            <li>Support account functionality</li>
          </ul>
          <p className="font-semibold">We do not sell or share your data with advertisers.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Legal Basis (EU/EEA Users)</h2>
          <p>Depending on context:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Consent (Health data, mood/energy inputs)</li>
            <li>Performance of contract (App functionality)</li>
            <li>Legitimate interests (analytics, security)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sharing Your Data</h2>
          <p>
            We may share limited non-sensitive data with trusted service providers (hosting, analytics), 
            strictly under confidentiality.
          </p>
          <p>We never share:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Health data</li>
            <li>Mood/stress/energy entries</li>
            <li>Any sensitive personal details</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention & Deletion</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Personal account data is stored as long as needed for the App to function.</li>
            <li>You may request deletion of your data at any time.</li>
            <li>HealthKit data is never stored by us and therefore cannot be deleted on our servers (we never receive it).</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Security</h2>
          <p>We apply reasonable technical and organizational measures to protect your information.</p>
          <p>No method is 100% secure, but we aim for industry-standard protection.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Transfers</h2>
          <p>Non-health personal data may be processed on servers outside your country.</p>
          <p>Appropriate safeguards are applied when required.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
          <p>Baluno is not intended for children under 13.</p>
          <p>We do not knowingly collect data from children under 13.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Your Rights</h2>
          <p>Depending on your jurisdiction, you may:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Withdraw consent</li>
            <li>Request data portability</li>
          </ul>
          <p>
            To exercise your rights, contact:{" "}
            <a href="mailto:hello@baluno.me" className="text-indigo hover:underline">
              hello@baluno.me
            </a>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to This Policy</h2>
          <p>If we make material changes, we will notify you in the App or via email.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Information</h2>
          <ul className="list-none space-y-1">
            <li><strong>Developer:</strong> Gevorg Madzharyan</li>
            <li><strong>Email:</strong>{" "}
              <a href="mailto:hello@baluno.me" className="text-indigo hover:underline">
                hello@baluno.me
              </a>
            </li>
            <li><strong>Location:</strong> United Arab Emirates (UAE)</li>
            <li><strong>Website:</strong>{" "}
              <a href="https://baluno.me" className="text-indigo hover:underline">
                https://baluno.me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
