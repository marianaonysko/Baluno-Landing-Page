import { Link } from "react-router-dom";

const APP_STORE_URL = "https://apps.apple.com/us/app/baluno-adhd-daily-planner/id6755287584";

const WhyTasksTakeTwiceLongADHD = () => (
  <>
    <blockquote className="border-l-4 border-primary/40 pl-4 py-2 my-6 bg-muted/30 rounded-r-lg">
      <p className="text-foreground/80 leading-relaxed font-medium">
        <strong>Short answer:</strong> Tasks take longer with ADHD because time perception works differently — your brain often feels time moving faster than it really is, and working memory + task switching make estimates even less reliable. The fix: use task type and energy level for estimates, track real durations, and rely on external tools (timers, planning) instead of intuition.
      </p>
    </blockquote>

    <p className="text-lg text-muted-foreground leading-relaxed">
      Tasks often take longer than you think. For many people with ADHD, that feeling is backed by how the brain processes time. Here's what the research says, and how to plan around it instead of fighting it.
    </p>


    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What's going on?</h2>
    <p className="text-muted-foreground leading-relaxed">
      If you've ever sat down for "15 minutes" of work and surfaced an hour later, or felt like time speeds up when you're focused, you're not imagining it. Research shows that{" "}
      <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8293837/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        time perception works differently in ADHD
      </a>, and that difference affects how long tasks feel and how well you can predict how long they'll take.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      In adults with ADHD, studies find that time often feels like it's moving faster than it really is. That makes it harder to judge durations and to plan ahead. One review in <em>Med Sci Monit</em> argues that these timing differences may be central to ADHD, not just a side effect. Another{" "}
      <a href="https://pubmed.ncbi.nlm.nih.gov/38145491/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        meta-analysis found a clear deficit in time perception
      </a>{" "}
      across ages, with links to working memory. For adults, ADHD subtype also matters.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      In plain terms: your brain isn't "bad at time." It's wired to experience and estimate time differently. That's why generic "just plan better" advice often falls flat — it ignores how your brain actually works.
    </p>


    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Why does ADHD time blindness happen?</h2>
    <p className="text-muted-foreground leading-relaxed">A few things are happening at once:</p>

    <ol className="list-decimal pl-6 space-y-4 text-muted-foreground">
      <li>
        <strong className="text-foreground">Time passes faster in your head.</strong> When you're absorbed in something, internal time runs ahead of clock time. You think "a few minutes" and it's been half an hour.
      </li>
      <li>
        <strong className="text-foreground">Working memory is involved.</strong> Research shows that{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/38145491/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          time perception and working memory are connected in ADHD
        </a>. When working memory is overloaded — by task switching, complexity, or context — time estimates get even less reliable.
      </li>
      <li>
        <strong className="text-foreground">Task switching makes it worse.</strong> Every switch costs you. Each time you jump between tasks, you lose context and your sense of duration resets. So "five small tasks" can take much longer than five times one task.
      </li>
    </ol>

    <p className="text-muted-foreground leading-relaxed mt-4">
      The takeaway: underestimating how long things take isn't laziness or poor discipline. It's a neurological difference. Knowing that helps you design systems that work with your brain instead of against it.
    </p>


    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What actually helps</h2>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Use task type, not gut feel, for estimates</h3>
    <p className="text-muted-foreground leading-relaxed">Don't guess from memory. Use patterns:</p>
    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
      <li><strong className="text-foreground">Routine tasks</strong> (email, admin): Track how long they take over a few weeks. Use that average.</li>
      <li><strong className="text-foreground">Creative or complex tasks</strong> (writing, design, coding): Multiply your first estimate by 1.5–2.</li>
      <li><strong className="text-foreground">Tasks with switching</strong> (meetings + follow-ups): Add a buffer. Every context switch adds hidden time.</li>
    </ul>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Tie estimates to energy level</h3>
    <p className="text-muted-foreground leading-relaxed">
      Energy changes during the day. A task that takes 30 minutes in the morning might take 45–60 when you're tired. Plan your heaviest work when energy is highest, and schedule easier tasks when it dips.
    </p>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Write down the estimate before starting</h3>
    <p className="text-muted-foreground leading-relaxed">
      Writing "this will take 45 minutes" before you start helps you notice when you're off. Over time, you calibrate. You're not fixing your brain — you're building a habit of external tracking.
    </p>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Use external time cues</h3>
    <p className="text-muted-foreground leading-relaxed">
      Visual timers, reminders, and calendar blocks create external checkpoints. They reduce the need to rely on your internal sense of time.
    </p>


    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The practical takeaway</h2>
    <p className="text-muted-foreground leading-relaxed">
      Time blindness in ADHD is real and research-supported. The fix isn't to "try harder" to feel time. It's to:
    </p>
    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
      <li>Accept that your estimates will be off by default.</li>
      <li>Use task type and energy to adjust them.</li>
      <li>Track real durations and update your models.</li>
      <li>Rely on external systems (timers, calendars, planning tools) instead of intuition.</li>
    </ol>
    <p className="text-muted-foreground leading-relaxed mt-4">
      Products like{" "}
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
        Baluno
      </a>{" "}
      are built around this idea: planning and time estimation that account for ADHD timing and energy, not generic one-size-fits-all calendars. You can set estimates by task type, see how they compare to reality, and adapt your day to how your brain actually works.
    </p>

    

    <div className="rounded-2xl bg-muted/50 border border-border p-5 md:p-6 mt-6">
      <h3 className="text-lg font-semibold text-foreground mb-2">A quick note</h3>
      <p className="text-foreground/80 leading-relaxed text-[15px]">
        This article is for education and self-understanding. It is not medical advice. If you think you might have ADHD or want to explore treatment, talk to a healthcare provider.
      </p>
    </div>
  </>
);

export default WhyTasksTakeTwiceLongADHD;
