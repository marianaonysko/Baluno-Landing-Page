import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Methodology = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Methodology & Sources — Baluno ADHD Planner</title>
        <meta name="description" content="Scientific basis and peer-reviewed sources behind Baluno's energy-based planning methodology. Sleep, stress, cognitive load, and ADHD research." />
        <meta property="og:title" content="Methodology & Sources — Baluno ADHD Planner" />
        <meta property="og:description" content="Scientific basis and peer-reviewed sources behind Baluno's energy-based planning methodology." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://baluno.me/citations" />
        <meta name="twitter:title" content="Methodology & Sources — Baluno" />
        <meta name="twitter:description" content="Scientific basis behind Baluno's energy-based planning methodology." />
        <link rel="canonical" href="https://baluno.me/citations" />
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

          <h1 className="text-3xl font-bold text-foreground mb-2">Methodology, Scientific Basis, and Sources</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 20, 2025</p>

          <div className="prose prose-gray max-w-none space-y-8 text-foreground">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Purpose and Scope</h2>
              <p className="text-muted-foreground mb-4">
                Baluno is a wellness and self-management planner, not a medical application.
              </p>
              <p className="text-muted-foreground mb-4">
                The Morning Capacity Assessment is designed to help users reflect on their current state and plan tasks more realistically based on subjective energy, sleep, stress, and schedule constraints.
              </p>
              <p className="text-muted-foreground mb-4">
                Baluno does not diagnose, treat, prevent, or cure any medical or mental health condition.
              </p>
              <p className="text-muted-foreground">
                All outputs are informational and supportive, intended to encourage self-awareness, pacing, and healthier planning decisions.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. High-Level Methodology Overview</h2>
              <p className="text-muted-foreground mb-4">Each morning, users are asked to self-report six parameters:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                <li>Sleep quality</li>
                <li>Sleep duration</li>
                <li>Anxiety / stress level</li>
                <li>Physical (body) energy</li>
                <li>Mental (head) energy</li>
                <li>Planned meeting load</li>
              </ul>
              <p className="text-muted-foreground mb-4">These inputs are:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                <li>Self-reported (subjective by design)</li>
                <li>Combined using non-clinical heuristic logic</li>
                <li>Used to estimate available productive capacity, not health status</li>
              </ul>
              <p className="text-muted-foreground mb-4">The methodology is grounded in:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Established sleep and fatigue research</li>
                <li>Cognitive load and stress research</li>
                <li>Occupational psychology and productivity science</li>
                <li>Behavioral self-regulation models</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Parameter Rationale and Scientific Basis</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Sleep Quality</h3>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">What it represents:</strong> Perceived restfulness, continuity of sleep, and morning clarity.</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Why it matters:</strong> Poor sleep quality is strongly associated with reduced attention, impaired executive function, emotional dysregulation, and increased perceived effort.</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Key sources:</strong></p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Walker, M. (2017). Why We Sleep. Scribner.</li>
                  <li>Killgore, W. D. S. (2010). Effects of sleep deprivation on cognition. Progress in Brain Research, 185, 105–129.</li>
                  <li>Buysse, D. J. et al. (1989). The Pittsburgh Sleep Quality Index. Psychiatry Research, 28(2), 193–213. <a href="https://doi.org/10.1016/0165-1781(89)90047-4" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">DOI</a></li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Sleep Duration</h3>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">What it represents:</strong> Approximate total sleep time relative to typical adult needs.</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Why it matters:</strong> Short sleep duration is associated with reduced vigilance, slower reaction times, increased error rates, and impaired decision-making.</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Key sources:</strong></p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>National Sleep Foundation. <a href="https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Sleep Duration Recommendations</a></li>
                  <li>Van Dongen, H. P. A. et al. (2003). Dose–response effects of sleep deprivation. Sleep, 26(2), 117–126.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Anxiety / Stress Level</h3>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">What it represents:</strong> Current subjective level of anxiety, worry, or physiological stress.</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Why it matters:</strong> High anxiety reduces working memory capacity, impairs executive control, and makes complex tasks harder.</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Key sources:</strong></p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Arnsten, A. F. T. (2009). Stress signalling pathways. Nature Reviews Neuroscience, 10, 410–422.</li>
                  <li>McEwen, B. S. (2007). Physiology and neurobiology of stress. Physiological Reviews, 87(3), 873–904.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">3.4 Physical (Body) Energy</h3>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">What it represents:</strong> Perceived physical vitality, fatigue, or bodily heaviness.</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Why it matters:</strong> Physical fatigue increases perceived effort, reduces motivation, and competes for attentional resources.</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Key sources:</strong></p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Hockey, G. R. J. (2013). The Psychology of Fatigue. Cambridge University Press.</li>
                  <li>Marcora, S. M. et al. (2009). Mental fatigue impairs physical performance. Journal of Applied Physiology, 106(3), 857–864.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">3.5 Mental (Head) Energy</h3>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">What it represents:</strong> Subjective clarity, focus, and ease of thinking.</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Why it matters:</strong> Mental energy reflects executive functioning capacity and is strongly affected by sleep, stress, and cognitive overload.</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Key sources:</strong></p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.</li>
                  <li>Boksem, M. A. S., & Tops, M. (2008). Mental fatigue. Brain Research Reviews, 59(1), 125–139.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">3.6 Meeting Load</h3>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">What it represents:</strong> Expected cognitive and social load from meetings and context switching.</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Why it matters:</strong> Meetings reduce available focus time and add context-switching costs, social fatigue, and reduced deep-work capacity.</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Key sources:</strong></p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Rubinstein, J. S. et al. (2001). Executive control of cognitive processes. Journal of Experimental Psychology, 27(4), 763–797.</li>
                  <li>Baumeister, R. F. et al. (1998). Ego depletion. Journal of Personality and Social Psychology, 74(5), 1252–1265.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Capacity Estimation Logic (Non-Clinical)</h2>
              <p className="text-muted-foreground mb-4">Baluno combines inputs using weighted heuristics, not medical scoring:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                <li>Mental energy is weighted more heavily than physical energy for cognitive tasks.</li>
                <li>Poor sleep or high anxiety apply conservative downward adjustments.</li>
                <li>A minimum daily capacity is enforced to avoid "zero-day" planning.</li>
                <li>Meeting hours reduce available task time linearly with additional penalties for context switching.</li>
              </ul>
              <p className="text-muted-foreground">
                This approach is intentionally conservative, designed to reduce overcommitment and burnout risk rather than maximize output.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. ADHD & Neurodivergence: Design Rationale</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">Why this matters</h3>
              <p className="text-muted-foreground mb-4">Adults with ADHD and other neurodivergent profiles often experience challenges with time estimation, planning and organization, task initiation, and self-monitoring.</p>
              <p className="text-muted-foreground mb-6">Baluno is designed to support these areas using non-medical, skills-oriented strategies.</p>

              <h3 className="text-lg font-semibold text-foreground mb-3">Evidence-aligned design principles</h3>
              <p className="text-muted-foreground mb-4">Research and clinical guidelines highlight that effective ADHD support often includes:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                <li>External structure and scaffolding</li>
                <li>Realistic task planning</li>
                <li>Self-monitoring and reflection</li>
                <li>Reducing overload and unrealistic expectations</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">Key sources</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                <li>NICE Guideline NG87: ADHD diagnosis and management (updated 2025).</li>
                <li>Australian ADHD Professionals Association (AADPA) Evidence-Based Guideline, 2022.</li>
                <li>Knouse LE & Safren SA. Meta-analysis of CBT for adult ADHD. J Consulting and Clinical Psychology, 2017.</li>
                <li>Young S et al. Systematic review of CBT-based interventions for adults with ADHD. Neuroscience & Biobehavioral Reviews, 2023.</li>
                <li>Solanto MV et al. Meta-cognitive therapy for adult ADHD. American Journal of Psychiatry, 2010.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Safety Framing and User Guidance</h2>
              <p className="text-muted-foreground mb-4">Baluno provides informational wellness content only:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
                <li>All recommendations are general and non-personalized in a clinical sense.</li>
                <li>When low energy or high stress is detected, the app suggests lighter tasks, breaks, or rest — never clinical advice.</li>
                <li>The app includes clear disclaimers that it is not a substitute for medical or psychological care.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitations</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Inputs are subjective and may be inconsistent across users.</li>
                <li>The system does not use biometric data beyond Apple Health sleep (when connected).</li>
                <li>Capacity estimates are heuristic, not predictive or diagnostic.</li>
                <li>Baluno does not account for individual medical conditions, medications, or disabilities.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Summary</h2>
              <p className="text-muted-foreground">
                Baluno's methodology is designed with a scientific foundation, drawing on peer-reviewed research in sleep science, stress physiology, cognitive psychology, and ADHD support. All features are informational and wellness-oriented. Baluno is not a medical device and does not replace professional care.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Methodology;
