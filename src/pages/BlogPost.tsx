import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "./Blog";
import appStoreBadge from "@/assets/app-store-badge.svg";
import HealthGadgetsArticle from "@/components/blog/HealthGadgetsArticle";
import WhyTasksTakeTwiceLongADHD from "@/components/blog/WhyTasksTakeTwiceLongADHD";
import DopamineAndADHD from "@/components/blog/DopamineAndADHD";

const blogContent: Record<string, React.ReactNode> = {
  "health-gadgets-tool-not-diagnosis": <HealthGadgetsArticle />,
  "why-tasks-take-twice-as-long-adhd": <WhyTasksTakeTwiceLongADHD />,
  "dopamine-adhd-myths-science": <DopamineAndADHD />,
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);
  const content = slug ? blogContent[slug] : null;

  if (!post || !content) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Article not found</h1>
            <Button onClick={() => navigate("/blog")} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Baluno" },
    publisher: { "@type": "Organization", name: "Baluno", url: "https://baluno.me" },
    url: `https://baluno.me/blog/${post.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://baluno.me/blog/${post.slug}` },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{post.title} — Baluno Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} — Baluno Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://baluno.me/blog/${post.slug}`} />
        <meta property="article:published_time" content={post.date} />
        <meta name="twitter:title" content={`${post.title} — Baluno Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        <link rel="canonical" href={`https://baluno.me/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <Button
            onClick={() => navigate("/blog")}
            variant="ghost"
            className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>

          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium text-xs">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90 space-y-4 [&_p]:leading-relaxed [&_table]:border [&_table]:border-border [&_th]:bg-muted/50">
            {content}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
