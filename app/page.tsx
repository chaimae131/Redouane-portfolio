"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Download, Moon, Sun, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "./CV - REDOUANE BISSI.pdf"
    link.download = "CV - REDOUANE BISSI.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={`min-h-screen relative overflow-hidden pt-20 ${darkMode ? "dark" : ""}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900" />
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-slate-200/20 to-gray-200/20 dark:from-slate-700/20 dark:to-gray-700/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-slate-100/30 to-gray-100/30 dark:from-slate-800/20 dark:to-gray-800/20 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-gray-100/30 to-slate-100/30 dark:from-gray-900/20 dark:to-slate-900/20 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
                REDOUANE BISSI
              </h1>
              <span className="text-xs text-muted-foreground">{"Portfolio Professionnel"}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {["about", "experiences", "skills", "education", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-slate-700 dark:hover:text-slate-300 transition-all duration-300 group"
              >
                {section === "about" && "À propos"}
                {section === "experiences" && "Expériences"}
                {section === "skills" && "Compétences"}
                {section === "education" && "Formation"}
                {section === "contact" && "Contact"}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-gray-600 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-slate-700 to-gray-700 hover:from-slate-800 hover:to-gray-800 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 lg:py-40 relative">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Disponible pour de nouveaux défis
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-slate-700 via-gray-800 to-slate-700 bg-clip-text text-transparent">
                    REDOUANE
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-600 via-slate-700 to-gray-600 bg-clip-text text-transparent">
                    BISSI
                  </span>
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Profil polyvalent alliant expertise économique, passion pour l'enseignement et engagement dans les
                solutions énergétiques durables.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={downloadCV}
                  className="bg-gradient-to-r from-slate-700 to-gray-700 hover:from-slate-800 hover:to-gray-800 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Télécharger CV
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("about")}
                  className="rounded-full px-8 py-6 text-lg border-2 hover:bg-gradient-to-r hover:from-slate-50 hover:to-gray-50 dark:hover:from-slate-900 dark:hover:to-gray-900 transition-all duration-300 group"
                >
                  En savoir plus
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-600 to-gray-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-gray-400/20" />
                  <Image
                    src="/profile.png"
                    alt="Photo de profil de Redouane Bissi"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
                {"À propos de moi"}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-gray-600 mx-auto rounded-full" />
            </div>

            <div className="backdrop-blur-xl bg-white/30 dark:bg-gray-800/30 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {
                  "Diplômé en gestion avec une expérience diversifiée dans l'enseignement, la comptabilité et les énergies renouvelables. Ma passion pour l'apprentissage continu et le développement de projets concrets me pousse à explorer de nouveaux horizons et à contribuer positivement aux défis de demain."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expériences Professionnelles */}
      <section id="experiences" className="py-20 md:py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
                Expériences Professionnelles
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-gray-600 mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {"Un parcours riche et diversifié dans l'éducation et les services professionnels"}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Stage pédagogique – Mathématiques",
                  period: "24 février - 13 mars 2020",
                  description: "Cycle primaire à l'institution TAHIRI PRIVÉE – Tinghir",
                  gradient: "from-slate-500 to-gray-500",
                },
                {
                  title: "Stage dans l'enseignement primaire",
                  period: "25 février - 28 juin 2019",
                  description: "École privée ASSLMED – Tinghir (4 mois)",
                  gradient: "from-slate-600 to-gray-600",
                },
                {
                  title: "Formation FQR – Enseignant de français",
                  period: "31 octobre 2018 - 14 janvier 2019",
                  description: "Attestation délivrée par l'école privée Academia en partenariat avec ANAPEC – Tinghir",
                  gradient: "from-gray-500 to-slate-500",
                },
                {
                  title: "Stage fiduciaire",
                  period: "1er juillet - 30 septembre 2015",
                  description: "Cabinet Meilleur Conseiller SARL – Tinghir (3 mois)",
                  gradient: "from-gray-600 to-slate-600",
                },
              ].map((exp, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-white/20 hover:scale-105"
                >
                  <CardHeader className="relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.gradient}`} />
                    <CardTitle className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-700 group-hover:to-gray-700 transition-all duration-300">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-muted-foreground">
                      {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
                Compétences
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-gray-600 mx-auto rounded-full" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Bureautique",
                  skills: ["Word", "PowerPoint", "Excel"],
                  gradient: "from-slate-600 to-gray-600",
                  icon: "💻",
                },
                {
                  title: "Soft Skills",
                  skills: [
                    "Esprit d'initiative",
                    "Sens de responsabilité",
                    "Capacité d'adaptation",
                    "Communication",
                    "Esprit d'équipe",
                  ],
                  gradient: "from-gray-600 to-slate-600",
                  icon: "💡",
                },
                {
                  title: "Langues",
                  skills: ["Arabe", "Français", "Anglais", "Tamazight"],
                  gradient: "from-slate-500 to-gray-500",
                  icon: "🌍",
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-white/20 hover:scale-105"
                >
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <CardTitle
                      className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    >
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className={`bg-gradient-to-r ${category.gradient} text-white hover:shadow-lg transition-all duration-300 hover:scale-110 px-4 py-2`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 md:py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
                Formation
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-gray-600 mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  title: "Formation Photovoltaïque",
                  institution: "L'ISTA OFPPT - TINGHIR",
                  year: "2021",
                  description:
                    "Certificat de formation qualifiante en filière de L'installateur du système photovoltaïque",
                  gradient: "from-slate-600 to-gray-600",
                },
                {
                  title: "Licence en Sciences Économiques",
                  institution: "L'université IBN ZOHR - AGADIR",
                  year: "2018",
                  description: "Licence d'études fondamentales en sciences économiques et gestion option 'Gestion'",
                  gradient: "from-gray-600 to-slate-600",
                },
                {
                  title: "Baccalauréat Sciences Expérimentales",
                  institution: "Lycée Sidi Mohamed Ben Abdellah - TINGHIR",
                  year: "2013",
                  description: "Baccalauréat en sciences de la vie et de la terre option 'Sciences expérimentales'",
                  gradient: "from-slate-500 to-gray-500",
                },
              ].map((edu, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-white/20 hover:scale-105"
                >
                  <CardHeader className="relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${edu.gradient}`} />
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-700 group-hover:to-gray-700 transition-all duration-300">
                          {edu.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-muted-foreground">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <Badge className={`bg-gradient-to-r ${edu.gradient} text-white text-lg px-4 py-2`}>
                        {edu.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
                Restons en contact
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-gray-600 mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Prêt à collaborer sur votre prochain projet ? N'hésitez pas à me contacter !
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="group hover:shadow-2xl transition-all duration-500 backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-white/20 hover:scale-105">
                  <CardContent className="flex items-center space-x-6 p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">Email</h3>
                      <p className="text-lg text-muted-foreground">bissi.red@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl transition-all duration-500 backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-white/20 hover:scale-105">
                  <CardContent className="flex items-center space-x-6 p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-slate-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">Téléphone</h3>
                      <p className="text-lg text-muted-foreground">+212 6 35 54 30 02</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 backdrop-blur-xl bg-white/30 dark:bg-gray-900/30 border-t border-white/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <p className="text-muted-foreground">© 2024 Redouane Bissi. Créé avec passion ✨</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-gradient-to-r hover:from-slate-100 hover:to-gray-100 dark:hover:from-slate-800 dark:hover:to-gray-800 transition-all duration-300"
                asChild
              >
                <a href="mailto:bissi.red@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
