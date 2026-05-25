import { Link } from "react-router-dom";

const HealthGadgetsArticle = () => (
  <>
    <p className="text-lg text-muted-foreground leading-relaxed">
      Oura, WHOOP, Apple Watch, Garmin — all useful tools. But the gap between a "tool" and "the ultimate truth" is easy to overlook. Your gadget can tell you that your HRV dropped or your sleep was fragmented — but it can't tell you what to <em>do</em> about it. That's where self-awareness matters more than any sensor, and where tools like <a href="https://apps.apple.com/us/app/baluno-adhd-daily-planner/id6755287584" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Baluno</a> come in — helping you turn how you actually feel into a plan that fits.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      But first, let's break down where each gadget has real limitations and how to choose wisely.
    </p>

    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Why You Shouldn't Trust Them Blindly</h2>
    <p>
      No consumer wearable device is medically certified for diagnosis. The algorithms are proprietary, study samples are predominantly young healthy adults, and real clinical conditions (sleep disorders, cardiovascular diseases, medications) fundamentally change accuracy. A <a href="https://link.springer.com/article/10.1007/s40279-024-02077-2" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">2024 review (Sports Medicine, 29 studies)</a> states directly: most wearables are evaluated on conditionally healthy populations — data for people with chronic conditions is critically scarce.
    </p>
    <p>
      What this means in practice: your gadget is optimized for the "average user." If you fall outside this profile, accuracy drops without warning.
    </p>

    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Each One Can Do — and Where It Falls Short</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left p-3 font-semibold text-foreground">Gadget</th>
            <th className="text-left p-3 font-semibold text-foreground">Strength</th>
            <th className="text-left p-3 font-semibold text-foreground">Weakness</th>
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          <tr className="border-b border-border/50">
            <td className="p-3 font-medium text-foreground">Oura Ring</td>
            <td className="p-3">Sleep and nighttime HRV — best accuracy among consumer devices (comparable to polysomnography on key metrics, CCC 0.99 with ECG for HR/HRV)</td>
            <td className="p-3">Sleep stages (especially REM is systematically underestimated); calories and daytime activity poorly researched</td>
          </tr>
          <tr className="border-b border-border/50">
            <td className="p-3 font-medium text-foreground">WHOOP 4.0</td>
            <td className="p-3">Nighttime HRV and recovery interpretation; great for athletes</td>
            <td className="p-3">Recovery Score and Strain are composite metrics not directly validated; sleep stages lag behind Oura and Apple</td>
          </tr>
          <tr className="border-b border-border/50">
            <td className="p-3 font-medium text-foreground">Apple Watch</td>
            <td className="p-3">Daytime HR during exercise — lowest average error among watches (2024 review of 29 studies; recommended for CVD monitoring)</td>
            <td className="p-3">HRV and sleep evidence base is noticeably weaker than Oura; optical sensor errors during intense arm movements</td>
          </tr>
          <tr className="border-b border-border/50">
            <td className="p-3 font-medium text-foreground">Garmin</td>
            <td className="p-3">Sports metrics, GPS, training volume</td>
            <td className="p-3">Sleep and HRV accuracy below leaders; more HR errors during high-intensity workouts</td>
          </tr>
          <tr className="border-b border-border/50">
            <td className="p-3 font-medium text-foreground">Budget Bands</td>
            <td className="p-3">Price</td>
            <td className="p-3">No independent peer-reviewed studies; proprietary algorithms; 70–85% accuracy is an optimistic estimate</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-muted-foreground mt-3 italic">
      <Link to="/wearable-comparison" className="text-primary hover:underline">
        View the full comparison table with accuracy breakdowns per metric →
      </Link>
    </p>

    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Use Cases: What to Choose for Your Specific Goal</h2>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Sedentary Lifestyle</h3>
    <p>
      <strong>Main goal</strong> — understand how well your body recovers and whether chronic sleep deprivation is accumulating.
    </p>
    <p>
      <strong>What works:</strong> Oura — the best standalone choice. Sleep accuracy is comparable to the clinical standard (sensitivity 94.4%, specificity 74%), nighttime HRV is a high-quality signal.
    </p>
    <p>
      <strong>What you don't need:</strong> WHOOP without active workouts loses its purpose — the Strain Score simply won't be informative.
    </p>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Chronic Stress and High Cognitive Load</h3>
    <p>
      <strong>Goal</strong> — track when your nervous system has truly recovered, not just when it "feels like it's better."
    </p>
    <p>
      <strong>What works:</strong> Oura — as the primary data source for HRV and sleep. WHOOP — as an additional recovery interpretation layer. Together they provide double verification: if both show low recovery, the signal is more reliable.
    </p>
    <p>
      <strong>Critical to understand:</strong> HRV is a population metric. Everyone's norms are different. Compare against your own baseline, not the app's average values.
    </p>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Regular Intense Training</h3>
    <p>
      <strong>Goal</strong> — accurate HR during exercise and quality recovery monitoring between sessions.
    </p>
    <p>
      <strong>What works:</strong> Apple Watch — for daytime workout control (best HR accuracy during activities). Oura — for nighttime recovery and HRV. Garmin — if you need GPS, power metrics, and sports analytics; pairs well with Oura.
    </p>
    <p>
      <strong>Limitation:</strong> during high-intensity activities with intense arm movement (CrossFit, climbing), the optical sensor on any wrist device produces errors. A chest strap heart rate monitor is more accurate — that's a fact.
    </p>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Energy Optimization and Biohacking</h3>
    <p>
      <strong>Goal</strong> — understand the connection between sleep quality, HRV, and subjective well-being; optimize your routine.
    </p>
    <p>
      <strong>What works:</strong> Oura — the most validated data on sleep stages and HRV. WHOOP — as a second source for cross-verification.
    </p>
    <p>
      <strong>Important caveat:</strong> sleep stages (deep, REM) are the least reliable metric across all consumer devices without exception. No gadget approaches the accuracy of EEG polysomnography for stages. Use as a trend, not a diagnosis.
    </p>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Cardiovascular Health Monitoring</h3>
    <p>
      <strong>Goal</strong> — track HR and HRV as markers of cardiovascular system status over the long term.
    </p>
    <p>
      <strong>What works:</strong> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12190978/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Watch Series 9 is on the list of recommended consumer devices for CVD monitoring</a> (Mayo Clinic Proceedings, 2025). Oura — for nighttime HR/HRV with the best evidence base. Together they cover both day and night.
    </p>
    <p>
      <strong>What it doesn't replace:</strong> none of these devices is a medical instrument. If you have symptoms or risk factors — only a doctor and clinical diagnostics.
    </p>

    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Sleep Problems / Insomnia</h3>
    <p>
      <strong>Goal</strong> — understand sleep structure, identify disruption patterns.
    </p>
    <p>
      <strong>What works:</strong> Oura — the only consumer device with <a href="https://www.sciencedirect.com/science/article/pii/S1389945724000200" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">no statistically significant differences from polysomnography</a> on key metrics: total sleep time, sleep onset latency, nighttime awakenings (2024 study, ScienceDirect).
    </p>
    <p>
      <strong>Where it ends:</strong> for clinical insomnia or suspected apnea, the gadget helps collect data for a conversation with a doctor, but does not replace polysomnography in a sleep lab.
    </p>

    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What's Important to Remember When Using Health Gadgets</h2>
    <ol className="list-decimal pl-6 space-y-3">
      <li>
        <strong>Trends matter more than single data points.</strong> One "bad" HRV reading means nothing. A pattern over 2–4 weeks means something.
      </li>
      <li>
        <strong>Context matters more than numbers.</strong> HRV dropped 20% — is it stress? Overtraining? Alcohol last night? Illness? The gadget doesn't know. You do.
      </li>
      <li>
        <strong>Subjective feeling is data too.</strong> If the gadget says "excellent recovery" but you feel wrecked — trust yourself. The algorithm doesn't know you better than you do.
      </li>
    </ol>

    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Research This Article Is Based On</h2>

    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Sleep — Comparison with Polysomnography:</h3>
    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
      <li>Svensson et al., 2024. Oura Gen3 vs PSG, 96 participants, 421,045 epochs — <a href="https://www.sciencedirect.com/science/article/pii/S1389945724000200" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sleep Medicine / ScienceDirect</a></li>
      <li>Robbins et al., 2024. Oura Gen3, Apple Watch, Fitbit vs PSG — Brigham and Women's Hospital study — <a href="https://www.mdpi.com/1424-8220/24/20/6532" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sensors / MDPI</a></li>
      <li>Miller et al., 2022. Comparison of 6 devices (Oura, WHOOP, Apple Watch, Garmin, Polar, Somfit) on sleep, HR, and HRV in one lab night — <a href="https://www.mdpi.com/1424-8220/22/16/6317" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sensors / MDPI</a></li>
    </ul>

    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">HR and HRV — Comparison with ECG:</h3>
    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
      <li>Dial et al., 2025. Validation of nighttime HR and HRV for Oura Gen3/Gen4, WHOOP 4.0, Garmin Fenix 6, Polar Grit X Pro vs ECG, 536 nights — <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Physiological Reports / PMC</a></li>
    </ul>

    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Cardiovascular Monitoring:</h3>
    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
      <li>Ruiz-Colon et al., 2025. Practical guide to choosing wearables for CVD monitoring — <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12190978/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mayo Clinic Proceedings / PMC</a></li>
      <li>Consumer-grade wearables guide, 2025. Review of accuracy and applicability for cardiology practice — <a href="https://www.nature.com/articles/s44325-025-00082-6" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">npj Cardiovascular Health / Nature</a></li>
    </ul>

    <div className="rounded-2xl bg-muted/50 border border-border p-5 md:p-6 mt-10">
      <p className="text-foreground/80 leading-relaxed text-[15px] mb-3">
        The bottom line: gadgets track signals, but you're the one who knows the context. The best thing you can do with that awareness is turn it into action — plan a day that matches how you actually feel right now.
      </p>
      <p className="text-foreground/80 leading-relaxed text-[15px]">
        That's what <a href="https://apps.apple.com/us/app/baluno-adhd-daily-planner/id6755287584" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Baluno</a> is built for. You check in with your energy, sleep, and mood — and the app helps you shape a calm, doable day around that. No pressure, no overcommitting. Just a plan that actually fits.
      </p>
    </div>
  </>
);

export default HealthGadgetsArticle;
