const APP_STORE_URL = "https://apps.apple.com/us/app/baluno-adhd-daily-planner/id6755287584";

const DopamineAndADHD = () => (
  <>
    <blockquote className="border-l-4 border-primary/40 pl-4 py-2 my-6 bg-muted/30 rounded-r-lg">
      <p className="text-foreground/80 leading-relaxed font-medium">
        <strong>Short answer:</strong> ADHD involves dopamine and the reward pathway, but it's not as simple as "you have low dopamine." Research points to a more complex picture: altered reward sensitivity, motivation deficits, and individual differences. Simple dopamine hacks often fail because they oversimplify the brain. What helps: behavioral protocols that make starting easier and reward visible, not quick fixes.
      </p>
    </blockquote>

    <p className="text-lg text-muted-foreground leading-relaxed">
      If you've ever searched for ADHD productivity tips, you've probably run into "dopamine hacks" and "increase your dopamine" advice. The science is more nuanced than that. Here's what research actually shows, which myths to drop, and what to do instead.
    </p>


    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Myth 1: "You just have low dopamine"</h2>
    <p className="text-muted-foreground leading-relaxed">
      This is the most common oversimplification. The idea that ADHD equals "low dopamine" is appealing but incomplete.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      <strong className="text-foreground">What research says:</strong> The{" "}
      <a href="https://pubmed.ncbi.nlm.nih.gov/39619336/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        dopamine hypothesis for ADHD has been evaluated
      </a>, and the evidence suggests a more complex picture. Dopamine function in ADHD isn't simply "low" across the board. It involves altered receptor availability, transporter differences, and regional variations. Multiple neurotransmitters likely play a role, and there are individual differences. Calling it "low dopamine" ignores that complexity and can lead to oversold fixes.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      <strong className="text-foreground">Practical takeaway:</strong> Don't chase generic "dopamine boosters." Focus on behaviors and environments that support your brain, not a single chemical.
    </p>


    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Myth 2: "Dopamine hacks will fix your motivation"</h2>
    <p className="text-muted-foreground leading-relaxed">
      Cold showers, intermittent fasting, and "dopamine detox" plans are popular, but they rarely deliver what ADHD brains need for motivation.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      <strong className="text-foreground">What research says:</strong>{" "}
      <a href="https://pubmed.ncbi.nlm.nih.gov/20856250/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        Motivation deficit in ADHD is associated with dysfunction of the dopamine reward pathway
      </a>. The problem isn't just dopamine levels; it's how the brain responds to rewards and expects future payoff. Motivation deficits are often{" "}
      <a href="https://pubmed.ncbi.nlm.nih.gov/23933893/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        underestimated in ADHD
      </a>, and they're central to why starting and sustaining effort is hard. One-size-fits-all hacks don't address reward sensitivity or the need for visible, immediate feedback.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      <strong className="text-foreground">Practical takeaway:</strong> Motivation isn't fixed by quick hacks. It's helped by structured protocols that make starting easier and progress visible.
    </p>


    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Myth 3: "You need more willpower or discipline"</h2>
    <p className="text-muted-foreground leading-relaxed">
      People with ADHD are often told to "just try harder" or "build discipline." That ignores what neuroscience shows.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      <strong className="text-foreground">What research says:</strong> Motivation deficits in ADHD are tied to brain function, not character. The reward pathway doesn't respond the same way to distant or abstract rewards. Tasks that don't feel rewarding or urgent are harder to start and sustain. Willpower alone doesn't change that wiring.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      <strong className="text-foreground">Practical takeaway:</strong> Design your environment and routines so that starting costs less and reward is clearer. That beats fighting your brain with willpower.
    </p>


    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What actually helps</h2>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Make starting less demanding</h3>
    <p className="text-muted-foreground leading-relaxed">
      Reduce friction. Break the first step into something tiny. Write down "open the file" or "write one sentence" instead of "finish the report." The lower the activation threshold, the more likely you'll start. Apps like{" "}
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
        Baluno
      </a>{" "}
      help break tasks into small, concrete steps so starting feels less overwhelming.
    </p>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Make progress visible</h3>
    <p className="text-muted-foreground leading-relaxed">
      ADHD brains respond better when reward is tangible and close. Track small wins. Check things off. See the list shrink. Visible progress gives your brain the feedback it needs.{" "}
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
        Baluno
      </a>{" "}
      lets you see your progress, celebrate small wins, and reflect on your day — so you focus on what you've done, not just what's left.
    </p>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Use structure instead of hacks</h3>
    <p className="text-muted-foreground leading-relaxed">
      Consistent routines and protocols work better than random tips. Pick a few simple behaviors: a morning routine, a before-work checklist, a short sprint protocol. Repeat them. Structure reduces decision fatigue and gives your brain predictable cues. That's more reliable than chasing the next dopamine hack.
    </p>


    <div className="rounded-2xl bg-muted/50 border border-border p-5 md:p-6 mt-6">
      <h3 className="text-lg font-semibold text-foreground mb-2">A quick note</h3>
      <p className="text-foreground/80 leading-relaxed text-[15px]">
        This article is for education and self-understanding. It is not medical advice. If you think you might have ADHD or want to explore treatment, talk to a healthcare provider.
      </p>
    </div>
  </>
);

export default DopamineAndADHD;
