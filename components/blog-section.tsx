"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
}

interface BlogData {
  posts: BlogPost[];
}

export function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data: BlogData) => {
        // Show only the latest 3 posts
        setBlogPosts(data.posts.slice(0, 3));
      })
      .catch((error) => console.error("Error loading blog posts:", error));
  }, []);

  return (
    <section id="blog" className="py-20 px-6 relative overflow-hidden">
      {/* Dot matrix background */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              radial-gradient(circle, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 30px 30px",
            backgroundPosition: "0 0, 25px 25px",
            animation: "matrix-move 25s linear infinite",
          }}
        ></div>
      </div>

      {/* Dynamic lighting */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl"
          style={{ animation: "float 15s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-accent/20 to-transparent rounded-full blur-3xl"
          style={{ animation: "float 18s ease-in-out infinite reverse" }}
        ></div>
      </div>

      {/* Subtle scan lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 98%, rgba(59, 130, 246, 0.1) 100%)",
          backgroundSize: "100px 100%",
          animation: "scan 20s linear infinite",
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-8">
          <ScrollAnimation className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sharing insights, tutorials, and experiences in software
              development, AI/ML, and technology trends.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <ScrollAnimation key={post.id} delay={200 + index * 150}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>

                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {post.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-medium group/btn"
                      asChild
                    >
                      <a href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
