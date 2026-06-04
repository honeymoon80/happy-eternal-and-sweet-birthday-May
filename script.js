/* =============================================
   SCRIPT.JS - Página Romántica de Cumpleaños para May
   v2.0 — Sistema imágenes personalizables, Galaxia 3D,
   Logros configurables, Reset total, Botón atrás móvil
   ============================================= */
'use strict';

// ╔══════════════════════════════════════════════════════╗
// ║  🖼️  SISTEMA DE IMÁGENES PERSONALIZABLES             ║
// ║  Si la imagen no carga → muestra el emoji original   ║
// ╚══════════════════════════════════════════════════════╝
const IMAGENES = {
  deco: {
    lazo:     { src:'assets/deco/lazo.png',     fallback:'🎀' },
    flor:     { src:'assets/deco/flor.png',     fallback:'🌸' },
    florRoja: { src:'assets/deco/flor_roja.png',fallback:'🌺' },
    mariposa: { src:'assets/deco/mariposa.png', fallback:'🦋' },
    corazon:  { src:'assets/deco/corazon.png',  fallback:'💗' },
    corazonB: { src:'assets/deco/corazonb.png', fallback:'💖' },
    estrella: { src:'assets/deco/estrella.png', fallback:'⭐' },
    brillo:   { src:'assets/deco/brillo.png',   fallback:'✨' },
    cereza:   { src:'assets/deco/cereza.png',   fallback:'🍒' },
    tulipan:  { src:'assets/deco/tulipan.png',  fallback:'🌷' },
    corazonP: { src:'assets/deco/corazonp.png', fallback:'💕' },
    fresa:    { src:'assets/deco/fresa.png',    fallback:'🍓' },
  },
  regalo: {
    deco1:    { src:'assets/regalo/deco1.png',  fallback:'🎀' },
    deco2:    { src:'assets/regalo/deco2.png',  fallback:'🌸' },
  },
  menu: {
    s1:  { src:'assets/menu/opcion1.jpg',  fallback:'💌' },
    s2:  { src:'assets/menu/opcion2.jpg',  fallback:'🎵' },
    s3:  { src:'assets/menu/opcion3.jpg',  fallback:'📝' },
    s4:  { src:'assets/menu/opcion4.jpg',  fallback:'🎮' },
    s5:  { src:'assets/menu/opcion5.jpg',  fallback:'💌' },
    s6:  { src:'assets/menu/opcion6.jpg',  fallback:'🌸' },
    s7:  { src:'assets/menu/opcion7.jpg',  fallback:'🌌' },
    s8:  { src:'assets/menu/opcion8.jpg',  fallback:'🌻' },
    s9:  { src:'assets/menu/opcion9.jpg',  fallback:'🗺️' },
    s10: { src:'assets/menu/opcion10.jpg', fallback:'📦' },
    s11: { src:'assets/menu/opcion11.jpg', fallback:'❤️' },
    s12: { src:'assets/menu/opcion12.jpg', fallback:'📜' },
    s13: { src:'assets/menu/opcion13.jpg', fallback:'✨' },
  },
  rpg: {
    jugador:  { src:'assets/rpg/jugador.png',   fallback:'🧑' },
    enemigo0: { src:'assets/rpg/enemigo0.png',  fallback:'💌' },
    enemigo1: { src:'assets/rpg/enemigo1.png',  fallback:'💗' },
    enemigo2: { src:'assets/rpg/enemigo2.png',  fallback:'🎀' },
    enemigo3: { src:'assets/rpg/enemigo3.png',  fallback:'🌸' },
    enemigo4: { src:'assets/rpg/enemigo4.png',  fallback:'⭐' },
    visitado: { src:'assets/rpg/visitado.png',  fallback:'🟫' },
  },
  paisaje: {
    pieza1:   { src:'assets/paisaje/pieza1.png',fallback:'❤️' },
    pieza2:   { src:'assets/paisaje/pieza2.png',fallback:'⭐' },
  },
  jardin: {
    regar:    { src:'assets/jardin/regar.png',  fallback:'💧' },
  },
  caja: {
    foto:     { src:'assets/caja3d/icono_foto.png',   fallback:'📷' },
    nota:     { src:'assets/caja3d/icono_nota.png',   fallback:'📝' },
    regalo:   { src:'assets/caja3d/icono_regalo.png', fallback:'🎁' },
  },
  sec13: {
    a0:{ src:'assets/sec13/a0.png',fallback:'💗' },
    a1:{ src:'assets/sec13/a1.png',fallback:'✨' },
    a2:{ src:'assets/sec13/a2.png',fallback:'🎀' },
    a3:{ src:'assets/sec13/a3.png',fallback:'💕' },
    a4:{ src:'assets/sec13/a4.png',fallback:'🌸' },
    a5:{ src:'assets/sec13/a5.png',fallback:'⭐' },
    a6:{ src:'assets/sec13/a6.png',fallback:'💖' },
    a7:{ src:'assets/sec13/a7.png',fallback:'🦋' },
    a8:{ src:'assets/sec13/a8.png',fallback:'🌺' },
    a9:{ src:'assets/sec13/a9.png',fallback:'💝' },
  },
};

// Helper: img con fallback a emoji
function imgOrEmoji(cfg, cls, alt, sty) {
  if (!cfg) return '';
  const c = cls  ? ` class="${cls}"`  : '';
  const s = sty  ? ` style="${sty}"`  : '';
  const a = alt  ? ` alt="${alt}"`    : ` alt="${cfg.fallback}"`;
  const fb = cfg.fallback.replace(/'/g, "\\'");
  return `<img src="${cfg.src}"${a}${c}${s} onerror="this.outerHTML='<span class=\\'emoji-fb\\'>${fb}</span>'">`;
}

// ╔══════════════════════════════════════════════════════╗
// ║  🏆 LOGROS CONFIGURABLES POR SECCIÓN                 ║
// ╚══════════════════════════════════════════════════════╝
const CONFIGURACION_LOGROS = {
  seccion1: { nombre:'Carta Romántica', logros:[
    {texto:'Ver todas las imágenes del carrusel'},
    {texto:'Usar el botón anterior'},
    {texto:'Usar el botón siguiente'},
    {texto:'Clic en todos los puntos indicadores'},
    {texto:'Permanecer 30 segundos'},
  ]},
  seccion2: { nombre:'Playlist Musical', logros:[
    {texto:'Reproducir todas las canciones'},
    {texto:'Usar el scrubber de progreso'},
    {texto:'Botón siguiente'},
    {texto:'Botón anterior'},
    {texto:'Cambiar el volumen'},
    {texto:'Minimizar/maximizar reproductor'},
    {texto:'Permanecer 60 segundos'},
  ]},
  seccion3: { nombre:'Test de Amor', logros:[
    {texto:'Responder todas las preguntas'},
    {texto:'Usar anterior y siguiente'},
    {texto:'Ver el resultado'},
    {texto:'Reiniciar el test'},
    {texto:'Responder 5 tras reinicio'},
    {texto:'Obtener 100%'},
  ]},
  seccion4: { nombre:'Juego RPG', logros:[
    {texto:'Explorar todo el mapa'},
    {texto:'Derrotar todos los tipos de enemigos'},
    {texto:'Alcanzar nivel máximo'},
    {texto:'Usar todos los ataques'},
    {texto:'Perder una batalla'},
    {texto:'Reiniciar el juego'},
    {texto:'Permanecer 5 minutos'},
  ]},
  seccion5: { nombre:'Carta Interactiva', logros:[
    {texto:'Clic en todas las palabras clave'},
    {texto:'Scroll completo de la carta'},
    {texto:'Abrir todos los modales'},
    {texto:'Permanecer 45 segundos'},
  ]},
  seccion6: { nombre:'Paisaje Digital', logros:[
    {texto:'Clic en todos los adornos'},
    {texto:'Ganar una partida de 3 en raya'},
    {texto:'Ganar una partida de ahorcado'},
    {texto:'Perder una partida de ahorcado'},
    {texto:'Todos los valores del slider'},
    {texto:'Escribir en la pizarra'},
    {texto:'Dibujar en el canvas'},
    {texto:'Usar 3 colores diferentes'},
    {texto:'Usar 3 grosores diferentes'},
    {texto:'Limpiar el canvas'},
  ]},
  seccion7: { nombre:'Nuestro Universo', logros:[
    {texto:'Rotar la galaxia'},
    {texto:'Doble clic en la galaxia (corazones)'},
    {texto:'Permanecer 60 segundos'},
  ]},
  seccion8: { nombre:'Jardín Secreto', logros:[
    {texto:'Clic en todas las flores'},
    {texto:'Ver todos los modales de recuerdos'},
    {texto:'Escuchar todos los audios'},
    {texto:'Regar el jardín 3 veces'},
    {texto:'Visitar en 3 días diferentes'},
  ]},
  seccion9: { nombre:'Mapa del Amor', logros:[
    {texto:'Clic en todos los pines'},
    {texto:'Abrir todos los modales'},
    {texto:'Agregar 3 lugares futuros'},
    {texto:'Eliminar 1 lugar futuro'},
    {texto:'Marcar 1 como visitado'},
    {texto:'Permanecer 60 segundos'},
  ]},
  seccion10: { nombre:'Caja de Recuerdos', logros:[
    {texto:'Encontrar todos los elementos'},
    {texto:'Interactuar con foto, nota y regalo'},
    {texto:'Usar el reproductor'},
    {texto:'Explorar 90 segundos'},
  ]},
  seccion11: { nombre:'Preguntas del Corazón', logros:[
    {texto:'Responder todas las preguntas'},
    {texto:'Acertar todas'},
    {texto:'Desbloquear todas las fotos'},
    {texto:'Ver el collage final'},
    {texto:'Reiniciar y volver a jugar'},
  ]},
  seccion12: { nombre:'Carta Infinita', logros:[
    {texto:'Llegar al final de la carta'},
    {texto:'Encontrar todas las palabras secretas'},
    {texto:'Descubrir la sorpresa final'},
    {texto:'5 clics en una palabra secreta'},
    {texto:'10 segundos en un párrafo'},
    {texto:'Permanecer 90 segundos'},
  ]},
};

// ╔══════════════════════════════════════════════════════╗
// ║  ⚙️  CONFIGURACIÓN PRINCIPAL — EDITA AQUÍ            ║
// ╚══════════════════════════════════════════════════════╝

const CLICS_NECESARIOS = 20;

const MAY_WORDS_BIG = [
  'May 💕','Para May 🌸','Te amo May','My beautiful May',
  'Siempre tuya May','Eres mi sol May','May mi cielito 🥹',
  'May mi amor eterno 💞','May eres perfecta 🌺',
  'Mi vida entera May','May mi tesoro 🎀','Para siempre May 💗',
];
const MAY_WORDS_SMALL = [
  'May','Amor','May 🌸','💕 May','May ✨','Beso',
  'May ❤️','Mi reina May','May 💗','💖 May','May 🎀',
];

const TOTAL_SLIDES_CARTA = 5;
const FRASES_CARTA = [
  'I love you very much forever my gorgeous girl 🥹💗🌸',
  'Tú eres mi vidita entera pol siempre <3 💗🌟',
  'TE AMOO mushísimo mi niñita helmoshita de todito mi korashon HEHE (≧▽≦) 💗💞',
  'Siempre vas a embelleshel mi vidita entera kon tu precioshísima perfección <3 💗🩷✨️',
  'Bem juntitos pol siempre mi my gud girl of my life HEHE ;) 💗💕',
];
const IMGS_CARTA = Array.from({length:TOTAL_SLIDES_CARTA},(_,i)=>`assets/carta/carta${i+1}.jpg`);

const PLAYLIST = [
  {name:'Nuestra Canción',  src:'assets/playlist/song1.mp3',  imgFolder:'cancion1',  letra:'Eres mi razón de ser, mi todo, mi mundo...'},
  {name:'Eres Tú',          src:'assets/playlist/song2.mp3',  imgFolder:'cancion2',  letra:'Tu amor me completa, no hay nadie como tú...'},
  {name:'Amor Eterno',      src:'assets/playlist/song3.mp3',  imgFolder:'cancion3',  letra:'Por siempre juntos, eternidades de amor...'},
  {name:'Contigo',          src:'assets/playlist/song4.mp3',  imgFolder:'cancion4',  letra:'A tu lado quiero estar siempre...'},
  {name:'Para Siempre',     src:'assets/playlist/song5.mp3',  imgFolder:'cancion5',  letra:'Hasta el fin del mundo, contigo...'},
  {name:'Mi Vida',          src:'assets/playlist/song6.mp3',  imgFolder:'cancion6',  letra:'Eres todo para mí, mi razón de vivir...'},
  {name:'Tu Mirada',        src:'assets/playlist/song7.mp3',  imgFolder:'cancion7',  letra:'Me hipnotiza tu mirar, me enamoro más...'},
  {name:'Promesas',         src:'assets/playlist/song8.mp3',  imgFolder:'cancion8',  letra:'Te prometo amor eterno, siempre a tu lado...'},
  {name:'Recuerdos',        src:'assets/playlist/song9.mp3',  imgFolder:'cancion9',  letra:'Cada momento a tu lado es un tesoro...'},
  {name:'Futuro',           src:'assets/playlist/song10.mp3', imgFolder:'cancion10', letra:'Construyamos juntos el futuro que soñamos...'},
];

const TITULO_TEST = '¿Cuánto me conoces?';
const PREGUNTAS_FORMULARIO = [
  {pregunta:'¿Cuál es mi color favorito?',          opciones:['Rojo','Azul','Verde','Rosa','Amarillo'],                                      correcta:3},
  {pregunta:'¿Cuál es mi comida favorita?',          opciones:['Pizza','Sushi','Pasta','Hamburguesa','Tacos'],                               correcta:2},
  {pregunta:'¿Qué día nos conocimos?',               opciones:['Lunes','Martes','Miércoles','Jueves','Viernes'],                             correcta:4},
  {pregunta:'¿Cuál es mi animal favorito?',          opciones:['Perro','Gato','Conejo','Hámster','Pájaro'],                                 correcta:0},
  {pregunta:'¿Cuál es mi película favorita?',        opciones:['Titanic','Avengers','El Diario de Noah','La Bella y la Bestia','Frozen'],    correcta:2},
  {pregunta:'¿Cuál es mi bebida favorita?',          opciones:['Café','Jugo de naranja','Agua','Té','Chocolate caliente'],                  correcta:4},
  {pregunta:'¿Cuál es mi estación favorita?',        opciones:['Verano','Otoño','Invierno','Primavera','Todas'],                            correcta:3},
  {pregunta:'¿Qué música me gusta más?',             opciones:['Rock','Pop','Reggaetón','Clásica','Electrónica'],                           correcta:1},
  {pregunta:'¿Cuál es mi deporte favorito?',         opciones:['Fútbol','Natación','Tenis','Running','Ninguno'],                            correcta:1},
  {pregunta:'¿Cuál es mi postre favorito?',          opciones:['Helado','Pastel de chocolate','Flan','Fresas con crema','Churros'],         correcta:0},
  {pregunta:'¿A qué hora me despierto?',             opciones:['6 am','7 am','8 am','9 am','10 am'],                                       correcta:2},
  {pregunta:'¿Cuál es mi flor favorita?',            opciones:['Rosa','Tulipán','Girasol','Orquídea','Margarita'],                         correcta:0},
  {pregunta:'¿Prefiero playa o montaña?',            opciones:['Playa','Montaña','Los dos igual','Ninguno','Ciudad'],                      correcta:0},
  {pregunta:'¿Cuál es mi mayor sueño?',              opciones:['Viajar','Tener familia','Ser famoso','Dinero','Felicidad'],                correcta:4},
  {pregunta:'¿Qué me hace reír siempre?',            opciones:['Chistes malos','Memes','Caídas','Tus ocurrencias','Comedias'],             correcta:3},
  {pregunta:'¿Cuál es mi libro favorito?',           opciones:['Harry Potter','El Principito','Cien años','Ninguno','Otro'],               correcta:1},
  {pregunta:'¿Cómo me gustan los abrazos?',          opciones:['Cortos','Largos y apretados','Solo de lado','No me gustan','Depende'],     correcta:1},
  {pregunta:'¿Cuál es mi canción favorita?',         opciones:['No tengo una','Nuestra canción','La que tú cantes','Depende','Una clásica'],correcta:2},
  {pregunta:'¿Qué hago cuando estoy triste?',        opciones:['Lloro solo','Busco a alguien','Como','Escucho música','Te busco a ti'],    correcta:4},
  {pregunta:'¿Cuánto te amo?',                       opciones:['Mucho','Muchísimo','Infinito','Eternamente','Todas las anteriores'],       correcta:4},
];
const MENSAJES_RESULTADO = [
  {min:0,  max:30,  texto:'¡Hay que conocernos más! Pero ya lo iremos arreglando 💕'},
  {min:31, max:60,  texto:'Vamos por buen camino, me conoces bastante 💗'},
  {min:61, max:80,  texto:'¡Me conoces muy bien! Eres increíble 🥰'},
  {min:81, max:100, texto:'¡ERES MI ALMA GEMELA! ¡Te amo muchísimo! 💖✨'},
];

const JUEGO_CONFIG = {
  mapaSize:8,
  tiposEnemigos:['Carta','Corazón','Lazo','Flor','Estrella'],
  vidaInicial:100, puntosPorEnemigo:10,
  enemigosParaSubirNivel:3, nivelMaximo:10,
  ataques:['Atacar con amor','Regalar flor','Abrazo profundo'],
};

const CARTA_TEXTO = `Querida May... Desde que te conocí, supe que eras especial para mí. Cada beso tuyo ha sido un regalo del cielo. Recuerdo perfectamente el día que me tomaste de la mano por primera vez, sentí electricidad pura. Tu sonrisa ilumina todita mi vida entera. Cada abrazo tuyo es mi lugar más seguro en el mundo. Eres mi promesa de amor eterno, mi sueño más hermoso hecho realidad. Te quiero más que a nada en este mundo, con todo mi corazón. Eres mi todo, mi razón de ser, mi mayor felicidad. Por siempre tuyo, con infinito amor.`;
const PALABRAS_CLAVE_CARTA = [
  {palabra:'beso',      mensaje:'Cada beso tuyo es magia pura',                  imagen:'assets/palabras/beso.jpg'},
  {palabra:'mano',      mensaje:'La primera vez que tomé tu mano todo cambió',   imagen:'assets/palabras/mano.jpg'},
  {palabra:'sonrisa',   mensaje:'Tu sonrisa es lo más hermoso del universo',     imagen:'assets/palabras/sonrisa.jpg'},
  {palabra:'abrazo',    mensaje:'Tus abrazos son mi hogar favorito',             imagen:'assets/palabras/abrazo.jpg'},
  {palabra:'promesa',   mensaje:'Prometo amarte siempre, para siempre',          imagen:'assets/palabras/promesa.jpg'},
  {palabra:'te quiero', mensaje:'Te quiero con toda mi alma',                    imagen:'assets/palabras/tequiero.jpg'},
  {palabra:'corazón',   mensaje:'Mi corazón late solo por ti',                   imagen:'assets/palabras/corazon.jpg'},
];

const ADORNOS_PAISAJE = [
  {img:IMAGENES.deco.flor,     x:10,y:20,mensaje:'Eres hermosa como una flor'},
  {img:IMAGENES.deco.corazon,  x:50,y:60,mensaje:'Mi corazón late por ti'},
  {img:IMAGENES.deco.estrella, x:80,y:25,mensaje:'Brillas como una estrella'},
  {img:IMAGENES.deco.mariposa, x:70,y:70,mensaje:'Vuelas en todos mis sueños'},
  {img:IMAGENES.deco.florRoja, x:35,y:55,mensaje:'Tan bella como las flores'},
  {img:IMAGENES.deco.lazo,     x:88,y:50,mensaje:'Eres mi lazo favorito'},
  {img:IMAGENES.deco.brillo,   x:20,y:10,mensaje:'Llenas mi vida de brillo'},
];
const PALABRAS_AHORCADO = ['amor','beso','abrazo','corazon','promesa','eternidad','romance','ternura','cariño','pasion','felicidad','sueno','belleza','mariposa','perfeccion'];

// 🌌 GALAXIA — frases personalizables
const GALAXY_PHRASES = [
  'Mi May <3','Helmoshísima May','May infinita','Mi todo May','May mi vida',
  'Te amo May','May preciosa','Mi reina May','May mi paz','May mi luz',
  'May mi sueño','May mi tesoro','May mi canción','May única',
  'Mi amor May','May mi mundo','May mi niña','May mi eterna',
  'Te amo mushote May','May de todito mi korashon','Mi May brillante',
  'May mi pensamiento favorito','May mi cielo','Siempre contigo May',
  'May mi felicidad','Para siempre May','May mi razón de ser',
];

const FLORES_JARDIN = [
  {img:IMAGENES.deco.flor,    foto:'assets/jardin/recuerdo1.jpg',mensaje:'Nuestra primera cita en el parque',audio:null},
  {img:IMAGENES.deco.florRoja,foto:'assets/jardin/recuerdo2.jpg',mensaje:'El día que me dijiste te amo',    audio:null},
  {img:IMAGENES.deco.tulipan, foto:'assets/jardin/recuerdo3.jpg',mensaje:'Nuestro primer viaje juntos',     audio:null},
  {img:IMAGENES.deco.corazon, foto:'assets/jardin/recuerdo4.jpg',mensaje:'La noche que vimos las estrellas',audio:null},
  {img:IMAGENES.deco.lazo,    foto:'assets/jardin/recuerdo5.jpg',mensaje:'Cuando cocinamos juntos',         audio:null},
  {img:IMAGENES.deco.estrella,foto:'assets/jardin/recuerdo6.jpg',mensaje:'Nuestro primer mes',              audio:null},
  {img:IMAGENES.deco.mariposa,foto:'assets/jardin/recuerdo7.jpg',mensaje:'Esa tarde de lluvia especial',    audio:null},
  {img:IMAGENES.deco.brillo,  foto:'assets/jardin/recuerdo8.jpg',mensaje:'Cuando me presentaste a tu familia',audio:null},
  {img:IMAGENES.deco.corazonB,foto:'assets/jardin/recuerdo9.jpg',mensaje:'Nuestra canción sonó en la radio',audio:null},
];

const LUGARES_MAPA = [
  {x:80, y:120,titulo:'Donde nos conocimos', foto:'assets/mapa/lugar1.jpg',fecha:'18/03/2025',mensaje:'Aquí empezó todo.'},
  {x:200,y:90, titulo:'Nuestra primera cita',foto:'assets/mapa/lugar2.jpg',fecha:'25/03/2025',mensaje:'Nos reímos sin parar.'},
  {x:160,y:200,titulo:'Nuestro primer beso', foto:'assets/mapa/lugar3.jpg',fecha:'01/04/2025',mensaje:'Un momento mágico.'},
  {x:280,y:160,titulo:'Lugar favorito',      foto:'assets/mapa/lugar4.jpg',fecha:'15/04/2025',mensaje:'Nuestro rincón especial.'},
  {x:100,y:240,titulo:'Nuestro restaurante', foto:'assets/mapa/lugar5.jpg',fecha:'18/04/2025',mensaje:'Nuestro primer mes.'},
];

const RECUERDOS_3D = [
  {tipo:'foto',   contenido:'assets/caja3d/foto1.jpg',           posicion:'frente',   mensaje:'Nuestro momento más especial 💗'},
  {tipo:'nota',   contenido:'Eres mi razón de ser. Te amo.',      posicion:'izquierda',mensaje:'Te escribí esto pensando en ti'},
  {tipo:'regalo', contenido:'Un abrazo infinito',                 posicion:'derecha',  mensaje:'Te regalo mi corazón por siempre'},
  {tipo:'foto',   contenido:'assets/caja3d/foto2.jpg',           posicion:'arriba',   mensaje:'La noche que miramos las estrellas'},
  {tipo:'nota',   contenido:'Prometo cuidarte y amarte siempre.', posicion:'abajo',    mensaje:'Mi promesa de amor eterno'},
  {tipo:'regalo', contenido:'Mil sonrisas para ti',               posicion:'frente',   mensaje:'Espero hacerte sonreír siempre'},
];

const PREGUNTAS_CORAZON = [
  {pregunta:'¿En qué mes comenzó nuestra historia?',opciones:['Enero','Febrero','Marzo','Abril'],         correcta:2,desbloqueo:'assets/preguntas/foto1.jpg'},
  {pregunta:'¿Cuántos clics para abrir el regalo?', opciones:['10','15','20','25'],                       correcta:2,desbloqueo:'assets/preguntas/foto2.jpg'},
  {pregunta:'¿Cuál es la fecha especial?',           opciones:['14 Feb','18 Marzo','1 Abril','15 Mayo'],  correcta:1,desbloqueo:'assets/preguntas/foto3.jpg'},
  {pregunta:'¿Cómo te llamas, mi amor?',             opciones:['Luna','May','Sol','Estrella'],            correcta:1,desbloqueo:'assets/preguntas/foto4.jpg'},
  {pregunta:'¿Cuánto te amo?',                       opciones:['Mucho','Infinito','Eternamente','Todo'],  correcta:3,desbloqueo:'assets/preguntas/foto5.jpg'},
  {pregunta:'¿Cuál es nuestra canción?',             opciones:['La primera','La favorita','La nuestra','Todas'],correcta:2,desbloqueo:'assets/preguntas/foto6.jpg'},
  {pregunta:'¿Qué soy yo para ti?',                  opciones:['Tu amigo','Tu todo','Tu compañero','Tu caballero'],correcta:1,desbloqueo:'assets/preguntas/foto7.jpg'},
  {pregunta:'¿Cuántas secciones tiene la página?',   opciones:['10','11','12','13'],                      correcta:3,desbloqueo:'assets/preguntas/foto8.jpg'},
  {pregunta:'¿Cómo escribo "hermosita" yo?',         opciones:['hermosita','helmoshita','hermoshita','elmoshita'],correcta:1,desbloqueo:'assets/preguntas/foto9.jpg'},
  {pregunta:'¿Qué frase te digo siempre?',           opciones:['Te amo May','Eres perfecta','Mi niñita helmoshita','Todas'],correcta:3,desbloqueo:'assets/preguntas/foto10.jpg'},
  {pregunta:'¿Qué significa HEHE para mí?',          opciones:['Risa','Amor puro','Felicidad','Todo junto'],correcta:3,desbloqueo:'assets/preguntas/foto11.jpg'},
  {pregunta:'¿Cuál es la sección especial?',         opciones:['Sec 12','Sec 11','Sec 13','Sec 10'],      correcta:2,desbloqueo:'assets/preguntas/foto12.jpg'},
  {pregunta:'¿Qué hay en la sección 13?',            opciones:['Un juego','Un contador','Una carta','Eterno Amor'],correcta:3,desbloqueo:'assets/preguntas/foto13.jpg'},
  {pregunta:'¿Cuánto dura nuestro amor?',            opciones:['Un año','Siempre','Eternidades','Infinitas eternidades'],correcta:3,desbloqueo:'assets/preguntas/foto14.jpg'},
  {pregunta:'¿Qué emoji te representa?',             opciones:['🌸','💗','✨','Todo lo anterior'],         correcta:3,desbloqueo:'assets/preguntas/foto15.jpg'},
];

const CARTA_INFINITA_TEXT = `Mi amor... Desde el día en que te conocí, supe que mi vida cambiaría para siempre. Eres lo más especial que me ha pasado en esta vida entera. Cada momento a tu lado es un tesoro que guardo en mi corazón. Recuerdo aquella primera vez que nos reímos juntos — fue mágico, como si el tiempo se hubiera detenido solo para nosotros. La primera vez que me tomaste de la mano, sentí electricidad pura recorrer todo mi ser. La primera vez que me dijiste "te amo", mi corazón explotó de una felicidad que nunca había sentido. Han pasado días, meses... y cada día te amo más infinitamente. No hay nadie en el mundo que pueda ocupar el lugar que tienes en mi corazón. Eres mi sol que ilumina mis mañanas, mi luna que cuida mis noches, mis estrellas que guían mi camino. Eres absolutamente mi todo. Cuando estoy triste, pienso en tu sonrisa y todo mejora. Contigo aprendí que el amor eterno existe. Prometo amarte siempre, cuidarte siempre, hacerte feliz siempre. Por siempre tuyo, con todo el amor de mi corazón, eternamente y más allá del infinito.`;
const PALABRAS_SECRETAS_CARTA = ['amor','mágico','corazón','siempre','prometo','eternamente','infinito','felicidad'];
const SORPRESA_FINAL_SRC = 'assets/carta-infinita/sorpresa.jpg';

const FECHA_INICIO_AMOR    = '2025-03-18';
const TITULO_SECCION_13    = 'ETERNO AMOR';
const SUBTITULO_SECCION_13 = 'PARA SIEMPRE JUNTOS';
const TOTAL_SLIDES_SEC13   = 5;
const FRASES_CARRUSEL_13   = [
  'El día que nuestras miradas se cruzaron por primera vez ✨',
  'Cada segundo a tu lado es un regalo del cielo 💗',
  'Prometo amarte hasta el infinito y más allá ∞',
  'Eres mi presente, mi futuro y mi eternidad 🌟',
  'Contigo descubrí el verdadero significado del amor 💖',
];
const IMGS_SEC13 = Array.from({length:TOTAL_SLIDES_SEC13},(_,i)=>`assets/seccion13/carrusel/imagen${i+1}.jpg`);
const MENSAJE_FINAL_LOGRO = [
  'Hemos recorrido {dias} días juntos, y cada día te amo más... Gracias por ser mi todo. 💗',
  'Desde el 18 de marzo de 2025, mi vida es contigo. {dias} días de pura felicidad.',
  'Contigo aprendí que el amor eterno existe. {dias} días y contando... ¡Te amo! 💕',
  'Cada día a tu lado es una nueva aventura. Llevamos {dias} días de esta hermosa historia.',
];
const FRASES_ADORNOS_FINAL = [
  'Eres mi sol','Te amo infinito','Contigo hasta el fin del mundo',
  'Cada día te elijo','Eres mi razón de ser','Mi corazón late por ti',
  'Eres mi sueño hecho realidad','No hay nadie como tú','Te amo más que ayer',
  'Eres mi todo','Gracias por existir','Mi amor eterno',
];
const CERTIFICADO_TITULO  = 'Certificado de Amor Eterno';
const CERTIFICADO_MENSAJE = 'Otorgado a mi May hermosa por completar todas las secciones.';

// Adornos de fondo (bg-deco-layer)
const BG_DECOS = [
  {img:IMAGENES.deco.lazo,     top:'4%', left:'2%'},
  {img:IMAGENES.deco.lazo,     top:'4%', right:'2%'},
  {img:IMAGENES.deco.flor,     top:'12%',left:'7%'},
  {img:IMAGENES.deco.florRoja, top:'12%',right:'7%'},
  {img:IMAGENES.deco.mariposa, top:'22%',left:'1%'},
  {img:IMAGENES.deco.mariposa, top:'22%',right:'1%'},
  {img:IMAGENES.deco.corazon,  top:'35%',left:'3%'},
  {img:IMAGENES.deco.corazonB, top:'35%',right:'3%'},
  {img:IMAGENES.deco.estrella, top:'50%',left:'1%'},
  {img:IMAGENES.deco.brillo,   top:'50%',right:'1%'},
  {img:IMAGENES.deco.cereza,   top:'65%',left:'4%'},
  {img:IMAGENES.deco.cereza,   top:'65%',right:'4%'},
  {img:IMAGENES.deco.tulipan,  top:'78%',left:'2%'},
  {img:IMAGENES.deco.corazonP, top:'78%',right:'2%'},
  {img:IMAGENES.deco.lazo,     top:'88%',left:'6%'},
  {img:IMAGENES.deco.lazo,     top:'88%',right:'6%'},
];

const OPCIONES_MENU = [
  {img:IMAGENES.menu.s1.src,  emoji:IMAGENES.menu.s1.fallback,  titulo:'Carta Romántica',       seccion:1},
  {img:IMAGENES.menu.s2.src,  emoji:IMAGENES.menu.s2.fallback,  titulo:'Playlist Musical',      seccion:2},
  {img:IMAGENES.menu.s3.src,  emoji:IMAGENES.menu.s3.fallback,  titulo:'Test de Amor',          seccion:3},
  {img:IMAGENES.menu.s4.src,  emoji:IMAGENES.menu.s4.fallback,  titulo:'Juego RPG',             seccion:4},
  {img:IMAGENES.menu.s5.src,  emoji:IMAGENES.menu.s5.fallback,  titulo:'Carta Interactiva',     seccion:5},
  {img:IMAGENES.menu.s6.src,  emoji:IMAGENES.menu.s6.fallback,  titulo:'Paisaje & Juegos',      seccion:6},
  {img:IMAGENES.menu.s7.src,  emoji:IMAGENES.menu.s7.fallback,  titulo:'Nuestro Universo',      seccion:7},
  {img:IMAGENES.menu.s8.src,  emoji:IMAGENES.menu.s8.fallback,  titulo:'Jardín Secreto',        seccion:8},
  {img:IMAGENES.menu.s9.src,  emoji:IMAGENES.menu.s9.fallback,  titulo:'Mapa del Amor',         seccion:9},
  {img:IMAGENES.menu.s10.src, emoji:IMAGENES.menu.s10.fallback, titulo:'Caja de Recuerdos',     seccion:10},
  {img:IMAGENES.menu.s11.src, emoji:IMAGENES.menu.s11.fallback, titulo:'Preguntas del Corazón', seccion:11},
  {img:IMAGENES.menu.s12.src, emoji:IMAGENES.menu.s12.fallback, titulo:'Carta Infinita',        seccion:12},
  {img:IMAGENES.menu.s13.src, emoji:IMAGENES.menu.s13.fallback, titulo:'✨ Eterno Amor ✨',      seccion:13,bloqueada:true},
];

const EMOJI_BIG   = ['💖','💗','💘','💕','💓','✨','🎀','🌸','🦋','🥹','💝','💞','🌺','🌟','⭐','🍒','💫'];
const EMOJI_SMALL = ['💗','✨','🌸','💕','⭐','🌟','💖','🎀'];
const TRANSITIONS_LIST = [
  {i:'trans-fade-in',   o:'trans-fade-out'},
  {i:'trans-sright-in', o:'trans-sright-out'},
  {i:'trans-sleft-in',  o:'trans-sleft-out'},
  {i:'trans-zoom-in',   o:'trans-zoom-out'},
  {i:'trans-blur-in',   o:'trans-blur-out'},
  {i:'trans-flip-in',   o:'trans-flip-out'},
  {i:'trans-rot-in',    o:'trans-rot-out'},
  {i:'trans-sup-in',    o:'trans-sup-out'},
  {i:'trans-diag-in',   o:'trans-diag-out'},
  {i:'trans-glitch-in', o:'trans-glitch-out'},
];

// ════════════════════════════════════════════════
// ESTADO GLOBAL
// ════════════════════════════════════════════════
let particlePool=[], transIdx=0;
const MAX_PARTICLES=60;
let globalSongIdx=0,globalPlaying=false,globalPlayerMin=false;
let achievements={},sectionTimers={};
let telemetry={visits:[],sections:{},interactions:[],songs:[],drawings:[],texts:[],formAnswers:[],loveBarValues:[],bucketList:[],unlockedPhotos:[],sec13Unlocked:false};
let rpgState=null;
let testState={answers:[],current:0,answered:false,restarted:false,answeredAfterRestart:0};
let cartaClickedWords=new Set();
let cartaSecretClickCounts={},cartaSorpresaShown=false,cartaHoverTimers={};
let jardinVisitDates=new Set(),jardinRiegoCount=0,jardinFloresClicked=new Set();
let mapaPinsClicked=new Set(),mapaFutureList=[];
let cajaFound=new Set(),cajaStartTime=0;
let pqState={current:0,answers:[],unlocked:[],restarted:false};
let tttBoard,tttTurn,tttWins=0;
let hangmanWord='',hangmanGuessed=new Set(),hangmanFails=0,hangmanWins=0,hangmanLosses=0;
let loveBarValues=new Set(),pizarraText='',canvasColors=new Set(),canvasSizes=new Set();
let canvasCleared=0,canvasDrawn=false,adornosPaisajeClicked=new Set();
let sec13Slide=0,sec13TransIdx=0,sec13Transitioning=false;
let bucketList=[],bucketAdded=0;
let galaxyRotated=false,galaxyClicked=false,galaxyInitialized=false;
let sec7TimerStarted=false;

// DOM refs
const giftScreen   =document.getElementById('giftScreen');
const mainApp      =document.getElementById('mainApp');
const giftBox      =document.getElementById('giftBox');
const confettiCont =document.getElementById('confettiContainer');
const globalNotif  =document.getElementById('globalNotif');
const menuGrid     =document.getElementById('menuGrid');
const gpBarInner   =document.getElementById('gpBarInner');
const gpText       =document.getElementById('gpText');
const gpPct        =document.getElementById('gpPct');
const globalAudio  =document.getElementById('globalAudio');
const gpPlayBtn    =document.getElementById('gpPlayBtn');
const gpPrevBtn    =document.getElementById('gpPrevBtn');
const gpNextBtn    =document.getElementById('gpNextBtn');
const gpMiniName   =document.getElementById('gpMiniName');
const gpProgressFill =document.getElementById('gpProgressFill');
const gpProgressThumb=document.getElementById('gpProgressThumb');
const gpProgressTrack=document.getElementById('gpProgressTrack');
const gpToggleBtn  =document.getElementById('gpToggleBtn');
const gpMini       =document.getElementById('gpMini');
const genericModal =document.getElementById('genericModal');
const modalContent =document.getElementById('modalContent');
const modalCloseBtn=document.getElementById('modalCloseBtn');
const bgDecoLayer  =document.getElementById('bgDecoLayer');

// ════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded',()=>{
  loadState();
  initAchievements();
  buildBgDecos();
  initGiftScreen();
  buildMenu();
  globalAudio.volume=0.7;
  if(PLAYLIST.length) loadGlobalSong(globalSongIdx,false);
  gpPlayBtn.addEventListener('click',e=>{e.stopPropagation();toggleGlobalPlay();});
  gpPrevBtn.addEventListener('click',e=>{e.stopPropagation();changeGlobalSong(-1);});
  gpNextBtn.addEventListener('click',e=>{e.stopPropagation();changeGlobalSong(1);});
  gpToggleBtn.addEventListener('click',e=>{e.stopPropagation();toggleMiniPlayer();});
  globalAudio.addEventListener('timeupdate',updateGlobalProgress);
  globalAudio.addEventListener('ended',()=>changeGlobalSong(1));
  globalAudio.addEventListener('play',()=>{globalPlaying=true;gpPlayBtn.textContent='⏸';});
  globalAudio.addEventListener('pause',()=>{globalPlaying=false;gpPlayBtn.textContent='▶';});
  if(gpProgressTrack){
    gpProgressTrack.addEventListener('click',e=>{
      e.stopPropagation();
      if(!globalAudio.duration) return;
      const r=gpProgressTrack.getBoundingClientRect();
      globalAudio.currentTime=((e.clientX-r.left)/r.width)*globalAudio.duration;
    });
  }
  modalCloseBtn.addEventListener('click',closeModal);
  genericModal.addEventListener('click',e=>{if(e.target===genericModal)closeModal();});
  // Partículas en fondo
  document.addEventListener('click',e=>{
    if(!mainApp||mainApp.classList.contains('hidden'))return;
    if(e.target.closest('button,input,select,textarea,.clickable-deco,.deco-float,.global-player,.menu-card,.sec-panel,.modal-overlay,canvas'))return;
    spawnParticles(e.clientX,e.clientY,7,'small');
  });
  document.addEventListener('touchstart',e=>{
    if(!mainApp||mainApp.classList.contains('hidden'))return;
    if(e.target.closest('button,input,select,textarea,.clickable-deco,.deco-float,.global-player,.menu-card,.sec-panel,.modal-overlay,canvas'))return;
    spawnParticles(e.touches[0].clientX,e.touches[0].clientY,7,'small');
  },{passive:true});
  startFloatingHearts();
  telemetry.visits.push(new Date().toISOString());
  saveState();
  const h=new Date().getHours();
  if(h===0) setTimeout(()=>showNotif('¡Feliz cumpleaños, mi amor! 🌙✨'),3000);
  // Admin exportar: 5 clics esquina inferior IZQUIERDA
  let adminClicks=0,adminTimer;
  document.body.addEventListener('click',e=>{
    if(e.clientX<40&&e.clientY>window.innerHeight-40){
      adminClicks++;clearTimeout(adminTimer);
      adminTimer=setTimeout(()=>{adminClicks=0;},2000);
      if(adminClicks>=5){adminClicks=0;exportTelemetry();}
    }
  });
  // Reset total: 5 clics esquina inferior DERECHA
  let resetClicks=0,resetTimer;
  document.body.addEventListener('click',e=>{
    if(e.clientX>window.innerWidth-40&&e.clientY>window.innerHeight-40){
      resetClicks++;clearTimeout(resetTimer);
      resetTimer=setTimeout(()=>{resetClicks=0;},2000);
      if(resetClicks>=5){resetClicks=0;showResetConfirmModal();}
    }
  });
  // Botón atrás móvil — MOD 5
  window.addEventListener('popstate',e=>{
    const openSec=document.querySelector('.sec-panel:not(.hidden)');
    if(openSec){
      const n=parseInt(openSec.id.replace('sec',''));
      if(!isNaN(n)){closeSection(n);history.pushState({page:'menu'},'');}
    }
  });
  history.pushState({page:'menu'},'');
});

// ════════════════════════════════════════════════
// RESET TOTAL
// ════════════════════════════════════════════════
function showResetConfirmModal(){
  openModal(`<div style="text-align:center">
    <div style="font-size:2.5rem;margin-bottom:10px">⚠️</div>
    <div class="modal-title" style="color:#be185d">Reiniciar todo</div>
    <div class="modal-text" style="margin:12px 0">Esto borrará TODO el progreso, logros y datos. ¿Estás segura?</div>
    <div style="display:flex;gap:10px;justify-content:center;margin-top:16px">
      <button class="pink-btn" id="confirmReset" style="background:linear-gradient(135deg,#ef4444,#b91c1c)">Sí, reiniciar</button>
      <button class="pink-btn" id="cancelReset" style="background:rgba(253,232,240,0.9);color:var(--pink-dark);border:1.5px solid var(--pink-light);box-shadow:none">Cancelar</button>
    </div>
  </div>`);
  document.getElementById('confirmReset').addEventListener('click',()=>{
    localStorage.clear();closeModal();
    showNotif('Reiniciando... 🔄');
    setTimeout(()=>location.reload(),800);
  });
  document.getElementById('cancelReset').addEventListener('click',closeModal);
}

// ════════════════════════════════════════════════
// PERSISTENCIA
// ════════════════════════════════════════════════
function saveState(){
  try{
    localStorage.setItem('mayAchievements',JSON.stringify(achievements));
    localStorage.setItem('mayTelemetry',JSON.stringify(telemetry));
    localStorage.setItem('mayBucketList',JSON.stringify(bucketList));
    localStorage.setItem('mayMapaFuture',JSON.stringify(mapaFutureList));
    localStorage.setItem('pizarraText',pizarraText);
    localStorage.setItem('giftOpened',mainApp.classList.contains('hidden')?'no':'yes');
  }catch(e){}
}
function loadState(){
  try{
    const ach=localStorage.getItem('mayAchievements');if(ach)achievements=JSON.parse(ach);
    const tel=localStorage.getItem('mayTelemetry');if(tel)telemetry=JSON.parse(tel);
    const bl=localStorage.getItem('mayBucketList');
    bucketList=bl?JSON.parse(bl):[{texto:'Viajar a la playa juntos',marcado:false},{texto:'Ver una película bajo las estrellas',marcado:false},{texto:'Bailar juntos en la lluvia',marcado:false},{texto:'Cocinar nuestra receta favorita',marcado:false}];
    const mf=localStorage.getItem('mayMapaFuture');if(mf)mapaFutureList=JSON.parse(mf);
    pizarraText=localStorage.getItem('pizarraText')||'';
    if(localStorage.getItem('giftOpened')==='yes'){
      giftScreen.style.display='none';
      mainApp.classList.remove('hidden');
      setTimeout(()=>initMusic(),500);
    }
  }catch(e){}
}
function exportTelemetry(){
  const blob=new Blob([JSON.stringify({achievements,telemetry,bucketList,mapaFutureList},null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`may_datos_${new Date().toISOString().split('T')[0]}.json`;a.click();
}
function recordInteraction(t,d){telemetry.interactions.push({type:t,data:d,ts:new Date().toISOString()});}

// ════════════════════════════════════════════════
// LOGROS
// ════════════════════════════════════════════════
function initAchievements(){
  for(let i=1;i<=12;i++){
    const k=`sec${i}`;
    const cfg=CONFIGURACION_LOGROS[`seccion${i}`];
    const len=cfg?cfg.logros.length:0;
    if(!achievements[k]){achievements[k]={done:new Array(len).fill(false),complete:false};}
    else{while(achievements[k].done.length<len)achievements[k].done.push(false);}
  }
}
function getAchTexts(sec){const cfg=CONFIGURACION_LOGROS[`seccion${sec}`];return cfg?cfg.logros.map(l=>l.texto):[];}
function unlockAch(sec,idx){
  const k=`sec${sec}`;if(!achievements[k]||achievements[k].done[idx])return;
  achievements[k].done[idx]=true;
  const texts=getAchTexts(sec);
  showNotif(`🏆 ${texts[idx]||'Logro'}!`);
  spawnParticles(window.innerWidth/2,window.innerHeight/2,8,'small');
  renderAchPanel(sec);checkSectionComplete(sec);saveState();
}
function checkSectionComplete(sec){
  const k=`sec${sec}`;if(!achievements[k]||achievements[k].complete)return;
  if(achievements[k].done.every(v=>v)){
    achievements[k].complete=true;
    setTimeout(()=>{showNotif(`🎉 ¡Sección ${sec} completada al 100%! 💗`);launchConfetti(80);updateGlobalProgressUI();updateMenuCard(sec);saveState();checkAllComplete();},600);
  }
}
function checkAllComplete(){
  let done=0;for(let i=1;i<=12;i++)if(achievements[`sec${i}`]?.complete)done++;
  if(done>=12&&!achievements.sec13Unlocked){achievements.sec13Unlocked=true;telemetry.sec13Unlocked=new Date().toISOString();saveState();setTimeout(()=>unlock13(),1000);}
}
function unlock13(){
  launchConfetti(200);showNotif('🎉✨ ¡HAS DESBLOQUEADO ETERNO AMOR! ✨💖');
  const card=document.querySelector('[data-sec="13"]');
  if(card){card.classList.remove('locked');card.classList.add('unlocking');card.querySelector('.menu-card-lock')?.remove();card.addEventListener('click',()=>openSection(13));setTimeout(()=>card.classList.remove('unlocking'),1500);}
  launchFireworks();
}
function updateGlobalProgressUI(){
  let done=0;for(let i=1;i<=12;i++)if(achievements[`sec${i}`]?.complete)done++;
  const pct=Math.round(done/12*100);
  if(gpBarInner)gpBarInner.style.width=pct+'%';
  if(gpText)gpText.textContent=`${done}/12 secciones`;
  if(gpPct)gpPct.textContent=pct+'%';
}
function toggleAchPanel(sec){
  const p=document.getElementById(`achPanel${sec}`);if(!p)return;
  p.classList.toggle('hidden');if(!p.classList.contains('hidden'))renderAchPanel(sec);
}
function renderAchPanel(sec){
  const p=document.getElementById(`achPanel${sec}`);if(!p)return;
  const k=`sec${sec}`,texts=getAchTexts(sec),done=achievements[k]?.done||[];
  const count=done.filter(Boolean).length,pct=texts.length?Math.round(count/texts.length*100):0;
  const cfg=CONFIGURACION_LOGROS[`seccion${sec}`];
  p.innerHTML=`<div class="ach-title">${cfg?.nombre||'Logros'} — ${count}/${texts.length} (${pct}%)</div>
    <div class="ach-progress-outer"><div class="ach-progress-inner" style="width:${pct}%"></div></div>
    <ul class="ach-list">${texts.map((l,i)=>`<li class="ach-item ${done[i]?'done':''}"><span class="ach-check">${done[i]?'✅':'⭕'}</span>${l}</li>`).join('')}</ul>
    ${achievements[k]?.complete?'<div class="ach-complete-msg">🎉 ¡Sección completada al 100%! 🎉</div>':''}`;
}
function updateMenuCard(sec){
  const texts=getAchTexts(sec),done=(achievements[`sec${sec}`]?.done||[]).filter(Boolean).length;
  const pct=texts.length?Math.round(done/texts.length*100):0;
  const fill=document.querySelector(`.menu-card[data-sec="${sec}"] .menu-card-prog-fill`);
  if(fill)fill.style.width=pct+'%';
}

// ════════════════════════════════════════════════
// ADORNOS BG CON IMÁGENES
// ════════════════════════════════════════════════
function buildBgDecos(){
  if(!bgDecoLayer)return;
  bgDecoLayer.innerHTML='';
  BG_DECOS.forEach((d,i)=>{
    const el=document.createElement('span');
    el.className='deco-float clickable-deco';
    const posKeys=['top','left','right','bottom'];
    posKeys.forEach(k=>{if(d[k])el.style[k]=d[k];});
    el.innerHTML=imgOrEmoji(d.img,'deco-img','',`width:28px;height:28px;object-fit:contain;pointer-events:none`);
    el.style.animationDelay=(i*0.4)+'s';
    const handler=e=>{
      e.stopPropagation();
      const r=el.getBoundingClientRect();
      spawnParticles(r.left+r.width/2,r.top+r.height/2,22,'big');
      el.style.transform='scale(1.5) rotate(20deg)';
      setTimeout(()=>el.style.transform='',300);
      recordInteraction('deco_click',d.img.fallback);
    };
    el.addEventListener('click',handler);
    el.addEventListener('touchstart',handler,{passive:true});
    bgDecoLayer.appendChild(el);
  });
}

// ════════════════════════════════════════════════
// PANTALLA REGALO
// ════════════════════════════════════════════════
let giftClicks=0;
function initGiftScreen(){
  if(localStorage.getItem('giftOpened')==='yes')return;
  // Reemplazar emojis decorativos del regalo con imágenes
  const bgDeco=document.querySelector('.gift-bg-deco');
  if(bgDeco){
    const decoMap=[IMAGENES.regalo.deco1,IMAGENES.regalo.deco1,IMAGENES.regalo.deco2,IMAGENES.regalo.deco2,IMAGENES.deco.corazon,IMAGENES.deco.corazonP,IMAGENES.deco.brillo,IMAGENES.deco.estrella,IMAGENES.deco.mariposa,IMAGENES.deco.mariposa];
    bgDeco.querySelectorAll('.g-deco').forEach((el,i)=>{if(decoMap[i])el.innerHTML=imgOrEmoji(decoMap[i],'gift-deco-img','','width:28px;height:28px;object-fit:contain');});
  }
  const handler=()=>{
    giftClicks++;
    const label=document.getElementById('giftClickLabel');if(label)label.textContent=`¡Ya casi! ${giftClicks} / ${CLICS_NECESARIOS} clics 💗`;
    const bar=document.getElementById('giftProgressBar');if(bar)bar.style.width=(giftClicks/CLICS_NECESARIOS*100)+'%';
    spawnParticles(window.innerWidth/2,window.innerHeight/2,5,'small');
    if(giftBox){giftBox.style.transform='scale(1.08)';setTimeout(()=>giftBox.style.transform='',120);}
    if(giftClicks>=CLICS_NECESARIOS)openGift();
  };
  if(giftBox){giftBox.addEventListener('click',handler);giftBox.addEventListener('touchstart',handler,{passive:true});}
}
function openGift(){
  launchConfetti(150);
  if(giftScreen)giftScreen.classList.add('closing');
  setTimeout(()=>{
    if(giftScreen)giftScreen.style.display='none';
    mainApp.classList.remove('hidden');
    initMusic();startFloatingHearts();updateGlobalProgressUI();
    for(let i=1;i<=13;i++)updateMenuCard(i);
    localStorage.setItem('giftOpened','yes');saveState();
    history.pushState({page:'menu'},'');
  },900);
}

// ════════════════════════════════════════════════
// MENÚ
// ════════════════════════════════════════════════
function buildMenu(){
  menuGrid.innerHTML='';
  OPCIONES_MENU.forEach(opt=>{
    const locked=opt.bloqueada&&!achievements.sec13Unlocked;
    const sec=opt.seccion,texts=getAchTexts(sec);
    const done=texts.length?(achievements[`sec${sec}`]?.done||[]).filter(Boolean).length:0;
    const pct=texts.length?Math.round(done/texts.length*100):0;
    const card=document.createElement('div');
    card.className=`menu-card${locked?' locked':''}`;
    card.dataset.sec=sec;
    if(sec===13)card.classList.add('sec13-card');
    card.innerHTML=`
      <div class="menu-card-img">
        <img src="${opt.img}" alt="${opt.titulo}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="img-placeholder" style="display:none">${opt.emoji}</div>
      </div>
      <div class="menu-card-progress"><div class="menu-card-prog-fill" style="width:${pct}%"></div></div>
      <div class="menu-card-title">${opt.titulo}</div>
      ${locked?'<div class="menu-card-lock">🔒</div>':''}`;
    if(!locked)card.addEventListener('click',()=>openSection(sec));
    menuGrid.appendChild(card);
  });
}
function openSection(sec){
  document.querySelectorAll('.sec-panel').forEach(p=>p.classList.add('hidden'));
  document.getElementById('menuSection')?.classList.add('hidden');
  const panel=document.getElementById(`sec${sec}`);if(!panel)return;
  panel.classList.remove('hidden');panel.scrollTop=0;
  sectionTimers[sec]=Date.now();
  initSection(sec);renderAchPanel(sec);
  recordInteraction('open_section',sec);
  history.pushState({page:`sec${sec}`,sec},'');
  saveState();
}
function closeSection(sec){
  const panel=document.getElementById(`sec${sec}`);if(panel)panel.classList.add('hidden');
  document.getElementById('menuSection')?.classList.remove('hidden');
  if(sectionTimers[sec]){
    const el=(Date.now()-sectionTimers[sec])/1000;
    if(!telemetry.sections[sec])telemetry.sections[sec]={timeSpent:0};
    telemetry.sections[sec].timeSpent=(telemetry.sections[sec].timeSpent||0)+el;
    delete sectionTimers[sec];
  }
  updateGlobalProgressUI();saveState();
}
document.addEventListener('click',e=>{
  const btn=e.target.closest('.back-btn');
  if(btn){const sec=parseInt(btn.dataset.sec);if(!isNaN(sec)){closeSection(sec);history.pushState({page:'menu'},'');}}
});

// ════════════════════════════════════════════════
// MÚSICA GLOBAL
// ════════════════════════════════════════════════
function initMusic(){
  if(!PLAYLIST.length)return;
  loadGlobalSong(globalSongIdx,false);
  const tryPlay=()=>{globalAudio.play().catch(()=>{});document.removeEventListener('click',tryPlay);document.removeEventListener('touchstart',tryPlay);};
  document.addEventListener('click',tryPlay,{once:true});
  document.addEventListener('touchstart',tryPlay,{once:true,passive:true});
  setTimeout(()=>globalAudio.play().catch(()=>{}),400);
}
function loadGlobalSong(idx,play=true){
  globalSongIdx=((idx%PLAYLIST.length)+PLAYLIST.length)%PLAYLIST.length;
  const s=PLAYLIST[globalSongIdx];
  globalAudio.src=s.src;
  if(gpMiniName)gpMiniName.textContent=s.name;
  if(play&&globalPlaying)globalAudio.play().catch(()=>{});
  updateGlobalProgress();
  telemetry.songs.push({name:s.name,ts:new Date().toISOString()});
  syncPlaylistSection();
}
function toggleGlobalPlay(){if(globalPlaying)globalAudio.pause();else globalAudio.play().catch(()=>{});}
function changeGlobalSong(dir){loadGlobalSong(globalSongIdx+dir,true);unlockAch(2,dir>0?2:3);}
function updateGlobalProgress(){
  if(!globalAudio.duration)return;
  const pct=globalAudio.currentTime/globalAudio.duration*100;
  if(gpProgressFill)gpProgressFill.style.width=pct+'%';
  if(gpProgressThumb)gpProgressThumb.style.left=pct+'%';
  const f=document.getElementById('plProgressFill'),t=document.getElementById('plProgressThumb');
  if(f)f.style.width=pct+'%';if(t)t.style.left=pct+'%';
  const ct=document.getElementById('plCurTime'),tt=document.getElementById('plTotalTime');
  if(ct)ct.textContent=fmtTime(globalAudio.currentTime);if(tt)tt.textContent=fmtTime(globalAudio.duration);
}
function fmtTime(s){if(isNaN(s))return'0:00';const m=Math.floor(s/60),ss=Math.floor(s%60);return m+':'+(ss<10?'0':'')+ss;}
function toggleMiniPlayer(){globalPlayerMin=!globalPlayerMin;gpMini.classList.toggle('hidden-player',globalPlayerMin);unlockAch(2,5);}
function syncPlaylistSection(){
  const sn=document.getElementById('plSongName'),nu=document.getElementById('plSongNum'),le=document.getElementById('plLetra');
  if(!sn)return;
  const s=PLAYLIST[globalSongIdx];
  sn.textContent=s.name;if(nu)nu.textContent=`${globalSongIdx+1} / ${PLAYLIST.length}`;if(le)le.textContent=s.letra||'';
  const art=document.getElementById('plAlbumArt');if(art){if(globalPlaying)art.classList.add('playing');else art.classList.remove('playing');}
  document.querySelectorAll('.pl-song-item').forEach((el,i)=>el.classList.toggle('active',i===globalSongIdx));
}

function initSection(sec){
  switch(sec){case 1:initSec1();break;case 2:initSec2();break;case 3:initSec3();break;case 4:initSec4();break;
    case 5:initSec5();break;case 6:initSec6();break;case 7:initSec7();break;case 8:initSec8();break;
    case 9:initSec9();break;case 10:initSec10();break;case 11:initSec11();break;case 12:initSec12();break;case 13:initSec13();break;}
}

// ════════════════════════════════════════════════
// SEC 1 — CARRUSEL CARTA
// ════════════════════════════════════════════════
let cartaSlide=0,cartaTransIdx=0,cartaTransitioning=false;
let cartaSlidesViewed=new Set(),cartaDotsClicked=new Set();
let cartaTimerStarted=false;
function initSec1(){
  const carousel=document.getElementById('cartaCarousel');if(!carousel)return;
  if(!carousel.children.length){
    IMGS_CARTA.forEach((src,i)=>{
      const s=document.createElement('div');s.className='c-slide'+(i===0?' active':'');s.dataset.idx=i;
      s.innerHTML=`<div class="c-placeholder" style="position:relative;width:100%;height:100%"><img src="${src}" alt="Carta ${i+1}" loading="lazy" style="width:100%;height:100%;object-fit:contain" onerror="this.style.display='none'"><div class="c-slide-overlay">${FRASES_CARTA[i]||''}</div></div>`;
      carousel.appendChild(s);
    });
    let tx=0,ty=0;
    carousel.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY;},{passive:true});
    carousel.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>40){dx<0?goCartaSlide(cartaSlide+1):goCartaSlide(cartaSlide-1);}},{passive:true});
  }
  buildCartaDots();updateCartaProgress();cartaSlidesViewed.add(0);
  document.getElementById('cartaPrev').onclick=()=>{goCartaSlide(cartaSlide-1);unlockAch(1,1);};
  document.getElementById('cartaNext').onclick=()=>{goCartaSlide(cartaSlide+1);unlockAch(1,2);};
  if(!cartaTimerStarted){cartaTimerStarted=true;setTimeout(()=>{unlockAch(1,4);checkSectionComplete(1);},30000);}
}
function buildCartaDots(){
  const dc=document.getElementById('cartaDots');if(!dc)return;dc.innerHTML='';
  for(let i=0;i<TOTAL_SLIDES_CARTA;i++){
    const d=document.createElement('div');d.className='c-dot'+(i===0?' active':'');
    d.addEventListener('click',()=>{goCartaSlide(i);cartaDotsClicked.add(i);if(cartaDotsClicked.size>=TOTAL_SLIDES_CARTA){unlockAch(1,3);}});
    dc.appendChild(d);
  }
}
function goCartaSlide(idx){
  if(cartaTransitioning)return;
  if(idx<0)idx=TOTAL_SLIDES_CARTA-1;if(idx>=TOTAL_SLIDES_CARTA)idx=0;if(idx===cartaSlide)return;
  cartaTransitioning=true;
  const car=document.getElementById('cartaCarousel'),slides=car?.querySelectorAll('.c-slide');
  if(!slides){cartaSlide=idx;cartaTransitioning=false;return;}
  const t=TRANSITIONS_LIST[cartaTransIdx%TRANSITIONS_LIST.length];cartaTransIdx++;
  const old=slides[cartaSlide],nw=slides[idx];
  old.classList.add(t.o);nw.style.display='flex';nw.classList.add(t.i,'active');
  setTimeout(()=>{old.style.display='none';old.classList.remove('active',t.o);nw.classList.remove(t.i);cartaSlide=idx;cartaTransitioning=false;
    cartaSlidesViewed.add(idx);updateCartaProgress();
    if(cartaSlidesViewed.size>=TOTAL_SLIDES_CARTA){unlockAch(1,0);}checkSectionComplete(1);},550);
}
function updateCartaProgress(){
  const pt=document.getElementById('cartaProgressText'),pb=document.getElementById('cartaProgressBar');
  if(pt)pt.textContent=`Imagen ${cartaSlide+1} de ${TOTAL_SLIDES_CARTA} 💗`;
  if(pb)pb.style.width=((cartaSlide+1)/TOTAL_SLIDES_CARTA*100)+'%';
  document.querySelectorAll('#cartaDots .c-dot').forEach((d,i)=>d.classList.toggle('active',i===cartaSlide));
}

// ════════════════════════════════════════════════
// SEC 2 — PLAYLIST EXPANDIDA
// ════════════════════════════════════════════════
let sec2TimerStarted=false;
function initSec2(){
  syncPlaylistSection();
  const list=document.getElementById('plSongList');
  if(list&&!list.children.length){
    PLAYLIST.forEach((s,i)=>{
      const item=document.createElement('div');item.className='pl-song-item'+(i===globalSongIdx?' active':'');
      item.innerHTML=`<span class="pl-song-num-badge">${i+1}</span><span>${s.name}</span>`;
      item.addEventListener('click',()=>{loadGlobalSong(i,true);globalAudio.play().catch(()=>{});unlockAch(2,0);});
      list.appendChild(item);
    });
  }
  const pb=document.getElementById('plPlayBtn'),pn=document.getElementById('plNextBtn'),pp=document.getElementById('plPrevBtn');
  const pt=document.getElementById('plProgressTrack'),vs=document.getElementById('plVolSlider');
  if(pb)pb.onclick=e=>{e.stopPropagation();toggleGlobalPlay();syncPlaylistSection();};
  if(pn)pn.onclick=e=>{e.stopPropagation();changeGlobalSong(1);unlockAch(2,2);};
  if(pp)pp.onclick=e=>{e.stopPropagation();changeGlobalSong(-1);unlockAch(2,3);};
  if(pt)pt.addEventListener('click',e=>{if(!globalAudio.duration)return;const r=pt.getBoundingClientRect();globalAudio.currentTime=((e.clientX-r.left)/r.width)*globalAudio.duration;unlockAch(2,1);});
  if(vs){vs.value=globalAudio.volume;vs.addEventListener('input',e=>{globalAudio.volume=e.target.value;e.target.style.background=`linear-gradient(90deg,var(--pink-main) ${e.target.value*100}%,rgba(251,182,206,0.4) ${e.target.value*100}%)`;unlockAch(2,4);});}
  if(!sec2TimerStarted){sec2TimerStarted=true;setTimeout(()=>{unlockAch(2,6);},60000);}
  checkSectionComplete(2);
}

// ════════════════════════════════════════════════
// SEC 3 — TEST
// ════════════════════════════════════════════════
function initSec3(){testState=JSON.parse(localStorage.getItem('testState')||'null')||{answers:new Array(PREGUNTAS_FORMULARIO.length).fill(null),current:0,answered:false,restarted:false,answeredAfterRestart:0};renderTest();}
function renderTest(){
  const c=document.getElementById('testContainer');if(!c)return;
  const p=testState.current,total=PREGUNTAS_FORMULARIO.length;
  if(testState.answered&&p>=total){renderTestResult();return;}
  const q=PREGUNTAS_FORMULARIO[p],pct=Math.round((p/total)*100);
  c.innerHTML=`<div class="test-wrap">
    <div class="test-progress-text">Pregunta ${p+1} de ${total} — ${pct}%</div>
    <div class="cp-bar-outer" style="margin-bottom:12px"><div class="cp-bar-inner" style="width:${pct}%"></div></div>
    <div class="test-q-text">${q.pregunta}</div>
    <div class="test-options">${q.opciones.map((o,i)=>`<button class="test-option${testState.answers[p]===i?' selected':''}" data-i="${i}">${o}</button>`).join('')}</div>
    <div class="test-nav">
      <button class="test-btn secondary" id="testPrev" ${p===0?'disabled':''}>← Anterior</button>
      <button class="test-btn" id="testNext">${p===total-1?'Ver resultado →':'Siguiente →'}</button>
    </div>
  </div>`;
  c.querySelectorAll('.test-option').forEach(btn=>{btn.addEventListener('click',()=>{testState.answers[p]=parseInt(btn.dataset.i);if(testState.restarted){testState.answeredAfterRestart=(testState.answeredAfterRestart||0)+1;if(testState.answeredAfterRestart>=5)unlockAch(3,4);}renderTest();});});
  document.getElementById('testPrev').addEventListener('click',()=>{if(p>0){testState.current--;unlockAch(3,1);renderTest();}});
  document.getElementById('testNext').addEventListener('click',()=>{if(testState.answers[p]===null){showNotif('Selecciona una respuesta 💗');return;}if(p<total-1){testState.current++;unlockAch(3,1);renderTest();}else{testState.answered=true;testState.current=total;unlockAch(3,2);renderTest();}});
  localStorage.setItem('testState',JSON.stringify(testState));
}
function renderTestResult(){
  const c=document.getElementById('testContainer');if(!c)return;
  const total=PREGUNTAS_FORMULARIO.length;
  const correct=testState.answers.filter((a,i)=>a===PREGUNTAS_FORMULARIO[i].correcta).length;
  const pct=Math.round(correct/total*100);
  const msg=MENSAJES_RESULTADO.find(m=>pct>=m.min&&pct<=m.max)?.texto||'¡Bien hecho! 💗';
  if(pct===100)unlockAch(3,5);unlockAch(3,0);
  c.innerHTML=`<div class="test-wrap test-result">
    <div class="test-result-score">${correct}/${total} — ${pct}%</div>
    <div class="test-result-msg">${msg}</div>
    <div style="margin-top:16px;display:flex;gap:10px;justify-content:center">
      <button class="test-btn" id="testRestart">Reiniciar 🔄</button>
    </div>
  </div>`;
  document.getElementById('testRestart').addEventListener('click',()=>{testState={answers:new Array(PREGUNTAS_FORMULARIO.length).fill(null),current:0,answered:false,restarted:true,answeredAfterRestart:0};unlockAch(3,3);renderTest();});
  checkSectionComplete(3);
}

// ════════════════════════════════════════════════
// SEC 4 — RPG
// ════════════════════════════════════════════════
function initSec4(){if(!rpgState)rpgState=initRPGState();renderRPG();}
function initRPGState(){
  const size=JUEGO_CONFIG.mapaSize,visited=new Array(size*size).fill(false),enemigos=[];
  for(let i=0;i<Math.min(5,size*size/4|0);i++){
    let pos;do{pos=Math.floor(Math.random()*size*size);}while(pos<1||enemigos.find(e=>e.pos===pos));
    enemigos.push({pos,tipo:Math.floor(Math.random()*JUEGO_CONFIG.tiposEnemigos.length),hp:30+Math.floor(Math.random()*20)});
  }
  return{playerPos:0,hp:JUEGO_CONFIG.vidaInicial,maxHp:JUEGO_CONFIG.vidaInicial,level:1,pts:0,visited,enemigos,defeated:[],tiposDefeated:new Set(),ataqueUsed:new Set(),battleMode:false,currentEnemy:null,lost:false,restarted:false,timeStart:Date.now()};
}
function renderRPG(){
  const c=document.getElementById('rpgContainer');if(!c)return;
  const s=rpgState;
  if(s.battleMode&&s.currentEnemy){renderBattle();return;}
  if(s.lost){
    c.innerHTML=`<div class="rpg-wrap"><div class="rpg-battle-title">💔 Game Over</div><p style="font-family:var(--font-script);margin:10px 0">¡Perdiste! Pero el amor siempre renace 💗</p><button class="pink-btn" id="rpgRestartBtn">Reiniciar 🔄</button></div>`;
    document.getElementById('rpgRestartBtn').addEventListener('click',()=>{s.restarted=true;unlockAch(4,5);rpgState=initRPGState();rpgState.restarted=true;renderRPG();});
    return;
  }
  const size=JUEGO_CONFIG.mapaSize;
  let mapHtml='<div class="rpg-map">';
  for(let r=0;r<size;r++){
    mapHtml+='<div>';
    for(let col=0;col<size;col++){
      const pos=r*size+col,isPlayer=pos===s.playerPos,enemy=s.enemigos.find(e=>e.pos===pos);
      let icon;
      if(isPlayer)icon=imgOrEmoji(IMAGENES.rpg.jugador,'rpg-ci','j','width:22px;height:22px;object-fit:contain');
      else if(enemy){const ei=IMAGENES.rpg[`enemigo${enemy.tipo}`]||IMAGENES.rpg.enemigo0;icon=imgOrEmoji(ei,'rpg-ci','e','width:22px;height:22px;object-fit:contain');}
      else if(s.visited[pos])icon=imgOrEmoji(IMAGENES.rpg.visitado,'rpg-ci','v','width:22px;height:22px;object-fit:contain');
      else icon='⬜';
      mapHtml+=`<span class="rpg-cell${isPlayer?' player':''}${enemy&&!isPlayer?' enemy':''}${s.visited[pos]&&!isPlayer?' visited':''}" style="display:inline-flex;align-items:center;justify-content:center">${icon}</span>`;
    }
    mapHtml+='</div>';
  }
  mapHtml+='</div>';
  c.innerHTML=`<div class="rpg-wrap">
    <div class="rpg-stats">
      <span class="rpg-stat">❤️ ${s.hp}/${s.maxHp}</span><span class="rpg-stat">⭐ Nv.${s.level}</span><span class="rpg-stat">💎 ${s.pts}pts</span>
      <div class="rpg-hp-bar-outer" style="flex:1"><div class="rpg-hp-bar-inner" style="width:${s.hp/s.maxHp*100}%"></div></div>
    </div>
    ${mapHtml}
    <div style="display:grid;grid-template-columns:repeat(3,40px);gap:4px;justify-content:center;margin:10px auto">
      <div></div><button class="rpg-ctrl-btn" id="rpgUp">↑</button><div></div>
      <button class="rpg-ctrl-btn" id="rpgLeft">←</button>
      <button class="rpg-ctrl-btn" id="rpgDown">↓</button>
      <button class="rpg-ctrl-btn" id="rpgRight">→</button>
    </div>
    <button class="pink-btn sm" style="margin-top:6px" id="rpgRestart2">🔄 Reiniciar</button>
  </div>`;
  const move=dir=>{
    const pos=s.playerPos,col=pos%size,row=Math.floor(pos/size);
    let np=pos;
    if(dir==='up'&&row>0)np=pos-size;if(dir==='down'&&row<size-1)np=pos+size;
    if(dir==='left'&&col>0)np=pos-1;if(dir==='right'&&col<size-1)np=pos+1;
    if(np===pos)return;
    s.playerPos=np;s.visited[np]=true;
    if(s.visited.every(Boolean))unlockAch(4,0);
    const enemy=s.enemigos.find(e=>e.pos===np);
    if(enemy){s.battleMode=true;s.currentEnemy=enemy;}
    renderRPG();
    if((Date.now()-s.timeStart)>5*60*1000)unlockAch(4,6);
  };
  document.getElementById('rpgUp').onclick=()=>move('up');document.getElementById('rpgDown').onclick=()=>move('down');
  document.getElementById('rpgLeft').onclick=()=>move('left');document.getElementById('rpgRight').onclick=()=>move('right');
  document.getElementById('rpgRestart2').onclick=()=>{rpgState=initRPGState();rpgState.restarted=true;unlockAch(4,5);renderRPG();};
  document.onkeydown=e=>{if(document.getElementById('sec4')?.classList.contains('hidden'))return;if(e.key==='ArrowUp'||e.key==='w')move('up');if(e.key==='ArrowDown'||e.key==='s')move('down');if(e.key==='ArrowLeft'||e.key==='a')move('left');if(e.key==='ArrowRight'||e.key==='d')move('right');};
}
function renderBattle(){
  const c=document.getElementById('rpgContainer'),s=rpgState,en=s.currentEnemy;
  const tipo=JUEGO_CONFIG.tiposEnemigos[en.tipo];
  const eiCfg=IMAGENES.rpg[`enemigo${en.tipo}`]||IMAGENES.rpg.enemigo0;
  c.innerHTML=`<div class="rpg-wrap"><div class="rpg-battle">
    <div class="rpg-battle-title">⚔️ Batalla: ${tipo}</div>
    <div style="text-align:center;margin:8px 0">${imgOrEmoji(eiCfg,'','enemigo','width:60px;height:60px;object-fit:contain')}</div>
    <div class="rpg-stats"><span class="rpg-stat">Tu HP: ${s.hp}/${s.maxHp}</span><span class="rpg-stat">Enemigo HP: ${en.hp}</span></div>
    <div class="rpg-hp-bar-outer"><div class="rpg-hp-bar-inner" style="width:${en.hp/50*100}%;background:linear-gradient(90deg,#f87171,#ef4444)"></div></div>
    <div class="rpg-atk-btns">${JUEGO_CONFIG.ataques.map((a,i)=>`<button class="rpg-atk-btn" data-atk="${i}">${a}</button>`).join('')}</div>
    <div class="rpg-log" id="rpgLog">Elige tu ataque 💗</div>
  </div></div>`;
  c.querySelectorAll('.rpg-atk-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const atkIdx=parseInt(btn.dataset.atk);s.ataqueUsed.add(atkIdx);
      if(s.ataqueUsed.size>=JUEGO_CONFIG.ataques.length)unlockAch(4,3);
      const dmg=10+Math.floor(Math.random()*15);en.hp-=dmg;
      const log=document.getElementById('rpgLog');
      if(en.hp<=0){
        s.pts+=JUEGO_CONFIG.puntosPorEnemigo;s.tiposDefeated.add(en.tipo);s.enemigos=s.enemigos.filter(e=>e!==en);
        const size=JUEGO_CONFIG.mapaSize;let np;
        do{np=Math.floor(Math.random()*size*size);}while(np===s.playerPos||s.enemigos.find(e=>e.pos===np));
        s.enemigos.push({pos:np,tipo:Math.floor(Math.random()*JUEGO_CONFIG.tiposEnemigos.length),hp:30+Math.floor(Math.random()*20)});
        if(s.pts>0&&s.pts%(JUEGO_CONFIG.puntosPorEnemigo*JUEGO_CONFIG.enemigosParaSubirNivel)===0){s.level=Math.min(s.level+1,JUEGO_CONFIG.nivelMaximo);if(s.level>=JUEGO_CONFIG.nivelMaximo)unlockAch(4,2);}
        if(s.tiposDefeated.size>=JUEGO_CONFIG.tiposEnemigos.length)unlockAch(4,1);
        spawnParticles(window.innerWidth/2,window.innerHeight/2,10,'small');showNotif(`¡Victoria! +${JUEGO_CONFIG.puntosPorEnemigo} pts 💗`);
        s.battleMode=false;s.currentEnemy=null;renderRPG();
      } else {
        const ed=5+Math.floor(Math.random()*10);s.hp-=ed;
        if(log)log.textContent=`Hiciste ${dmg} dmg. Enemigo ataca (${ed} dmg). HP enemigo: ${en.hp}`;
        if(s.hp<=0){s.hp=0;unlockAch(4,4);s.lost=true;s.battleMode=false;s.currentEnemy=null;renderRPG();}
      }
    });
  });
}

// ════════════════════════════════════════════════
// SEC 5 — CARTA INTERACTIVA
// ════════════════════════════════════════════════
let sec5TimerStarted=false;
function initSec5(){
  const c=document.getElementById('cartaInteractivaContainer');if(!c||c.children.length)return;
  let text=CARTA_TEXTO;
  PALABRAS_CLAVE_CARTA.forEach(pk=>{const re=new RegExp(`(${pk.palabra})`,'gi');text=text.replace(re,`<span class="keyword-word" data-kw="${pk.palabra}">$1</span>`);});
  c.innerHTML=`<div class="sec-inner-wrap"><div class="carta-paper" id="cartaPaperEl">${text}</div>
  <p class="section-subtitle" style="margin-top:10px">💗 Haz clic en las palabras resaltadas para descubrir mensajes secretos 💗</p></div>`;
  const paper=document.getElementById('cartaPaperEl');
  paper.addEventListener('scroll',()=>{if(paper.scrollTop+paper.clientHeight>=paper.scrollHeight-10){unlockAch(5,1);checkSectionComplete(5);}});
  paper.querySelectorAll('.keyword-word').forEach(el=>{
    el.addEventListener('click',()=>{
      const kw=el.dataset.kw,pk=PALABRAS_CLAVE_CARTA.find(p=>p.palabra===kw);if(!pk)return;
      cartaClickedWords.add(kw);el.classList.add('clicked');
      openModal(`<img class="modal-img" src="${pk.imagen}" onerror="this.style.background='linear-gradient(135deg,var(--pink-pale),var(--blush))'">
        <div class="modal-title">${pk.palabra} 💗</div><div class="modal-text">${pk.mensaje}</div>`);
      unlockAch(5,2);if(cartaClickedWords.size>=PALABRAS_CLAVE_CARTA.length)unlockAch(5,0);checkSectionComplete(5);
    });
  });
  if(!sec5TimerStarted){sec5TimerStarted=true;setTimeout(()=>{unlockAch(5,3);checkSectionComplete(5);},45000);}
}

// ════════════════════════════════════════════════
// SEC 6 — PAISAJE & JUEGOS
// ════════════════════════════════════════════════
let drawCtx=null,drawCanvas=null,drawIsDrawing=false;
function initSec6(){
  const c=document.getElementById('paisajeContainer');if(!c||c.children.length)return;
  const adornHtml=ADORNOS_PAISAJE.map((a,i)=>
    `<span class="paisaje-deco-item" data-pidx="${i}" style="left:${a.x}%;top:${a.y}%;position:absolute;cursor:pointer">${imgOrEmoji(a.img,'paisaje-img','adorno','width:32px;height:32px;object-fit:contain;pointer-events:none')}</span>`
  ).join('');
  const p1html=imgOrEmoji(IMAGENES.paisaje.pieza1,'ttt-piece','','width:24px;height:24px;object-fit:contain');
  const p2html=imgOrEmoji(IMAGENES.paisaje.pieza2,'ttt-piece','','width:24px;height:24px;object-fit:contain');
  c.innerHTML=`
  <div class="paisaje-bg" style="min-height:150px;margin-bottom:16px;position:relative">${adornHtml}</div>
  <div style="padding:0 14px">
  <div class="games-grid">
    <div class="game-card"><div class="game-card-title">3 en Raya</div><div class="ttt-grid" id="tttGrid"></div><div id="tttMsg" style="font-family:var(--font-script);font-size:0.85rem;color:var(--pink-dark);text-align:center;margin-top:4px"></div><button class="pink-btn sm" style="margin-top:6px;width:100%" id="tttReset">Nueva partida</button></div>
    <div class="game-card"><div class="game-card-title">Ahorcado</div><canvas id="hangCanvas" width="80" height="80" style="display:block;margin:0 auto;border:1px solid var(--pink-light);border-radius:8px"></canvas><div class="hangman-word" id="hangWord"></div><div class="hangman-letters" id="hangLetters"></div><div id="hangMsg" style="font-family:var(--font-script);font-size:0.8rem;color:var(--pink-dark);text-align:center"></div><button class="pink-btn sm" style="margin-top:6px;width:100%" id="hangReset">Nueva palabra</button></div>
    <div class="game-card"><div class="game-card-title">¿Cuánto me amas?</div><div class="love-pct" id="lovePct">50%</div><input type="range" class="love-slider" id="loveSlider" min="0" max="100" value="50"><div style="font-family:var(--font-script);font-size:0.8rem;color:var(--text-mid);margin-top:6px;text-align:center" id="loveMsg">Desliza para decirme 💗</div></div>
    <div class="game-card"><div class="game-card-title">Pizarra Digital</div><textarea class="pizarra-area" id="pizarraEl" placeholder="Escríbeme algo bonito 💗...">${pizarraText}</textarea><button class="pink-btn sm" style="margin-top:6px;width:100%" id="pizarraSave">Guardar 💾</button></div>
  </div>
  <div class="game-card" style="margin-top:12px"><div class="game-card-title">Dibujo Digital</div>
    <canvas id="drawCanvas" class="draw-canvas" width="300" height="200"></canvas>
    <div class="draw-controls">
      <input type="color" id="drawColor" value="#f472b6" class="draw-color" title="Color">
      <input type="range" id="drawSize" class="draw-size" min="1" max="20" value="4" title="Grosor">
      <button class="draw-btn" id="drawClear">Limpiar 🗑️</button>
      <button class="draw-btn" id="drawSave">Guardar 💾</button>
    </div>
  </div>
  </div>`;
  // Guardar refs TTT piezas
  c._p1html=p1html; c._p2html=p2html;
  // Adornos clickeables
  c.querySelectorAll('.paisaje-deco-item').forEach(el=>{
    el.addEventListener('click',()=>{
      const idx=parseInt(el.dataset.pidx);adornosPaisajeClicked.add(idx);
      spawnParticles(el.getBoundingClientRect().left+20,el.getBoundingClientRect().top+20,12,'big');
      showNotif(ADORNOS_PAISAJE[idx]?.mensaje||'💗');
      if(adornosPaisajeClicked.size>=ADORNOS_PAISAJE.length)unlockAch(6,0);
      checkSectionComplete(6);
    });
  });
  initTTT();initHangman();
  const ls=document.getElementById('loveSlider'),lp=document.getElementById('lovePct'),lm=document.getElementById('loveMsg');
  if(ls){
    const msgs=['Más de lo que imaginas 💗','¡Muchísimo! 🥰','¡Infinitamente! ✨','¡Con todo mi ser! 💖','¡Para siempre! 🎀'];
    ls.addEventListener('input',()=>{
      const v=parseInt(ls.value);lp.textContent=v+'%';
      ls.style.background=`linear-gradient(90deg,var(--pink-main) ${v}%,rgba(251,182,206,0.4) ${v}%)`;
      lm.textContent=msgs[Math.min(4,Math.floor(v/20))];
      loveBarValues.add(Math.round(v/25)*25);
      if([0,25,50,75,100].every(x=>loveBarValues.has(x)))unlockAch(6,4);
      telemetry.loveBarValues.push(v);checkSectionComplete(6);
    });
  }
  const pz=document.getElementById('pizarraEl'),pzSave=document.getElementById('pizarraSave');
  if(pz)pz.addEventListener('input',()=>{pizarraText=pz.value;});
  if(pzSave)pzSave.addEventListener('click',()=>{
    pizarraText=pz?.value||'';localStorage.setItem('pizarraText',pizarraText);
    telemetry.texts.push({ts:new Date().toISOString(),text:pizarraText});
    if(pizarraText.trim().length>0)unlockAch(6,5);showNotif('¡Guardado! 💗');checkSectionComplete(6);
  });
  drawCanvas=document.getElementById('drawCanvas');
  if(drawCanvas){
    drawCtx=drawCanvas.getContext('2d');
    const saved=localStorage.getItem('mayDrawing');if(saved){const img=new Image();img.onload=()=>drawCtx.drawImage(img,0,0);img.src=saved;}
    const getPos=e=>{const r=drawCanvas.getBoundingClientRect();const scx=drawCanvas.width/r.width,scy=drawCanvas.height/r.height;if(e.touches)return{x:(e.touches[0].clientX-r.left)*scx,y:(e.touches[0].clientY-r.top)*scy};return{x:(e.clientX-r.left)*scx,y:(e.clientY-r.top)*scy};};
    const startDraw=e=>{drawIsDrawing=true;const p=getPos(e);drawCtx.beginPath();drawCtx.moveTo(p.x,p.y);canvasDrawn=true;};
    const doDraw=e=>{if(!drawIsDrawing)return;e.preventDefault();const p=getPos(e);const cc=document.getElementById('drawColor');const ss=document.getElementById('drawSize');drawCtx.lineTo(p.x,p.y);drawCtx.strokeStyle=cc?.value||'#f472b6';drawCtx.lineWidth=parseInt(ss?.value||4);drawCtx.lineCap='round';drawCtx.stroke();canvasColors.add(cc?.value);canvasSizes.add(ss?.value);if(canvasColors.size>=3)unlockAch(6,7);if(canvasSizes.size>=3)unlockAch(6,8);checkSectionComplete(6);};
    const endDraw=()=>{drawIsDrawing=false;if(canvasDrawn)unlockAch(6,6);};
    drawCanvas.addEventListener('mousedown',startDraw);drawCanvas.addEventListener('mousemove',doDraw);drawCanvas.addEventListener('mouseup',endDraw);
    drawCanvas.addEventListener('touchstart',startDraw,{passive:false});drawCanvas.addEventListener('touchmove',doDraw,{passive:false});drawCanvas.addEventListener('touchend',endDraw,{passive:true});
    document.getElementById('drawClear').addEventListener('click',()=>{drawCtx.clearRect(0,0,drawCanvas.width,drawCanvas.height);canvasCleared++;unlockAch(6,9);checkSectionComplete(6);});
    document.getElementById('drawSave').addEventListener('click',()=>{const data=drawCanvas.toDataURL();localStorage.setItem('mayDrawing',data);telemetry.drawings.push({ts:new Date().toISOString(),data});showNotif('¡Dibujo guardado! 🎨');});
  }
}
function initTTT(){
  tttBoard=new Array(9).fill(null);tttTurn='p1';
  const g=document.getElementById('tttGrid'),msg=document.getElementById('tttMsg');
  const c=document.getElementById('paisajeContainer');
  const p1html=c?._p1html||'❤️',p2html=c?._p2html||'⭐';
  if(!g)return;g.innerHTML='';
  for(let i=0;i<9;i++){
    const cell=document.createElement('div');cell.className='ttt-cell';cell.dataset.i=i;
    cell.addEventListener('click',()=>{
      if(tttBoard[i]||checkTTTWin())return;
      tttBoard[i]=tttTurn;cell.innerHTML=tttTurn==='p1'?p1html:p2html;
      const winner=checkTTTWin();
      if(winner){if(msg)msg.textContent='¡Ganaste! 🎉';if(winner==='p1'){tttWins++;unlockAch(6,1);checkSectionComplete(6);}return;}
      if(tttBoard.every(Boolean)){if(msg)msg.textContent='¡Empate!';return;}
      tttTurn=tttTurn==='p1'?'p2':'p1';if(msg)msg.textContent=`Turno: ${tttTurn==='p1'?'Tú':'CPU'}`;
    });
    g.appendChild(cell);
  }
  if(msg)msg.textContent='Tu turno';
  document.getElementById('tttReset').onclick=()=>initTTT();
}
function checkTTTWin(){const w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const[a,b,cc]of w){if(tttBoard[a]&&tttBoard[a]===tttBoard[b]&&tttBoard[a]===tttBoard[cc])return tttBoard[a];}return null;}
function initHangman(){hangmanWord=PALABRAS_AHORCADO[Math.floor(Math.random()*PALABRAS_AHORCADO.length)].toUpperCase();hangmanGuessed=new Set();hangmanFails=0;renderHangman();document.getElementById('hangReset').onclick=()=>initHangman();}
function renderHangman(){
  const wEl=document.getElementById('hangWord'),lEl=document.getElementById('hangLetters'),mEl=document.getElementById('hangMsg'),canvas=document.getElementById('hangCanvas');
  if(!wEl||!lEl)return;
  if(canvas){const ctx=canvas.getContext('2d');ctx.clearRect(0,0,80,80);ctx.strokeStyle='#be185d';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(10,75);ctx.lineTo(70,75);ctx.moveTo(25,75);ctx.lineTo(25,10);ctx.lineTo(50,10);ctx.lineTo(50,20);ctx.stroke();const pts=[()=>{ctx.beginPath();ctx.arc(50,27,7,0,Math.PI*2);ctx.stroke();},()=>{ctx.beginPath();ctx.moveTo(50,34);ctx.lineTo(50,55);ctx.stroke();},()=>{ctx.beginPath();ctx.moveTo(50,40);ctx.lineTo(38,50);ctx.stroke();},()=>{ctx.beginPath();ctx.moveTo(50,40);ctx.lineTo(62,50);ctx.stroke();},()=>{ctx.beginPath();ctx.moveTo(50,55);ctx.lineTo(38,68);ctx.stroke();},()=>{ctx.beginPath();ctx.moveTo(50,55);ctx.lineTo(62,68);ctx.stroke();}];for(let i=0;i<hangmanFails&&i<pts.length;i++)pts[i]();}
  const display=hangmanWord.split('').map(ch=>hangmanGuessed.has(ch)||ch===' '?ch:'_').join(' ');wEl.textContent=display;
  const won=!hangmanWord.split('').some(ch=>ch!==' '&&!hangmanGuessed.has(ch)),lost=hangmanFails>=6;
  if(won){if(mEl)mEl.textContent='¡Ganaste! 🎉';hangmanWins++;unlockAch(6,2);checkSectionComplete(6);}
  else if(lost){if(mEl)mEl.textContent=`Perdiste. Era: ${hangmanWord}`;hangmanLosses++;unlockAch(6,3);checkSectionComplete(6);}
  else if(mEl)mEl.textContent=`Intentos: ${hangmanFails}/6`;
  lEl.innerHTML='';
  'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('').forEach(l=>{
    const btn=document.createElement('button');btn.className='hangman-letter-btn'+(hangmanGuessed.has(l)?' used':'');btn.textContent=l;
    btn.addEventListener('click',()=>{if(hangmanGuessed.has(l)||won||lost)return;hangmanGuessed.add(l);if(!hangmanWord.includes(l))hangmanFails++;renderHangman();});
    lEl.appendChild(btn);
  });
}

// ════════════════════════════════════════════════
// SEC 7 — GALAXIA THREE.JS (SIN MÚSICA)
// ════════════════════════════════════════════════
function initSec7(){
  const c=document.getElementById('universoContainer');if(!c)return;
  if(galaxyInitialized)return;
  galaxyInitialized=true;c.innerHTML='';
  // Contenedor galaxia
  const wrap=document.createElement('div');
  wrap.style.cssText='position:relative;width:100%;height:500px;overflow:hidden;border-radius:24px;border:2px solid #fbb6ce;box-shadow:0 8px 28px rgba(244,114,182,0.3);background:linear-gradient(135deg,#0a0a2a,#1a0a2a,#2a0a3a);';
  c.appendChild(wrap);
  // Pill descriptiva
  const pill=document.createElement('div');
  pill.style.cssText='position:absolute;top:12px;left:50%;transform:translateX(-50%);z-index:10;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);color:#f9a8d4;font-family:var(--font-script);font-size:0.9rem;backdrop-filter:blur(6px);pointer-events:none;text-align:center;max-width:90%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
  pill.textContent='Te amo mushísimo mi helmoshísima May infinita de todito mi korashon';
  wrap.appendChild(pill);
  // Canvas Three.js
  const canvas=document.createElement('canvas');
  canvas.style.cssText='width:100%;height:100%;display:block;touch-action:none;';
  wrap.appendChild(canvas);
  // Canvas efectos corazones
  const fxCanvas=document.createElement('canvas');
  fxCanvas.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;';
  wrap.appendChild(fxCanvas);
  // Info panel
  const info=document.createElement('div');
  info.style.cssText='padding:14px 16px 0;';
  info.innerHTML='<p class="section-subtitle">Arrastra para rotar la galaxia. Doble toque para generar corazones 💗</p>';
  c.appendChild(info);
  // Timer logro
  if(!sec7TimerStarted){sec7TimerStarted=true;setTimeout(()=>{unlockAch(7,2);checkSectionComplete(7);},60000);}
  // Cargar Three.js si no está disponible
  if(typeof THREE==='undefined'){
    const s1=document.createElement('script');s1.src='https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js';
    s1.onload=()=>{const s2=document.createElement('script');s2.src='https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js';s2.onload=()=>startGalaxy(canvas,fxCanvas,wrap);document.head.appendChild(s2);};
    document.head.appendChild(s1);
  } else {
    startGalaxy(canvas,fxCanvas,wrap);
  }
}

function startGalaxy(canvas,fxCanvas,wrap){
  try{
    const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});
    renderer.setSize(wrap.clientWidth,wrap.clientHeight);renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1));
    const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(75,wrap.clientWidth/wrap.clientHeight,0.1,2000);
    const controls=new THREE.OrbitControls(camera,renderer.domElement);
    controls.enableDamping=true;controls.dampingFactor=0.06;controls.minDistance=10;controls.maxDistance=220;controls.target.set(0,0,0);
    controls.addEventListener('change',()=>{if(!galaxyRotated){galaxyRotated=true;unlockAch(7,0);checkSectionComplete(7);}});
    function setCam(){const w=wrap.clientWidth,h=wrap.clientHeight;const mob=w<768||w<h;camera.fov=mob?90:75;camera.position.set(0,mob?26:22,mob?110:75);camera.aspect=w/h;camera.updateProjectionMatrix();controls.update();}setCam();
    // Textura estrellas
    function makeStarTex(sz=1024,cnt=2000){const cv=document.createElement('canvas');cv.width=cv.height=sz;const g=cv.getContext('2d');const r=sz/2;const bg=g.createRadialGradient(r,r,r*0.2,r,r,r);bg.addColorStop(0,'#050010');bg.addColorStop(1,'#000');g.fillStyle=bg;g.fillRect(0,0,sz,sz);for(let i=0;i<cnt;i++){const x=Math.random()*sz,y=Math.random()*sz,base=Math.random()*0.7+0.3;const gw=g.createRadialGradient(x,y,0,x,y,Math.random()*2.2+1.6);const hp=Math.random();gw.addColorStop(0,`rgba(255,255,255,${0.65*base})`);gw.addColorStop(1,hp<0.25?`rgba(255,180,240,${0.12*base})`:`rgba(180,190,255,${0.12*base})`);g.fillStyle=gw;g.beginPath();g.arc(x,y,Math.random()*1.2+0.6,0,Math.PI*2);g.fill();}return new THREE.CanvasTexture(cv);}
    const bgGeo=new THREE.SphereGeometry(600,64,64),starTex=makeStarTex(1024,2600);
    starTex.wrapS=starTex.wrapT=THREE.RepeatWrapping;
    scene.add(new THREE.Mesh(bgGeo,new THREE.MeshBasicMaterial({map:starTex,side:THREE.BackSide})));
    const galaxy=new THREE.Group();scene.add(galaxy);
    // Texto frases
    function makeTextTex(text,sz=48){const cv=document.createElement('canvas');cv.width=1024;cv.height=128;const g=cv.getContext('2d');g.clearRect(0,0,cv.width,cv.height);g.font=`800 ${sz}px 'Dancing Script',cursive`;g.textAlign='center';g.textBaseline='middle';g.shadowColor='rgba(210,140,255,0.95)';g.shadowBlur=24;g.fillStyle='rgba(255,240,255,0.98)';g.fillText(text,cv.width/2,cv.height/2);return new THREE.CanvasTexture(cv);}
    const phraseCount=Math.max(GALAXY_PHRASES.length*7,180),arms=5,radius=82,maxH=22;
    for(let i=0;i<phraseCount;i++){
      const text=GALAXY_PHRASES[i%GALAXY_PHRASES.length],tex=makeTextTex(text,48);
      const spr=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,transparent:true,depthWrite:false}));
      const perArm=phraseCount/arms,ang=(i%perArm)*(Math.PI*2/perArm),armAng=Math.floor(i/perArm)*(Math.PI*2/arms);
      const dist=Math.pow(i/phraseCount,0.72)*radius,thickness=Math.pow(1-(dist/radius),2);
      spr.position.set(Math.cos(ang+armAng)*dist,(Math.random()-0.5)*maxH*thickness*0.9,Math.sin(ang+armAng)*dist);
      spr.scale.set(20,2.6,1);galaxy.add(spr);
    }
    // Partículas estrellas
    const sc=8000,geo=new THREE.BufferGeometry(),pos=new Float32Array(sc*3);
    for(let i=0;i<sc;i++){const ang=Math.random()*Math.PI*2,dist=Math.random()*radius*1.15,y=(Math.random()-0.5)*36*Math.pow(1-Math.min(dist,radius)/radius,1.5);pos[i*3]=Math.cos(ang)*dist;pos[i*3+1]=y;pos[i*3+2]=Math.sin(ang)*dist;}
    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
    galaxy.add(new THREE.Points(geo,new THREE.PointsMaterial({color:0xffffff,size:0.28,transparent:true,opacity:0.65,blending:THREE.AdditiveBlending})));
    // Núcleo
    const coreR=12,ctex=document.createElement('canvas');ctex.width=ctex.height=256;const cg=ctex.getContext('2d');const cgrd=cg.createRadialGradient(128,128,10,128,128,128);cgrd.addColorStop(0,'#140018');cgrd.addColorStop(0.6,'#090012');cgrd.addColorStop(1,'#000');cg.fillStyle=cgrd;cg.arc(128,128,128,0,Math.PI*2);cg.fill();
    const core=new THREE.Mesh(new THREE.SphereGeometry(coreR,64,64),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(ctex)}));core.renderOrder=1;scene.add(core);
    const photon=new THREE.Mesh(new THREE.RingGeometry(coreR*1.05,coreR*1.18,128),new THREE.MeshBasicMaterial({color:0xEAAEFF,transparent:true,opacity:0.95,side:THREE.DoubleSide}));photon.rotation.x=-Math.PI/2;photon.renderOrder=0.5;scene.add(photon);
    // Halo
    function makeHaloTex(){const cv=document.createElement('canvas');cv.width=cv.height=1024;const g=cv.getContext('2d');const r=512;const grd=g.createRadialGradient(r,r,r*0.45,r,r,r);grd.addColorStop(0,'rgba(255,200,240,0.45)');grd.addColorStop(0.35,'rgba(220,180,255,0.35)');grd.addColorStop(0.7,'rgba(160,200,255,0.28)');grd.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=grd;g.fillRect(0,0,1024,1024);const t=new THREE.CanvasTexture(cv);t.needsUpdate=true;return t;}
    const halo=new THREE.Mesh(new THREE.PlaneGeometry(320,320),new THREE.MeshBasicMaterial({map:makeHaloTex(),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,opacity:0.9}));halo.rotation.x=-Math.PI/2;halo.renderOrder=0.2;scene.add(halo);
    let tw=0;
    function animate(){requestAnimationFrame(animate);const t=performance.now()*0.001;tw=(tw+0.0003)%1;starTex.offset.set(tw,0);galaxy.rotation.y=t*0.05;core.rotation.y=t*0.12;photon.rotation.z=t*0.18;halo.rotation.z=t*0.02;controls.update();renderer.render(scene,camera);}
    animate();
    // Efectos corazones
    const fxCtx=fxCanvas.getContext('2d'),DPR=Math.min(2,window.devicePixelRatio||1);
    let hearts=[];
    function resizeFx(){fxCanvas.width=wrap.clientWidth*DPR;fxCanvas.height=wrap.clientHeight*DPR;fxCanvas.style.width=wrap.clientWidth+'px';fxCanvas.style.height=wrap.clientHeight+'px';}
    window.addEventListener('resize',resizeFx);resizeFx();
    function spawnHeartsG(x,y,n=20){const rect=wrap.getBoundingClientRect();const fx=(x-rect.left)*DPR,fy=(y-rect.top)*DPR;for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2;hearts.push({x:fx,y:fy,vx:Math.cos(a)*(0.6+Math.random()*0.8),vy:-(0.8+Math.random()*1.2),life:1,size:10+Math.random()*16});}}
    function drawHrt(ctx,x,y,size){const s=size;ctx.save();ctx.translate(x,y);ctx.beginPath();ctx.moveTo(0,-0.25*s);ctx.bezierCurveTo(0.5*s,-0.9*s,1.4*s,-0.1*s,0,0.9*s);ctx.bezierCurveTo(-1.4*s,-0.1*s,-0.5*s,-0.9*s,0,-0.25*s);const g=ctx.createRadialGradient(0,0,0,0,0,s);g.addColorStop(0,'rgba(255,190,220,.95)');g.addColorStop(1,'rgba(255,90,160,0)');ctx.fillStyle=g;ctx.fill();ctx.restore();}
    function loopFx(){fxCtx.clearRect(0,0,fxCanvas.width,fxCanvas.height);for(let i=hearts.length-1;i>=0;i--){const h=hearts[i];h.x+=h.vx;h.y+=h.vy;h.vy-=0.02;h.life-=0.015;fxCtx.globalAlpha=Math.max(0,h.life);drawHrt(fxCtx,h.x,h.y,h.size);fxCtx.globalAlpha=1;if(h.life<=0)hearts.splice(i,1);}requestAnimationFrame(loopFx);}loopFx();
    let lastTap=0;
    wrap.addEventListener('click',e=>{const now=performance.now();if(now-lastTap<320){spawnHeartsG(e.clientX,e.clientY,20);if(!galaxyClicked){galaxyClicked=true;unlockAch(7,1);checkSectionComplete(7);}}lastTap=now;});
    wrap.addEventListener('touchend',e=>{const now=performance.now();const t=e.changedTouches&&e.changedTouches[0];if(now-lastTap<320&&t){spawnHeartsG(t.clientX,t.clientY,20);if(!galaxyClicked){galaxyClicked=true;unlockAch(7,1);checkSectionComplete(7);}}lastTap=now;});
    window.addEventListener('resize',()=>{const w=wrap.clientWidth,h=wrap.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();setCam();});
  }catch(e){
    console.error('Galaxy error:',e);
    const cont=document.getElementById('universoContainer');
    if(cont)cont.innerHTML+='<div style="text-align:center;padding:40px;font-family:var(--font-script);color:var(--pink-dark)">✨ La galaxia necesita conexión a internet para cargar Three.js ✨<br><small style="color:var(--text-mid)">Verifica tu conexión y recarga la página</small></div>';
  }
}

// ════════════════════════════════════════════════
// SEC 8 — JARDÍN SECRETO
// ════════════════════════════════════════════════
function initSec8(){
  const c=document.getElementById('jardinContainer');if(!c||c.children.length)return;
  const today=new Date().toDateString();
  jardinVisitDates.add(today);
  const savedDates=JSON.parse(localStorage.getItem('jardinDates')||'[]');
  savedDates.forEach(d=>jardinVisitDates.add(d));
  savedDates.push(today);
  localStorage.setItem('jardinDates',JSON.stringify([...new Set(savedDates)]));
  if(jardinVisitDates.size>=3)unlockAch(8,4);
  const flowersHtml=FLORES_JARDIN.map((f,i)=>
    `<div class="jardin-flower${jardinFloresClicked.has(i)?' clicked':''}" data-fidx="${i}" style="cursor:pointer;display:flex;align-items:center;justify-content:center">
      ${imgOrEmoji(f.img,'jardin-flower-img','flor','width:40px;height:40px;object-fit:contain;pointer-events:none')}
    </div>`
  ).join('');
  c.innerHTML=`<div class="jardin-bg"><div class="jardin-flowers-grid">${flowersHtml}</div></div>
  <div style="padding:0 14px"><div class="jardin-actions">
    <button class="jardin-btn" id="jardinRegar">
      ${imgOrEmoji(IMAGENES.jardin.regar,'','regar','width:22px;height:22px;vertical-align:middle;margin-right:6px')}
      Regar Jardín
    </button>
  </div>
  <p class="section-subtitle" style="margin-top:10px">💗 Haz clic en cada flor para descubrir un recuerdo especial 💗</p></div>`;
  c.querySelectorAll('.jardin-flower').forEach(el=>{
    el.addEventListener('click',()=>{
      const idx=parseInt(el.dataset.fidx),f=FLORES_JARDIN[idx];
      jardinFloresClicked.add(idx);el.classList.add('clicked');
      if(jardinFloresClicked.size>=FLORES_JARDIN.length){unlockAch(8,0);unlockAch(8,1);}
      openModal(`<img class="modal-img" src="${f.foto}" onerror="this.style.background='linear-gradient(135deg,var(--pink-pale),var(--blush))'">
        <div class="modal-title">Recuerdo 💗</div>
        <div class="modal-text">${f.mensaje}</div>
        ${f.audio?`<audio class="modal-audio" controls src="${f.audio}" onended="unlockAch(8,2)"></audio>`:''}`);
      checkSectionComplete(8);
    });
  });
  document.getElementById('jardinRegar').addEventListener('click',()=>{
    jardinRiegoCount++;
    spawnParticles(window.innerWidth/2,window.innerHeight/2,15,'small');
    showNotif('¡Jardín regado! 💧🌸');
    if(jardinRiegoCount>=3)unlockAch(8,3);
    checkSectionComplete(8);
  });
  checkSectionComplete(8);
}

// ════════════════════════════════════════════════
// SEC 9 — MAPA DEL AMOR
// ════════════════════════════════════════════════
let sec9TimerStarted=false;
function initSec9(){
  const c=document.getElementById('mapaContainer');if(!c||c.children.length)return;
  const savedFuture=localStorage.getItem('mayMapaFuture');
  if(savedFuture)mapaFutureList=JSON.parse(savedFuture);
  c.innerHTML=`<div class="mapa-canvas-wrap"><canvas id="mapaCanvas" width="400" height="280"></canvas></div>
  <div class="mapa-future-section">
    <div class="mapa-future-title">📍 Lugares que quiero visitar contigo</div>
    <div class="mapa-future-list" id="mapaFutureList"></div>
    <div class="mapa-add-row">
      <input type="text" class="mapa-input" id="mapaInput" placeholder="Nombre del lugar...">
      <button class="mapa-add-btn" id="mapaAddBtn">+ Agregar</button>
    </div>
  </div>`;
  renderMapaCanvas();renderMapaFuture();
  const addBtn=document.getElementById('mapaAddBtn'),inp=document.getElementById('mapaInput');
  if(addBtn&&inp)addBtn.addEventListener('click',()=>{
    const t=inp.value.trim();if(!t)return;
    mapaFutureList.push({nombre:t,visitado:false});
    localStorage.setItem('mayMapaFuture',JSON.stringify(mapaFutureList));
    inp.value='';if(mapaFutureList.length>=3)unlockAch(9,2);
    renderMapaFuture();checkSectionComplete(9);
  });
  if(!sec9TimerStarted){sec9TimerStarted=true;setTimeout(()=>{unlockAch(9,5);checkSectionComplete(9);},60000);}
  checkSectionComplete(9);
}
function renderMapaCanvas(){
  const canvas=document.getElementById('mapaCanvas');if(!canvas)return;
  const ctx=canvas.getContext('2d');
  ctx.fillStyle='#e8f4e8';ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='#c8e8b0';ctx.fillRect(20,20,360,240);ctx.strokeStyle='#a3d8a0';ctx.lineWidth=2;ctx.strokeRect(20,20,360,240);
  ctx.fillStyle='#b0d8f0';ctx.fillRect(180,80,80,60);
  ctx.fillStyle='rgba(200,232,176,0.5)';ctx.fillRect(50,50,120,80);
  ctx.font='10px sans-serif';ctx.fillStyle='#555';
  ctx.fillText('🌊 Lago',192,115);ctx.fillText('🌲 Bosque',65,95);
  LUGARES_MAPA.forEach((lugar,i)=>{
    const clicked=mapaPinsClicked.has(i);
    ctx.beginPath();ctx.arc(lugar.x,lugar.y,10,0,Math.PI*2);
    ctx.fillStyle=clicked?'#ec4899':'#f472b6';ctx.fill();
    ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();
    ctx.font='bold 9px sans-serif';ctx.fillStyle='#fff';ctx.textAlign='center';
    ctx.fillText(i+1,lugar.x,lugar.y+4);ctx.textAlign='start';
  });
  canvas.onclick=e=>{
    const r=canvas.getBoundingClientRect();
    const scx=canvas.width/r.width,scy=canvas.height/r.height;
    const cx=(e.clientX-r.left)*scx,cy=(e.clientY-r.top)*scy;
    LUGARES_MAPA.forEach((lugar,i)=>{
      if(Math.sqrt((cx-lugar.x)**2+(cy-lugar.y)**2)<14){
        mapaPinsClicked.add(i);
        if(mapaPinsClicked.size>=LUGARES_MAPA.length){unlockAch(9,0);unlockAch(9,1);}
        openModal(`<img class="modal-img" src="${lugar.foto}" onerror="this.style.background='linear-gradient(135deg,var(--pink-pale),var(--blush))'">
          <div class="modal-title">${lugar.titulo}</div>
          <div class="modal-date">📅 ${lugar.fecha}</div>
          <div class="modal-text">${lugar.mensaje}</div>`);
        renderMapaCanvas();checkSectionComplete(9);
      }
    });
  };
}
function renderMapaFuture(){
  const el=document.getElementById('mapaFutureList');if(!el)return;
  el.innerHTML=mapaFutureList.map((l,i)=>`
    <div class="mapa-future-item">
      <span class="mapa-future-name${l.visitado?' visited':''}">${l.nombre}</span>
      <div class="mapa-future-actions">
        <button class="mapa-future-btn" data-mi="${i}" data-action="visit">✓</button>
        <button class="mapa-future-btn" data-mi="${i}" data-action="del">✕</button>
      </div>
    </div>`).join('');
  el.querySelectorAll('.mapa-future-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const i=parseInt(btn.dataset.mi);
      if(btn.dataset.action==='visit'){mapaFutureList[i].visitado=true;unlockAch(9,4);}
      if(btn.dataset.action==='del'){mapaFutureList.splice(i,1);unlockAch(9,3);}
      localStorage.setItem('mayMapaFuture',JSON.stringify(mapaFutureList));
      renderMapaFuture();checkSectionComplete(9);
    });
  });
}

// ════════════════════════════════════════════════
// SEC 10 — CAJA 3D
// ════════════════════════════════════════════════
let sec10TimerStarted=false;
function initSec10(){
  const c=document.getElementById('caja3dContainer');if(!c||c.children.length)return;
  cajaStartTime=Date.now();
  const itemsHtml=RECUERDOS_3D.map((r,i)=>{
    const cfg=r.tipo==='foto'?IMAGENES.caja.foto:r.tipo==='nota'?IMAGENES.caja.nota:IMAGENES.caja.regalo;
    return `<div class="caja-item caja-item-${r.tipo}${cajaFound.has(i)?' found':''}" data-cidx="${i}" style="cursor:pointer">
      <div class="caja-item-icon">${imgOrEmoji(cfg,'','item','width:40px;height:40px;object-fit:contain')}</div>
      <div class="caja-item-label">${r.tipo}</div>
    </div>`;
  }).join('');
  c.innerHTML=`<div class="sec-inner-wrap">
    <div class="caja-found-count" id="cajaFoundCount">Encontrados: ${cajaFound.size}/${RECUERDOS_3D.length} 💗</div>
    <div class="caja-scene"><div class="caja-content">${itemsHtml}</div></div>
    <p class="section-subtitle">💗 Explora y haz clic en los elementos para descubrir recuerdos 💗</p>
  </div>`;
  c.querySelectorAll('.caja-item').forEach(el=>{
    el.addEventListener('click',()=>{
      if(el.classList.contains('found'))return;
      const idx=parseInt(el.dataset.cidx),r=RECUERDOS_3D[idx];
      cajaFound.add(idx);el.classList.add('found');
      document.getElementById('cajaFoundCount').textContent=`Encontrados: ${cajaFound.size}/${RECUERDOS_3D.length} 💗`;
      if(r.tipo==='foto'||r.tipo==='nota'||r.tipo==='regalo')unlockAch(10,1);
      if(cajaFound.size>=RECUERDOS_3D.length)unlockAch(10,0);
      const cfg=r.tipo==='foto'?IMAGENES.caja.foto:r.tipo==='nota'?IMAGENES.caja.nota:IMAGENES.caja.regalo;
      openModal(`<div style="text-align:center;padding:16px;font-size:3rem">${imgOrEmoji(cfg,'','','width:60px;height:60px;object-fit:contain')}</div>
        ${r.tipo==='foto'?`<img class="modal-img" src="${r.contenido}" onerror="this.style.display='none'">`:`<div class="modal-title" style="font-size:1rem">${r.contenido}</div>`}
        <div class="modal-text">${r.mensaje}</div>`);
      spawnParticles(window.innerWidth/2,window.innerHeight/2,12,'small');
      checkSectionComplete(10);
    });
  });
  if(!sec10TimerStarted){
    sec10TimerStarted=true;
    setInterval(()=>{
      if(!document.getElementById('sec10')?.classList.contains('hidden')&&(Date.now()-cajaStartTime)>90000){
        unlockAch(10,3);checkSectionComplete(10);
      }
    },5000);
  }
  unlockAch(10,2);checkSectionComplete(10);
}

// ════════════════════════════════════════════════
// SEC 11 — PREGUNTAS DEL CORAZÓN
// ════════════════════════════════════════════════
function initSec11(){
  pqState=JSON.parse(localStorage.getItem('pqState')||'null')||{current:0,answers:[],unlocked:[],restarted:false};
  renderPQ();
}
function renderPQ(){
  const c=document.getElementById('preguntasContainer');if(!c)return;
  const total=PREGUNTAS_CORAZON.length;
  if(pqState.current>=total){renderPQResult();return;}
  const q=PREGUNTAS_CORAZON[pqState.current],pct=Math.round(pqState.current/total*100);
  c.innerHTML=`<div class="pq-wrap">
    <div class="test-progress-text">Pregunta ${pqState.current+1} de ${total} — ${pct}%</div>
    <div class="cp-bar-outer" style="margin-bottom:12px"><div class="cp-bar-inner" style="width:${pct}%"></div></div>
    <div class="pq-q-text">${q.pregunta}</div>
    <div class="pq-options">${q.opciones.map((o,i)=>`<button class="pq-option" data-i="${i}">${o}</button>`).join('')}</div>
    <button class="pq-btn" id="pqAnswerBtn" disabled>Responder 💗</button>
    <div class="pq-gallery" id="pqGallery">${pqState.unlocked.map(u=>`<div class="pq-gallery-item"><img src="${PREGUNTAS_CORAZON[u]?.desbloqueo||''}" onerror="this.parentElement.innerHTML='💗'" style="width:100%;height:100%;object-fit:cover;border-radius:10px"></div>`).join('')}</div>
  </div>`;
  let selectedOpt=null;
  c.querySelectorAll('.pq-option').forEach(btn=>{
    btn.addEventListener('click',()=>{
      c.querySelectorAll('.pq-option').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');selectedOpt=parseInt(btn.dataset.i);
      document.getElementById('pqAnswerBtn').disabled=false;
    });
  });
  document.getElementById('pqAnswerBtn').addEventListener('click',()=>{
    if(selectedOpt===null)return;
    const correct=q.correcta;
    c.querySelectorAll('.pq-option').forEach((b,i)=>{
      if(i===correct)b.classList.add('correct');
      else if(i===selectedOpt)b.classList.add('wrong');
    });
    pqState.answers.push(selectedOpt);
    if(selectedOpt===correct){pqState.unlocked.push(pqState.current);spawnParticles(window.innerWidth/2,window.innerHeight/2,10,'small');}
    localStorage.setItem('pqState',JSON.stringify(pqState));
    document.getElementById('pqAnswerBtn').textContent='Siguiente →';
    document.getElementById('pqAnswerBtn').disabled=false;
    document.getElementById('pqAnswerBtn').onclick=()=>{pqState.current++;renderPQ();};
  });
}
function renderPQResult(){
  const c=document.getElementById('preguntasContainer');if(!c)return;
  const total=PREGUNTAS_CORAZON.length;
  const correct=pqState.answers.filter((a,i)=>a===PREGUNTAS_CORAZON[i]?.correcta).length;
  const pct=Math.round(correct/total*100);
  if(pqState.answers.length>=total)unlockAch(11,0);
  if(pct===100)unlockAch(11,1);
  if(pqState.unlocked.length>=total)unlockAch(11,2);
  unlockAch(11,3);
  c.innerHTML=`<div class="pq-wrap">
    <div style="text-align:center">
      <div class="test-result-score">${correct}/${total} — ${pct}%</div>
      <div class="test-result-msg">${pct===100?'¡Perfecta! Me conoces a la perfección 💗':'¡Muy bien! Sigue explorando nuestra historia 🥰'}</div>
    </div>
    <div class="pq-gallery" style="margin-top:16px">${pqState.unlocked.map(u=>`<div class="pq-gallery-item"><img src="${PREGUNTAS_CORAZON[u]?.desbloqueo||''}" onerror="this.parentElement.innerHTML='💗'" style="width:100%;height:100%;object-fit:cover;border-radius:10px"></div>`).join('')}</div>
    <button class="pq-btn" style="margin-top:14px" id="pqRestartBtn">Reiniciar 🔄</button>
  </div>`;
  document.getElementById('pqRestartBtn').addEventListener('click',()=>{
    pqState={current:0,answers:[],unlocked:[],restarted:true};
    localStorage.setItem('pqState',JSON.stringify(pqState));
    unlockAch(11,4);renderPQ();
  });
  checkSectionComplete(11);
}

// ════════════════════════════════════════════════
// SEC 12 — CARTA INFINITA
// ════════════════════════════════════════════════
let sec12TimerStarted=false;
function initSec12(){
  const c=document.getElementById('cartaInfinitaContainer');if(!c||c.children.length)return;
  let text=CARTA_INFINITA_TEXT;
  PALABRAS_SECRETAS_CARTA.forEach(w=>{
    const re=new RegExp(`(${w})`,'gi');
    text=text.replace(re,`<span class="secret-word" data-sw="${w}">$1</span>`);
  });
  c.innerHTML=`<div class="sec-inner-wrap">
  <div class="carta-infinita-wrap">
    <div class="carta-infinita-text" id="cartaInfText">${text}</div>
    <div class="carta-secret-section" id="cartaSecret1">
      <div style="font-family:var(--font-vibes);font-size:1.8rem;color:var(--pink-dark)">✨ Sección Secreta ✨</div>
      <p style="font-family:var(--font-cormo);font-style:italic;color:var(--text-dark);margin-top:8px">¡Lo lograste! Te amo infinitash eternidades mi bellíshima May (≧▽≦) 💗</p>
    </div>
    <div class="carta-secret-section" id="cartaSecret2">
      <div style="font-family:var(--font-vibes);font-size:1.5rem;color:var(--lilac)">💜 Párrafo Especial 💜</div>
      <p style="font-family:var(--font-cormo);font-style:italic;color:var(--text-dark);margin-top:8px">Pasaste tiempo leyendo este párrafo con atención... eso me llena el corazón 💗</p>
    </div>
    <div class="carta-sorpresa" id="cartaSorpresa">
      <img class="carta-sorpresa-img" src="${SORPRESA_FINAL_SRC}" alt="Sorpresa" onerror="this.style.display='none'">
      <div class="carta-sorpresa-text">✨ Gracias por llegar hasta aquí, mi amor eterno May 💗 ✨</div>
    </div>
  </div></div>`;
  const textEl=document.getElementById('cartaInfText');
  textEl?.addEventListener('scroll',()=>{
    if(textEl.scrollTop+textEl.clientHeight>=textEl.scrollHeight-10){
      unlockAch(12,0);
      if(!cartaSorpresaShown){
        cartaSorpresaShown=true;
        document.getElementById('cartaSorpresa')?.classList.add('visible');
        unlockAch(12,2);
      }
      checkSectionComplete(12);
    }
  });
  document.querySelectorAll('.secret-word').forEach(el=>{
    el.addEventListener('click',()=>{
      const w=el.dataset.sw;
      if(!cartaSecretClickCounts[w])cartaSecretClickCounts[w]=0;
      cartaSecretClickCounts[w]++;
      el.classList.add('found');
      spawnParticles(el.getBoundingClientRect().left+20,el.getBoundingClientRect().top,8,'small');
      const allFound=PALABRAS_SECRETAS_CARTA.every(sw=>cartaSecretClickCounts[sw]>0);
      if(allFound)unlockAch(12,1);
      if(cartaSecretClickCounts[w]>=5){
        unlockAch(12,3);
        document.getElementById('cartaSecret1')?.classList.add('visible');
      }
      checkSectionComplete(12);
    });
    el.addEventListener('mouseenter',()=>{
      const w=el.dataset.sw;
      cartaHoverTimers[w]=setTimeout(()=>{
        unlockAch(12,4);
        document.getElementById('cartaSecret2')?.classList.add('visible');
        checkSectionComplete(12);
      },10000);
    });
    el.addEventListener('mouseleave',()=>clearTimeout(cartaHoverTimers[el.dataset.sw]));
  });
  if(!sec12TimerStarted){sec12TimerStarted=true;setTimeout(()=>{unlockAch(12,5);checkSectionComplete(12);},90000);}
}

// ════════════════════════════════════════════════
// SEC 13 — ETERNO AMOR
// ════════════════════════════════════════════════
function initSec13(){
  const c=document.getElementById('sec13Container');if(!c)return;
  c.innerHTML=`
  <div class="sec13-intro">
    <div class="sec13-main-title">${TITULO_SECCION_13}</div>
    <div class="sec13-subtitle">${SUBTITULO_SECCION_13}</div>
  </div>
  <!-- Carrusel sec13 -->
  <div style="padding:0 14px"><div class="carousel-wrap" style="max-width:380px;margin:0 auto">
    <button class="nav-btn prev-btn" id="sec13Prev">❮</button>
    <div class="sec13-carousel" id="sec13Carousel"></div>
    <button class="nav-btn next-btn" id="sec13Next">❯</button>
  </div></div>
  <div class="carousel-progress">
    <span id="sec13ProgText">Imagen 1 de ${TOTAL_SLIDES_SEC13} 💗</span>
    <div class="cp-bar-outer"><div class="cp-bar-inner" id="sec13ProgBar"></div></div>
  </div>
  <div class="carousel-dots" id="sec13Dots"></div>
  <!-- Contador eterno -->
  <div class="sec-inner-wrap">
    <div style="text-align:center;margin:20px 0 10px">
      <div style="font-family:var(--font-script);font-size:1.1rem;color:var(--text-mid)">📅 Llevamos juntos...</div>
    </div>
    <div class="eternal-counter" id="eternalCounter"></div>
  </div>
  <!-- Adornos interactivos con imágenes -->
  <div class="sec13-adorns" id="sec13Adorns"></div>
  <!-- Mensaje final -->
  <div class="sec-inner-wrap">
    <div class="sec13-msg"><div class="sec13-msg-text" id="sec13MsgText">Cargando mensaje de amor...</div></div>
    <div style="text-align:center;margin-top:12px">
      <button class="sec13-download-btn" id="sec13DownloadBtn">📸 Descargar certificado 💗</button>
    </div>
  </div>
  <!-- Certificado oculto para captura -->
  <div id="certDiv" style="display:none;padding:30px;text-align:center;background:linear-gradient(135deg,#fff8f4,#fde8f0);border:3px solid var(--gold-deep);border-radius:20px;margin:16px">
    <div style="font-family:var(--font-vibes);font-size:2.5rem;color:var(--gold-deep)">${CERTIFICADO_TITULO}</div>
    <div style="font-family:var(--font-script);font-size:1rem;color:var(--text-mid);margin:10px 0">${CERTIFICADO_MENSAJE}</div>
    <div style="font-family:var(--font-vibes);font-size:1.5rem;color:var(--pink-dark)" id="certCounter"></div>
    <div style="font-family:var(--font-script);font-size:0.9rem;color:var(--text-light);margin-top:8px">Fecha: ${new Date().toLocaleDateString()}</div>
  </div>`;
  // Construir carrusel
  const carousel=document.getElementById('sec13Carousel');
  if(carousel&&!carousel.children.length){
    IMGS_SEC13.forEach((src,i)=>{
      const s=document.createElement('div');
      s.className='c-slide'+(i===0?' active':'');
      s.innerHTML=`<div class="c-placeholder" style="position:relative;width:100%;height:100%">
        <img src="${src}" alt="Imagen ${i+1}" loading="lazy" style="width:100%;height:100%;object-fit:contain" onerror="this.style.display='none'">
        <div class="c-slide-overlay">${FRASES_CARRUSEL_13[i]||''}</div>
      </div>`;
      carousel.appendChild(s);
    });
    // Swipe táctil
    let tx13=0;
    carousel.addEventListener('touchstart',e=>{tx13=e.touches[0].clientX;},{passive:true});
    carousel.addEventListener('touchend',e=>{
      const dx=e.changedTouches[0].clientX-tx13;
      if(Math.abs(dx)>40){dx<0?goSec13Slide(sec13Slide+1):goSec13Slide(sec13Slide-1);}
    },{passive:true});
  }
  // Dots
  const dotsEl=document.getElementById('sec13Dots');
  if(dotsEl){
    dotsEl.innerHTML='';
    for(let i=0;i<TOTAL_SLIDES_SEC13;i++){
      const d=document.createElement('div');d.className='c-dot'+(i===0?' active':'');
      d.onclick=()=>goSec13Slide(i);dotsEl.appendChild(d);
    }
  }
  document.getElementById('sec13Prev').onclick=()=>goSec13Slide(sec13Slide-1);
  document.getElementById('sec13Next').onclick=()=>goSec13Slide(sec13Slide+1);
  // Adornos con imágenes de IMAGENES.sec13
  const adorns=document.getElementById('sec13Adorns');
  if(adorns){
    const adornoKeys=Object.keys(IMAGENES.sec13);
    adorns.innerHTML=adornoKeys.map((k,i)=>`
      <span class="sec13-adorn" style="left:${10+i*9}%;top:${20+Math.sin(i)*30}%;cursor:pointer">
        ${imgOrEmoji(IMAGENES.sec13[k],'sec13-img','adorno','width:36px;height:36px;object-fit:contain;pointer-events:none')}
      </span>`).join('');
    adorns.querySelectorAll('.sec13-adorn').forEach(el=>{
      el.addEventListener('click',()=>{
        const msg=FRASES_ADORNOS_FINAL[Math.floor(Math.random()*FRASES_ADORNOS_FINAL.length)];
        showNotif(msg+' 💗');
        spawnParticles(el.getBoundingClientRect().left+20,el.getBoundingClientRect().top,20,'big');
        el.style.transform='scale(1.5) rotate(20deg)';
        setTimeout(()=>el.style.transform='',400);
      });
    });
  }
  // Mensaje personalizado con contador
  const msgEl=document.getElementById('sec13MsgText');
  if(msgEl){
    const diff=getEternalDiff();
    const template=MENSAJE_FINAL_LOGRO[Math.floor(Math.random()*MENSAJE_FINAL_LOGRO.length)];
    msgEl.textContent=template.replace('{dias}',diff.totalDays).replace('{meses}',diff.months).replace('{años}',diff.years);
  }
  // Contador en tiempo real
  setInterval(updateEternalCounter,1000);updateEternalCounter();
  // Botón descargar certificado
  document.getElementById('sec13DownloadBtn').addEventListener('click',()=>{
    const certDiv=document.getElementById('certDiv');certDiv.style.display='block';
    const diff=getEternalDiff();
    const cCounter=document.getElementById('certCounter');
    if(cCounter)cCounter.textContent=`${diff.years} años, ${diff.months} meses y ${diff.days} días juntos 💗`;
    setTimeout(()=>{
      if(typeof html2canvas!=='undefined'){
        html2canvas(certDiv).then(canvas=>{
          const a=document.createElement('a');a.download='certificado_amor_eterno.png';a.href=canvas.toDataURL();a.click();
        });
      } else {
        const data=`${CERTIFICADO_TITULO}\n${CERTIFICADO_MENSAJE}\n${diff.years} años, ${diff.months} meses y ${diff.days} días juntos\nFecha: ${new Date().toLocaleDateString()}`;
        const blob=new Blob([data],{type:'text/plain'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='certificado_amor.txt';a.click();
      }
    },300);
  });
  // Primera vez: fuegos artificiales
  if(!localStorage.getItem('sec13FirstShown')){localStorage.setItem('sec13FirstShown','yes');launchFireworks();}
}

function goSec13Slide(idx){
  if(sec13Transitioning)return;
  const total=TOTAL_SLIDES_SEC13;
  if(idx<0)idx=total-1;if(idx>=total)idx=0;if(idx===sec13Slide)return;
  sec13Transitioning=true;
  const carousel=document.getElementById('sec13Carousel'),slides=carousel?.querySelectorAll('.c-slide');
  if(!slides){sec13Slide=idx;return;}
  const t=TRANSITIONS_LIST[sec13TransIdx%TRANSITIONS_LIST.length];sec13TransIdx++;
  const old=slides[sec13Slide],nw=slides[idx];
  old.classList.add(t.o);nw.style.display='flex';nw.classList.add(t.i,'active');
  setTimeout(()=>{
    old.style.display='none';old.classList.remove('active',t.o);nw.classList.remove(t.i);
    sec13Slide=idx;sec13Transitioning=false;
    document.querySelectorAll('#sec13Dots .c-dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
    const pt=document.getElementById('sec13ProgText'),pb=document.getElementById('sec13ProgBar');
    if(pt)pt.textContent=`Imagen ${idx+1} de ${total} 💗`;
    if(pb)pb.style.width=((idx+1)/total*100)+'%';
  },550);
}

function getEternalDiff(){
  const start=new Date(FECHA_INICIO_AMOR),now=new Date();
  let years=now.getFullYear()-start.getFullYear(),months=now.getMonth()-start.getMonth(),days=now.getDate()-start.getDate();
  if(days<0){months--;days+=new Date(now.getFullYear(),now.getMonth(),0).getDate();}
  if(months<0){years--;months+=12;}
  const totalDays=Math.floor((now-start)/(1000*60*60*24));
  return{years,months,days,hours:now.getHours(),mins:now.getMinutes(),secs:now.getSeconds(),totalDays};
}
function updateEternalCounter(){
  const el=document.getElementById('eternalCounter');if(!el)return;
  const d=getEternalDiff();
  el.innerHTML=`
    <div class="ec-unit"><div class="ec-num">${d.years}</div><div class="ec-label">🎂 Años</div></div>
    <div class="ec-unit"><div class="ec-num">${d.months}</div><div class="ec-label">🌙 Meses</div></div>
    <div class="ec-unit"><div class="ec-num">${d.days}</div><div class="ec-label">☀️ Días</div></div>
    <div class="ec-unit"><div class="ec-num">${d.hours}</div><div class="ec-label">⏰ Horas</div></div>
    <div class="ec-unit"><div class="ec-num">${d.mins}</div><div class="ec-label">⏱️ Minutos</div></div>
    <div class="ec-unit"><div class="ec-num">${d.secs}</div><div class="ec-label">⏲️ Segundos</div></div>`;
}

// ════════════════════════════════════════════════
// MODAL GENÉRICO
// ════════════════════════════════════════════════
function openModal(html){
  modalContent.innerHTML=html;
  genericModal.classList.remove('hidden');
}
function closeModal(){
  genericModal.classList.add('hidden');
  modalContent.innerHTML='';
}

// ════════════════════════════════════════════════
// PARTÍCULAS (emojis — se mantienen como emojis)
// ════════════════════════════════════════════════
function spawnParticles(x,y,count,type){
  if(particlePool.length>=MAX_PARTICLES)return;
  const isBig=type==='big';
  const items=isBig?EMOJI_BIG:EMOJI_SMALL;
  const words=isBig?MAY_WORDS_BIG:MAY_WORDS_SMALL;
  for(let i=0;i<count;i++){
    if(particlePool.length>=MAX_PARTICLES)break;
    const el=document.createElement('div');el.className='particle';
    const useWord=Math.random()>0.5;
    if(useWord){
      el.textContent=words[Math.floor(Math.random()*words.length)];
      el.style.fontSize=isBig?(Math.random()*5+11)+'px':(Math.random()*4+8)+'px';
      el.style.color=['#ff69b4','#ff1493','#db2777','#f9a8d4','#e879f9','#fde68a'][Math.floor(Math.random()*6)];
      el.style.fontFamily="'Dancing Script',cursive";
      el.style.fontWeight='600';
    } else {
      el.textContent=items[Math.floor(Math.random()*items.length)];
      el.style.fontSize=isBig?(Math.random()*12+16)+'px':(Math.random()*8+10)+'px';
    }
    const angle=Math.random()*Math.PI*2;
    const speed=isBig?(Math.random()*80+60):(Math.random()*50+30);
    const vx=Math.cos(angle)*speed,vy=-Math.abs(Math.sin(angle))*speed-(isBig?60:40);
    el.style.cssText+=`;position:fixed;left:${x}px;top:${y}px;pointer-events:none;z-index:9500;white-space:nowrap;`;
    document.body.appendChild(el);
    particlePool.push(el);
    const start=performance.now(),gravity=80;
    const dur=isBig?(Math.random()*1000+1800):(Math.random()*800+1200);
    const anim=now=>{
      const t=(now-start)/1000;
      const nx=x+vx*t,ny=y+vy*t+0.5*gravity*t*t;
      const op=Math.max(0,1-t/(dur/1000));
      const sc=Math.max(0.1,1-t/(dur/1000)*0.7);
      el.style.left=nx+'px';el.style.top=ny+'px';
      el.style.transform=`rotate(${t*(isBig?180:120)}deg) scale(${sc})`;
      el.style.opacity=op;
      if(t<dur/1000&&op>0)requestAnimationFrame(anim);
      else{el.remove();const i=particlePool.indexOf(el);if(i!==-1)particlePool.splice(i,1);}
    };
    requestAnimationFrame(anim);
  }
}

// ════════════════════════════════════════════════
// CONFETI
// ════════════════════════════════════════════════
function launchConfetti(count=80){
  const colors=['#ff69b4','#f9a8d4','#fda4af','#e9d5ff','#c4b5fd','#fde68a','#a7f3d0','#fbcfe8'];
  for(let i=0;i<count;i++){
    setTimeout(()=>{
      const el=document.createElement('div');el.className='confetti-piece';
      el.style.left=Math.random()*100+'vw';
      el.style.background=colors[Math.floor(Math.random()*colors.length)];
      el.style.width=(Math.random()*10+5)+'px';
      el.style.height=(Math.random()*10+5)+'px';
      el.style.borderRadius=Math.random()>0.5?'50%':'3px';
      el.style.animationDuration=(Math.random()*2+1.5)+'s';
      el.style.animationDelay=Math.random()*0.5+'s';
      confettiCont.appendChild(el);
      setTimeout(()=>el.remove(),3500);
    },i*10);
  }
}

// ════════════════════════════════════════════════
// FUEGOS ARTIFICIALES
// ════════════════════════════════════════════════
function launchFireworks(){
  const colors=['#ff69b4','#fbbf24','#a78bfa','#34d399','#f97316','#fb7185'];
  for(let i=0;i<12;i++){
    setTimeout(()=>{
      const x=Math.random()*window.innerWidth;
      const y=Math.random()*window.innerHeight*0.6;
      for(let j=0;j<24;j++){
        const el=document.createElement('div');
        el.style.cssText=`position:fixed;left:${x}px;top:${y}px;width:6px;height:6px;border-radius:50%;background:${colors[Math.floor(Math.random()*colors.length)]};pointer-events:none;z-index:9900;`;
        document.body.appendChild(el);
        const angle=Math.random()*Math.PI*2,spd=Math.random()*120+50;
        const vx=Math.cos(angle)*spd,vy=Math.sin(angle)*spd;
        const start=performance.now();
        const anim=now=>{
          const t=(now-start)/1000;
          el.style.left=(x+vx*t)+'px';
          el.style.top=(y+vy*t+0.5*200*t*t)+'px';
          el.style.opacity=Math.max(0,1-t/1.5);
          el.style.transform=`scale(${Math.max(0.1,1-t)})`;
          if(t<1.5)requestAnimationFrame(anim);else el.remove();
        };
        requestAnimationFrame(anim);
      }
    },i*250);
  }
}

// ════════════════════════════════════════════════
// NOTIFICACIÓN GLOBAL
// ════════════════════════════════════════════════
let notifTimeout=null;
function showNotif(msg){
  globalNotif.textContent=msg;
  globalNotif.classList.add('show');
  clearTimeout(notifTimeout);
  notifTimeout=setTimeout(()=>globalNotif.classList.remove('show'),3500);
}

// ════════════════════════════════════════════════
// CORAZONES FLOTANTES DE FONDO
// ════════════════════════════════════════════════
function startFloatingHearts(){
  const hearts=['💗','💕','🌸','✨','💖','🎀','🌺'];
  const spawn=()=>{
    const el=document.createElement('div');el.className='float-heart';
    el.textContent=hearts[Math.floor(Math.random()*hearts.length)];
    el.style.left=Math.random()*100+'vw';
    el.style.animationDuration=(Math.random()*6+7)+'s';
    el.style.fontSize=(Math.random()*14+12)+'px';
    el.style.opacity=(Math.random()*0.35+0.2).toFixed(2);
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),14000);
  };
  for(let i=0;i<6;i++)setTimeout(spawn,i*500);
  setInterval(spawn,800);
}

// ════════════════════════════════════════════════
// RESIZE
// ════════════════════════════════════════════════
window.addEventListener('resize',()=>{
  particlePool.forEach(p=>{if(!document.body.contains(p))p.remove();});
  particlePool=particlePool.filter(p=>document.body.contains(p));
});
