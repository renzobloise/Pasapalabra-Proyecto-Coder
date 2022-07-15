//DIBUJO DEL ROSCO EN PANTALLA DE JUEGO
const circles = document.querySelectorAll('.dibujoLetra')

const n = 25; // numero de circulos
const r = 290 // radio

let angulo = 0;
let originX = circles[0].offsetLeft
let originY = circles[0].offsetTop

setInterval(() => {
    angulo += 0.00;
    circles.forEach((element, i) => {
        element.style.left = `${originX + r*Math.cos(angulo + 2*Math.PI/n*i)}px`
        element.style.top = `${originY + r*Math.sin(angulo + 2*Math.PI/n*i)}px`
    })
}, 20)


//CREACIÓN DE LAS PALABRAS Y SUS DEFINICIONES
const preguntas = [letraA = [{
            id: 0,
            letra: "A",
            palabra: "ACORDEON",
            dificultad: "MEDIA",
            definicion: "Instrumento musical de viento, formado por un fuelle cuyos dos extremos se cierran por sendas cajas, especie de estuches, en los que juegan cierto número de llaves o teclas que permiten seleccionar los sonidos."
        },
        {
            id: 1,
            letra: "A",
            palabra: "ASESINAR",
            dificultad: "BAJA",
            definicion: "Matar a alguien con alevosía, ensañamiento o por una recompensa."
        },
        {
            id: 2,
            letra: "A",
            palabra: "ARTERIA",
            dificultad: "MEDIA",
            definicion: "Cada uno de los vasos que llevan la sangre desde el corazón a las distintas partes del cuerpo."
        },
        {
            id: 3,
            letra: "A",
            palabra: "ARTISTA",
            dificultad: "BAJA",
            definicion: "Persona que actúa profesionalmente en un espectáculo teatral, cinematográfico, circense, etc., interpretando ante el público."
        },
        {
            id: 4,
            letra: "A",
            palabra: "ANCIANO",
            dificultad: "BAJA",
            definicion: "Dicho de una persona: De mucha edad."
        },
    ],
    letraB = [{
            id: 0,
            letra: "B",
            palabra: "BALA",
            dificultad: "BAJA",
            definicion: "Proyectil de forma esférica o cilíndrico-ojival, generalmente de plomo o hierro."
        },
        {
            id: 1,
            letra: "B",
            palabra: "BOCINA",
            dificultad: "BAJA",
            definicion: "En un automóvil y otros vehículos, dispositivo mecánico o electrónico que emite señales acústicas."
        },
        {
            id: 2,
            letra: "B",
            palabra: "BARAJA",
            dificultad: "BAJA",
            definicion: "Conjunto completo de cartas empleado para juegos de azar."
        },
        {
            id: 3,
            letra: "B",
            palabra: "BOLIDO",
            dificultad: "MEDIA",
            definicion: "Vehículo automóvil que alcanza extraordinaria velocidad, especialmente el que participa en carreras."
        },
        {
            id: 4,
            letra: "B",
            palabra: "BARULLO",
            dificultad: "MEDIA",
            definicion: "Confusión, desorden, mezcla de gentes o cosas de varias clases."
        },
    ],
    letraC = [{
            id: 0,
            letra: "C",
            palabra: "CONDOMINIO",
            dificultad: "MEDIA",
            definicion: "Propiedad que pertenece de manera colectiva e indivisible a un conjunto de personas sin asignación de cuotas entre ellas."
        },
        {
            id: 1,
            letra: "C",
            palabra: "CARCAJADA",
            dificultad: "BAJA",
            definicion: "Risa impetuosa y ruidosa."
        },
        {
            id: 2,
            letra: "C",
            palabra: "CLON",
            dificultad: "ALTA",
            definicion: "Conjunto de células u organismos genéticamente idénticos, originado por reproducción asexual a partir de una única célula u organismo o por división artificial de estados embrionarios iniciales."
        },
        {
            id: 3,
            letra: "C",
            palabra: "CUTRE",
            dificultad: "MEDIA",
            definicion: "Pobre, descuidado, sucio o de mala calidad. "
        },
        {
            id: 4,
            letra: "C",
            palabra: "CUERDA",
            dificultad: "BAJA",
            definicion: "Conjunto de hilos entrelazados que forman un solo cuerpo largo y flexible que sirve para atar, suspender pesos, etc."
        },
    ],
    letraD = [{
            id: 0,
            letra: "D",
            palabra: "DORADO",
            dificultad: "BAJA",
            definicion: "Dicho de un color: Semejante al del oro."
        },
        {
            id: 1,
            letra: "D",
            palabra: "DINOSAURIO",
            dificultad: "BAJA",
            definicion: " Reptil fósil, propio del Mesozoico, generalmente de gran tamaño, cabeza pequeña, cuello largo, cola robusta y larga, y extremidades posteriores más largas que las anteriores"
        },
        {
            id: 2,
            letra: "D",
            palabra: "DEDAL",
            dificultad: "MEDIA",
            definicion: "Utensilio pequeño, ligeramente cónico y hueco, con la superficie llena de hoyuelos y cerrado a veces por un casquete esférico para proteger el dedo al coser."
        },
        {
            id: 3,
            letra: "D",
            palabra: "DISCO",
            dificultad: "MEDIA",
            definicion: "Cuerpo cilíndrico cuya base es muy grande respecto de su altura. "
        },
        {
            id: 4,
            letra: "D",
            palabra: "DUALISMO",
            dificultad: "ALTA",
            definicion: " Creencia religiosa de pueblos antiguos, que consistía en considerar el universo como formado y mantenido por el concurso de dos principios igualmente necesarios y eternos, y por consiguiente independientes uno de otro."
        },
    ],
    letraE = [{
            id: 0,
            letra: "E",
            palabra: "ESCALON",
            dificultad: "BAJA",
            definicion: "Cada una de las partes de la escalera de un edificio, construcción o terreno, en que se apoya el pie para subir o bajar."
        },
        {
            id: 1,
            letra: "E",
            palabra: "ENANO",
            dificultad: "BAJA",
            definicion: " Dicho de una persona: De estatura muy baja"
        },
        {
            id: 2,
            letra: "E",
            palabra: "ECLIPSE",
            dificultad: "MEDIA",
            definicion: "Ocultación transitoria total o parcial de un astro por interposición de otro cuerpo celeste."
        },
        {
            id: 3,
            letra: "E",
            palabra: "ELECTRICIDAD",
            dificultad: "MEDIA",
            definicion: "Fuerza que se manifiesta por la atracción o repulsión entre partículas cargadas, originada por la existencia de electrones y protones. "
        },
        {
            id: 4,
            letra: "E",
            palabra: "ENCICLOPEDIA",
            dificultad: "ALTA",
            definicion: " Conjunto orgánico de todos los conocimientos."
        },
    ],
    letraF = [{
            id: 0,
            letra: "F",
            palabra: "FLOJO",
            dificultad: "BAJA",
            definicion: "Mal atado, poco apretado o poco tirante."
        },
        {
            id: 1,
            letra: "F",
            palabra: "FLOR",
            dificultad: "BAJA",
            definicion: " Brote de muchas plantas, formado por hojas de colores, del que se formará el fruto."
        },
        {
            id: 2,
            letra: "F",
            palabra: "FALACIA",
            dificultad: "MEDIA",
            definicion: "Engaño, fraude o mentira"
        },
        {
            id: 3,
            letra: "F",
            palabra: "FORJAR",
            dificultad: "MEDIA",
            definicion: "Dar la primera forma con el martillo a cualquier pieza de metal. "
        },
        {
            id: 4,
            letra: "F",
            palabra: "FORMIDABLE",
            dificultad: "ALTA",
            definicion: " Muy temible y que infunde asombro y miedo."
        },
    ],
    letraG = [{
            id: 0,
            letra: "G",
            palabra: "GORILA",
            dificultad: "BAJA",
            definicion: "Primate antropoide de África ecuatorial, de pelaje oscuro y brazos más largos que las piernas, que puede alcanzar dos metros de alto"
        },
        {
            id: 1,
            letra: "G",
            palabra: "GOTA",
            dificultad: "BAJA",
            definicion: " Pequeña porción de un líquido, con forma esferoidal."
        },
        {
            id: 2,
            letra: "G",
            palabra: "GALAXIA",
            dificultad: "MEDIA",
            definicion: "Conjunto enorme de estrellas, polvo interestelar, gases y partículas, que constituye un sistema autónomo dentro del universo."
        },
        {
            id: 3,
            letra: "G",
            palabra: "GONORREA",
            dificultad: "MEDIA",
            definicion: "Enfermedad contagiosa de origen bacteriano, que se transmite por vía sexual y se caracteriza por un flujo purulento de la vagina o de la uretra. "
        },
        {
            id: 4,
            letra: "G",
            palabra: "GALIMATIAS",
            dificultad: "ALTA",
            definicion: "Lenguaje oscuro por la impropiedad de la frase o por la confusión de las ideas."
        },
    ],
    letraH = [{
            id: 0,
            letra: "H",
            palabra: "HELICOPTERO",
            dificultad: "BAJA",
            definicion: "Aeronave que, a diferencia del avión, se sostiene merced a un rotor de eje oblicuo movido por un motor, lo que le permite elevarse y descender verticalmente."
        },
        {
            id: 1,
            letra: "H",
            palabra: "HECHO",
            dificultad: "BAJA",
            definicion: " Cosa que sucede."
        },
        {
            id: 2,
            letra: "H",
            palabra: "HONDA",
            dificultad: "MEDIA",
            definicion: "Tira de cuero o trenza de lana, cáñamo, esparto u otra materia semejante, que se usa para tirar piedras con violencia."
        },
        {
            id: 3,
            letra: "H",
            palabra: "HONDURAS",
            dificultad: "MEDIA",
            definicion: "País de América Central con costas en el mar Caribe al norte y en el océano Pacífico al sur, cuya capital es Tegucigalpa  "
        },
        {
            id: 4,
            letra: "H",
            palabra: "HORADAR",
            dificultad: "ALTA",
            definicion: "Agujerear algo atravesándolo de parte a parte."
        },
    ],
    letraI = [{
            id: 0,
            letra: "I",
            palabra: "INCENDIO",
            dificultad: "BAJA",
            definicion: "Fuego grande que destruye lo que no debería quemarse."
        },
        {
            id: 1,
            letra: "I",
            palabra: "INANIMADO",
            dificultad: "BAJA",
            definicion: "Que no tiene alma"
        },
        {
            id: 2,
            letra: "I",
            palabra: "INTRINSECO",
            dificultad: "MEDIA",
            definicion: "Íntimo, esencial."
        },
        {
            id: 3,
            letra: "I",
            palabra: "INSTITUCION",
            dificultad: "MEDIA",
            definicion: "Cada una de las organizaciones fundamentales de un Estado, nación o sociedad. "
        },
        {
            id: 4,
            letra: "I",
            palabra: "ION",
            dificultad: "ALTA",
            definicion: "Átomo o agrupación de átomos que por pérdida o ganancia de uno o más electrones adquiere carga eléctrica."
        },
    ],
    letraJ = [{
            id: 0,
            letra: "J",
            palabra: "JUNGLA",
            dificultad: "BAJA",
            definicion: "En la India y otros países de Asia y América, terreno de vegetación muy espesa."
        },
        {
            id: 1,
            letra: "J",
            palabra: "JIRON",
            dificultad: "BAJA",
            definicion: "Pedazo desgarrado del vestido o de otra ropa."
        },
        {
            id: 2,
            letra: "J",
            palabra: "JOLGORIO",
            dificultad: "MEDIA",
            definicion: "Regocijo, fiesta, diversión bulliciosa."
        },
        {
            id: 3,
            letra: "J",
            palabra: "JOROBA",
            dificultad: "MEDIA",
            definicion: "Giba, corcova, chepa. "
        },
        {
            id: 4,
            letra: "J",
            palabra: "JACTA",
            dificultad: "ALTA",
            definicion: "Dicho de una persona: Alabarse excesiva y presuntuosamente, con fundamento o sin él y aun de acciones criminales o vergonzosas."
        },
    ],
    letraL = [{
            id: 0,
            letra: "L",
            palabra: "LECTURA",
            dificultad: "BAJA",
            definicion: "Acción de leer."
        },
        {
            id: 1,
            letra: "L",
            palabra: "LENGUA",
            dificultad: "BAJA",
            definicion: "Órgano muscular situado en la cavidad de la boca de los vertebrados y que sirve para gustar y deglutir, así como para modular sonidos."
        },
        {
            id: 2,
            letra: "L",
            palabra: "LAUDABLE",
            dificultad: "MEDIA",
            definicion: "Digno de alabanza."
        },
        {
            id: 3,
            letra: "L",
            palabra: "LISTON",
            dificultad: "MEDIA",
            definicion: "Cinta de seda de menos de dos dedos de ancho. "
        },
        {
            id: 4,
            letra: "L",
            palabra: "LIBANO",
            dificultad: "ALTA",
            definicion: "País en Oriente Próximo que limita al sur con Israel y al norte y al este con Siria, y está bañado por el mar Mediterráneo al oeste. Su capital es Beirut"
        },
    ],
    letraM = [{
            id: 0,
            letra: "M",
            palabra: "MORCILLA",
            dificultad: "BAJA",
            definicion: "Trozo de tripa de cerdo, carnero o vaca, o materia análoga, rellena de sangre cocida, que se condimenta con especias y, frecuentemente, cebolla, y a la que suelen añadírsele otros ingredientes como arroz, piñones, miga de pan"
        },
        {
            id: 1,
            letra: "M",
            palabra: "MARATON",
            dificultad: "BAJA",
            definicion: "Competición de resistencia"
        },
        {
            id: 2,
            letra: "M",
            palabra: "MILICIA",
            dificultad: "MEDIA",
            definicion: "Arte de hacer la guerra y de disciplinar a los soldados para ella."
        },
        {
            id: 3,
            letra: "M",
            palabra: "MELODRAMA",
            dificultad: "MEDIA",
            definicion: "Obra teatral, literaria, cinematográfica o radiofónica en la que se acentúan los aspectos patéticos y sentimentales."
        },
        {
            id: 4,
            letra: "M",
            palabra: "MECA",
            dificultad: "ALTA",
            definicion: "Lugar que atrae por ser centro donde una actividad determinada tiene su mayor o mejor cultivo."
        },
    ],
    letraN = [{
            id: 0,
            letra: "N",
            palabra: "NADIE",
            dificultad: "BAJA",
            definicion: "Ninguna persona."
        },
        {
            id: 1,
            letra: "N",
            palabra: "NECESIDAD",
            dificultad: "BAJA",
            definicion: "Impulso irresistible que hace que las causas obren infaliblemente en cierto sentido."
        },
        {
            id: 2,
            letra: "N",
            palabra: "NOBLE",
            dificultad: "MEDIA",
            definicion: "Preclaro, ilustre, generoso."
        },
        {
            id: 3,
            letra: "N",
            palabra: "NODO",
            dificultad: "MEDIA",
            definicion: "En un esquema o representación gráfica en forma de árbol, cada uno de los puntos de origen de las distintas ramificaciones."
        },
        {
            id: 4,
            letra: "N",
            palabra: "NACAR",
            dificultad: "ALTA",
            definicion: "Capa interna de las tres que forman la concha de los moluscos, constituida por la mezcla de carbonato cálcico y una sustancia orgánica, y dispuesta en láminas paralelas entre sí. Cuando estas son lo bastante delgadas para que la luz se difracte al atravesarlas, producen reflejos irisados característicos.."
        },
    ],
    letraÑ = [{
            id: 0,
            letra: "Ñ",
            palabra: "CAÑO",
            dificultad: "BAJA",
            definicion: "Pieza de tubería.."
        },
        {
            id: 1,
            letra: "Ñ",
            palabra: "PAÑO",
            dificultad: "BAJA",
            definicion: "Tela de lana muy tupida y con pelo tanto más corto cuanto más fino es el tejido."
        },
        {
            id: 2,
            letra: "Ñ",
            palabra: "AÑORAR",
            dificultad: "MEDIA",
            definicion: "Recordar con pena la ausencia, privación o pérdida de alguien o algo muy querido."
        },
        {
            id: 3,
            letra: "Ñ",
            palabra: "CALAÑA",
            dificultad: "MEDIA",
            definicion: "Muestra, modelo, patrón, forma."
        },
        {
            id: 4,
            letra: "Ñ",
            palabra: "ESTAÑO",
            dificultad: "ALTA",
            definicion: "Elemento químico metálico, de núm. atóm. 50, de color y brillo plateados, que se emplea para recubrir otros metales, en el envasado de alimentos y en soldaduras, y que, aleado con el cobre, forma el bronce. "
        },
    ],
    letraO = [{
            id: 0,
            letra: "O",
            palabra: "OPACO",
            dificultad: "BAJA",
            definicion: "Que impide el paso a la luz, a diferencia de diáfano."
        },
        {
            id: 1,
            letra: "O",
            palabra: "ONIRICO",
            dificultad: "BAJA",
            definicion: "Perteneciente o relativo a los sueños."
        },
        {
            id: 2,
            letra: "O",
            palabra: "OXIDO",
            dificultad: "MEDIA",
            definicion: "Compuesto que resulta de combinar oxígeno generalmente con un metal, o a veces con un metaloide."
        },
        {
            id: 3,
            letra: "O",
            palabra: "ONOMATOPEYA",
            dificultad: "MEDIA",
            definicion: "Formación de una palabra por imitación del sonido de aquello que designa."
        },
        {
            id: 4,
            letra: "O",
            palabra: "ORACULO",
            dificultad: "ALTA",
            definicion: "Especialmente en la Antigüedad grecorromana, respuesta que una deidad daba a una consulta, a través de un intermediario y en un lugar sagrado. "
        },
    ],
    letraP = [{
            id: 0,
            letra: "P",
            palabra: "PIEDAD",
            dificultad: "BAJA",
            definicion: "Lástima, misericordia, conmiseración."
        },
        {
            id: 1,
            letra: "P",
            palabra: "PANQUEQUE",
            dificultad: "BAJA",
            definicion: "Tortita que se hace con masa de harina, yemas de huevo batidas y un poco de leche"
        },
        {
            id: 2,
            letra: "P",
            palabra: "POLIGONO",
            dificultad: "MEDIA",
            definicion: "Porción de plano limitada por líneas rectas."
        },
        {
            id: 3,
            letra: "P",
            palabra: "PALINDROMO",
            dificultad: "MEDIA",
            definicion: "Palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda"
        },
        {
            id: 4,
            letra: "P",
            palabra: "PARTENAIRE",
            dificultad: "ALTA",
            definicion: "Persona que interviene como compañero o pareja de otra en una actividad, especialmente en un espectáculo. "
        },
    ],
    letraQ = [{
            id: 0,
            letra: "Q",
            palabra: "PARQUE",
            dificultad: "BAJA",
            definicion: "En una población, espacio que se dedica a praderas, jardines y arbolado, con ornamentos diversos, para el esparcimiento de sus habitantes."
        },
        {
            id: 1,
            letra: "Q",
            palabra: "MAQUETA",
            dificultad: "BAJA",
            definicion: "Modelo a escala reducida de una construcción."
        },
        {
            id: 2,
            letra: "Q",
            palabra: "AQUELARRE",
            dificultad: "MEDIA",
            definicion: "Junta o reunión nocturna de brujos y brujas, con la supuesta intervención del demonio ordinariamente en figura de macho cabrío, para sus prácticas mágicas o supersticiosas."
        },
        {
            id: 3,
            letra: "Q",
            palabra: "MARQUES",
            dificultad: "MEDIA",
            definicion: "Persona con el título nobiliario inferior al de duque y superior al de conde."
        },
        {
            id: 4,
            letra: "Q",
            palabra: "MOZAMBIQUE",
            dificultad: "ALTA",
            definicion: "País del sur de África cuya larga costa en el océano Índico y cuya capital es Maputo "
        },
    ],
    letraR = [{
            id: 0,
            letra: "R",
            palabra: "RUEDA",
            dificultad: "BAJA",
            definicion: "Pieza mecánica en forma de disco que gira alrededor de un eje.."
        },
        {
            id: 1,
            letra: "R",
            palabra: "ROTO",
            dificultad: "BAJA",
            definicion: "Agotado o muy cansado."
        },
        {
            id: 2,
            letra: "R",
            palabra: "RONQUERA",
            dificultad: "MEDIA",
            definicion: "Afección de la laringe, que cambia el timbre de la voz haciéndolo bronco y poco sonoro."
        },
        {
            id: 3,
            letra: "R",
            palabra: "RISPIDO",
            dificultad: "MEDIA",
            definicion: "Áspero, violento, intratable."
        },
        {
            id: 4,
            letra: "R",
            palabra: "ROANO",
            dificultad: "ALTA",
            definicion: "Dicho de un caballo o de una yegua: De pelo mezclado de blanco, gris y bayo. "
        },
    ],
    letraS = [{
            id: 0,
            letra: "S",
            palabra: "SOBERANO",
            dificultad: "BAJA",
            definicion: " Que ejerce o posee la autoridad suprema e independiente."
        },
        {
            id: 1,
            letra: "S",
            palabra: "SABANA",
            dificultad: "BAJA",
            definicion: "Cada una de las dos piezas de lienzo, algodón u otro tejido, de tamaño suficiente para cubrir la cama y colocar el cuerpo entre ambas."
        },
        {
            id: 2,
            letra: "S",
            palabra: "SOBRIO",
            dificultad: "MEDIA",
            definicion: "Que carece de adornos superfluos"
        },
        {
            id: 3,
            letra: "S",
            palabra: "SINAGOGA",
            dificultad: "MEDIA",
            definicion: "Congregación o junta religiosa de los judíos."
        },
        {
            id: 4,
            letra: "S",
            palabra: "SOEZ",
            dificultad: "ALTA",
            definicion: "Bajo, grosero, indigno, vil."
        },
    ],
    letraT = [{
            id: 0,
            letra: "T",
            palabra: "TERNO",
            dificultad: "BAJA",
            definicion: " Conjunto de pantalón, chaleco y chaqueta, u otra prenda semejante, hechos de una misma tela."
        },
        {
            id: 1,
            letra: "T",
            palabra: "TALADRO",
            dificultad: "BAJA",
            definicion: "Herramienta aguda o cortante con que se agujerea la madera u otra cosa."
        },
        {
            id: 2,
            letra: "T",
            palabra: "TUETANO",
            dificultad: "MEDIA",
            definicion: "Parte interior de una raíz o tallo de una planta."
        },
        {
            id: 3,
            letra: "T",
            palabra: "TORPIDO",
            dificultad: "MEDIA",
            definicion: "Que reacciona con dificultad o torpeza."
        },
        {
            id: 4,
            letra: "T",
            palabra: "TALISMÁN",
            dificultad: "ALTA",
            definicion: "Objeto, a veces con figura o inscripción, al que se atribuyen poderes mágicos."
        },
    ],
    letraU = [{
            id: 0,
            letra: "U",
            palabra: "URANO",
            dificultad: "BAJA",
            definicion: "Séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo"
        },
        {
            id: 1,
            letra: "U",
            palabra: "UNICORNIO",
            dificultad: "BAJA",
            definicion: "Animal fabuloso que fingieron los antiguos poetas, de forma de caballo y con un cuerno recto en mitad de la frente."
        },
        {
            id: 2,
            letra: "U",
            palabra: "UNANIME",
            dificultad: "MEDIA",
            definicion: "Dicho de dos o más personas: Que tienen un mismo parecer, dictamen, voluntad o sentimiento."
        },
        {
            id: 3,
            letra: "U",
            palabra: "URETRA",
            dificultad: "MEDIA",
            definicion: " En los humanos y en otros animales, conducto por donde se expulsa la orina desde la vejiga al exterior."
        },
        {
            id: 4,
            letra: "U",
            palabra: "UZBEKISTAN",
            dificultad: "ALTA",
            definicion: "País de Asia Central y una antigua república soviética. Es conocido por sus mezquitas, mausoleos y otros sitios vinculados con la Ruta de la Seda, la antigua ruta comercial entre China y el Mediterráneo. Su capital es Taskent"
        },
    ],
    letraV = [{
            id: 0,
            letra: "V",
            palabra: "VENUS",
            dificultad: "BAJA",
            definicion: "Diosa romana de la belleza y el amor erótico"
        },
        {
            id: 1,
            letra: "V",
            palabra: "VENENO",
            dificultad: "BAJA",
            definicion: "Sustancia que, introducida en un ser vivo, es capaz de producir graves alteraciones funcionales e incluso la muerte."
        },
        {
            id: 2,
            letra: "V",
            palabra: "VIL",
            dificultad: "MEDIA",
            definicion: "Bajo o despreciable."
        },
        {
            id: 3,
            letra: "V",
            palabra: "VESTIGIO",
            dificultad: "MEDIA",
            definicion: "Ruina, señal o resto que queda de algo material o inmaterial."
        },
        {
            id: 4,
            letra: "V",
            palabra: "VERRUGA",
            dificultad: "ALTA",
            definicion: "Excrecencia cutánea por lo general redonda."
        },
    ],
    letraX = [{
            id: 0,
            letra: "X",
            palabra: "EXITISTA",
            dificultad: "BAJA",
            definicion: "Dicho de una persona: Propensa o inclinada al exitismo"
        },
        {
            id: 1,
            letra: "X",
            palabra: "MAXIMA",
            dificultad: "BAJA",
            definicion: "Regla, principio o proposición generalmente admitida por quienes profesan una facultad o ciencia."
        },
        {
            id: 2,
            letra: "X",
            palabra: "EXALTAR",
            dificultad: "MEDIA",
            definicion: "Elevar a alguien o algo a gran auge o dignidad."
        },
        {
            id: 3,
            letra: "X",
            palabra: "AXIOMA",
            dificultad: "MEDIA",
            definicion: "Proposición tan clara y evidente que se admite sin demostración."
        },
        {
            id: 4,
            letra: "X",
            palabra: "YUXTAPONER",
            dificultad: "ALTA",
            definicion: "Poner algo junto a otra cosa o inmediata a ella."
        },
    ],
    letraY = [{
            id: 0,
            letra: "Y",
            palabra: "YUYO",
            dificultad: "BAJA",
            definicion: "Mala hierba"
        },
        {
            id: 1,
            letra: "Y",
            palabra: "YOGA",
            dificultad: "BAJA",
            definicion: "Conjunto de disciplinas físico-mentales originales de la India, destinadas a conseguir la perfección espiritual y la unión con lo absoluto."
        },
        {
            id: 2,
            letra: "Y",
            palabra: "YERRO",
            dificultad: "MEDIA",
            definicion: "Falta o delito cometido, por ignorancia o malicia, contra los preceptos y reglas de un arte, y absolutamente, contra las leyes divinas y humanas."
        },
        {
            id: 3,
            letra: "Y",
            palabra: "YACIMIENTO",
            dificultad: "MEDIA",
            definicion: "Sitio donde se halla naturalmente una roca, un mineral o un fósil."
        },
        {
            id: 4,
            letra: "Y",
            palabra: "YIHAD",
            dificultad: "ALTA",
            definicion: "En la religión islámica, esfuerzo de superación espiritual."
        },
    ],
    letraZ = [{
            id: 0,
            letra: "Z",
            palabra: "ZANGANO",
            dificultad: "BAJA",
            definicion: "Persona floja, desmañada y torpe."
        },
        {
            id: 1,
            letra: "Z",
            palabra: "ZOPENCO",
            dificultad: "BAJA",
            definicion: "Tonto y abrutado"
        },
        {
            id: 2,
            letra: "Z",
            palabra: "ZOZOBRAR",
            dificultad: "MEDIA",
            definicion: "Dicho de una embarcación: Peligrar por la fuerza y contraste de los vientos."
        },
        {
            id: 3,
            letra: "Z",
            palabra: "ZONA",
            dificultad: "MEDIA",
            definicion: "Extensión considerable de terreno que tiene forma de banda o franja.."
        },
        {
            id: 4,
            letra: "Z",
            palabra: "ZANZIBAR",
            dificultad: "ALTA",
            definicion: "Archipiélago de dos islas —Unguja y Pemba— de apenas 250.000 hectáreas y situado a unos 80 kilómetros del país al que pertenece, Tanzania."
        },
    ]
];


// CREAR JUGADORES
class Jugador {
    constructor(nombre, id, puntos, incorrectas, rosco, vuelta, ronda, gameActive) {
        this.nombre = nombre;
        this.id = id;
        this.puntos = puntos;
        this.incorrectas = incorrectas;
        this.vuelta = vuelta;
        this.rosco = rosco;
        this.ronda = ronda;
        this.gameActive = gameActive;

    }
}

//--------------SELECCION DE ELEMENTOS DEL DOM---------------------
const botonJugar = document.querySelector(".botonJugar");
const question = document.querySelector("#acaVanLasPreguntas");
const answer = document.querySelector("#acaVanLasRespuestas");
const contestacion = document.querySelector("#contestacion"); //para el boton submit. contestación es el formulario
const respuesta = document.querySelector("#respuesta");
const acaVanLasPreguntas = document.querySelector("#acaVanLasPreguntas");






// BUCLE DE CREACION DE PREGUNTAS
const juguemos = (jugador1) => {
    console.log(jugador1);


    let contador = 0;
    for (const pregunta of preguntas) {
        console.log(pregunta[jugador1.rosco]);
        const elementoPregunta = document.createElement("h4");
        elementoPregunta.classList.add(`preguntaRosco`) //Le creo una clase a las preguntas para después seleccionarlas todas
        elementoPregunta.setAttribute("id", `pregunta${contador}`); //Le creo un id a cada pregunta particular para manipular su estilo al responder
        if (contador === 13 || contador === 16 || contador === 22) {
            elementoPregunta.innerHTML = `<p>Contiene ${pregunta[jugador1.rosco].letra}</p> ${pregunta[jugador1.rosco].definicion} `

        } else {
            elementoPregunta.innerHTML = `<p>Comienza con ${pregunta[jugador1.rosco].letra}</p> ${pregunta[jugador1.rosco].definicion} ` //
            //Ahora para mostrarlo con el dom tengo dos formas de indexarlo, o con un append (que agrega uno debajo del otro o con un prepend que agrega uno encima del otro)
        }
        console.log(`contador: ${contador}`);
        question.append(elementoPregunta);

        //AGREGO LAS PALABRAS DE CADA DEFINICION AL NUEVO ARREGLO

        nuevoArregloPreguntas.push(pregunta[jugador1.rosco].palabra)
        contador++;

    }
}

// BUCLE PARA VALIDACION DE RESPUESTAS

const validaciones = (letraAComparar, jugador1, arrayPreguntasDom) => {
    // FUNCION DE DELAY
    const syncDelay = (milliseconds) => {
        let start = new Date().getTime();
        let end = 0;
        while ((end - start) < milliseconds) {
            end = new Date().getTime();
        }
    }

    //COMPARACIONES

    const puntosLocal = document.querySelector("#puntos");

    console.log(`letra A comparar: ${letraAComparar}`);
    console.log(nuevoArregloRespuestas[letraAComparar]);
    console.log(nuevoArregloPreguntas[letraAComparar]);

    if (nuevoArregloRespuestas[letraAComparar].toUpperCase() == nuevoArregloPreguntas[letraAComparar]) {
        let audioCorrecta = document.querySelector("#audioCorrecta");
        //alerta de toastify
        
        audioCorrecta.play();
        Toastify({

            text: "Respuesta Correcta!!",

            duration: 3000,
            style:{
                background: "#A1E374"
            },


        }).showToast();
        syncDelay(2000);

        //CONTINUA EL JUEGO
        const devolucion = document.querySelector("#devolucion")
        devolucion.innerHTML = "<h6> Respuesta Correcta </h6>";
        colorLetra[letraAComparar].style.background = "green";
        jugador1.puntos++;
        console.log(`respuestas correctas: ${jugador1.puntos} `);
        localStorage.setItem("respuestasCorrectas", jugador1.puntos)
        let correctas = localStorage.getItem("respuestasCorrectas");
        puntosLocal.innerHTML = `<h6> Respuestas Correctas ${correctas} </h6>`

    } else {
        let audioIncorrecta = document.querySelector("#audioIncorrecta");
        audioIncorrecta.play();
        Toastify({

            text: "Respuesta Incorrecta!!",

            duration: 3000,
            style:{
                background: "#A1E374"
            },


        }).showToast();
        devolucion.innerHTML = `<h6> ¡Respuesta Incorrecta! <br> La palabra correcta era ${nuevoArregloPreguntas[letraAComparar]} </h6>`

        syncDelay(1000);
        colorLetra[letraAComparar].style.background = "red";
        jugador1.incorrectas++;
        console.log(`respuestasIncorrectas: ${jugador1.incorrectas} `);

    }
    if (letraAComparar < 24) {
        arrayPreguntasDom[letraAComparar].style.display = "none";
        arrayPreguntasDom[letraAComparar + 1].style.display = "block";
        colorLetra[letraAComparar + 1].style.background = "yellow";
    } else {
        Swal.fire({
            title: `${nombre}, se terminó el juego! \n Tus resultados son: \n
            Respuestas correctas: ${jugador1.puntos}\n
            Respuestas incorrectas: ${jugador1.incorrectas}`,
            width: 600,
            padding: '3em',
            color: '#716add',
            /*  background: '#fff url(/img/letras.gif)', */
            backdrop: `
              rgba(0,0,123,0.4)
              url("../img/ivan.gif")
              left
              no-repeat
            `
        })


    }
}



//CREACION DE JUGADORES
const creacionJugadores = (nombreUno) => {


    const jugador1 = new Jugador(nombre = nombreUno.value, id = 1, puntos = 0, incorrectas = 0, rosco = Number(Math.round(Math.random() * 4)), vuelta = 0, ronda = 0, gameActive = true);
    console.log(`nombre: ${jugador1.nombre}`);
    console.log(jugador1);
    return jugador1;
}



//CREO UN ARRAY NUEVO CON LAS PALABRAS DE CADA DEFINICION PARA QUE LUEGO ME SEA MAS FACIL ACCEDER
const nuevoArregloPreguntas = [];
const nuevoArregloRespuestas = [];
const arregloDeLetras = [];





//Arreglo para cambiar los colores
const colorLetra = [document.querySelector("#jugadorUno0"), document.querySelector("#jugadorUno1"), document.querySelector("#jugadorUno2"), document.querySelector("#jugadorUno3"), document.querySelector("#jugadorUno4"), document.querySelector("#jugadorUno5"), document.querySelector("#jugadorUno6"), document.querySelector("#jugadorUno7"), document.querySelector("#jugadorUno8"), document.querySelector("#jugadorUno9"), document.querySelector("#jugadorUno10"), document.querySelector("#jugadorUno11"), document.querySelector("#jugadorUno12"), document.querySelector("#jugadorUno13"), document.querySelector("#jugadorUno14"), document.querySelector("#jugadorUno15"), document.querySelector("#jugadorUno16"), document.querySelector("#jugadorUno17"), document.querySelector("#jugadorUno18"), document.querySelector("#jugadorUno19"), document.querySelector("#jugadorUno20"), document.querySelector("#jugadorUno21"), document.querySelector("#jugadorUno22"), document.querySelector("#jugadorUno23"), document.querySelector("#jugadorUno24")];

comenzar.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombreUno = document.querySelector("#nombreJugadorUno");
    const jugador1 = creacionJugadores(nombreUno);

    //DESESTRUCTURACION OBJETO JUGADOR

    const {
        nombre
    } = jugador1;

    juguemos(jugador1);

    //Selección de cada una de las preguntas para que vaya apareciendo
    /* const preguntaA = document.querySelector(".pregunta0");
    const preguntaB = document.querySelector(".pregunta1");
    const preguntaC = document.querySelector(".pregunta2"); */
    const arrayPreguntasDom = [document.querySelector("#pregunta0"), document.querySelector("#pregunta1"), document.querySelector("#pregunta2"), document.querySelector("#pregunta3"), document.querySelector("#pregunta4"), document.querySelector("#pregunta5"), document.querySelector("#pregunta6"), document.querySelector("#pregunta7"), document.querySelector("#pregunta8"), document.querySelector("#pregunta9"), document.querySelector("#pregunta10"), document.querySelector("#pregunta11"), document.querySelector("#pregunta12"), document.querySelector("#pregunta13"), document.querySelector("#pregunta14"), document.querySelector("#pregunta15"), document.querySelector("#pregunta16"), document.querySelector("#pregunta17"), document.querySelector("#pregunta18"), document.querySelector("#pregunta19"), document.querySelector("#pregunta20"), document.querySelector("#pregunta21"), document.querySelector("#pregunta22"), document.querySelector("#pregunta23"), document.querySelector("#pregunta24")];
    console.log(arrayPreguntasDom);



    Swal.fire({
        icon: 'success', //los iconos los puedo cambiar viendo los que hay en la página de la librería
        title: `Bienvenid@ ${nombre}!! ¿Quieres Jugar a Pasapalabra?`,
        confirmButtonText: "¡¡Vamos allá!!"
    })
    console.log(jugador1);
    acaVanLasPreguntas.style.display = "flex";
    contestacion.style.display = "block";
    arrayPreguntasDom[0].style.display = "block";
    colorLetra[0].style.background = "yellow";
    //BOTON PARA ENVIAR RESPUESTA


    contestacion.addEventListener("submit", (e) => {
        e.preventDefault();
        const elementoRespuesta = document.createElement("h5")

        console.log(respuesta.value);
        nuevoArregloRespuestas.push(respuesta.value);
        contestacion.reset();




        //------------------------COMPARADORES DE RESPUESTAS--------
        switch (true) {

            //COMPARA LETRA A    
            case arrayPreguntasDom[0].style.display == "block":

                elementoRespuesta.classList.add(`respuesta${0}`)
                validaciones(0, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;

                //COMPARA LETRA B
            case arrayPreguntasDom[1].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${1}`)
                validaciones(1, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;

                //COMPARA LETRA C
            case arrayPreguntasDom[2].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${2}`)
                validaciones(2, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA D
            case arrayPreguntasDom[3].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${3}`)
                validaciones(3, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA E
            case arrayPreguntasDom[4].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${4}`)
                validaciones(4, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA F
            case arrayPreguntasDom[5].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${5}`)
                validaciones(5, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA G
            case arrayPreguntasDom[6].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${6}`)
                validaciones(6, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA H
            case arrayPreguntasDom[7].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${7}`)
                validaciones(7, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA I
            case arrayPreguntasDom[8].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${8}`)
                validaciones(8, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA J
            case arrayPreguntasDom[9].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${9}`)
                validaciones(9, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA L
            case arrayPreguntasDom[10].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${10}`)
                validaciones(10, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA M
            case arrayPreguntasDom[11].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${11}`)
                validaciones(11, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA N
            case arrayPreguntasDom[12].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${12}`)
                validaciones(12, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA Ñ
            case arrayPreguntasDom[13].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${13}`)
                validaciones(13, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA O
            case arrayPreguntasDom[14].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${14}`)
                validaciones(14, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA P
            case arrayPreguntasDom[15].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${15}`)
                validaciones(15, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA Q
            case arrayPreguntasDom[16].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${16}`)
                validaciones(16, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA R
            case arrayPreguntasDom[17].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${17}`)
                validaciones(17, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA S
            case arrayPreguntasDom[18].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${18}`)
                validaciones(18, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA T
            case arrayPreguntasDom[19].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${19}`)
                validaciones(19, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA U
            case arrayPreguntasDom[20].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${20}`)
                validaciones(20, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA V
            case arrayPreguntasDom[21].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${21}`)
                validaciones(21, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA X
            case arrayPreguntasDom[22].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${22}`)
                validaciones(22, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA Y
            case arrayPreguntasDom[23].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${23}`)
                validaciones(23, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;
                //COMPARA LETRA Z
            case arrayPreguntasDom[24].style.display == "block":
                elementoRespuesta.classList.add(`respuesta${24}`)
                validaciones(24, jugador1, arrayPreguntasDom); //el valor que paso por parámetro es la posición del arreglo que voy a comparar
                break;



        }



    })
})






/* const elementoRespuesta = document.createElement("h5");
elementoRespuesta.innerHTML = `${respuesta}`
elementoRespuesta.classList.add(`respuesta${contador}`)

answer.append(elementoRespuesta); */
/*  respuesta.classList.add(`respuesta${contador}`) */ //Añado una clase a las respuestas para después compararlas 
/* if (respuesta == pregunta[jugador1.rosco].palabra ) {
    alert("correcto");
}
console.log(respuesta); */