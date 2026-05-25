import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "dopamine-adhd-myths-science",
    title: "Dopamine and ADHD: What Science Actually Says (And 3 Myths to Drop)",
    excerpt: "ADHD and dopamine: what the research actually shows. Replace oversimplified dopamine myths with a clearer picture and practical, evidence-based approaches.",
    date: "Mar 9, 2026",
    readTime: "6 min read",
    category: "ADHD & Science",
  },
  {
    slug: "why-tasks-take-twice-as-long-adhd",
    title: "Why Tasks Take Twice as Long With ADHD (And What Actually Helps)",
    excerpt: "Tasks take longer with ADHD because time perception works differently. Discover why time blindness happens and practical fixes for planning that work with your brain.",
    date: "Feb 27, 2026",
    readTime: "7 min read",
    category: "ADHD & Productivity",
  },
  {
    slug: "health-gadgets-tool-not-diagnosis",
    title: "Health Gadgets: A Tool, Not a Diagnosis",
    excerpt: "Oura, WHOOP, Apple Watch, Garmin — all useful tools. But the gap between a 'tool' and 'the ultimate truth' is easy to overlook. Let's break down the real limitations of each gadget and how to choose wisely.",
    date: "Feb 19, 2025",
    readTime: "8 min read",
    category: "Health & Tech",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Blog — Baluno | ADHD Planning Tips & Insights</title>
        <meta name="description" content="Tips, insights, and stories about ADHD planning, productivity, and wellness. Evidence-based articles from the Baluno team." />
        <meta property="og:title" content="Blog — Baluno | ADHD Planning Tips & Insights" />
        <meta property="og:description" content="Tips, insights, and stories about ADHD planning, productivity, and wellness." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baluno.me/blog" />
        <meta name="twitter:title" content="Blog — Baluno | ADHD Planning Tips & Insights" />
        <meta name="twitter:description" content="Tips, insights, and stories about ADHD planning, productivity, and wellness." />
        <link rel="canonical" href="https://baluno.me/blog" />
      </Helmet>
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Tips, insights, and stories about ADHD planning and productivity.
          </p>

          {blogPosts.length === 0 ? (
            <p className="text-muted-foreground text-center py-16">Coming soon...</p>
          ) : (
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article className="rounded-2xl border border-border bg-card p-6 md:p-8 transition-all hover:shadow-lg hover:border-primary/30">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium text-xs">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
