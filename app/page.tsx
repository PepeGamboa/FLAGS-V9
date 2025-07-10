"use client"

import type React from "react"
import { useState, useMemo, useEffect } from "react"
import { Card, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, MapPin, Calendar, BookOpen, Quote, Heart, Globe, Book, Pen, X } from "lucide-react"

interface Country {
  id: string
  name: string
  flag: string
  capital: string
  population: string
  language: string
  currency: string
  founded: string
  writer: {
    name: string
    profession: string
    quote: string
    period: string
    photo: string
    masterwork: {
      title: string
      year: string
      genre: string
      summary: string
      image: string
      themes: string[]
      extract: string
    }
  }
}

const countries: Country[] = [
  {
    id: "spain",
    name: "España",
    flag: "🇪🇸",
    capital: "Madrid",
    population: "47.4 millones",
    language: "Español",
    currency: "Euro (€)",
    founded: "1469",
    writer: {
      name: "Miguel de Cervantes",
      profession: "Novelista, poeta y dramaturgo",
      quote: "El que lee mucho y anda mucho, ve mucho y sabe mucho.",
      period: "1547-1616",
      photo: "/cervantes-historical.png",
      masterwork: {
        title: "Don Quijote de la Mancha",
        year: "1605-1615",
        genre: "Novela",
        summary:
          "Don Quijote de la Mancha es considerada la primera novela moderna y una de las obras más importantes de la literatura universal. Narra las aventuras de Alonso Quixano, un hidalgo que enloquece leyendo libros de caballerías y decide convertirse en caballero andante bajo el nombre de Don Quijote. Acompañado por su fiel escudero Sancho Panza, emprende aventuras para defender a los desvalidos y luchar contra las injusticias.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Idealismo vs Realismo", "Locura y Cordura", "Justicia", "Amistad", "Sátira Social"],
        extract:
          "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.",
      },
    },
  },
  {
    id: "germany",
    name: "Alemania",
    flag: "🇩🇪",
    capital: "Berlín",
    population: "83.2 millones",
    language: "Alemán",
    currency: "Euro (€)",
    founded: "1871",
    writer: {
      name: "Johann Wolfgang von Goethe",
      profession: "Poeta y dramaturgo",
      quote: "Lo que no se empieza hoy, nunca se termina mañana.",
      period: "1749-1832",
      photo: "/goethe-sketch.png",
      masterwork: {
        title: "Fausto",
        year: "1808-1832",
        genre: "Drama",
        summary:
          "Fausto, de Goethe, narra la historia de un sabio insatisfecho que, a través de un pacto con el diablo Mefistófeles, busca conocimiento y placeres terrenales, vendiendo su alma a cambio de juventud y experiencias ilimitadas.",
        image: "/fausto-illustration.png",
        themes: ["Pacto Diabólico", "Búsqueda del Conocimiento", "Amor y Tragedia", "Redención", "Naturaleza Humana"],
        extract:
          "¿Qué es lo que me ofreces? Alimento que no sacia; oro candente que, como el mercurio, se escapa de las manos sin descanso.",
      },
    },
  },
  {
    id: "argentina",
    name: "Argentina",
    flag: "🇦🇷",
    capital: "Buenos Aires",
    population: "45.8 millones",
    language: "Español",
    currency: "Peso argentino ($)",
    founded: "1816",
    writer: {
      name: "Jorge Luis Borges",
      profession: "Poeta y ensayista",
      quote: "Siempre imaginé que el Paraíso sería algún tipo de biblioteca.",
      period: "1899-1986",
      photo: "/borges-sketch.png",
      masterwork: {
        title: "Ficciones",
        year: "1944",
        genre: "Cuentos",
        summary:
          "Ficciones es una colección de cuentos que revolucionó la literatura del siglo XX con su exploración de temas como el infinito, los laberintos, los espejos y la naturaleza de la realidad.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-bntZ1FOjt6XCzsbwQvcymdPRQlPyID.png",
        themes: ["Infinito", "Laberintos", "Realidad y Ficción", "Tiempo", "Conocimiento"],
        extract:
          "Bajo los árboles ingleses medité en ese laberinto perdido: lo imaginé inviolado y perfecto en la cumbre secreta de una montaña.",
      },
    },
  },
  {
    id: "israel",
    name: "Israel",
    flag: "🇮🇱",
    capital: "Jerusalén",
    population: "9.5 millones",
    language: "Hebreo",
    currency: "Nuevo shéquel (₪)",
    founded: "1948",
    writer: {
      name: "Amos Oz",
      profession: "Novelista y ensayista",
      quote: "La literatura puede enseñarnos a entender el dolor de otras personas.",
      period: "1939-2018",
      photo: "/amos-oz-photo.png",
      masterwork: {
        title: "Una historia de amor y oscuridad",
        year: "2002",
        genre: "Autobiografía novelada",
        summary:
          "Una historia de amor y oscuridad es una obra autobiográfica que narra la infancia y juventud de Amos Oz en el Jerusalén de los años 40 y 50, durante los primeros años del Estado de Israel. La obra combina memoria personal con historia colectiva, explorando la compleja relación entre el individuo y la nación en formación. Oz retrata con sensibilidad y honestidad la figura de su madre, Fania, una mujer culta y melancólica que se suicidó cuando él tenía 12 años, y la de su padre, un erudito que trabajaba como bibliotecario. A través de episodios familiares y sociales, el autor examina temas como la inmigración, la identidad judía, el sionismo, la pérdida de la inocencia y la construcción de una nueva sociedad. La prosa de Oz es lírica y reflexiva, combinando la intimidad de la memoria personal con la amplitud de la experiencia histórica. La obra es tanto un retrato de una familia como un fresco de una época crucial en la historia de Israel y del pueblo judío.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Memoria", "Identidad judía", "Sionismo", "Familia", "Historia de Israel"],
        extract: "El pasado no está muerto. Ni siquiera es pasado.",
      },
    },
  },
  {
    id: "taiwan",
    name: "China Taipei",
    flag: "🇹🇼",
    capital: "Taipéi",
    population: "23.6 millones",
    language: "Chino mandarín",
    currency: "Dólar taiwanés (NT$)",
    founded: "1949",
    writer: {
      name: "Pai Hsien-yung",
      profession: "Novelista y cuentista",
      quote: "La literatura es el espejo del alma de una nación.",
      period: "1937-presente",
      photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-WrSbMgRCAhhsKLyVmoRSC9HG6fhuTI.png",
      masterwork: {
        title: "Gente de Taipéi",
        year: "1971",
        genre: "Colección de cuentos",
        summary:
          "Gente de Taipéi es una colección de cuentos que retrata la vida de los refugiados chinos continentales en Taiwán durante los años 60. Pai Hsien-yung, hijo de un general del Kuomintang, explora con sensibilidad las experiencias de desplazamiento, nostalgia y adaptación de quienes huyeron de China continental tras la victoria comunista.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Exilio", "Identidad", "Nostalgia", "Desplazamiento", "Cultura china"],
        extract: "En Taipéi, todos somos forasteros buscando un hogar que ya no existe.",
      },
    },
  },
]

type ViewState = "flag" | "info" | "writer" | "masterwork"

// Función cn simplificada para evitar problemas con tailwind-merge
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}

export default function CountriesApp() {
  const [mounted, setMounted] = useState(false)
  const [countryStates, setCountryStates] = useState<Record<string, ViewState>>({})
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all")
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
    // Inicializar estados de países después del montaje
    const initialStates = countries.reduce((acc, country) => ({ ...acc, [country.id]: "flag" as ViewState }), {})
    setCountryStates(initialStates)
  }, [])

  // Obtener idiomas únicos y crear mapeo de banderas
  const languageOptions = useMemo(() => {
    const languages = Array.from(new Set(countries.map((country) => country.language))).sort()

    // Mapeo de idiomas a banderas representativas
    const languageFlags: Record<string, string> = {
      Español: "🇪🇸",
      Francés: "🇫🇷",
      Alemán: "🇩🇪",
      Inglés: "🇬🇧",
    }

    return languages.map((language) => ({
      value: language,
      label: language,
      flag: languageFlags[language] || "🌐",
    }))
  }, [])

  // Filtrar y ordenar países
  const filteredAndSortedCountries = useMemo(() => {
    let filtered = countries

    if (selectedLanguage !== "all") {
      filtered = countries.filter((country) => country.language === selectedLanguage)
    }

    // Ordenar alfabéticamente por nombre
    return filtered.sort((a, b) => a.name.localeCompare(b.name, "es", { sensitivity: "base" }))
  }, [selectedLanguage])

  const handleCardClick = (countryId: string) => {
    const currentState = countryStates[countryId] || "flag"

    if (currentState === "masterwork") {
      // Si está en masterwork, cerrar la expansión y volver a flag
      setExpandedCountry(null)
      setCountryStates((prev) => ({ ...prev, [countryId]: "flag" }))
      return
    }

    setCountryStates((prev) => {
      let nextState: ViewState

      if (currentState === "flag") {
        nextState = "info"
      } else if (currentState === "info") {
        nextState = "writer"
      } else if (currentState === "writer") {
        nextState = "masterwork"
        setExpandedCountry(countryId) // Expandir cuando llegue a masterwork
      } else {
        nextState = "flag"
        setExpandedCountry(null)
      }

      return { ...prev, [countryId]: nextState }
    })
  }

  const resetCard = (countryId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setCountryStates((prev) => ({ ...prev, [countryId]: "flag" }))
    setExpandedCountry(null)
  }

  const closeExpanded = () => {
    if (expandedCountry) {
      setCountryStates((prev) => ({ ...prev, [expandedCountry]: "flag" }))
      setExpandedCountry(null)
    }
  }

  // No renderizar hasta que el componente esté montado
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando países del mundo...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen library-background">
      <style jsx>
        {`
/* IMPORTAR FUENTES LITERARIAS */
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

/* FONDO DE BIBLIOTECA MÁS NÍTIDO */
.library-background {
  background-image: url('/modern-library-background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  font-family: 'Crimson Text', 'Times New Roman', serif;
}

.library-background::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(0.3px);
  z-index: 0;
}

.library-background > * {
  position: relative;
  z-index: 1;
}

/* FONDO MÁGICO PARA EL HERO */
.hero-section {
  background-image: url('/magical-book-background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(139, 69, 19, 0.75);
  backdrop-filter: blur(1px);
  z-index: 0;
}

.hero-section > * {
  position: relative;
  z-index: 1;
}

/* TIPOGRAFÍAS LITERARIAS */
.literary-title {
  font-family: 'Playfair Display', 'Georgia', serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.literary-quote {
  font-family: 'Libre Baskerville', 'Times New Roman', serif;
  font-style: italic;
  line-height: 1.4;
}

.literary-body {
  font-family: 'Crimson Text', 'Times New Roman', serif;
  line-height: 1.6;
}

.flip-card {
  perspective: 1200px;
}

.flip-card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.0);
  transform-style: preserve-3d;
}

.flag-face {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.flag-front { transform: rotateY(0deg); z-index: 4; }
.flag-back { transform: rotateY(90deg); z-index: 3; }
.flag-writer { transform: rotateY(180deg); z-index: 2; }
.flag-masterwork { transform: rotateY(270deg); z-index: 1; }

.flip-card[data-state="info"] .flip-card-inner {
  transform: rotateY(-90deg);
}

.flip-card[data-state="writer"] .flip-card-inner {
  transform: rotateY(-180deg);
}

.flip-card[data-state="masterwork"] .flip-card-inner {
  transform: rotateY(-270deg);
}

/* EFECTO BOCETO A LÁPIZ MEJORADO Y VISIBLE */
.author-photo {
  position: relative;
  filter: 
    grayscale(100%) 
    contrast(200%) 
    brightness(130%) 
    invert(0.1)
    sepia(25%) 
    hue-rotate(15deg);
  background: #f8f8f8;
  mix-blend-mode: darken;
}

.author-photo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 1px,
      rgba(0,0,0,0.08) 1px,
      rgba(0,0,0,0.08) 2px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 1px,
      rgba(0,0,0,0.06) 1px,
      rgba(0,0,0,0.06) 2px
    );
  border-radius: inherit;
  pointer-events: none;
  z-index: 1;
}

.masterwork-image {
  filter: 
    grayscale(100%) 
    contrast(150%) 
    brightness(110%) 
    sepia(20%) 
    hue-rotate(10deg);
  background: #f5f5f5;
}

.masterwork-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      30deg,
      transparent,
      transparent 1px,
      rgba(0,0,0,0.06) 1px,
      rgba(0,0,0,0.06) 2px
    ),
    repeating-linear-gradient(
      -30deg,
      transparent,
      transparent 1px,
      rgba(0,0,0,0.04) 1px,
      rgba(0,0,0,0.04) 2px
    );
  border-radius: inherit;
  pointer-events: none;
  z-index: 1;
}

/* OVERLAY EXPANDIDO CON PROPORCIÓN ÁUREA - FORZAR VISIBILIDAD */
.masterwork-overlay {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: rgba(0, 0, 0, 0.95) !important;
  backdrop-filter: blur(10px) !important;
  z-index: 9999 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 2rem !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.masterwork-content {
  background: rgba(255, 255, 255, 0.98) !important;
  border-radius: 20px !important;
  width: 90vw !important;
  height: 90vh !important;
  max-width: 1400px !important;
  overflow: hidden !important;
  position: relative !important;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3) !important;
  display: flex !important;
  flex-direction: column !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.masterwork-header {
  height: 38.2vh !important;
  min-height: 200px !important;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%) !important;
  border-radius: 20px 20px 0 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  position: relative !important;
  overflow: hidden !important;
}

.masterwork-body {
  height: 61.8vh !important;
  min-height: 300px !important;
  overflow-y: auto !important;
  padding: 2rem !important;
  background: white !important;
  border-radius: 0 0 20px 20px !important;
}

.force-scroll {
  height: 384px !important;
  overflow-y: scroll !important;
  overflow-x: hidden !important;
  padding: 0 !important;
  margin: 0 !important;
  position: relative !important;
}

.force-scroll::-webkit-scrollbar {
  width: 8px !important;
  display: block !important;
}

.force-scroll::-webkit-scrollbar-track {
  background: rgba(241, 245, 249, 0.8) !important;
  border-radius: 4px !important;
}

.force-scroll::-webkit-scrollbar-thumb {
  background: rgba(203, 213, 225, 0.8) !important;
  border-radius: 4px !important;
  min-height: 30px !important;
}

.force-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(148, 163, 184, 0.8) !important;
}

.force-content {
  min-height: 800px !important;
  height: auto !important;
  padding: 20px !important;
  box-sizing: border-box !important;
}

.scroll-spacer {
  height: 200px !important;
  width: 100% !important;
  display: block !important;
  visibility: hidden !important;
}

.content-overlay {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  padding: 2rem;
  margin: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-overlay {
  background: transparent;
  backdrop-filter: none;
  border-radius: 30px;
  padding: 3rem;
  margin: 2rem;
  box-shadow: none;
  border: none;
}

.footer-overlay {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  .content-overlay, .hero-overlay {
    margin: 0.5rem;
    padding: 1.5rem;
  }

  .masterwork-overlay {
    padding: 1rem !important;
  }

  .masterwork-content {
    max-width: 95vw !important;
    max-height: 95vh !important;
  }
}
`}
      </style>

      {/* OVERLAY EXPANDIDO PARA OBRA MAESTRA - MEJORADO PARA PRODUCCIÓN */}
      {expandedCountry && (
        <div
          className="masterwork-overlay"
          onClick={closeExpanded}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(10px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            visibility: "visible",
            opacity: 1,
          }}
        >
          <div
            className="masterwork-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(255, 255, 255, 0.98)",
              borderRadius: "20px",
              width: "90vw",
              height: "90vh",
              maxWidth: "1400px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
              display: "flex",
              flexDirection: "column",
              visibility: "visible",
              opacity: 1,
            }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 h-10 w-10 p-0 z-20 bg-white/80 hover:bg-white text-black hover:text-black"
              onClick={closeExpanded}
              style={{ zIndex: 20 }}
            >
              <X className="h-6 w-6 text-black" />
            </Button>

            {(() => {
              const country = countries.find((c) => c.id === expandedCountry)
              if (!country) return null

              return (
                <>
                  {/* HEADER CON PROPORCIÓN ÁUREA - PARTE MENOR */}
                  <div
                    className="masterwork-header"
                    style={{
                      height: "38.2vh",
                      minHeight: "200px",
                      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                      borderRadius: "20px 20px 0 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div className="text-center z-10">
                      <div className="mb-4">
                        <Badge variant="secondary" className="text-lg px-4 py-2 bg-amber-100 text-amber-800 font-bold">
                          ✨ OBRA MAESTRA ✨
                        </Badge>
                      </div>
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="text-5xl">{country.flag}</span>
                        <div className="text-left">
                          <h1 className="literary-title text-4xl font-bold text-gray-800 mb-2">
                            {country.writer.masterwork.title}
                          </h1>
                          <p className="text-xl text-gray-800">por {country.writer.name}</p>
                          <div className="flex gap-3 mt-3">
                            <Badge variant="outline" className="text-sm text-gray-800">
                              {country.writer.masterwork.genre}
                            </Badge>
                            <Badge variant="outline" className="text-sm text-gray-800">
                              {country.writer.masterwork.year}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Patrón decorativo de fondo */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 text-6xl">📚</div>
                      <div className="absolute top-20 right-20 text-4xl">✍️</div>
                      <div className="absolute bottom-10 left-20 text-5xl">🎭</div>
                      <div className="absolute bottom-20 right-10 text-3xl">📖</div>
                    </div>
                  </div>

                  {/* BODY CON PROPORCIÓN ÁUREA - PARTE MAYOR */}
                  <div
                    className="masterwork-body"
                    style={{
                      height: "61.8vh",
                      minHeight: "300px",
                      overflowY: "auto",
                      padding: "2rem",
                      background: "white",
                      borderRadius: "0 0 20px 20px",
                    }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                      {/* IMAGEN DE LA OBRA */}
                      <div className="flex flex-col justify-center">
                        <div className="relative">
                          <img
                            src={country.writer.masterwork.image || "/placeholder.svg"}
                            alt={country.writer.masterwork.title}
                            className="masterwork-image w-full h-80 object-cover rounded-lg shadow-lg"
                            crossOrigin="anonymous"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = "/placeholder.svg?height=400&width=600"
                            }}
                          />
                        </div>

                        <div className="mt-6">
                          <h4 className="literary-title font-semibold text-lg text-gray-800 mb-3">Temas Principales</h4>
                          <div className="flex flex-wrap gap-2">
                            {country.writer.masterwork.themes.map((theme, index) => (
                              <Badge key={index} variant="outline" className="text-sm text-gray-800">
                                {theme}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CONTENIDO TEXTUAL */}
                      <div className="space-y-6 flex flex-col justify-center">
                        <div className="literary-body text-gray-700 leading-relaxed text-justify">
                          <p>{country.writer.masterwork.summary}</p>
                        </div>

                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-500 shadow-sm mt-6">
                          <h4 className="literary-title font-semibold text-lg text-amber-800 mb-3 flex items-center gap-2">
                            <Quote className="h-5 w-5" />
                            Extracto de la Obra
                          </h4>
                          <div className="text-amber-700">
                            <blockquote className="literary-quote italic leading-relaxed">
                              {country.writer.masterwork.extract}
                            </blockquote>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
                          <h4 className="literary-title font-semibold text-lg text-blue-800 mb-3 flex items-center gap-2">
                            <BookOpen className="h-5 w-5" />
                            Sobre el Autor
                          </h4>
                          <div className="text-blue-700">
                            <p className="font-semibold mb-2">
                              {country.writer.name} ({country.writer.period})
                            </p>
                            <p className="mb-3">{country.writer.profession}</p>
                            <blockquote className="literary-quote italic border-l-2 border-blue-300 pl-4">
                              "{country.writer.quote}"
                            </blockquote>
                          </div>
                        </div>

                        <div className="text-center bg-amber-50 p-4 rounded-lg">
                          <p className="text-sm text-amber-800 font-medium">
                            📍 Obra representativa de la literatura de {country.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      )}

      {/* ENCABEZADO HERO CON FONDO MÁGICO */}
      <div className="hero-section relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="hero-overlay text-center">
            <div className="mb-8">
              <span className="text-6xl mb-4 block">😍📚</span>
              <Quote className="h-12 w-12 text-amber-800 mx-auto mb-6" />
            </div>

            <blockquote className="literary-quote text-2xl lg:text-4xl font-bold leading-tight mb-8 max-w-4xl mx-auto text-white">
              «Las bibliotecas son catedrales de la mente; hospitales del alma; parques temáticos de la imaginación»
            </blockquote>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-1 w-16 bg-white"></div>
              <cite className="literary-body text-lg lg:text-xl font-medium text-white not-italic">Caitlin Moran</cite>
              <div className="h-1 w-16 bg-white"></div>
            </div>

            <p className="literary-body text-gray-200 text-lg mb-8">Autora y periodista británica</p>

            <div className="flex items-center justify-center gap-2 text-gray-200">
              <BookOpen className="h-5 w-5" />
              <span className="literary-body text-sm">Explorando la literatura mundial</span>
              <BookOpen className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL CON OVERLAY */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="content-overlay">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedCountries.map((country) => {
              const currentState = countryStates[country.id] || "flag"

              return (
                <div key={country.id} className="flip-card" data-state={currentState}>
                  <Card
                    className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white/95 backdrop-blur-sm border-2 hover:border-blue-300 h-96 relative overflow-hidden"
                    onClick={() => handleCardClick(country.id)}
                  >
                    <div className="flip-card-inner h-full">
                      {/* CARA 1: BANDERA */}
                      <div className="flag-face flag-front flex flex-col items-center justify-center p-4">
                        <div className="w-[95%] h-[85%] flex items-center justify-center">
                          <div className="w-full h-full flex items-center justify-center text-[12rem] leading-none drop-shadow-lg">
                            {country.flag}
                          </div>
                        </div>
                        <CardTitle className="literary-title text-xl font-bold text-gray-800 text-center absolute bottom-4">
                          {country.name}
                        </CardTitle>
                      </div>

                      {/* CARA 2: INFORMACIÓN DEL PAÍS */}
                      <div className="flag-face flag-back">
                        <div className="force-scroll">
                          <div className="force-content">
                            <div className="relative mb-6">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-0 left-0 h-8 w-8 p-0 z-10"
                                onClick={(e) => resetCard(country.id, e)}
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </Button>
                              <div className="text-center pt-8">
                                <div className="text-4xl mb-3">{country.flag}</div>
                                <CardTitle className="literary-title text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
                                  <MapPin className="h-5 w-5" />
                                  {country.name}
                                </CardTitle>
                              </div>
                            </div>

                            <div className="space-y-4 literary-body text-gray-800">
                              <div className="flex items-center gap-3 text-sm">
                                <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                <span className="font-medium">Capital:</span>
                                <span>{country.capital}</span>
                              </div>

                              <div className="flex items-center gap-3 text-sm">
                                <Users className="h-4 w-4 text-green-600 flex-shrink-0" />
                                <span className="font-medium">Población:</span>
                                <span>{country.population}</span>
                              </div>

                              <div className="flex items-center gap-3 text-sm">
                                <Calendar className="h-4 w-4 text-purple-600 flex-shrink-0" />
                                <span className="font-medium">Fundado:</span>
                                <span>{country.founded}</span>
                              </div>

                              <div className="pt-3 border-t border-gray-200">
                                <div className="space-y-2 text-sm text-gray-600">
                                  <div>
                                    <strong>Idioma:</strong> {country.language}
                                  </div>
                                  <div>
                                    <strong>Moneda:</strong> {country.currency}
                                  </div>
                                </div>
                              </div>

                              <p className="text-xs text-center text-gray-500 mt-6 bg-blue-50 p-3 rounded-lg">
                                Haz click de nuevo para ver el escritor representativo
                              </p>

                              <div className="scroll-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CARA 3: ESCRITOR */}
                      <div className="flag-face flag-writer">
                        <div className="force-scroll">
                          <div className="force-content">
                            <div className="relative mb-6">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-0 left-0 h-8 w-8 p-0 z-10"
                                onClick={(e) => resetCard(country.id, e)}
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </Button>
                              <div className="text-center pt-8">
                                <div className="flex flex-col items-center mb-4">
                                  <div className="relative">
                                    <img
                                      src={country.writer.photo || "/placeholder.svg"}
                                      alt={country.writer.name}
                                      className="author-photo w-40 h-40 rounded-full object-cover border-4 border-amber-200 shadow-lg mb-3"
                                      crossOrigin="anonymous"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.src = "/placeholder.svg?height=400&width=400"
                                      }}
                                    />
                                  </div>
                                  <div className="text-2xl mb-2">{country.flag}</div>
                                </div>
                                <CardTitle className="literary-title text-lg font-bold text-gray-800 flex items-center justify-center gap-2">
                                  <BookOpen className="h-4 w-4" />
                                  {country.writer.name}
                                </CardTitle>
                                <p className="literary-body text-sm text-gray-600 mt-2 font-medium italic">
                                  {country.writer.profession}
                                </p>
                                <Badge variant="secondary" className="mt-2 text-xs">
                                  {country.writer.period}
                                </Badge>
                              </div>
                            </div>

                            <div className="space-y-4 literary-body text-gray-800">
                              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                                <Quote className="h-5 w-5 text-blue-600 mb-3" />
                                <blockquote className="literary-quote text-sm italic text-gray-700 leading-relaxed font-medium">
                                  "{country.writer.quote}"
                                </blockquote>
                              </div>

                              <p className="text-xs text-center text-gray-500 mt-4 bg-amber-50 p-3 rounded-lg">
                                Haz click de nuevo para ver su obra maestra
                              </p>

                              <div className="scroll-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CARA 4: OBRA MAESTRA (PLACEHOLDER - LA EXPANSIÓN SE MANEJA ARRIBA) */}
                      <div className="flag-face flag-masterwork flex items-center justify-center p-4">
                        <div className="text-center">
                          <Book className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                          <h3 className="literary-title text-xl font-bold text-gray-800 mb-2">
                            {country.writer.masterwork.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4">{country.writer.masterwork.year}</p>
                          <Badge variant="outline">{country.writer.masterwork.genre}</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12 literary-body">
            <p className="text-sm text-gray-800">💡 Tip: Haz click en las cards para explorar cada país paso a paso</p>
            <p className="text-xs text-gray-700 mt-2">
              Cuarto click: Obra maestra expandida | Fotos: Wikipedia Commons
            </p>
          </div>
        </div>
      </div>

      {/* PIE DE PÁGINA CON OVERLAY */}
      <footer className="footer-overlay text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 literary-body">
            <div className="space-y-4">
              <h3 className="literary-title text-xl font-bold flex items-center gap-2">
                <Globe className="h-6 w-6 text-blue-300" />
                Países del Mundo
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Una experiencia interactiva para explorar la diversidad cultural y literaria de nuestro planeta.
                Descubre países, sus tradiciones y los escritores que han marcado la historia.
              </p>
              <div className="flex items-center gap-2 text-blue-300">
                <Heart className="h-4 w-4" />
                <span className="text-sm">Hecho con pasión por la literatura</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="literary-title text-lg font-semibold flex items-center gap-2">
                <Book className="h-5 w-5 text-green-300" />
                Características
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  {countries.length} países incluidos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Escritores representativos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Obras maestras expandidas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Animaciones 3D interactivas
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="literary-title text-lg font-semibold flex items-center gap-2">
                <Pen className="h-5 w-5 text-purple-300" />
                Idiomas Incluidos
              </h4>
              <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
                {languageOptions.slice(0, 4).map((lang) => (
                  <div key={lang.value} className="flex items-center gap-2">
                    <span className="text-base">{lang.flag}</span>
                    <span className="truncate">{lang.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="literary-title text-lg font-semibold flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-yellow-300" />
                Estadísticas
              </h4>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-300">{countries.length}</div>
                  <div className="text-xs text-gray-300">Países explorados</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-300">{countries.length}</div>
                  <div className="text-xs text-gray-300">Obras maestras</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 my-8"></div>

          <div className="text-center mb-8">
            <div className="max-w-3xl mx-auto">
              <Quote className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <blockquote className="literary-quote text-lg italic text-gray-200 mb-4">
                "Un libro es un sueño que tienes en tus manos"
              </blockquote>
              <cite className="literary-body text-blue-300 font-medium">Neil Gaiman</cite>
            </div>
          </div>

          <div className="border-t border-white/20 my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 literary-body">
            <div className="text-gray-400 text-sm">© 2024 Países del Mundo. Proyecto educativo y cultural.</div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Datos actualizados
              </span>
              <span>Fotos: Wikipedia Commons</span>
              <span>Diseño: v0.dev</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
