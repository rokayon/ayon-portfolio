import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"

const certifications = [
  {
    title: "SQL: A Practical Introduction for Querying Databases",
    issuer: "IBM",
    year: 2024,
  },
  {
    title: "IT Automation with Python",
    issuer: "Google",
    year: 2024,
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Deeplearning.AI",
    year: 2025,
  },
]

const achievements = [
  {
    title: "Problem Solving",
    details: "Solved 51+ LeetCode problems; Active on HackerRank",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-6 relative overflow-hidden">
      {/* Hexagonal pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 25%),
              radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 25%),
              radial-gradient(circle at 40% 70%, rgba(34, 197, 94, 0.15) 0%, transparent 25%)
            `,
            backgroundSize: "300px 300px, 250px 250px, 200px 200px",
          }}
        ></div>
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Glowing orbs */}
      <div className="absolute top-10 right-20 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-accent/15 rounded-full blur-xl animate-pulse delay-1500"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-8">
          <ScrollAnimation className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Certifications & Achievements</h2>
            <p className="text-muted-foreground">
              Continuous learning and professional development in technology and software engineering.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollAnimation delay={200} className="space-y-4">
              <h3 className="text-xl font-semibold">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <ScrollAnimation key={index} delay={300 + index * 150}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base leading-tight">{cert.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                          <Badge variant="secondary">{cert.year}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400} className="space-y-4">
              <h3 className="text-xl font-semibold">Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <ScrollAnimation key={index} delay={500 + index * 150}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">{achievement.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground">{achievement.details}</p>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
