import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const faqItems = [
  { question: "What is Baluno?", answer: "Baluno is a gentle, ADHD-friendly daily planner that adapts to your energy, sleep, stress, and real capacity — not unrealistic expectations. It helps you plan days that feel doable, avoid overcommitting, and build steady, calm consistency." },
  { question: "How does Baluno work?", answer: "Every morning, Baluno asks you a few simple questions about your sleep quality, how rested you feel, your stress level, your physical and mental energy, and your meeting load for the day. Using this, the app calculates your real energy score, how much focus time you realistically have, what types of tasks will fit today, whether you need energizers or rest, and how to avoid overload." },
  { question: "Who is Baluno for?", answer: "Baluno is designed for people with ADHD, neurodivergent users, anyone who feels overwhelmed by traditional to-do apps, people who often overcommit or struggle with energy swings, and busy professionals with meeting-heavy schedules." },
  { question: "What makes Baluno different from other planners?", answer: "Baluno focuses on your energy, not your willpower. Unlike standard productivity apps, Baluno doesn't punish you for unfinished tasks, helps you choose fewer doable tasks, adapts planning to your actual state, gives gentle suggestions never pressure, and warns you before you overload." },
  { question: "Is my data safe?", answer: "Yes. Baluno does not collect user data besides essential account information, never stores HealthKit data, and never shares mood, stress, or energy inputs. All user data is stored and processed locally on device." },
  { question: "Does Baluno help with ADHD?", answer: "Baluno is not a medical or therapeutic tool. However, the app is intentionally designed to align with ADHD needs: low-friction planning, no shame for unfinished tasks, automatic energy-based suggestions, realistic task sizing, and patterns that help understand overwhelm." },
  { question: "Does Baluno work offline?", answer: "Yes, Baluno works offline." },
  { question: "What platforms does Baluno support?", answer: "Baluno is currently available for iOS. Android support is planned for the future." },
  { question: "Does Baluno integrate with Apple Health?", answer: "Yes. If you allow it, Baluno can read sleep data from Apple Health to make planning more accurate. Sleep data stays on your device. Baluno never uploads, stores, or shares Health data." },
  { question: "How do I cancel my subscription?", answer: "All subscriptions are managed through the Apple App Store, not inside Baluno. You can cancel anytime via Settings → Apple ID → Subscriptions." },
  { question: "How can I contact support?", answer: "You can reach a real human at help@baluno.me or via the in-app support button." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>FAQ — Baluno | ADHD Planner Questions & Answers</title>
        <meta name="description" content="Frequently asked questions about Baluno — a gentle ADHD planner. Learn how it works, who it's for, data safety, subscriptions, and more." />
        <meta property="og:title" content="FAQ — Baluno | ADHD Planner Questions & Answers" />
        <meta property="og:description" content="Frequently asked questions about Baluno — a gentle ADHD planner. Learn how it works, who it's for, and data safety." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baluno.me/faq" />
        <meta name="twitter:title" content="FAQ — Baluno | ADHD Planner Q&A" />
        <meta name="twitter:description" content="Frequently asked questions about Baluno — a gentle ADHD planner." />
        <link rel="canonical" href="https://baluno.me/faq" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-primary/10 hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <h1 className="text-3xl font-bold text-foreground mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-6">
            Everything you need to know about Baluno. Can't find your answer? Email us at{" "}
            <a href="mailto:hello@baluno.me" className="text-primary hover:underline">hello@baluno.me</a>
          </p>

          {/* Table of Contents */}
          <nav className="bg-muted/50 rounded-lg p-6 mb-8" aria-label="FAQ navigation">
            <h2 className="text-lg font-semibold text-foreground mb-4">Quick Navigation</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li><a href="#what-is-baluno" className="text-primary hover:underline">What is Baluno?</a></li>
              <li><a href="#how-does-baluno-work" className="text-primary hover:underline">How does Baluno work?</a></li>
              <li><a href="#who-is-baluno-for" className="text-primary hover:underline">Who is Baluno for?</a></li>
              <li><a href="#what-makes-baluno-different" className="text-primary hover:underline">What makes Baluno different?</a></li>
              <li><a href="#daily-capacity" className="text-primary hover:underline">How does Baluno estimate my daily capacity?</a></li>
              <li><a href="#apple-health" className="text-primary hover:underline">Does Baluno integrate with Apple Health?</a></li>
              <li><a href="#calendar" className="text-primary hover:underline">Does Baluno integrate with my calendar?</a></li>
              <li><a href="#data-storage" className="text-primary hover:underline">Does Baluno store my mood or energy entries?</a></li>
              <li><a href="#cancel-subscription" className="text-primary hover:underline">How do I cancel my subscription?</a></li>
              <li><a href="#adhd-help" className="text-primary hover:underline">Does Baluno help with ADHD?</a></li>
              <li><a href="#without-subscription" className="text-primary hover:underline">Does Baluno work without a subscription?</a></li>
              <li><a href="#data-safety" className="text-primary hover:underline">Is my data safe?</a></li>
              <li><a href="#offline" className="text-primary hover:underline">Does Baluno work offline?</a></li>
              <li><a href="#platforms" className="text-primary hover:underline">What platforms does Baluno support?</a></li>
              <li><a href="#contact-support" className="text-primary hover:underline">How can I contact support?</a></li>
            </ul>
          </nav>

          <div className="prose prose-gray max-w-none space-y-6 text-foreground">
            
            <h2 id="what-is-baluno" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">What is Baluno?</h2>
            <p>
              Baluno is a gentle, ADHD-friendly daily planner that adapts to your energy, sleep, stress, 
              and real capacity, not unrealistic expectations. It helps you plan days that feel doable, 
              avoid overcommitting, and build steady, calm consistency.
            </p>

            <h2 id="how-does-baluno-work" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">How does Baluno work?</h2>
            <p>Every morning, Baluno asks you a few simple questions about:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your sleep quality</li>
              <li>How rested you feel</li>
              <li>Your stress level</li>
              <li>Your physical & mental energy</li>
              <li>Your meeting load for the day</li>
            </ul>
            <p>Using this, the app calculates:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your real energy score</li>
              <li>How much focus time you realistically have</li>
              <li>What types of tasks will fit today</li>
              <li>Whether you need energizers or rest</li>
              <li>How to avoid overload</li>
            </ul>

            <h2 id="who-is-baluno-for" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">Who is Baluno for?</h2>
            <p>Baluno is designed for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>People with ADHD</li>
              <li>Neurodivergent users</li>
              <li>Anyone who feels overwhelmed by traditional to-do apps</li>
              <li>People who often overcommit, underestimate time, or struggle with energy swings</li>
              <li>Busy professionals with meeting-heavy schedules</li>
            </ul>
            <p className="font-semibold">
              If conventional productivity tools make you feel guilty or behind — Baluno is built for you.
            </p>

            <h2 id="what-makes-baluno-different" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">What makes Baluno different from other planners?</h2>
            <p className="font-semibold">Baluno focuses on your energy, not your willpower.</p>
            <p>Unlike standard productivity apps, Baluno:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Doesn't punish you for unfinished tasks</li>
              <li>Doesn't push you to "do more"</li>
              <li>Helps you choose fewer, doable tasks</li>
              <li>Adapts planning to your actual state</li>
              <li>Gives gentle suggestions, never pressure</li>
              <li>Warns you before you overload</li>
              <li>Helps you understand your patterns (sleep, anxiety, meeting fatigue)</li>
            </ul>
            <p className="font-semibold">Baluno is built to prevent burnout, not create it.</p>

            <h2 id="daily-capacity" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">How does Baluno estimate my daily capacity?</h2>
            <p>Baluno analyzes six factors:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sleep Quality</li>
              <li>Sleep Duration</li>
              <li>Anxiety Level</li>
              <li>Physical and Mental Energy</li>
              <li>Meeting Hours</li>
            </ul>
            <p>It then calculates:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Available focus time</li>
              <li>Whether today is a "deep work" day, a "routine day," or a "recovery day"</li>
              <li>How many tasks you can complete realistically</li>
              <li>Which task types are safe to attempt</li>
              <li>When you may need energizers</li>
            </ul>

            <h2 id="apple-health" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">Does Baluno integrate with Apple Health?</h2>
            <p>
              Yes. If you allow it, Baluno can read sleep data from Apple Health to make planning more accurate.
            </p>
            <p>Important details:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sleep data stays on your device</li>
              <li>Baluno never uploads, stores, or shares Health data</li>
              <li>You can revoke access anytime (Apple Health privacy rules are fully respected)</li>
            </ul>
            <p>
              If Apple Health provides incorrect data, Baluno will ask you to confirm or adjust the sleep hours.
            </p>

            <h2 id="calendar" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">Does Baluno integrate with my calendar?</h2>
            <p>Not yet. But we plan to add it soon.</p>

            <h2 id="data-storage" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">Does Baluno store my mood or energy entries?</h2>
            <p>
              All user data is stored and processed locally on device. It is not shared with Baluno team or third parties.
            </p>

            <h2 id="cancel-subscription" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">How do I cancel my subscription?</h2>
            <p>All subscriptions are managed through the Apple App Store, not inside Baluno.</p>
            <p>You can cancel anytime via:</p>
            <p className="font-mono bg-muted px-2 py-1 rounded inline-block">
              Settings → Apple ID → Subscriptions
            </p>
            <p>
              Your Pro features stay active until the end of the billing period. If you start canceling 
              inside the app, Baluno will ask one short question ("Why are you leaving?") and then 
              redirect you to the App Store page.
            </p>

            <h2 id="adhd-help" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">Does Baluno help with ADHD?</h2>
            <p className="font-semibold">
              Baluno is not a medical or therapeutic tool. It does not diagnose, treat, or cure ADHD 
              or any condition.
            </p>
            <p>However, the app is intentionally designed to align with ADHD needs:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Low-friction planning</li>
              <li>No shame for unfinished tasks</li>
              <li>Automatic energy-based suggestions</li>
              <li>Realistic task sizing</li>
              <li>Patterns that help understand overwhelm</li>
            </ul>
            <p>But it should not replace clinical care.</p>

            <h2 id="without-subscription" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">Does Baluno work without a subscription?</h2>
            <p>No. You can start with trial version for a week.</p>

            <h2 id="data-safety" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">Is my data safe?</h2>
            <p>Yes. Baluno:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Does not collect user data besides essential account information</li>
              <li>Stores only essential account information</li>
              <li>Never stores HealthKit data</li>
              <li>Never shares mood/stress/energy inputs</li>
            </ul>

            <h2 id="offline" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">Does Baluno work offline?</h2>
            <p>Yes.</p>

            <h2 id="platforms" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">What platforms does Baluno support?</h2>
            <p>Baluno is currently available for iOS. Android support is planned for the future.</p>

            <h2 id="contact-support" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">How can I contact support?</h2>
            <p>
              You can reach a real human at:{" "}
              <a href="mailto:help@baluno.me" className="text-primary hover:underline">
                help@baluno.me
              </a>
            </p>
            <p>Or via the in-app support button, which opens your mail app with pre-filled details.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
