import appPlanning from "@/assets/app-planning.png";
import appTasks from "@/assets/app-tasks.png";

const WhyItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Gentle consistency beats intense productivity
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              <p>Most productivity apps push you harder.</p>
              <p className="text-foreground font-semibold">
                Baluno protects your energy so you can stay consistent over time.
              </p>
              <p>Small, realistic days → sustainable progress.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="flex justify-center">
              <img 
                src={appPlanning} 
                alt="Baluno app showing daily planning" 
                className="max-w-[300px] w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={appTasks} 
                alt="Baluno app showing task focus" 
                className="max-w-[300px] w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
