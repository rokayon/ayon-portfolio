"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";

interface Project {
  id: number;
  title: string;
  tech: string[];
  details: string[];
  github: string;
  live: string;
}

interface ProjectsData {
  django: Project[];
  fastapi: Project[];
  ai: Project[];
  others: Project[];
}

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "django", label: "Research" },
  { id: "fastapi", label: "Dataset" },
  { id: "ai", label: "AI/ML" },
  { id: "others", label: "Others" },
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [allProjects, setAllProjects] = useState<ProjectsData | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data: ProjectsData) => {
        setAllProjects(data);
        const allProjectsList = [
          ...data.django,
          ...data.fastapi,
          ...data.ai,
          ...data.others,
        ];
        setProjects(allProjectsList);
      })
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  useEffect(() => {
    if (!allProjects) return;

    if (activeTab === "all") {
      const allProjectsList = [
        ...allProjects.django,
        ...allProjects.fastapi,
        ...allProjects.ai,
        ...allProjects.others,
      ];
      setProjects(allProjectsList);
    } else {
      setProjects(allProjects[activeTab as keyof ProjectsData] || []);
    }
    setShowAll(false);
  }, [activeTab, allProjects]);

  useEffect(() => {
    if (showAll) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.slice(0, 6));
    }
  }, [projects, showAll]);

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at top right, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at bottom left, rgba(236, 72, 153, 0.15) 0%, transparent 50%)
            `,
          }}
        ></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/60 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary/50 rounded-full animate-ping delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-8">
          <ScrollAnimation className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in full-stack
              development, AI/ML implementation, and scalable system design.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className="transition-all duration-300 cursor-pointer"
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 200}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="leading-relaxed">
                          • {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border border-primary/50 transform duration-300 hover:bg-primary w-full py-1 px-6 justify-center rounded-lg"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border border-primary/50 transform duration-300 hover:bg-primary w-full py-1 px-6 justify-center rounded-lg"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {projects.length > 6 && (
            <ScrollAnimation delay={400}>
              <div className="text-center mt-8">
                <Button
                  onClick={() => setShowAll(!showAll)}
                  variant="outline"
                  className="px-8 py-2"
                >
                  {showAll
                    ? "Show Less"
                    : `Show More (${projects.length - 6} more)`}
                </Button>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </div>
    </section>
  );
}
