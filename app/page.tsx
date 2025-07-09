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
          "Don Quijote de la Mancha es considerada la primera novela moderna y una de las obras más importantes de la literatura universal. Narra las aventuras de Alonso Quixano, un hidalgo que enloquece leyendo libros de caballerías y decide convertirse en caballero andante bajo el nombre de Don Quijote. Acompañado por su fiel escudero Sancho Panza, emprende aventuras para defender a los desvalidos y luchar contra las injusticias. La obra es una sátira de las novelas de caballerías, pero también una profunda reflexión sobre la realidad y la fantasía, los ideales y la vida práctica. A través del contraste entre el idealista Don Quijote y el pragmático Sancho Panza, Cervantes explora temas universales como la locura y la cordura, la justicia, el amor y la muerte. La novela presenta episodios memorables como la lucha contra los molinos de viento, que Don Quijote confunde con gigantes, simbolizando la lucha eterna entre los ideales y la realidad.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Idealismo vs Realismo", "Locura y Cordura", "Justicia", "Amistad", "Sátira Social"],
        extract:
          '"En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. Finalmente, tanto leyó en aquellos libros, que se le secó el celebro de manera que vino a perder el juicio. Llenósele la fantasía de todo aquello que leía en los libros, así de encantamentos como de pendencias, batallas, desafíos, heridas, requiebros, amores, tormentas y disparates imposibles." (Capítulo 1, página 25)',
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
          "Fausto, de Goethe, narra la historia de un sabio insatisfecho que, a través de un pacto con el diablo Mefistófeles, busca conocimiento y placeres terrenales, vendiendo su alma a cambio de juventud y experiencias ilimitadas. La obra, dividida en dos partes, explora la búsqueda de sentido en la vida, la lucha entre el bien y el mal, y la naturaleza del alma humana. El doctor Fausto, un erudito consumido por su sed de conocimiento, se siente frustrado por los límites de la ciencia y la filosofía. A través de sus aventuras, Fausto experimenta el amor con Margarita (Gretchen), una joven inocente que se convierte en víctima de su pasión. En la segunda parte, Fausto continúa su búsqueda de conocimiento y poder, participando en eventos históricos y realizando grandes obras para la humanidad. La obra culmina mostrando la posibilidad de redención incluso para aquellos que han caído profundamente. Finalmente, a pesar de sus pecados y errores, Fausto es redimido y salvado por la gracia divina.",
        image: "/fausto-illustration.png",
        themes: ["Pacto Diabólico", "Búsqueda del Conocimiento", "Amor y Tragedia", "Redención", "Naturaleza Humana"],
        extract:
          "\"FAUSTO – ¿Qué es lo que me ofreces? Alimento que no sacia; oro candente que, como el mercurio, se escapa de las manos sin descanso; un juego en el que nunca se gana; una muchacha que, abrazada a mi pecho, ya guiña el ojo y se entiende con el más cercano; el espléndido y divino placer del honor que se desvanece como un meteoro. Muéstrame frutos que se pudran antes de nacer y árboles que verdeen de nuevo cada día.\n\nMEFISTÓFELES – Esos tesoros que dices, yo te los puedo ofrecer. Mas, amigo querido, también se acerca el tiempo en que podamos regaladamente comer en paz alguna cosa buena.\n\nFAUSTO – Si me tiendo ocioso y descansado sobre un lecho, si con halagos puedes engañarme hasta el punto de estar satisfecho de mí mismo, si logras seducirme a fuerza de goces, muera yo inmediatamente. Te propongo la apuesta.\n\nMEFISTÓFELES – ¡Aceptada!\n\nFAUSTO – ¡Choquen nuestras manos! Si un día le digo a un instante fugaz: '¡Detente! ¡Eres tan hermoso!', puedes atarme entonces con cadenas y terminarse el tiempo para mí.\"",
      },
    },
  },
  {
    id: "uk",
    name: "Reino Unido",
    flag: "🇬🇧",
    capital: "Londres",
    population: "67.8 millones",
    language: "Inglés",
    currency: "Libra esterlina (£)",
    founded: "1707",
    writer: {
      name: "William Shakespeare",
      profession: "Dramaturgo y poeta",
      quote: "Ser o no ser, esa es la cuestión.",
      period: "1564-1616",
      photo: "/shakespeare-historical-engraving.png",
      masterwork: {
        title: "Hamlet",
        year: "1600-1601",
        genre: "Tragedia",
        summary:
          "Hamlet es la tragedia más famosa de Shakespeare, que narra la historia del príncipe Hamlet de Dinamarca, quien busca vengar la muerte de su padre tras ser visitado por su fantasma. La obra explora temas profundos como la venganza, la locura, la muerte, la traición y la corrupción moral. Hamlet finge estar loco mientras planea su venganza contra su tío Claudio, quien ha asesinado a su padre y se ha casado con su madre Gertrudis. La obra incluye algunos de los monólogos más famosos de la literatura, incluyendo 'Ser o no ser', donde Hamlet reflexiona sobre la vida y la muerte. La complejidad psicológica del protagonista, sus dudas existenciales y su lucha interna entre la acción y la contemplación han convertido a Hamlet en uno de los personajes más estudiados de la literatura. La tragedia culmina en una serie de muertes que incluyen a Hamlet, Claudio, Gertrudis y Laertes, dejando solo a Horacio para contar la historia.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Venganza", "Locura", "Muerte", "Traición", "Dilema Moral"],
        extract:
          '"Ser o no ser, esa es la cuestión. ¿Cuál es más noble en la mente, sufrir los golpes y dardos de la ultrajante fortuna, o tomar armas contra un mar de calamidades, y, al oponerse a ellas, encontrar el fin?" (Acto III, Escena I)',
      },
    },
  },
  {
    id: "france",
    name: "Francia",
    flag: "🇫🇷",
    capital: "París",
    population: "68.4 millones",
    language: "Francés",
    currency: "Euro (€)",
    founded: "843",
    writer: {
      name: "Victor Hugo",
      profession: "Novelista, poeta y dramaturgo",
      quote:
        "El futuro tiene muchos nombres. Para los débiles es lo inalcanzable. Para los temerosos, lo desconocido. Para los valientes, la oportunidad.",
      period: "1802-1885",
      photo: "/victor-hugo-engraving.jpeg",
      masterwork: {
        title: "Los Miserables",
        year: "1862",
        genre: "Novela",
        summary:
          "Los Miserables es una monumental novela que retrata la Francia del siglo XIX a través de la historia de Jean Valjean, un ex-convicto que busca la redención. La obra sigue las vidas entrelazadas de varios personajes, incluyendo a Fantine, una madre soltera; Cosette, su hija; Marius, un joven revolucionario; y Javert, el implacable inspector de policía. Hugo utiliza estas historias personales para explorar temas de justicia social, pobreza, revolución y redención. La novela culmina durante los levantamientos de París de 1832, donde los personajes enfrentan sus destinos. Es una obra que combina el drama personal con la crítica social, mostrando tanto la miseria humana como la capacidad de transformación y esperanza. Hugo presenta un panorama épico de la sociedad francesa, desde los salones aristocráticos hasta las alcantarillas de París, creando un fresco social de extraordinaria amplitud.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Justicia Social", "Redención", "Revolución", "Pobreza", "Amor y Sacrificio"],
        extract: '"¿Amas? ¡Oh, sé amado! No pido más." (Volumen V, Libro I, Capítulo XIX)',
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
          "Ficciones es una colección de cuentos que revolucionó la literatura del siglo XX con su exploración de temas como el infinito, los laberintos, los espejos y la naturaleza de la realidad. Borges crea mundos fantásticos que desafían la lógica convencional: bibliotecas infinitas, laberintos temporales, enciclopedias de mundos imaginarios y personajes que existen en múltiples realidades. Cuentos como 'La Biblioteca de Babel', 'El jardín de senderos que se bifurcan' y 'Pierre Menard, autor del Quijote' han influenciado profundamente la literatura contemporánea. La obra combina erudición, filosofía y fantasía para crear una literatura intelectual única que explora los límites del conocimiento humano y la naturaleza de la ficción misma. Borges utiliza la metaficción para cuestionar las fronteras entre realidad y literatura, creando textos que son tanto cuentos como ensayos filosóficos.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-bntZ1FOjt6XCzsbwQvcymdPRQlPyID.png",
        themes: ["Infinito", "Laberintos", "Realidad y Ficción", "Tiempo", "Conocimiento"],
        extract:
          '"Bajo los árboles ingleses medité en ese laberinto perdido: lo imaginé inviolado y perfecto en la cumbre secreta de una montaña, lo imaginé borrado por arrozales o debajo del agua, lo imaginé infinito, no ya de quioscos y de sendas que vuelven, sino de ríos y provincias y reinos… Pensé en un laberinto de laberintos, en un sinuoso laberinto creciente que abarcara el pasado y el porvenir y que implicara de algún modo los astros. Absorto en esas ilusorias imágenes, olvidé mi destino de perseguido. Me sentí, por un tiempo indeterminado, percibidor abstracto del mundo. El vago y vivo campo, la luna, los restos de la tarde, obraron en mí; asimismo el declive que eliminaba cualquier posibilidad de cansancio. La tarde era íntima, infinita. El camino bajaba y se bifurcaba, entre las ya confusas praderas. Una música aguda y como silábica se aproximaba y se alejaba en el vaivén del viento, empañada de hojas y de distancia. Pensé que un hombre puede ser enemigo de otros hombres, de otros momentos de otros hombres, pero no de un país; no de luciérnagas, palabras, jardines, cursos de agua, ponientes." (El jardín de senderos que se bifurcan)',
      },
    },
  },
  {
    id: "russia",
    name: "Rusia",
    flag: "🇷🇺",
    capital: "Moscú",
    population: "146.2 millones",
    language: "Ruso",
    currency: "Rublo ruso (₽)",
    founded: "1547",
    writer: {
      name: "León Tolstói",
      profession: "Novelista y filósofo",
      quote: "Todos piensan en cambiar el mundo, pero nadie piensa en cambiarse a sí mismo.",
      period: "1828-1910",
      photo: "/tolstoi-sketch.png",
      masterwork: {
        title: "Guerra y Paz",
        year: "1865-1869",
        genre: "Novela épica",
        summary:
          "Guerra y Paz es una monumental novela épica que retrata la sociedad rusa durante las guerras napoleónicas. A través de las vidas de familias aristocráticas como los Rostov, los Bolkonsky y los Bezukhov, Tolstói explora temas universales como el amor, la guerra, la muerte, la fe y el destino. La obra combina magistralmente la historia personal con los grandes eventos históricos, mostrando cómo las vidas individuales se entrelazan con el curso de la historia. Pierre Bezukhov, Natasha Rostova y el príncipe Andrei Bolkonsky son personajes inolvidables que encarnan diferentes aspectos de la experiencia humana. La novela es tanto un retrato íntimo de la vida familiar como una meditación filosófica sobre la naturaleza de la historia y el libre albedrío. Tolstói presenta la guerra no como gloria heroica, sino como caos y sufrimiento humano, mientras celebra la capacidad de resistencia y renovación del espíritu humano.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Guerra y Paz", "Destino", "Amor", "Historia", "Filosofía de la vida"],
        extract: '"Todos piensan en cambiar el mundo, pero nadie piensa en cambiarse a sí mismo." (Epílogo, Parte II)',
      },
    },
  },
  {
    id: "japan",
    name: "Japón",
    flag: "🇯🇵",
    capital: "Tokio",
    population: "125.8 millones",
    language: "Japonés",
    currency: "Yen japonés (¥)",
    founded: "660 a.C.",
    writer: {
      name: "Yukio Mishima",
      profession: "Novelista y dramaturgo",
      quote: "La belleza es algo terrible y espantoso.",
      period: "1925-1970",
      photo: "/mishima-sketch.png",
      masterwork: {
        title: "El Mar de la Fertilidad",
        year: "1965-1970",
        genre: "Tetralogía novelística",
        summary:
          "El Mar de la Fertilidad es la obra cumbre de Mishima, una tetralogía que explora temas de reencarnación, belleza, decadencia y la tensión entre tradición y modernidad en el Japón del siglo XX. La saga sigue las supuestas reencarnaciones de un joven a través de cuatro novelas: 'Nieve de primavera', 'Caballos desbocados', 'El templo del alba' y 'La corrupción de un ángel'. Cada volumen está ambientado en una época diferente, desde la era Taisho hasta la posguerra, mostrando la transformación de Japón. Mishima combina elementos del budismo, el shintoísmo y la filosofía occidental para crear una meditación profunda sobre la naturaleza del tiempo, la identidad y la muerte. La obra refleja la obsesión del autor con la belleza efímera y su crítica a la occidentalización de Japón, culminando en una reflexión sobre el vacío existencial de la modernidad.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Reencarnación", "Tradición vs Modernidad", "Belleza", "Muerte", "Identidad japonesa"],
        extract: '"La vida humana es como una vela en el viento." (Nieve de Primavera)',
      },
    },
  },
  {
    id: "colombia",
    name: "Colombia",
    flag: "🇨🇴",
    capital: "Bogotá",
    population: "51.3 millones",
    language: "Español",
    currency: "Peso colombiano ($)",
    founded: "1810",
    writer: {
      name: "Gabriel García Márquez",
      profession: "Novelista y periodista",
      quote: "La vida no es la que uno vivió, sino la que uno recuerda y cómo la recuerda para contarla.",
      period: "1927-2014",
      photo: "/garcia-marquez-portrait.png",
      masterwork: {
        title: "Cien años de soledad",
        year: "1967",
        genre: "Realismo mágico",
        summary:
          "Cien años de soledad es la obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. García Márquez teje una narrativa donde lo fantástico y lo real se entrelazan naturalmente, creando un universo donde llueve flores, los personajes ascienden al cielo y los muertos conviven con los vivos. La novela es una alegoría de la historia latinoamericana, explorando temas como la soledad, el destino cíclico, el poder, la violencia y el amor. Cada generación de los Buendía repite patrones familiares, sugiriendo que la historia se repite inexorablemente. La obra combina elementos míticos con crítica social, presentando una visión poética y trágica de América Latina. El estilo narrativo de García Márquez, que mezcla lo cotidiano con lo extraordinario, revolucionó la literatura mundial y estableció el realismo mágico como un género literario reconocido.",
        image: "/cien-anos-soledad-illustration.png",
        themes: ["Realismo Mágico", "Soledad", "Destino Cíclico", "Historia Latinoamericana", "Familia"],
        extract:
          '"Según él mismo (Melquíades) le contó a José Arcadio Buendía mientras lo ayudaba a montar el laboratorio, la muerte lo seguía a todas partes, husmeándole los pantalones, pero sin decidirse a darle el zarpazo final"',
      },
    },
  },
  {
    id: "czech",
    name: "República Checa",
    flag: "🇨🇿",
    capital: "Praga",
    population: "10.7 millones",
    language: "Checo",
    currency: "Corona checa (Kč)",
    founded: "1993",
    writer: {
      name: "Franz Kafka",
      profession: "Escritor y abogado",
      quote: "Un libro debe ser el hacha que rompa el mar helado que llevamos dentro.",
      period: "1883-1924",
      photo: "/kafka-sketch.png",
      masterwork: {
        title: "La Metamorfosis",
        year: "1915",
        genre: "Novela corta",
        summary:
          "La Metamorfosis es una de las obras más influyentes de la literatura moderna, que narra la transformación de Gregor Samsa en un insecto gigantesco. Esta transformación física sirve como metáfora de la alienación del individuo en la sociedad moderna. Kafka explora temas como la incomunicación familiar, la deshumanización del trabajo, la culpa y la responsabilidad. La obra presenta un mundo absurdo donde lo imposible se acepta como normal, anticipando el existencialismo y el teatro del absurdo. A través de la experiencia de Gregor, Kafka examina cómo la sociedad trata a aquellos que son diferentes o improductivos. La familia de Gregor, inicialmente dependiente de él económicamente, gradualmente lo rechaza y lo trata como una carga. La novela es una crítica mordaz de la sociedad burguesa y una exploración profunda de la condición humana en la era industrial.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Alienación", "Metamorfosis", "Familia", "Absurdo", "Condición humana"],
        extract:
          '"Cuando Gregorio Samsa se despertó una mañana después de un sueño intranquilo, se encontró sobre su cama convertido en un monstruoso insecto." (Capítulo 1)',
      },
    },
  },
  {
    id: "chile",
    name: "Chile",
    flag: "🇨🇱",
    capital: "Santiago",
    population: "19.5 millones",
    language: "Español",
    currency: "Peso chileno ($)",
    founded: "1810",
    writer: {
      name: "Pablo Neruda",
      profession: "Poeta y diplomático",
      quote: "Podrán cortar todas las flores, pero no podrán detener la primavera.",
      period: "1904-1973",
      photo: "/neruda-sketch.png",
      masterwork: {
        title: "Veinte poemas de amor y una canción desesperada",
        year: "1924",
        genre: "Poesía",
        summary:
          "Esta colección poética, escrita cuando Neruda tenía apenas 19 años, se convirtió en una de las obras más leídas de la poesía en español. Los poemas exploran el amor juvenil con una intensidad y sensualidad que revolucionó la poesía amorosa en lengua española. Neruda combina elementos del modernismo con un lenguaje más directo y emocional, creando versos que van desde la exaltación del amor hasta la melancolía de la pérdida. La obra refleja la influencia del paisaje chileno, especialmente del sur del país, donde Neruda pasó su juventud. Los poemas alternan entre la celebración del cuerpo femenino y la naturaleza, y la exploración de la soledad y el desamor. La 'canción desesperada' que cierra el libro es considerada una de las elegías amorosas más hermosas de la literatura hispanoamericana. La obra estableció a Neruda como una voz poética única y marcó el inicio de una carrera que lo llevaría al Premio Nobel de Literatura.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Amor juvenil", "Naturaleza", "Sensualidad", "Melancolía", "Paisaje chileno"],
        extract:
          '"Cuerpo de mujer, blancas colinas, muslos blancos, te pareces al mundo en tu actitud de entrega. Mi cuerpo de labriego salvaje te socava y hace saltar el hijo del fondo de la tierra." (Poema 1)',
      },
    },
  },
  {
    id: "ireland",
    name: "Irlanda",
    flag: "🇮🇪",
    capital: "Dublín",
    population: "5.0 millones",
    language: "Inglés",
    currency: "Euro (€)",
    founded: "1922",
    writer: {
      name: "Oscar Wilde",
      profession: "Escritor y dramaturgo",
      quote: "Podemos perdonar a un hombre por hacer algo útil mientras no lo admire.",
      period: "1854-1900",
      photo: "/oscar-wilde-sketch.png",
      masterwork: {
        title: "El retrato de Dorian Gray",
        year: "1890",
        genre: "Novela gótica",
        summary:
          "El retrato de Dorian Gray es la única novela de Oscar Wilde y una obra maestra del decadentismo victoriano. La historia narra cómo Dorian Gray, un joven de extraordinaria belleza, hace un pacto para que su retrato envejezca en su lugar mientras él permanece eternamente joven. Influenciado por el hedonista Lord Henry Wotton, Dorian se sumerge en una vida de placeres y excesos, mientras su alma se corrompe y su retrato refleja la degradación moral que su rostro no muestra. Wilde utiliza esta premisa fantástica para explorar temas como la vanidad, la corrupción moral, el arte por el arte, y la hipocresía de la sociedad victoriana. La novela es tanto una crítica social como una reflexión sobre la naturaleza del arte y la belleza. El personaje de Dorian encarna los peligros del narcisismo y la búsqueda obsesiva de la juventud eterna, mientras que el retrato funciona como símbolo de la conciencia moral.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Vanidad", "Corrupción moral", "Arte y belleza", "Decadentismo", "Hipocresía social"],
        extract:
          '"La única manera de librarse de una tentación es ceder ante ella. Resístela, y tu alma enfermará de anhelo por las cosas que se ha prohibido a sí misma." (Capítulo 2)',
      },
    },
  },
  {
    id: "peru",
    name: "Perú",
    flag: "🇵🇪",
    capital: "Lima",
    population: "33.4 millones",
    language: "Español",
    currency: "Sol peruano (S/)",
    founded: "1821",
    writer: {
      name: "Mario Vargas Llosa",
      profession: "Novelista y ensayista",
      quote: "La literatura es una representación falaz de la vida, pero nos ayuda a entenderla mejor.",
      period: "1936-presente",
      photo: "/vargas-llosa-portrait.png",
      masterwork: {
        title: "La ciudad y los perros",
        year: "1963",
        genre: "Novela",
        summary:
          "La ciudad y los perros es la primera novela de Vargas Llosa y una de las obras fundacionales del boom latinoamericano. Ambientada en el Colegio Militar Leoncio Prado de Lima, la novela retrata la violencia, la corrupción y los códigos de honor en una institución que funciona como microcosmos de la sociedad peruana. A través de técnicas narrativas innovadoras como el monólogo interior y los saltos temporales, Vargas Llosa presenta la historia de un grupo de cadetes y cómo un robo y un asesinato revelan las tensiones sociales, raciales y de clase que dividen al país. Los personajes principales - el Jaguar, Alberto, Ricardo Arana y el Boa - representan diferentes estratos sociales y formas de enfrentar la adversidad. La novela es una crítica feroz del militarismo y del machismo, así como una exploración de cómo las instituciones pueden corromper a los individuos. El estilo narrativo complejo y la estructura fragmentada de la obra influyeron profundamente en la narrativa latinoamericana posterior.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Violencia institucional", "Clases sociales", "Machismo", "Corrupción", "Adolescencia"],
        extract:
          '"¿Por qué las cosas serían distintas si uno se llamara Jaguar o Boa? ¿Por qué la vida sería distinta en otro sitio, con otra gente?" (Capítulo 8)',
      },
    },
  },
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    capital: "Nueva Delhi",
    population: "1.4 mil millones",
    language: "Hindi",
    currency: "Rupia india (₹)",
    founded: "1947",
    writer: {
      name: "Rabindranath Tagore",
      profession: "Poeta, filósofo y educador",
      quote: "No llores porque ya se terminó, sonríe porque sucedió.",
      period: "1861-1941",
      photo: "/tagore-sketch.png",
      masterwork: {
        title: "Gitanjali",
        year: "1910",
        genre: "Poesía espiritual",
        summary:
          "Gitanjali (Ofrenda lírica) es una colección de poemas espirituales que le valió a Tagore el Premio Nobel de Literatura en 1913, convirtiéndolo en el primer no europeo en recibir este honor. Los poemas, originalmente escritos en bengalí y luego traducidos al inglés por el propio autor, expresan una profunda devoción espiritual y una búsqueda mística de lo divino. Tagore combina elementos de la tradición hindú con una sensibilidad moderna, creando versos que trascienden las barreras culturales y religiosas. Los poemas abordan temas como la relación entre el alma individual y el cosmos, la naturaleza de Dios, la muerte, el amor y la búsqueda de la verdad. El estilo de Tagore es simple pero profundo, utilizando imágenes de la naturaleza y la vida cotidiana para expresar verdades espirituales universales. La obra refleja la filosofía del autor sobre la unidad de todas las religiones y su visión de un mundo sin fronteras culturales o nacionales.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Espiritualidad", "Misticismo", "Unidad divina", "Naturaleza", "Universalismo"],
        extract:
          '"Donde la mente está sin miedo y la cabeza se mantiene alta; donde el conocimiento es libre; donde el mundo no ha sido roto en fragmentos por estrechas paredes domésticas..." (Poema 35)',
      },
    },
  },
  {
    id: "norway",
    name: "Noruega",
    flag: "🇳🇴",
    capital: "Oslo",
    population: "5.4 millones",
    language: "Noruego",
    currency: "Corona noruega (kr)",
    founded: "1905",
    writer: {
      name: "Henrik Ibsen",
      profession: "Dramaturgo",
      quote: "El espíritu más fuerte y más libre es el que nunca se conforma.",
      period: "1828-1906",
      photo: "/ibsen-photo.png",
      masterwork: {
        title: "Casa de muñecas",
        year: "1879",
        genre: "Drama",
        summary:
          "Casa de muñecas es una obra revolucionaria que desafió las convenciones sociales de la época victoriana y se convirtió en un manifiesto feminista avant la lettre. La obra narra la historia de Nora Helmer, una mujer que aparentemente vive una vida perfecta como esposa y madre, pero que gradualmente descubre que ha sido tratada como una muñeca tanto por su padre como por su esposo Torvald. Cuando un secreto del pasado amenaza con destruir su matrimonio, Nora debe enfrentar la realidad de su situación y tomar una decisión que escandalizó a las audiencias de la época: abandonar a su familia para encontrar su propia identidad. Ibsen utiliza el realismo psicológico para explorar temas como la emancipación femenina, la hipocresía de la moral burguesa, el matrimonio como institución opresiva y la búsqueda de la autenticidad personal. La obra termina con el famoso portazo de Nora, un sonido que simbolizó el despertar de la conciencia femenina y que resonó en teatros de todo el mundo.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Emancipación femenina", "Matrimonio", "Identidad", "Hipocresía social", "Autenticidad"],
        extract: '"Debo intentar educarme a mí misma. Debo decidir por mí misma qué es lo correcto." (Acto III)',
      },
    },
  },
  {
    id: "sweden",
    name: "Suecia",
    flag: "🇸🇪",
    capital: "Estocolmo",
    population: "10.4 millones",
    language: "Sueco",
    currency: "Corona sueca (kr)",
    founded: "1523",
    writer: {
      name: "Selma Lagerlöf",
      profession: "Novelista",
      quote: "Hay algo en el trabajo que nos ennoblece y nos hace mejores.",
      period: "1858-1940",
      photo: "/lagerlof-sketch.png",
      masterwork: {
        title: "El maravilloso viaje de Nils Holgersson",
        year: "1906-1907",
        genre: "Literatura infantil/Fantasía",
        summary:
          "El maravilloso viaje de Nils Holgersson es una obra única que combina la literatura infantil con la geografía, la historia y el folclore sueco. La historia narra las aventuras de Nils, un niño travieso que es transformado en un duende por un gnomo como castigo por su mal comportamiento. Reducido a un tamaño diminuto, Nils viaja por toda Suecia montado en el ganso doméstico Morten, quien se ha unido a una bandada de gansos salvajes. Durante su viaje, Nils aprende sobre la geografía, la historia, las tradiciones y la naturaleza de su país, mientras gradualmente desarrolla empatía, responsabilidad y respeto por los demás seres vivos. Lagerlöf, quien fue la primera mujer en ganar el Premio Nobel de Literatura, creó esta obra como un libro de texto para enseñar geografía sueca a los niños, pero logró mucho más: una obra maestra que combina educación con entretenimiento, realismo con fantasía, y que transmite valores universales sobre el crecimiento personal y el respeto por la naturaleza.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Crecimiento personal", "Naturaleza", "Geografía", "Folclore", "Responsabilidad"],
        extract: '"El mundo es grande y hermoso, y vale la pena explorarlo." (Capítulo 24)',
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
        extract: '"El pasado no está muerto. Ni siquiera es pasado." (Capítulo 1)',
      },
    },
  },
  {
    id: "netherlands",
    name: "Países Bajos",
    flag: "🇳🇱",
    capital: "Ámsterdam",
    population: "17.4 millones",
    language: "Neerlandés",
    currency: "Euro (€)",
    founded: "1581",
    writer: {
      name: "Anne Frank",
      profession: "Diarista",
      quote: "A pesar de todo, creo que la gente es realmente buena de corazón.",
      period: "1929-1945",
      photo: "/anne-frank-sketch.png",
      masterwork: {
        title: "El Diario de Ana Frank",
        year: "1947",
        genre: "Diario/Autobiografía",
        summary:
          "El Diario de Ana Frank es uno de los testimonios más conmovedores y universales sobre el Holocausto y la experiencia humana durante la Segunda Guerra Mundial. Escrito por una adolescente judía mientras se escondía con su familia en Ámsterdam durante la ocupación nazi, el diario abarca desde junio de 1942 hasta agosto de 1944. Ana Frank documenta no solo los horrores de la guerra y la persecución, sino también las experiencias típicas de la adolescencia: sus sueños, miedos, conflictos familiares, despertar sexual y reflexiones sobre la naturaleza humana. A través de sus cartas dirigidas a 'Kitty', Ana muestra una madurez extraordinaria y una capacidad notable para mantener la esperanza y la fe en la humanidad a pesar de las circunstancias terribles. El diario se ha convertido en un símbolo universal de la resistencia del espíritu humano frente a la opresión y ha educado a millones de personas sobre los horrores del Holocausto. La voz de Ana, interrumpida trágicamente cuando fue deportada a Bergen-Belsen donde murió, sigue resonando como un llamado a la tolerancia y los derechos humanos.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Holocausto", "Adolescencia", "Esperanza", "Derechos humanos", "Resistencia"],
        extract:
          '"Veo el mundo transformándose lentamente en un desierto, oigo el trueno que se acerca cada vez más y que nos destruirá también a nosotros, siento el sufrimiento de millones y, sin embargo, cuando miro al cielo, pienso que todo cambiará para bien, que esta crueldad también cesará, que la paz y la tranquilidad volverán a reinar en el cielo." (15 de julio de 1944)',
      },
    },
  },
  {
    id: "south_korea",
    name: "Corea del Sur",
    flag: "🇰🇷",
    capital: "Seúl",
    population: "51.8 millones",
    language: "Coreano",
    currency: "Won surcoreano (₩)",
    founded: "1948",
    writer: {
      name: "Han Kang",
      profession: "Novelista",
      quote: "La escritura es una forma de resistencia contra el olvido.",
      period: "1970-presente",
      photo: "/han-kang-portrait.png",
      masterwork: {
        title: "La vegetariana",
        year: "2007",
        genre: "Novela",
        summary:
          "La vegetariana es una novela perturbadora y poética que explora la opresión femenina en la sociedad patriarcal coreana a través de la historia de Yeong-hye, una mujer que decide dejar de comer carne. Esta decisión aparentemente simple desencadena una serie de eventos violentos que revelan la brutalidad subyacente en las relaciones familiares y sociales. La novela está dividida en tres partes, cada una narrada desde una perspectiva diferente: el esposo abusivo, el cuñado obsesionado y la hermana. Han Kang utiliza un estilo onírico y simbólico para explorar temas como la autonomía corporal, la violencia doméstica, la enfermedad mental y la resistencia femenina. La transformación de Yeong-hye de mujer sumisa a ser que rechaza las normas sociales es tanto liberadora como trágica. La obra, que le valió a Han Kang el Premio Man Booker Internacional, es una crítica feroz del machismo y una meditación sobre los límites entre la cordura y la locura, la civilización y la naturaleza.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Opresión femenina", "Patriarcado", "Autonomía corporal", "Violencia doméstica", "Resistencia"],
        extract:
          '"Soñaba con árboles. Árboles que se extendían desde su cuerpo, brotando de sus manos y pies." (Parte 1)',
      },
    },
  },
  {
    id: "turkey",
    name: "Turquía",
    flag: "🇹🇷",
    capital: "Ankara",
    population: "84.3 millones",
    language: "Turco",
    currency: "Lira turca (₺)",
    founded: "1923",
    writer: {
      name: "Orhan Pamuk",
      profession: "Novelista",
      quote: "El verdadero arte surge de la tensión entre tradición y modernidad.",
      period: "1952-presente",
      photo: "/orhan-pamuk-photo.png",
      masterwork: {
        title: "Mi nombre es Rojo",
        year: "1998",
        genre: "Novela histórica",
        summary:
          "Mi nombre es Rojo es una novela compleja ambientada en el Estambul del siglo XVI que combina misterio, historia del arte y reflexión filosófica. La historia gira en torno al asesinato de un miniaturista que trabajaba en un libro secreto encargado por el sultán, un proyecto que mezcla el arte islámico tradicional con técnicas occidentales. Pamuk utiliza múltiples narradores, incluyendo personajes humanos, colores, objetos e incluso la muerte misma, para explorar el choque entre Oriente y Occidente, tradición y modernidad, arte religioso y secular. La novela examina cómo el arte refleja y moldea la identidad cultural, y cómo los cambios artísticos pueden amenazar las estructuras sociales establecidas. A través de la investigación del crimen, Pamuk presenta un retrato vívido del Imperio Otomano en un momento de transición, explorando temas como la fe, el amor, la creatividad y el poder. La obra es tanto una novela policíaca como una meditación profunda sobre la naturaleza del arte y la cultura.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Arte islámico", "Oriente vs Occidente", "Tradición", "Imperio Otomano", "Identidad cultural"],
        extract: '"Soy un muerto. He estado muerto durante mucho tiempo." (Capítulo 1)',
      },
    },
  },
  {
    id: "brazil",
    name: "Brasil",
    flag: "🇧🇷",
    capital: "Brasilia",
    population: "215.3 millones",
    language: "Portugués",
    currency: "Real brasileño (R$)",
    founded: "1822",
    writer: {
      name: "Jorge Amado",
      profession: "Novelista",
      quote: "La literatura debe ser como la vida: generosa, ardiente y humana.",
      period: "1912-2001",
      photo: "/jorge-amado-portrait.png",
      masterwork: {
        title: "Doña Flor y sus dos maridos",
        year: "1966",
        genre: "Realismo mágico",
        summary:
          "Doña Flor y sus dos maridos es una de las obras más celebradas de Jorge Amado que combina magistralmente el realismo mágico con la rica cultura popular bahiana. La novela narra la historia de Florípedes Paiva, conocida como Doña Flor, una mujer que tras enviudar de su primer marido Vadinho, un jugador irresponsable pero apasionado, se casa con Teodoro, un farmacéutico respetable pero aburrido. La trama se complica cuando el espíritu de Vadinho regresa para reclamar su lugar junto a Flor, creando un triángulo amoroso entre los vivos y los muertos. Amado utiliza esta premisa fantástica para explorar temas como la dualidad del deseo femenino, la tensión entre pasión y seguridad, y la riqueza de las tradiciones afrobrasileñas. La obra está impregnada de elementos del candomblé, la cocina bahiana, la música y las costumbres populares de Salvador de Bahía. A través del personaje de Doña Flor, Amado presenta una mujer compleja que desea tanto la estabilidad como la pasión, reflejando las contradicciones de la condición humana. La novela es una celebración de la sensualidad, la vida y la cultura brasileña, especialmente la herencia africana en Bahía.",
        image: "/placeholder.svg?height=400&width=600",
        themes: [
          "Realismo mágico",
          "Cultura bahiana",
          "Dualidad del deseo",
          "Tradiciones afrobrasileñas",
          "Amor y pasión",
        ],
        extract:
          '"Doña Flor quedó viuda y sola, sin hombre en la cama y en el corazón. Pero no por mucho tiempo, pues era mujer de mucho mérito, cocinera de primera, de hermoso cuerpo y cara bonita, además de poseer un genio dulce y alegre." (Capítulo 1)',
      },
    },
  },
  {
    id: "china",
    name: "China",
    flag: "🇨🇳",
    capital: "Pekín",
    population: "1.4 mil millones",
    language: "Chino mandarín",
    currency: "Yuan chino (¥)",
    founded: "1949",
    writer: {
      name: "Confucio",
      profession: "Filósofo y educador",
      quote: "El hombre que mueve montañas comienza cargando pequeñas piedras.",
      period: "551-479 a.C.",
      photo: "/confucio-sketch.png",
      masterwork: {
        title: "Analectas",
        year: "siglo V a.C.",
        genre: "Filosofía",
        summary:
          "Las Analectas son una colección de dichos, conversaciones y reflexiones de Confucio compiladas por sus discípulos después de su muerte. Esta obra fundamental del pensamiento chino presenta las enseñanzas del maestro sobre ética, moral, política y educación que han influenciado la cultura china durante más de dos milenios. Confucio enfatiza conceptos como el 'ren' (benevolencia o humanidad), el 'li' (ritual o propiedad), la importancia de la educación, el respeto filial y la armonía social. Las Analectas no presentan un sistema filosófico sistemático, sino que ofrecen sabiduría práctica para la vida cotidiana y el gobierno justo. Confucio creía que la sociedad podía perfeccionarse a través de la educación moral y el ejemplo de líderes virtuosos. Sus enseñanzas sobre la importancia del aprendizaje continuo, el respeto por los mayores, la moderación y la búsqueda de la armonía han moldeado no solo la cultura china, sino también las de Corea, Japón y Vietnam. La obra sigue siendo relevante hoy en día como guía para la conducta ética y el liderazgo responsable.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Ética", "Educación", "Armonía social", "Virtud", "Sabiduría práctica"],
        extract: '"Aprender sin reflexionar es malgastar la energía." (Libro II, 15)',
      },
    },
  },
  {
    id: "greece",
    name: "Grecia",
    flag: "🇬🇷",
    capital: "Atenas",
    population: "10.7 millones",
    language: "Griego",
    currency: "Euro (€)",
    founded: "1821",
    writer: {
      name: "Sócrates",
      profession: "Filósofo",
      quote: "Solo sé que no sé nada.",
      period: "470-399 a.C.",
      photo: "/socrates-sketch.png",
      masterwork: {
        title: "Apología de Sócrates",
        year: "399 a.C.",
        genre: "Diálogo filosófico",
        summary:
          "La Apología de Sócrates, escrita por Platón, es el relato del juicio y defensa de Sócrates ante los tribunales atenienses, donde fue acusado de corromper a la juventud y no creer en los dioses de la ciudad. En este diálogo, Sócrates presenta su filosofía de vida y su método de búsqueda de la verdad a través del cuestionamiento constante. La obra es fundamental para entender el pensamiento socrático y marca el nacimiento de la filosofía occidental como disciplina rigurosa. Sócrates defiende su práctica de examinar las creencias de las personas, demostrando que muchas veces lo que consideramos conocimiento es en realidad ignorancia. Su famosa declaración 'solo sé que no sé nada' ilustra su humildad intelectual y su compromiso con la búsqueda continua de la verdad. La Apología también presenta la noble actitud de Sócrates ante la muerte, prefiriendo morir antes que renunciar a su misión filosófica. La obra establece principios fundamentales sobre la importancia del examen de la vida, la integridad moral y el valor de la búsqueda de la sabiduría por encima de los bienes materiales.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Búsqueda de la verdad", "Examen de la vida", "Integridad moral", "Sabiduría", "Filosofía"],
        extract: '"Una vida sin examen no merece ser vivida." (38a)',
      },
    },
  },
  {
    id: "usa",
    name: "Estados Unidos",
    flag: "🇺🇸",
    capital: "Washington D.C.",
    population: "331.9 millones",
    language: "Inglés",
    currency: "Dólar estadounidense ($)",
    founded: "1776",
    writer: {
      name: "Edgar Allan Poe",
      profession: "Poeta y cuentista",
      quote: "Todo lo que vemos o parecemos no es sino un sueño dentro de un sueño.",
      period: "1809-1849",
      photo: "/edgar-allan-poe-sketch.png",
      masterwork: {
        title: "El cuervo",
        year: "1845",
        genre: "Poema narrativo",
        summary:
          "El cuervo es el poema más famoso de Edgar Allan Poe y una obra maestra de la literatura gótica americana. El poema narra la visita nocturna de un cuervo parlante a un hombre que lamenta la pérdida de su amada Lenore. A través de dieciocho estrofas de métrica compleja, Poe crea una atmósfera de creciente desesperación y locura. El cuervo, que solo puede pronunciar la palabra 'Nevermore' (Nunca más), se convierte en un símbolo de la permanencia de la pérdida y la imposibilidad del olvido. Poe utiliza técnicas poéticas sofisticadas como la aliteración, la asonancia y el ritmo hipnótico para crear un efecto musical que intensifica el horror psicológico. El poema explora temas universales como el duelo, la memoria, la soledad y la confrontación con la mortalidad. La estructura del poema, con su estribillo repetitivo y su progresión hacia la desesperación total, ejemplifica la teoría poética de Poe sobre el 'efecto único' que debe producir toda obra literaria. El cuervo se ha convertido en un símbolo icónico de la literatura americana y ha influenciado a generaciones de escritores.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Duelo", "Pérdida", "Locura", "Muerte", "Horror psicológico"],
        extract:
          "\"Una vez, en una lúgubre medianoche, mientras meditaba, débil y cansado, sobre muchos un volumen curioso y olvidado de saber olvidado, mientras asentía, casi dormitando, de repente se produjo un golpe, como si alguien suavemente golpeara, golpeara a la puerta de mi cámara. 'Es algún visitante', murmuré, 'que golpea a la puerta de mi cámara; esto es todo, y nada más'.\" (Estrofa 1)",
      },
    },
  },
  {
    id: "canada",
    name: "Canadá",
    flag: "🇨🇦",
    capital: "Ottawa",
    population: "38.2 millones",
    language: "Inglés",
    currency: "Dólar canadiense ($)",
    founded: "1867",
    writer: {
      name: "Margaret Atwood",
      profession: "Novelista y poeta",
      quote: "Una palabra después de una palabra después de una palabra es poder.",
      period: "1939-presente",
      photo: "/margaret-atwood-portrait.png",
      masterwork: {
        title: "El cuento de la criada",
        year: "1985",
        genre: "Distopía",
        summary:
          "El cuento de la criada es una novela distópica que presenta la República de Gilead, un estado teocrático totalitario que ha reemplazado a Estados Unidos en un futuro cercano. En esta sociedad, la fertilidad femenina ha disminuido drásticamente debido a la contaminación y las enfermedades, convirtiendo a las mujeres fértiles en un recurso valioso y controlado. La protagonista, Offred, es una 'criada' asignada a un comandante para procrear en su nombre. Atwood construye un mundo donde las mujeres han perdido todos sus derechos y son clasificadas según su función reproductiva. La novela es narrada desde la perspectiva de Offred, quien recuerda su vida anterior mientras navega por las restricciones y peligros de Gilead. A través de esta narrativa, Atwood explora temas como el control reproductivo, la opresión religiosa, la resistencia femenina y los peligros del fundamentalismo. La obra funciona como una advertencia sobre cómo los derechos pueden erosionarse gradualmente y cómo las crisis pueden ser utilizadas para justificar la opresión. La novela ha ganado nueva relevancia en debates contemporáneos sobre derechos reproductivos y autonomía femenina.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Distopía", "Derechos reproductivos", "Totalitarismo", "Resistencia femenina", "Fundamentalismo"],
        extract:
          '"Ahora estoy despierta a la hora de acostarme. Debo estar despierta. Debo recordar, aunque recuerde mal." (Capítulo 1)',
      },
    },
  },
  {
    id: "mexico",
    name: "México",
    flag: "🇲🇽",
    capital: "Ciudad de México",
    population: "128.9 millones",
    language: "Español",
    currency: "Peso mexicano ($)",
    founded: "1810",
    writer: {
      name: "Juan Rulfo",
      profession: "Novelista y cuentista",
      quote: "Uno busca llegar hasta donde el aire se serena y donde todo se aquieta.",
      period: "1917-1986",
      photo: "/juan-rulfo-sketch.png",
      masterwork: {
        title: "Pedro Páramo",
        year: "1955",
        genre: "Novela",
        summary:
          "Pedro Páramo es una obra revolucionaria que transformó la narrativa latinoamericana y anticipó muchas técnicas del realismo mágico. La novela narra la historia de Juan Preciado, quien viaja al pueblo fantasma de Comala en busca de su padre, Pedro Páramo, cumpliendo una promesa hecha a su madre moribunda. Al llegar, descubre que el pueblo está habitado por muertos que le cuentan la historia de Pedro Páramo, un cacique despótico que dominó la región. Rulfo utiliza una estructura fragmentaria y voces múltiples para crear una narrativa donde los límites entre vida y muerte, pasado y presente, se difuminan. La novela presenta un México rural devastado por la violencia, el caciquismo y la Revolución, pero lo hace a través de una prosa poética que eleva la tragedia a dimensiones míticas. Los personajes están atrapados en un purgatorio eterno, condenados a repetir sus historias de amor, venganza y muerte. La obra influyó profundamente en escritores como García Márquez y estableció nuevos paradigmas para la narrativa hispanoamericana, demostrando que la literatura regional podía alcanzar universalidad a través de la innovación formal y la profundidad poética.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Muerte", "Caciquismo", "México rural", "Realismo mágico", "Violencia"],
        extract: '"Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo." (Inicio)',
      },
    },
  },
  {
    id: "venezuela",
    name: "Venezuela",
    flag: "🇻🇪",
    capital: "Caracas",
    population: "28.4 millones",
    language: "Español",
    currency: "Bolívar venezolano (Bs)",
    founded: "1811",
    writer: {
      name: "Rómulo Gallegos",
      profession: "Novelista y político",
      quote: "La tierra es como la mujer: hay que conquistarla todos los días.",
      period: "1884-1969",
      photo: "/romulo-gallegos-sketch.png",
      masterwork: {
        title: "Doña Bárbara",
        year: "1929",
        genre: "Novela regionalista",
        summary:
          "Doña Bárbara es la novela más importante de la literatura venezolana y una obra fundamental del regionalismo latinoamericano. La historia enfrenta a Santos Luzardo, un abogado educado en Caracas que regresa a los llanos para reclamar sus tierras, con Doña Bárbara, una mujer poderosa y despiadada que domina la región a través de la violencia y la superstición. Gallegos utiliza este conflicto personal para representar la lucha entre civilización y barbarie, educación e ignorancia, ley y fuerza bruta que caracterizaba a la Venezuela de principios del siglo XX. La novela presenta un retrato épico de los llanos venezolanos, con sus tradiciones, su naturaleza salvaje y sus habitantes. Doña Bárbara es un personaje complejo que encarna tanto la fuerza destructiva como la vitalidad de la tierra americana. A través de la transformación gradual de ambos protagonistas, Gallegos explora temas como la redención, el poder del amor y la educación como fuerzas civilizadoras. La obra combina realismo social con elementos míticos y folclóricos, creando una síntesis entre lo particular venezolano y lo universal humano. La novela influyó en toda una generación de escritores latinoamericanos y estableció el modelo de la novela de la tierra.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Civilización vs barbarie", "Llanos venezolanos", "Poder", "Redención", "Identidad nacional"],
        extract: '"La sabana es ancha y ajena." (Capítulo 1)',
      },
    },
  },
  {
    id: "cuba",
    name: "Cuba",
    flag: "🇨🇺",
    capital: "La Habana",
    population: "11.3 millones",
    language: "Español",
    currency: "Peso cubano ($)",
    founded: "1902",
    writer: {
      name: "José Martí",
      profession: "Poeta, ensayista y político",
      quote: "Ser culto es el único modo de ser libre.",
      period: "1853-1895",
      photo: "/jose-marti-historical.png",
      masterwork: {
        title: "Versos Sencillos",
        year: "1891",
        genre: "Poesía",
        summary:
          "Versos Sencillos es la obra poética más conocida de José Martí y una de las cumbres de la poesía hispanoamericana del siglo XIX. Compuesta durante su exilio en Nueva York, la colección refleja la nostalgia del poeta por su patria, sus reflexiones sobre la libertad, la justicia y la condición humana. Los poemas, escritos en cuartetas octosílabas de rima asonante, combinan la sencillez formal con una profundidad emocional y filosófica extraordinaria. Martí utiliza imágenes de la naturaleza americana, especialmente de Cuba, para expresar sus sentimientos patrióticos y su visión de una América Latina unida y libre. Los versos abordan temas como el amor a la patria, la solidaridad con los oprimidos, la belleza de la naturaleza y la búsqueda de la autenticidad. El poema más famoso, 'Yo soy un hombre sincero', se convirtió en la letra de la canción 'Guantanamera', difundiendo la poesía de Martí por todo el mundo. La obra refleja la síntesis martiana entre pensamiento y sentimiento, entre compromiso político y expresión artística, estableciendo un modelo para la literatura comprometida en América Latina.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Patriotismo", "Libertad", "Naturaleza americana", "Exilio", "Compromiso social"],
        extract:
          '"Yo soy un hombre sincero / De donde crece la palma, / Y antes de morirme quiero / Echar mis versos del alma." (I)',
      },
    },
  },
  {
    id: "south_africa",
    name: "Sudáfrica",
    flag: "🇿🇦",
    capital: "Ciudad del Cabo",
    population: "60.4 millones",
    language: "Inglés",
    currency: "Rand sudafricano (R)",
    founded: "1910",
    writer: {
      name: "J.R.R. Tolkien",
      profession: "Filólogo y escritor",
      quote: "No todo lo que es oro reluce, ni toda la gente errante anda perdida.",
      period: "1892-1973",
      photo: "/tolkien-sketch.png",
      masterwork: {
        title: "El Señor de los Anillos",
        year: "1954-1955",
        genre: "Fantasía épica",
        summary:
          "El Señor de los Anillos es una obra épica de fantasía que narra la lucha entre el bien y el mal en la Tierra Media, un mundo secundario creado por Tolkien con extraordinario detalle. La historia sigue a Frodo Bolsón, un hobbit que debe destruir el Anillo Único para derrotar al Señor Oscuro Sauron. Acompañado por la Comunidad del Anillo, Frodo emprende un viaje peligroso que lo llevará a través de paisajes diversos y enfrentamientos épicos. Tolkien, profesor de filología en Oxford, creó no solo una narrativa compleja sino también idiomas completos, genealogías, mapas y una historia milenaria para su mundo ficticio. La obra explora temas universales como la amistad, el sacrificio, la corrupción del poder, la pérdida de la inocencia y la lucha entre la esperanza y la desesperación. Los personajes, desde el sabio Gandalf hasta el atormentado Gollum, representan diferentes aspectos de la naturaleza humana. La trilogía estableció las bases de la fantasía moderna como género literario y ha influenciado a generaciones de escritores. La obra combina elementos de la mitología nórdica, celta y germánica con temas cristianos, creando una mitología moderna que resuena con lectores de todas las culturas.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Bien vs mal", "Amistad", "Sacrificio", "Poder", "Mitología moderna"],
        extract:
          '"Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos, Un Anillo para atraerlos a todos y atarlos en las tinieblas." (La inscripción del Anillo)',
      },
    },
  },
  {
    id: "switzerland",
    name: "Suiza",
    flag: "🇨🇭",
    capital: "Berna",
    population: "8.7 millones",
    language: "Alemán",
    currency: "Franco suizo (CHF)",
    founded: "1291",
    writer: {
      name: "Hermann Hesse",
      profession: "Novelista y poeta",
      quote: "Algunos nacemos para vivir solos, otros para vivir con otros, pero todos nacemos para vivir.",
      period: "1877-1962",
      photo: "/herman-hesse-sketch.png",
      masterwork: {
        title: "Siddhartha",
        year: "1922",
        genre: "Novela filosófica",
        summary:
          "Siddhartha es una novela que narra el viaje espiritual de un joven brahmán en la India antigua en busca de la iluminación. Inspirado en la vida de Buda pero no siendo una biografía, Hesse crea una parábola universal sobre la búsqueda del sentido de la vida y la sabiduría. Siddhartha abandona su vida privilegiada para convertirse en asceta, luego en comerciante y amante, y finalmente en barquero, aprendiendo que la sabiduría no puede ser enseñada sino que debe ser experimentada personalmente. La novela refleja el interés de Hesse por la filosofía oriental, particularmente el budismo y el hinduismo, pero también incorpora elementos del pensamiento occidental. A través del personaje de Siddhartha, Hesse explora temas como la dualidad entre espíritu y materia, la naturaleza cíclica del tiempo, la importancia de la experiencia directa sobre el conocimiento libresco, y la unidad fundamental de toda existencia. La prosa de Hesse es lírica y contemplativa, creando una atmósfera de serenidad y profundidad espiritual. La obra se convirtió en un texto fundamental para la contracultura de los años 60 y sigue siendo relevante para quienes buscan significado espiritual en un mundo materialista.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Búsqueda espiritual", "Iluminación", "Sabiduría", "Filosofía oriental", "Autoconocimiento"],
        extract:
          '"La sabiduría no es comunicable. La sabiduría que un sabio intenta comunicar siempre suena a locura." (Capítulo 4)',
      },
    },
  },
  {
    id: "uk_caitlin",
    name: "Reino Unido",
    flag: "🇬🇧",
    capital: "Londres",
    population: "67.8 millones",
    language: "Inglés",
    currency: "Libra esterlina (£)",
    founded: "1707",
    writer: {
      name: "Caitlin Moran",
      profession: "Periodista y escritora",
      quote: "Las bibliotecas son catedrales de la mente; hospitales del alma; parques temáticos de la imaginación.",
      period: "1975-presente",
      photo: "/caitlin-moran-library-hero.png",
      masterwork: {
        title: "Cómo ser mujer",
        year: "2011",
        genre: "Ensayo autobiográfico",
        summary:
          "Cómo ser mujer es un ensayo autobiográfico que combina humor, honestidad brutal y análisis social para explorar la experiencia femenina en el siglo XXI. Moran utiliza episodios de su propia vida para examinar temas como la pubertad, la sexualidad, el trabajo, la maternidad y el feminismo con un estilo irreverente y accesible. La obra desmitifica muchos aspectos de la experiencia femenina, desde los primeros sujetadores hasta las presiones sociales sobre el cuerpo y la carrera profesional. Moran argumenta que el feminismo no es una ideología compleja sino simplemente la creencia de que las mujeres son seres humanos completos que merecen igualdad de oportunidades. A través de anécdotas divertidas y observaciones perspicaces, la autora aborda la hipocresía de la sociedad respecto a las mujeres y propone una visión más auténtica y liberadora de la feminidad. El libro se convirtió en un fenómeno editorial y ayudó a revitalizar el discurso feminista para una nueva generación, demostrando que el feminismo puede ser divertido, inclusivo y profundamente personal.",
        image: "/caitlin-moran-quote.png",
        themes: ["Feminismo", "Experiencia femenina", "Humor", "Autobiografía", "Crítica social"],
        extract: '"El feminismo es simplemente esto: una persona cree que las mujeres son personas." (Capítulo 1)',
      },
    },
  },
  {
    id: "belgium",
    name: "Bélgica",
    flag: "🇧🇪",
    capital: "Bruselas",
    population: "11.5 millones",
    language: "Neerlandés",
    currency: "Euro (€)",
    founded: "1830",
    writer: {
      name: "Julio Cortázar",
      profession: "Novelista y cuentista",
      quote: "Nada está perdido si se tiene el valor de proclamar que todo está perdido y hay que empezar de nuevo.",
      period: "1914-1984",
      photo: "/cortazar-sketch.png",
      masterwork: {
        title: "Rayuela",
        year: "1963",
        genre: "Novela experimental",
        summary:
          "Rayuela es una novela revolucionaria que desafía las convenciones narrativas tradicionales y se convirtió en una de las obras más influyentes del boom latinoamericano. La historia sigue a Horacio Oliveira, un intelectual argentino que vive en París y luego regresa a Buenos Aires, en su búsqueda existencial del amor, el conocimiento y el sentido de la vida. La novela está estructurada de manera innovadora: puede leerse de forma lineal (capítulos 1 al 56) o siguiendo un orden alternativo propuesto por Cortázar (saltando entre capítulos como en el juego de la rayuela). La obra explora la relación entre Horacio y la Maga, una mujer misteriosa y espontánea que representa todo lo que él no es. A través de conversaciones filosóficas, reflexiones sobre el arte, la literatura y la vida, Cortázar crea una narrativa que cuestiona la realidad, el lenguaje y las formas tradicionales de contar historias. La novela incluye capítulos 'prescindibles' que amplían y comentan la historia principal, creando múltiples niveles de lectura. Rayuela no solo cuenta una historia, sino que reflexiona sobre el acto mismo de escribir y leer, convirtiendo al lector en co-creador de la obra.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-8QMyTbUpl2PgKujOlIRRGU1azl5Wr5.png",
        themes: ["Búsqueda existencial", "Amor", "Experimentación narrativa", "Filosofía", "Arte y literatura"],
        extract:
          "«Y era tan natural cruzar la calle, subir los peldaños del puente, entrar en su delgada cintura y acercarme a la Maga que sonreía sin sorpresa, convencida como yo de que un encuentro casual era lo menos casual en nuestras vidas, y que la gente que se da citas precisas es la misma que necesita papel rayado para escribirse o que aprieta desde abajo el tubo del dentífrico» (Capítulo 1)",
      },
    },
  },
  {
    id: "brazil",
    name: "Brasil",
    flag: "🇧🇷",
    capital: "Brasilia",
    population: "215.3 millones",
    language: "Portugués",
    currency: "Real brasileño (R$)",
    founded: "1822",
    writer: {
      name: "Paulo Coelho",
      profession: "Novelista",
      quote: "Cuando quieres algo, todo el universo conspira para ayudarte a conseguirlo.",
      period: "1947-presente",
      photo: "/coelho-sketch.png",
      masterwork: {
        title: "El Alquimista",
        year: "1988",
        genre: "Novela filosófica",
        summary:
          "El Alquimista es una fábula moderna sobre la búsqueda de los sueños y el descubrimiento del propósito de vida. La historia sigue a Santiago, un joven pastor andaluz que emprende un viaje desde España hasta las pirámides de Egipto en busca de un tesoro, guiado por sueños recurrentes. Durante su travesía, Santiago encuentra diversos personajes que le enseñan lecciones sobre la vida, el amor y la realización personal: un rey misterioso, un comerciante de cristales, un alquimista y Fátima, una mujer del desierto de quien se enamora. Coelho utiliza elementos del sufismo, la alquimia y la filosofía universal para crear una narrativa que trasciende las barreras culturales y religiosas. La novela explora conceptos como la 'Leyenda Personal' (el propósito único de cada individuo), las señales del universo, y la idea de que el verdadero tesoro se encuentra en el viaje mismo, no en el destino. Con un estilo simple pero profundo, la obra se ha convertido en un fenómeno mundial, traducida a más de 80 idiomas y vendiendo millones de copias.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Búsqueda personal", "Destino", "Sueños", "Espiritualidad", "Autoconocimiento"],
        extract: '"Cuando quieres algo, todo el Universo conspira para que realices tu deseo." (Prólogo)',
      },
    },
  },
  {
    id: "china",
    name: "China",
    flag: "🇨🇳",
    capital: "Pekín",
    population: "1.4 mil millones",
    language: "Chino mandarín",
    currency: "Yuan chino (¥)",
    founded: "1949",
    writer: {
      name: "Confucio",
      profession: "Filósofo y educador",
      quote: "El hombre que mueve montañas comienza cargando pequeñas piedras.",
      period: "551-479 a.C.",
      photo: "/confucio-sketch.png",
      masterwork: {
        title: "Analectas",
        year: "siglo V a.C.",
        genre: "Filosofía",
        summary:
          "Las Analectas son una colección de dichos, conversaciones y reflexiones de Confucio compiladas por sus discípulos después de su muerte. Esta obra fundamental del pensamiento chino presenta las enseñanzas del maestro sobre ética, moral, política y educación que han influenciado la cultura china durante más de dos milenios. Confucio enfatiza conceptos como el 'ren' (benevolencia o humanidad), el 'li' (ritual o propiedad), la importancia de la educación, el respeto filial y la armonía social. Las Analectas no presentan un sistema filosófico sistemático, sino que ofrecen sabiduría práctica para la vida cotidiana y el gobierno justo. Confucio creía que la sociedad podía perfeccionarse a través de la educación moral y el ejemplo de líderes virtuosos. Sus enseñanzas sobre la importancia del aprendizaje continuo, el respeto por los mayores, la moderación y la búsqueda de la armonía han moldeado no solo la cultura china, sino también las de Corea, Japón y Vietnam. La obra sigue siendo relevante hoy en día como guía para la conducta ética y el liderazgo responsable.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Ética", "Educación", "Armonía social", "Virtud", "Sabiduría práctica"],
        extract: '"Aprender sin reflexionar es malgastar la energía." (Libro II, 15)',
      },
    },
  },
  {
    id: "greece",
    name: "Grecia",
    flag: "🇬🇷",
    capital: "Atenas",
    population: "10.7 millones",
    language: "Griego",
    currency: "Euro (€)",
    founded: "1821",
    writer: {
      name: "Sócrates",
      profession: "Filósofo",
      quote: "Solo sé que no sé nada.",
      period: "470-399 a.C.",
      photo: "/socrates-sketch.png",
      masterwork: {
        title: "Apología de Sócrates",
        year: "399 a.C.",
        genre: "Diálogo filosófico",
        summary:
          "La Apología de Sócrates, escrita por Platón, es el relato del juicio y defensa de Sócrates ante los tribunales atenienses, donde fue acusado de corromper a la juventud y no creer en los dioses de la ciudad. En este diálogo, Sócrates presenta su filosofía de vida y su método de búsqueda de la verdad a través del cuestionamiento constante. La obra es fundamental para entender el pensamiento socrático y marca el nacimiento de la filosofía occidental como disciplina rigurosa. Sócrates defiende su práctica de examinar las creencias de las personas, demostrando que muchas veces lo que consideramos conocimiento es en realidad ignorancia. Su famosa declaración 'solo sé que no sé nada' ilustra su humildad intelectual y su compromiso con la búsqueda continua de la verdad. La Apología también presenta la noble actitud de Sócrates ante la muerte, prefiriendo morir antes que renunciar a su misión filosófica. La obra establece principios fundamentales sobre la importancia del examen de la vida, la integridad moral y el valor de la búsqueda de la sabiduría por encima de los bienes materiales.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Búsqueda de la verdad", "Examen de la vida", "Integridad moral", "Sabiduría", "Filosofía"],
        extract: '"Una vida sin examen no merece ser vivida." (38a)',
      },
    },
  },
  {
    id: "usa",
    name: "Estados Unidos",
    flag: "🇺🇸",
    capital: "Washington D.C.",
    population: "331.9 millones",
    language: "Inglés",
    currency: "Dólar estadounidense ($)",
    founded: "1776",
    writer: {
      name: "Edgar Allan Poe",
      profession: "Poeta y cuentista",
      quote: "Todo lo que vemos o parecemos no es sino un sueño dentro de un sueño.",
      period: "1809-1849",
      photo: "/edgar-allan-poe-sketch.png",
      masterwork: {
        title: "El cuervo",
        year: "1845",
        genre: "Poema narrativo",
        summary:
          "El cuervo es el poema más famoso de Edgar Allan Poe y una obra maestra de la literatura gótica americana. El poema narra la visita nocturna de un cuervo parlante a un hombre que lamenta la pérdida de su amada Lenore. A través de dieciocho estrofas de métrica compleja, Poe crea una atmósfera de creciente desesperación y locura. El cuervo, que solo puede pronunciar la palabra 'Nevermore' (Nunca más), se convierte en un símbolo de la permanencia de la pérdida y la imposibilidad del olvido. Poe utiliza técnicas poéticas sofisticadas como la aliteración, la asonancia y el ritmo hipnótico para crear un efecto musical que intensifica el horror psicológico. El poema explora temas universales como el duelo, la memoria, la soledad y la confrontación con la mortalidad. La estructura del poema, con su estribillo repetitivo y su progresión hacia la desesperación total, ejemplifica la teoría poética de Poe sobre el 'efecto único' que debe producir toda obra literaria. El cuervo se ha convertido en un símbolo icónico de la literatura americana y ha influenciado a generaciones de escritores.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Duelo", "Pérdida", "Locura", "Muerte", "Horror psicológico"],
        extract:
          "\"Una vez, en una lúgubre medianoche, mientras meditaba, débil y cansado, sobre muchos un volumen curioso y olvidado de saber olvidado, mientras asentía, casi dormitando, de repente se produjo un golpe, como si alguien suavemente golpeara, golpeara a la puerta de mi cámara. 'Es algún visitante', murmuré, 'que golpea a la puerta de mi cámara; esto es todo, y nada más'.\" (Estrofa 1)",
      },
    },
  },
  {
    id: "canada",
    name: "Canadá",
    flag: "🇨🇦",
    capital: "Ottawa",
    population: "38.2 millones",
    language: "Inglés",
    currency: "Dólar canadiense ($)",
    founded: "1867",
    writer: {
      name: "Margaret Atwood",
      profession: "Novelista y poeta",
      quote: "Una palabra después de una palabra después de una palabra es poder.",
      period: "1939-presente",
      photo: "/margaret-atwood-portrait.png",
      masterwork: {
        title: "El cuento de la criada",
        year: "1985",
        genre: "Distopía",
        summary:
          "El cuento de la criada es una novela distópica que presenta la República de Gilead, un estado teocrático totalitario que ha reemplazado a Estados Unidos en un futuro cercano. En esta sociedad, la fertilidad femenina ha disminuido drásticamente debido a la contaminación y las enfermedades, convirtiendo a las mujeres fértiles en un recurso valioso y controlado. La protagonista, Offred, es una 'criada' asignada a un comandante para procrear en su nombre. Atwood construye un mundo donde las mujeres han perdido todos sus derechos y son clasificadas según su función reproductiva. La novela es narrada desde la perspectiva de Offred, quien recuerda su vida anterior mientras navega por las restricciones y peligros de Gilead. A través de esta narrativa, Atwood explora temas como el control reproductivo, la opresión religiosa, la resistencia femenina y los peligros del fundamentalismo. La obra funciona como una advertencia sobre cómo los derechos pueden erosionarse gradualmente y cómo las crisis pueden ser utilizadas para justificar la opresión. La novela ha ganado nueva relevancia en debates contemporáneos sobre derechos reproductivos y autonomía femenina.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Distopía", "Derechos reproductivos", "Totalitarismo", "Resistencia femenina", "Fundamentalismo"],
        extract:
          '"Ahora estoy despierta a la hora de acostarme. Debo estar despierta. Debo recordar, aunque recuerde mal." (Capítulo 1)',
      },
    },
  },
  {
    id: "mexico",
    name: "México",
    flag: "🇲🇽",
    capital: "Ciudad de México",
    population: "128.9 millones",
    language: "Español",
    currency: "Peso mexicano ($)",
    founded: "1810",
    writer: {
      name: "Juan Rulfo",
      profession: "Novelista y cuentista",
      quote: "Uno busca llegar hasta donde el aire se serena y donde todo se aquieta.",
      period: "1917-1986",
      photo: "/juan-rulfo-sketch.png",
      masterwork: {
        title: "Pedro Páramo",
        year: "1955",
        genre: "Novela",
        summary:
          "Pedro Páramo es una obra revolucionaria que transformó la narrativa latinoamericana y anticipó muchas técnicas del realismo mágico. La novela narra la historia de Juan Preciado, quien viaja al pueblo fantasma de Comala en busca de su padre, Pedro Páramo, cumpliendo una promesa hecha a su madre moribunda. Al llegar, descubre que el pueblo está habitado por muertos que le cuentan la historia de Pedro Páramo, un cacique despótico que dominó la región. Rulfo utiliza una estructura fragmentaria y voces múltiples para crear una narrativa donde los límites entre vida y muerte, pasado y presente, se difuminan. La novela presenta un México rural devastado por la violencia, el caciquismo y la Revolución, pero lo hace a través de una prosa poética que eleva la tragedia a dimensiones míticas. Los personajes están atrapados en un purgatorio eterno, condenados a repetir sus historias de amor, venganza y muerte. La obra influyó profundamente en escritores como García Márquez y estableció nuevos paradigmas para la narrativa hispanoamericana, demostrando que la literatura regional podía alcanzar universalidad a través de la innovación formal y la profundidad poética.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Muerte", "Caciquismo", "México rural", "Realismo mágico", "Violencia"],
        extract: '"Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo." (Inicio)',
      },
    },
  },
  {
    id: "venezuela",
    name: "Venezuela",
    flag: "🇻🇪",
    capital: "Caracas",
    population: "28.4 millones",
    language: "Español",
    currency: "Bolívar venezolano (Bs)",
    founded: "1811",
    writer: {
      name: "Rómulo Gallegos",
      profession: "Novelista y político",
      quote: "La tierra es como la mujer: hay que conquistarla todos los días.",
      period: "1884-1969",
      photo: "/romulo-gallegos-sketch.png",
      masterwork: {
        title: "Doña Bárbara",
        year: "1929",
        genre: "Novela regionalista",
        summary:
          "Doña Bárbara es la novela más importante de la literatura venezolana y una obra fundamental del regionalismo latinoamericano. La historia enfrenta a Santos Luzardo, un abogado educado en Caracas que regresa a los llanos para reclamar sus tierras, con Doña Bárbara, una mujer poderosa y despiadada que domina la región a través de la violencia y la superstición. Gallegos utiliza este conflicto personal para representar la lucha entre civilización y barbarie, educación e ignorancia, ley y fuerza bruta que caracterizaba a la Venezuela de principios del siglo XX. La novela presenta un retrato épico de los llanos venezolanos, con sus tradiciones, su naturaleza salvaje y sus habitantes. Doña Bárbara es un personaje complejo que encarna tanto la fuerza destructiva como la vitalidad de la tierra americana. A través de la transformación gradual de ambos protagonistas, Gallegos explora temas como la redención, el poder del amor y la educación como fuerzas civilizadoras. La obra combina realismo social con elementos míticos y folclóricos, creando una síntesis entre lo particular venezolano y lo universal humano. La novela influyó en toda una generación de escritores latinoamericanos y estableció el modelo de la novela de la tierra.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Civilización vs barbarie", "Llanos venezolanos", "Poder", "Redención", "Identidad nacional"],
        extract: '"La sabana es ancha y ajena." (Capítulo 1)',
      },
    },
  },
  {
    id: "cuba",
    name: "Cuba",
    flag: "🇨🇺",
    capital: "La Habana",
    population: "11.3 millones",
    language: "Español",
    currency: "Peso cubano ($)",
    founded: "1902",
    writer: {
      name: "José Martí",
      profession: "Poeta, ensayista y político",
      quote: "Ser culto es el único modo de ser libre.",
      period: "1853-1895",
      photo: "/jose-marti-historical.png",
      masterwork: {
        title: "Versos Sencillos",
        year: "1891",
        genre: "Poesía",
        summary:
          "Versos Sencillos es la obra poética más conocida de José Martí y una de las cumbres de la poesía hispanoamericana del siglo XIX. Compuesta durante su exilio en Nueva York, la colección refleja la nostalgia del poeta por su patria, sus reflexiones sobre la libertad, la justicia y la condición humana. Los poemas, escritos en cuartetas octosílabas de rima asonante, combinan la sencillez formal con una profundidad emocional y filosófica extraordinaria. Martí utiliza imágenes de la naturaleza americana, especialmente de Cuba, para expresar sus sentimientos patrióticos y su visión de una América Latina unida y libre. Los versos abordan temas como el amor a la patria, la solidaridad con los oprimidos, la belleza de la naturaleza y la búsqueda de la autenticidad. El poema más famoso, 'Yo soy un hombre sincero', se convirtió en la letra de la canción 'Guantanamera', difundiendo la poesía de Martí por todo el mundo. La obra refleja la síntesis martiana entre pensamiento y sentimiento, entre compromiso político y expresión artística, estableciendo un modelo para la literatura comprometida en América Latina.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Patriotismo", "Libertad", "Naturaleza americana", "Exilio", "Compromiso social"],
        extract:
          '"Yo soy un hombre sincero / De donde crece la palma, / Y antes de morirme quiero / Echar mis versos del alma." (I)',
      },
    },
  },
  {
    id: "south_africa",
    name: "Sudáfrica",
    flag: "🇿🇦",
    capital: "Ciudad del Cabo",
    population: "60.4 millones",
    language: "Inglés",
    currency: "Rand sudafricano (R)",
    founded: "1910",
    writer: {
      name: "J.R.R. Tolkien",
      profession: "Filólogo y escritor",
      quote: "No todo lo que es oro reluce, ni toda la gente errante anda perdida.",
      period: "1892-1973",
      photo: "/tolkien-sketch.png",
      masterwork: {
        title: "El Señor de los Anillos",
        year: "1954-1955",
        genre: "Fantasía épica",
        summary:
          "El Señor de los Anillos es una obra épica de fantasía que narra la lucha entre el bien y el mal en la Tierra Media, un mundo secundario creado por Tolkien con extraordinario detalle. La historia sigue a Frodo Bolsón, un hobbit que debe destruir el Anillo Único para derrotar al Señor Oscuro Sauron. Acompañado por la Comunidad del Anillo, Frodo emprende un viaje peligroso que lo llevará a través de paisajes diversos y enfrentamientos épicos. Tolkien, profesor de filología en Oxford, creó no solo una narrativa compleja sino también idiomas completos, genealogías, mapas y una historia milenaria para su mundo ficticio. La obra explora temas universales como la amistad, el sacrificio, la corrupción del poder, la pérdida de la inocencia y la lucha entre la esperanza y la desesperación. Los personajes, desde el sabio Gandalf hasta el atormentado Gollum, representan diferentes aspectos de la naturaleza humana. La trilogía estableció las bases de la fantasía moderna como género literario y ha influenciado a generaciones de escritores. La obra combina elementos de la mitología nórdica, celta y germánica con temas cristianos, creando una mitología moderna que resuena con lectores de todas las culturas.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Bien vs mal", "Amistad", "Sacrificio", "Poder", "Mitología moderna"],
        extract:
          '"Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos, Un Anillo para atraerlos a todos y atarlos en las tinieblas." (La inscripción del Anillo)',
      },
    },
  },
  {
    id: "switzerland",
    name: "Suiza",
    flag: "🇨🇭",
    capital: "Berna",
    population: "8.7 millones",
    language: "Alemán",
    currency: "Franco suizo (CHF)",
    founded: "1291",
    writer: {
      name: "Hermann Hesse",
      profession: "Novelista y poeta",
      quote: "Algunos nacemos para vivir solos, otros para vivir con otros, pero todos nacemos para vivir.",
      period: "1877-1962",
      photo: "/herman-hesse-sketch.png",
      masterwork: {
        title: "Siddhartha",
        year: "1922",
        genre: "Novela filosófica",
        summary:
          "Siddhartha es una novela que narra el viaje espiritual de un joven brahmán en la India antigua en busca de la iluminación. Inspirado en la vida de Buda pero no siendo una biografía, Hesse crea una parábola universal sobre la búsqueda del sentido de la vida y la sabiduría. Siddhartha abandona su vida privilegiada para convertirse en asceta, luego en comerciante y amante, y finalmente en barquero, aprendiendo que la sabiduría no puede ser enseñada sino que debe ser experimentada personalmente. La novela refleja el interés de Hesse por la filosofía oriental, particularmente el budismo y el hinduismo, pero también incorpora elementos del pensamiento occidental. A través del personaje de Siddhartha, Hesse explora temas como la dualidad entre espíritu y materia, la naturaleza cíclica del tiempo, la importancia de la experiencia directa sobre el conocimiento libresco, y la unidad fundamental de toda existencia. La prosa de Hesse es lírica y contemplativa, creando una atmósfera de serenidad y profundidad espiritual. La obra se convirtió en un texto fundamental para la contracultura de los años 60 y sigue siendo relevante para quienes buscan significado espiritual en un mundo materialista.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Búsqueda espiritual", "Iluminación", "Sabiduría", "Filosofía oriental", "Autoconocimiento"],
        extract:
          '"La sabiduría no es comunicable. La sabiduría que un sabio intenta comunicar siempre suena a locura." (Capítulo 4)',
      },
    },
  },
  {
    id: "uk_caitlin",
    name: "Reino Unido",
    flag: "🇬🇧",
    capital: "Londres",
    population: "67.8 millones",
    language: "Inglés",
    currency: "Libra esterlina (£)",
    founded: "1707",
    writer: {
      name: "Caitlin Moran",
      profession: "Periodista y escritora",
      quote: "Las bibliotecas son catedrales de la mente; hospitales del alma; parques temáticos de la imaginación.",
      period: "1975-presente",
      photo: "/caitlin-moran-library-hero.png",
      masterwork: {
        title: "Cómo ser mujer",
        year: "2011",
        genre: "Ensayo autobiográfico",
        summary:
          "Cómo ser mujer es un ensayo autobiográfico que combina humor, honestidad brutal y análisis social para explorar la experiencia femenina en el siglo XXI. Moran utiliza episodios de su propia vida para examinar temas como la pubertad, la sexualidad, el trabajo, la maternidad y el feminismo con un estilo irreverente y accesible. La obra desmitifica muchos aspectos de la experiencia femenina, desde los primeros sujetadores hasta las presiones sociales sobre el cuerpo y la carrera profesional. Moran argumenta que el feminismo no es una ideología compleja sino simplemente la creencia de que las mujeres son seres humanos completos que merecen igualdad de oportunidades. A través de anécdotas divertidas y observaciones perspicaces, la autora aborda la hipocresía de la sociedad respecto a las mujeres y propone una visión más auténtica y liberadora de la feminidad. El libro se convirtió en un fenómeno editorial y ayudó a revitalizar el discurso feminista para una nueva generación, demostrando que el feminismo puede ser divertido, inclusivo y profundamente personal.",
        image: "/caitlin-moran-quote.png",
        themes: ["Feminismo", "Experiencia femenina", "Humor", "Autobiografía", "Crítica social"],
        extract: '"El feminismo es simplemente esto: una persona cree que las mujeres son personas." (Capítulo 1)',
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

/* OVERLAY EXPANDIDO CON PROPORCIÓN ÁUREA */
.masterwork-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.masterwork-content {
  background: rgba(255, 255, 255, 0.98);
  border-radius: 20px;
  width: 90vw;
  height: 90vh; /* Altura fija basada en viewport */
  max-width: 1400px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.masterwork-header {
  height: 38.2vh; /* Proporción áurea: parte menor (38.2%) */
  min-height: 200px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.masterwork-body {
  height: 61.8vh; /* Proporción áurea: parte mayor (61.8%) */
  min-height: 300px;
  overflow-y: auto;
  padding: 2rem;
  background: white;
  border-radius: 0 0 20px 20px;
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
  padding: 1rem;
}

.masterwork-content {
  max-width: 95vw;
  max-height: 95vh;
}
}
`}
      </style>

      {/* OVERLAY EXPANDIDO PARA OBRA MAESTRA */}
      {expandedCountry && (
        <div className="masterwork-overlay" onClick={closeExpanded}>
          <div className="masterwork-content" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 h-10 w-10 p-0 z-20 bg-white/80 hover:bg-white text-black hover:text-black"
              onClick={closeExpanded}
            >
              <X className="h-6 w-6 text-black" />
            </Button>

            {(() => {
              const country = countries.find((c) => c.id === expandedCountry)
              if (!country) return null

              return (
                <>
                  {/* HEADER CON PROPORCIÓN ÁUREA - PARTE MENOR */}
                  <div className="masterwork-header">
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
                  <div className="masterwork-body">
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
