import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Finally, no shame.",
    text: "Baluno is the first planner that doesn't make me feel like I'm failing at life. I have ADHD and every other app punished me with red overdue tasks. Baluno just adjusts to how I'm actually feeling. For the first time, planning feels kind instead of shameful.",
    author: "Sophie M.",
    details: "29, UK",
  },
  {
    quote: "Burnout-proof planning.",
    text: "I was hitting burnout for the third time in five years. Baluno helped me understand that the problem wasn't the tasks — it was the way I treated my energy. The app taught me to plan days that are doable, not impressive. That shift alone changed everything.",
    author: "Daniel K.",
    details: "35, Germany",
  },
  {
    quote: "Smarter than my old apps.",
    text: "I've used every task tracker you know. Baluno is different. It's the only tool that predicts my overload before it happens. The energy-based planning system is surprisingly accurate. My weekly consistency went up by at least 30%.",
    author: "Priya R.",
    details: "31, India",
  },
  {
    quote: "Chaos, but manageable.",
    text: "As a parent of two, my days are… not predictable. Baluno doesn't judge me for changing my plans every hour. It adapts without guilt-tripping. Also, the gentle reminders are the only notifications I've ever liked.",
    author: "Mark T.",
    details: "41, USA",
  },
  {
    quote: "More trust in myself.",
    text: "Baluno helped me break the cycle of 'I didn't do enough today.' I didn't expect an app to affect my self-esteem, but planning tiny, realistic days slowly made me trust myself again. It's not just a planner — it's reassurance.",
    author: "Ana L.",
    details: "27, Spain",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What our users say about their experience
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="border-2 border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                      <CardContent className="pt-6 pb-6 px-6 space-y-4 flex flex-col h-full">
                        <h3 className="text-xl font-bold text-primary">
                          "{testimonial.quote}"
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                          {testimonial.text}
                        </p>
                        <div className="pt-2">
                          <p className="font-semibold text-foreground">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.details}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
