import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"

export function AboutSection() {
  const skills = {
    ai_ml: ["PyTorch", "Tensorflow","Keras","scikit-learn", "OpenCV", "NLP"],
    databases: ["PostgreSQL", "MySQL", "SQL"],
    frontend: ["HTML/CSS", "Tailwind", "Bootstrap", "ES6"],
    devops: ["Git/GitHub","CI/CD"],
    systems: ["Linux", "Bash"],
    core_cs: ["OOP", "Data Structures", "Algorithms"],
  }

  const languages = ["C", "C++", "Python", "Java", "Bash", "HTML", "CSS", "JavaScript"]

  const education = [
    {
      degree: "B.Sc. in CSE",
      institution: "Daffodil International University",
      years: "2021–2025",
      CGPA: "3.50/4.00",
    },
    {
      degree: "H.S.C",
      institution: "Milestone College",
      years: "2017–2019",
      CGPA: "5.00/5.00",
    },
  ]

  const certifications = [
    {
      title: "Research Assistant",
      issuer: "DIU NLP & ML Research Lab",
      year: 2025,
    },
    {
      title: "Executive Member",
      issuer: "DIU NLP & ML Research Lab",
      year: 2025,
    },
    {
      title: "On-Screen Performance",
      issuer: "Daffodil International University",
      year: 2023,
    },
  ]

  const workExperience = [
    {
      title: "Research Assistant",
      company: "DIU NLP & ML Lab",
      location: "Daffodil International University, Savar, Dhaka, Bangladesh",
      period: "2023 - 2025",
      type: "Full-time",
      responsibilities: [
        "Assisted in collecting datasets",
        "Developed and tested deep learning models",
        "Reviewed research papers and wrote summaries",
        "Worked with and guided team members on projects",
        "Collaborated with and led team members on projects"
      ]
    },
    {
      title: "Telesales Executive",
      company: "Zaynax Health Ltd.",
      location: "Remote Job",
      period: "2023",
      type: "B2C",
      responsibilities: [
        "Cold calling customers to explain our services",
        "Providing information about health care at home",
        "Collecting payments from customers",
        "Depositing the collected money at the office"
      ]
    },
    {
      title: "Student Associate",
      company: "Daffodil Computer Ltd.",
      location: "Daffodil International University, Savar, Dhaka, Bangladesh",
      period: "2023",
      type: "1Card",
      responsibilities: [
        "Explain to students about the 1Card application",
        "Recharge students' accounts in the 1Card application",
        "Keep track of the money paid by students",
        "Submit the money to the office on time"
      ]
    }
  ]

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* ... existing background elements ... */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30"></div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.05) 50%, transparent 60%)
            `,
            backgroundSize: "400px 400px, 300px 300px, 200px 200px",
            animation: "float 20s ease-in-out infinite",
          }}
        ></div>
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-conic from-primary/10 via-accent/10 to-primary/10 rounded-full blur-3xl animate-spin-slow opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl font-bold">About Me</h2>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Column 1: Self Introduction and Education */}
          <ScrollAnimation className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Introduction</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am Rokonozzaman Ayon, a recent graduate with a Bachelor of CSE and a passionate Researcher focused on applying Machine Learning (ML), Deep Learning (DL), and Computer Vision to solve real-world challenges, particularly within medical diagnostics and disease detection.
                </p>
                <p>
                  My work centers on developing innovative computational models, which is substantiated by my role as a Research Assistant and my contributions to multiple publications in high-impact venues like IEEE Xplore, Springer, and Taylor & Francis.
                </p>
                <p>
                  I am dedicated to advancing science through innovative approaches, exploring concepts like explainable AI (XAI), ensemble learning, and segmentation methods, to ensure my work is both rigorous and impactful.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <ScrollAnimation key={index} delay={300 + index * 150}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center justify-between text-base">
                          <span>{edu.degree}</span>
                          <span className="text-sm font-normal text-muted-foreground">{edu.years}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </CardContent>
                       <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground">{edu.CGPA}</p>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Column 2: Technical Skills and Programming Languages */}
          <ScrollAnimation delay={200} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <ScrollAnimation key={category} delay={400 + index * 100}>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        {category.replace("_", " ")}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            <ScrollAnimation delay={800}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>

        {/* Work Experience Section */}
        <ScrollAnimation delay={900} className="mb-16">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Work Experience</h3>
              <p className="text-muted-foreground">
                Professional experience across research, sales, and student services.
              </p>
            </div>

            <div className="space-y-6">
              {workExperience.map((work, index) => (
                <ScrollAnimation key={index} delay={1000 + index * 150}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg">{work.title}</CardTitle>
                          <p className="text-primary font-medium">{work.company}</p>
                          <p className="text-sm text-muted-foreground">{work.location}</p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <Badge variant="outline" className="w-fit">{work.period}</Badge>
                          <Badge variant="secondary" className="w-fit text-xs">{work.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2">
                        {work.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={1000}>
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Certifications</h3>
              <p className="text-muted-foreground">
                Continuous learning and professional development in technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <ScrollAnimation key={index} delay={1300 + index * 150}>
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
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
