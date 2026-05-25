import appStoreBadge from "@/assets/app-store-badge.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-baluno" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            A gentle planner for ADHD minds & overwhelmed days
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Baluno helps you plan days that feel calm, doable, and aligned with your energy.
          </p>
          
          {/* CTA Button */}
          <div className="pt-4">
            <a 
              href="https://apps.apple.com/us/app/baluno-adhd-daily-planner/id6755287584"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src={appStoreBadge} 
                alt="Download on the App Store" 
                className="h-14"
              />
            </a>
          </div>
          
          {/* Subtext */}
          <p className="text-white/80 text-sm">
            It takes 2 minutes. Feels like a breath of fresh air.
          </p>
        </div>
      </div>
      
      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
