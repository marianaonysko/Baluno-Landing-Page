import { Zap, Clock, Heart, BarChart3, Moon, CircleDot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Energy-Based Planning",
    description: "Plan with how you actually feel. Your day adapts to your energy, stress, and sleep levels.",
  },
  {
    icon: Clock,
    title: "Realistic Task Estimates",
    description: "Stop overcommitting. Baluno helps you estimate time honestly and avoid overload.",
  },
  {
    icon: Heart,
    title: "Gentle Reminders",
    description: "No guilt. No pressure. A planning system that supports you instead of pushing you.",
  },
  {
    icon: BarChart3,
    title: "Mood & Stress Tracking",
    description: "Your emotions matter. Track how you're doing and plan days that fit.",
  },
  {
    icon: Moon,
    title: "End-of-day Reflection",
    description: "Learn from your experience. Get data insights and learn to listen to yourself.",
  },
  {
    icon: CircleDot,
    title: "Simple Daily Flow",
    description: "One calm place for your day. Focus, plan, execute — without chaos.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Key Features
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8 pb-6 px-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-coral/20 to-indigo/20">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
