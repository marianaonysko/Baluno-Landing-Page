import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const WearableComparison = () => {
  const navigate = useNavigate();

  const devices = [
    {
      name: "Oura Ring (Gen3 / Gen4)",
      research: [
        { text: "2024 study vs PSG (gold standard): no statistically significant differences from PSG on total sleep time (TST), time in bed (TIB), sleep onset latency, wake after sleep onset, light and deep sleep. Sensitivity 94.4–94.5%, specificity ~73–75%, sleep prediction (asleep vs awake) ~96%.", link: "https://www.sciencedirect.com/science/article/pii/S1389945724000200" },
        { text: "Nighttime HR and HRV: 2025 study — Oura Gen4 showed very high agreement with ECG: Lin's CCC = 0.99, MAPE ≈ 5.96%.", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/" },
        { text: "2022 study (overnight sleep + HR/HRV): low bias for HR and HRV (including RMSSD) vs chest ECG.", link: "https://www.mdpi.com/1424-8220/22/16/6317" },
      ],
      accuracy: "Sleep (overall): ≈ 95–97% · Sleep (sleep–wake): ≈ 91–92% · HR / HRV at night: ≈ 97–99%",
      limitations: "Very strong evidence for sleep and nighttime HR/HRV. Sleep stages (light/deep/REM) are less accurate (REM error ~4–5 min, REM underestimated). Calories/activity poorly studied. Most studies in healthy adults, rarely in real clinical conditions.",
    },
    {
      name: "WHOOP (3.0 / 4.0)",
      research: [
        { text: "2022 study (Miller et al.) comparing 6 wearables: WHOOP showed acceptable sleep, HR, and HRV accuracy during overnight monitoring.", link: "https://www.mdpi.com/1424-8220/22/16/6317" },
        { text: "2025: WHOOP 4.0 showed high agreement with ECG: Lin's CCC ≈ 0.94, MAPE ≈ 8.17% (nighttime HR/HRV).", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/" },
      ],
      accuracy: "Sleep / nighttime HRV: ≈ 90–94% · Sleep (overall): ≈ 90–93% · Sleep stages: ≈ 88–90%",
      limitations: "Nighttime HR/HRV is decent but slightly behind Oura. Sleep stages are average, worse than Oura and Apple. Few studies for daytime HR during activities or sleep disorders. Composite metrics (Recovery/Strain) are not directly validated.",
    },
    {
      name: "Apple Watch (Series S6–S9 / Ultra)",
      research: [
        { text: "2024 review of 29 studies: Apple Watch consistently had the lowest average HR error among popular smartwatches during various workouts.", link: "https://link.springer.com/article/10.1007/s40279-024-02077-2" },
        { text: "2022 study (Miller et al.): Apple Watch S6 was part of the 6-device comparison for sleep/HR/HRV.", link: "https://www.mdpi.com/1424-8220/22/16/6317" },
        { text: "2025: Apple Watch Series 9 included in the list of recommended consumer devices for CVD monitoring.", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12190978/" },
      ],
      accuracy: "Daytime HR: ≈ 95–97% · Sleep (overall): ≈ 90–93% · Sleep stages: ≈ 90–93% (best among many watches) · HRV / nighttime HR: ≈ 90–93%",
      limitations: "Good daytime HR accuracy, acceptable for sleep. HRV + sleep have less evidence than Oura (fewer studies). Errors increase during intense arm movements (same for all optical watches). Sleep stages less accurate than total time; few clinical scenarios studied.",
    },
    {
      name: "Garmin (Fenix / Forerunner / Vivosmart)",
      research: [
        { text: "2024 HR review: Garmin is among devices with acceptable but not the best HR accuracy (errors tend to be higher than Apple).", link: "https://link.springer.com/article/10.1007/s40279-024-02077-2" },
        { text: "2022 sleep/HR/HRV study: Garmin showed average accuracy for sleep and overnight HR/HRV.", link: "https://www.mdpi.com/1424-8220/22/16/6317" },
        { text: "2025 CVD wearable selection review: Garmin listed as a 'suitable' option.", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12190978/" },
      ],
      accuracy: "Daytime HR / nighttime HRV: ≈ 90–94% · Sleep (overall): ≈ 88–92% · Sleep stages: ≈ 85–88%",
      limitations: "Good for sports, activity, HR trends. Sleep is acceptable but stages are less accurate. HRV has fewer studies than Oura/WHOOP. HR errors during intense training are higher than leaders.",
    },
    {
      name: "Polar (optical HR devices)",
      research: [
        { text: "2024 review: Polar is among sufficiently accurate devices but lags behind leaders in HR accuracy during exercise.", link: "https://link.springer.com/article/10.1007/s40279-024-02077-2" },
        { text: "2022 study comparing 6 devices: Polar showed average results for sleep/HR/HRV.", link: "https://www.mdpi.com/1424-8220/22/16/6317" },
      ],
      accuracy: "HR / nighttime HRV: ≈ 88–92% · Sleep: ≈ 88–91% · Sleep stages: ≈ 82–86%",
      limitations: "More limited evidence base compared to Oura/WHOOP/Apple. HR during exercise has errors. Sleep and HRV should be used with caution, especially with sleep disorders or health conditions.",
    },
    {
      name: "Budget bands / unresearched devices",
      research: [
        { text: "Insufficient or almost no peer-reviewed studies, especially for sleep, HRV, and sensitive physiometric data. 2024 review notes most wearables are tested on young healthy subjects — little data for people with conditions.", link: "https://link.springer.com/article/10.1007/s40279-024-02077-2" },
      ],
      accuracy: "Sleep / HR / HRV / sleep stages: ≈ 70–85% (if at all) / low confidence",
      limitations: "Major limitations: proprietary algorithms, few published studies, data often from marketing tests rather than scientific ones. In real/clinical conditions — high risk of errors.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Wearable Accuracy Comparison — Oura, WHOOP, Apple Watch, Garmin</title>
        <meta name="description" content="Peer-reviewed accuracy comparison of Oura Ring, WHOOP, Apple Watch, Garmin, and Polar for sleep, HR, and HRV metrics. Based on 2024–2025 studies." />
        <meta property="og:title" content="Health Wearable Accuracy Comparison — Baluno" />
        <meta property="og:description" content="Peer-reviewed accuracy comparison of popular health wearables for sleep, HR, and HRV." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://baluno.me/wearable-comparison" />
        <meta name="twitter:title" content="Wearable Accuracy Comparison — Baluno" />
        <meta name="twitter:description" content="Peer-reviewed accuracy comparison of Oura, WHOOP, Apple Watch, Garmin for sleep and HR." />
        <link rel="canonical" href="https://baluno.me/wearable-comparison" />
      </Helmet>
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button
            onClick={() => navigate(-1)}
            variant="ghost"
            className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Health Wearable Accuracy Comparison
          </h1>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            A detailed comparison of metric accuracy across popular health wearables, based on peer-reviewed research. All accuracy figures are approximate and derived from published studies.
          </p>

          <div className="space-y-6">
            {devices.map((device) => (
              <div
                key={device.name}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <h2 className="text-xl font-bold text-foreground mb-4">{device.name}</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Key Research</h3>
                    <ul className="space-y-2 text-sm">
                      {device.research.map((r, i) => (
                        <li key={i}>
                          <a
                            href={r.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors"
                          >
                            {r.text}
                            <span className="text-primary ml-1">↗</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Accuracy</h3>
                    <p className="text-sm text-foreground/80">{device.accuracy}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Limitations</h3>
                    <p className="text-sm text-foreground/80">{device.limitations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WearableComparison;
