import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animation"

const education = [
  {
    degree: "B.Sc. in CSE",
    institution: "Daffodil International University",
    years: "2021–2025",
  },
  {
    degree: "H.S.C",
    institution: "Govt. Syed Hatem Ali College",
    years: "2017–2019",
  },
  {
    degree: "S.S.C",
    institution: "BM School Barisal",
    years: "2014–2017",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden">
      {/* Wave pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at center top, rgba(59, 130, 246, 0.15) 0%, transparent 70%),
              radial-gradient(ellipse at center bottom, rgba(168, 85, 247, 0.15) 0%, transparent 70%)
            `,
          }}
        ></div>
      </div>

      {/* Flowing lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,300 Q250,200 500,300 T1000,300 L1000,0 L0,0 Z" fill="url(#gradient1)" className="animate-pulse" />
          <path
            d="M0,700 Q250,600 500,700 T1000,700 L1000,1000 L0,1000 Z"
            fill="url(#gradient2)"
            className="animate-pulse delay-1000"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-8">
          <ScrollAnimation className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Education</h2>
            <p className="text-muted-foreground">
              Academic background and educational journey in computer science and engineering.
            </p>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto space-y-4">
            {education.map((edu, index) => (
              <ScrollAnimation key={index} delay={200 + index * 150}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{edu.degree}</span>
                      <span className="text-sm font-normal text-muted-foreground">{edu.years}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
