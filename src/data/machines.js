const lorem0 = "Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse sollicitudin;";
const lorem1 = "Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse sollicitudin, diam porttitor dictum dignissim venenatis vitae luctus lectus litora bibendum, taciti sem condimentum curae ultrices morbi donec ridiculus. Commodo suscipit cursus himenaeos massa ad enim egestas ut scelerisque";
const lorem2 = "Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse sollicitudin, diam porttitor dictum dignissim venenatis vitae luctus lectus litora bibendum, taciti sem condimentum curae ultrices morbi donec ridiculus. Commodo suscipit cursus himenaeos massa ad enim egestas ut scelerisque, cras convallis donec ridiculus volutpat tellus fames montes ac, bibendum pretium pulvinar feugiat interdum auctor rutrum molestie. Sed elementum inceptos urna porttitor mattis id convallis, sociosqu lectus mus malesuada arcu rhoncus, senectus sapien integer ullamcorper cum nisl.";
const lorem3 = "Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse sollicitudin, diam porttitor dictum dignissim venenatis vitae luctus lectus litora bibendum, taciti sem condimentum curae ultrices morbi donec ridiculus. Commodo suscipit cursus himenaeos massa ad enim egestas ut scelerisque, cras convallis donec ridiculus volutpat tellus fames montes ac, bibendum pretium pulvinar feugiat interdum auctor rutrum molestie. Sed elementum inceptos urna porttitor mattis id convallis, sociosqu lectus mus malesuada arcu rhoncus, senectus sapien integer ullamcorper cum nisl. Commodo suscipit cursus himenaeos massa ad enim egestas ut scelerisque, cras convallis donec ridiculus volutpat tellus fames montes ac, bibendum pretium pulvinar feugiat interdum auctor rutrum molestie. Sed elementum inceptos urna porttitor mattis id convallis, sociosqu lectus mus malesuada arcu rhoncus, senectus sapien integer ullamcorper cum nisl.";
const videoLocal = "/Prueba.mp4";
const imageLocal = "/Prueba.png";
export const machines = [
  {
    id: "fiber",
    name: "Máquina Láser Fiber",
    description: "Sistema de corte y grabado láser de fibra óptica de alta precisión para materiales metálicos y no metálicos.",
    image: "/Fiber/Fiber1.jpeg",
    categories: [
      {
        id: "Maquina",
        title: "Maquina",
        content:
          "Guía completa para el encendido, configuración y operación básica de la Máquina Láser Fiber. Es fundamental conocer cada paso del proceso para garantizar la seguridad del operador y la calidad del trabajo.",
        subSections: [
          {
            title: "Partes de la maquina",
            content:
              "1. Base\n2. Columna\n3. Laser\n4. Dispositivos externos",
            video: videoLocal,
            extraContent: [
              { type: "text", value: "🔷 **1. BASE**\nLa base es la estructura principal de soporte de la máquina. Sobre ella se apoyan todos los componentes mecánicos y electrónicos." },
              { type: "text", value: "\n🔹 **Funciones principales:**\n- Soporta la columna y el cabezal láser.\n- Contiene el sistema eléctrico interno.\n- Permite la conexión con dispositivos externos.\n- Sirve como superficie de trabajo." },
              { type: "text", value: "\n🔹 **Panel frontal:**\nEn la parte frontal se encuentran tres botones:\n- **POWER** (Encendido): Botón principal que enciende y apaga la máquina. Activa el sistema eléctrico interno y permite el funcionamiento del láser.\n- **UP** (Subir): Permite elevar la columna automáticamente.\n- **DOWN** (Bajar): Permite descender la columna automáticamente.\nEstos botones controlan el movimiento vertical para ajustar la altura del láser según el material." },
              
              { type: "image", value: "/Fiber/FiberPanelFrontal.jpeg" },
              
              { type: "text", value: "\n🔹 **Conexiones laterales / traseras:**\n- **Puerto USB:** Permite conectar la máquina al computador para enviar diseños desde el software (como EZCAD).\n- **Conector del pedal:** Entrada para el pedal externo, que permite activar el grabado manualmente.\n- **Conector de alimentación (Fuente de poder):** Entrada donde se conecta el cable de corriente eléctrica.\n- **Sistema de ventilación:** Rejillas laterales que permiten disipar el calor interno." },
              
              { type: "gallery", items: [
                {value: "/Fiber/FiberPanelTrasero.jpeg", label: "Panel Trasero"},
                {value: "/Fiber/FiberPanelLateral.jpeg", label: "Panel Lateral"}]},

              { type: "text", value: "\n🔷 **2. COLUMNA**\nLa columna es la estructura vertical que sostiene el cabezal láser." },
              
              { type: "image", value: "/Fiber/FiberColumna.jpeg" },
              
              { type: "text", value: "\n🔹 **Función principal:**\nPermite ajustar la altura del láser para lograr el enfoque correcto sobre el material." },
              { type: "text", value: "\n🔹 **Movimiento:**\nLa columna puede ajustarse de dos formas:\n- **Automáticamente:** Usando los botones UP (sube) y DOWN (baja) NOTA: tiene que estar prendida la maquina.\n- **Manual:** se puede ajustar manualmente para mayor precisión o en caso de mantenimiento." },
        
              { type: "gallery", items: [ 
                {value: "/Fiber/FiberColumnaVideo.mp4", label: "Video Ajuste Columna Manual"},
                {value: "/Fiber/FiberColumnaAutoVideo.mp4", label: "Video Ajuste Columna Automático"}]},

              { type: "text", value: "\n🔹 **Importancia del ajuste:**\nEl correcto posicionamiento de la columna garantiza mejor calidad de grabado, mayor precisión y enfoque adecuado del punto láser." },
              { type: "text", value: "\n🔷 **3. LÁSER (Cabezal Láser)**\nEs la parte superior horizontal de la máquina donde se encuentra el sistema óptico y el módulo láser." },
              { type: "text", value: "\n🔹 **Componentes principales:**\n- Fuente láser interna.\n- Sistema galvo (espejos internos de alta velocidad).\n- Lente de enfoque.\n- Cable de conexión protegido (manguera corrugada)." },
              
              { type: "gallery", items: [
                {value: "/Fiber/FiberLaser.jpeg", label: "Cabezal Láser"},
                {value: "/Fiber/FiberLaserLente.jpeg", label: "Lente del Cabezal Láser"}]},

              { type: "text", value: "\n🔹 **Función:**\nEl cabezal recibe la señal del software y dirige el haz láser hacia el material para realizar grabado, marcado, corte superficial (según potencia), numeración, logos y códigos." },
              { type: "text", value: "\n🔹 **Funcionamiento:**\nEl sistema galvo mueve el rayo láser a gran velocidad en los ejes X y Y, permitiendo dibujar diseños con alta precisión." },
              { type: "text", value: "\n🔷 **4. DISPOSITIVOS EXTERNOS**\nSon los elementos que se conectan a la máquina para permitir su funcionamiento y control." },
              { type: "text", value: "\n🔹 **Cable USB:** Conecta la máquina al computador. Permite enviar archivos desde el software de grabado (como EZCAD). Es indispensable para el control digital del láser. Sin el USB conectado, la máquina no puede recibir diseños." },
              
              { type: "image", value: "/Fiber/FiberCable.jpg" },
              
              { type: "text", value: "\n🔹 **Pedal:** Permite activar el grabado manualmente. Funciona como disparador. Ideal para producción repetitiva. Recomendacion: Activar la casilla \"Continue mode\" en el software si va a usar el pedal." },
              
              { type: "image", value: "/Fiber/FiberPedal.jpeg" },
              { type: "image", value: "/Fiber/FiberPedalRecomendacion.png " },

              { type: "text", value: "\n🔹 **Usos del pedal:**\n- Iniciar grabado sin usar el mouse o teclado.\n- Trabajos en serie (ejemplo: marcar muchos colores).\n- Mayor rapidez en producción." },
              { type: "text", value: "\n🔷 **Resumen General del Funcionamiento**\nSe conecta la máquina a la corriente. Se conecta el cable USB al computador. Se enciende con el botón POWER. Se ajusta la altura con UP y DOWN. Se envía el diseño desde el software con el parametro adecuado para el material. Se activa el grabado desde el software o con el pedal." },
            ],
          },
          {
            title: "Mantenimiento",
            content:
              "1. Abrir el software de control en la PC conectada.\n2. Cargar el archivo de diseño (.dxf o .ai).\n3. Configurar potencia y velocidad según el material.\n4. Realizar un recorrido en vacío antes del corte real.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
              { type: "image", value: imageLocal }
            ],
          },
          {
            title: "Cosas a tener en cuenta",
            content:
              "1. USAR GAFAS DE PROTECCIÓN LÁSER.\n2. NO DEJAR LA MÁQUINA ENCENDIDA SIN SUPERVISIÓN.\n3. CUIDADO CON OTROS MATERIALES DIFERENTES A METALES.\n4. MANTENER LAS MANOS ALEJADAS DEL HAZ LÁSER",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
        ],
        images: [ //GALERIA DE IMAGENES
          imageLocal,
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80",
        ],
        video: videoLocal,
      },
      {
        id: "Aplicacion",
        title: "Aplicacion",
        content:
          "Procedimientos de mantenimiento preventivo y correctivo para asegurar el óptimo funcionamiento del láser Fiber a largo plazo.",
        subSections: [
          {
            title: "Limpieza de lentes",
            content:
              "Limpiar la lente de enfoque semanalmente usando paños de microfibra y solución IPA al 99%. Nunca usar agua o productos abrasivos. Realizar movimientos circulares suaves desde el centro hacia afuera.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
          {
            title: "Revisión del sistema de refrigeración",
            content:
              "Verificar el nivel del líquido refrigerante mensualmente. Cambiar el filtro de agua cada 3 meses. Revisar que no haya fugas en las mangueras. Mantener la temperatura del chiller entre 20°C y 25°C.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
          {
            title: "Calibración de la cama de trabajo",
            content:
              "Calibrar la mesa de trabajo cada 2 semanas usando la herramienta de nivelación incluida. Asegurarse de que la distancia focal sea la correcta para el material a trabajar.",
            video: "",
            extraContent: [],
          },
        ],
        images: [
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
        ],
        video: "",
      },
      {
        id: "que-no-hacer",
        title: "Qué NO hacer",
        content:
          "Lista de acciones prohibidas durante la operación del láser Fiber para evitar daños al equipo y al personal.",
        subSections: [
          {
            title: "Materiales prohibidos",
            content:
              "NUNCA procesar: PVC (genera cloro gaseoso), materiales con recubrimiento de pintura con plomo, materiales reflectantes sin configuración especial, ni materiales inflamables sin sistema de ventilación activo.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
          {
            title: "Errores operativos comunes",
            content:
              "No dejar el equipo encendido sin supervisión. No abrir la cubierta durante el proceso de corte. No superar los límites de potencia especificados para cada material. No usar el equipo con el sistema de extracción de humos desactivado.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
        ],
        images: [],
        video: "",
      },
      {
        id: "posibles-errores",
        title: "Posibles Errores",
        content:
          "Diagnóstico y solución de los errores más frecuentes en la operación del láser Fiber.",
        subSections: [
          {
            title: "Error: Láser sin potencia",
            content:
              "Causas posibles: fuente de poder apagada, cable de señal desconectado, temperatura del chiller fuera de rango. Solución: verificar conexiones, reiniciar el chiller y esperar que alcance temperatura óptima.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
          {
            title: "Error: Corte incompleto",
            content:
              "Causas posibles: velocidad muy alta, potencia insuficiente, lente sucia o foco incorrecto. Solución: reducir velocidad en 20%, aumentar potencia gradualmente, limpiar la lente y recalibrar el foco.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
          {
            title: "Error: Software no reconoce el equipo",
            content:
              "Causas posibles: driver USB no instalado, cable USB dañado, puerto COM incorrecto. Solución: reinstalar drivers, cambiar cable USB, seleccionar manualmente el puerto COM correcto en la configuración.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
        ],
        images: [imageLocal, imageLocal],
        video: videoLocal,
      },
    ],
  },
  {
    id: "viper391s",
    name: "Máquina de Etiquetas Viper391s",
    description: "Impresora industrial de etiquetas de alta velocidad y precisión para etiquetado de productos y activos empresariales.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    categories: [
      {
        id: "uso-basico",
        title: "Uso Básico",
        content:
          "Procedimientos esenciales para operar la impresora de etiquetas Viper391s correctamente, desde la carga de materiales hasta la impresión del primer lote.",
        subSections: [
          {
            title: "Carga de rollo de etiquetas",
            content:
              "1. Abrir la compuerta lateral derecha.\n2. Insertar el rollo en el eje porta-rollo alineando el centro.\n3. Pasar la etiqueta por las guías de papel siguiendo la ruta marcada en la máquina.\n4. Cerrar la compuerta y presionar 'Feed' para alinear.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
          {
            title: "Configuración de impresión",
            content:
              "1. Conectar la Viper391s al PC mediante USB o red local.\n2. Abrir el software BarTender o ZPL Editor.\n3. Seleccionar la impresora 'VIPER391S' en la lista.\n4. Configurar dimensiones de etiqueta y densidad de impresión (DPI).",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
        ],
        images: [
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
        ],
        video: "",
      },
      {
        id: "mantenimiento",
        title: "Mantenimiento",
        content:
          "Guía de mantenimiento para garantizar la calidad de impresión y prolongar la vida útil del cabezal térmico de la Viper391s.",
        subSections: [
          {
            title: "Limpieza del cabezal de impresión",
            content:
              "Limpiar el cabezal térmico cada 5 rollos de etiquetas usando hisopos con alcohol isopropílico. Mover el hisopo en una sola dirección (nunca hacia atrás y adelante). Esperar 2 minutos antes de imprimir nuevamente.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
          {
            title: "Limpieza del rodillo de arrastre",
            content:
              "Limpiar el rodillo de goma mensualmente con un paño húmedo sin productos químicos. Revisar que no tenga residuos de adhesivo de etiquetas pegadas.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
        ],
        images: [],
        video: "",
      },
      {
        id: "posibles-errores",
        title: "Posibles Errores",
        content:
          "Solución a los problemas más comunes durante la operación de la Viper391s.",
        subSections: [
          {
            title: "Error: Impresión borrosa o tenue",
            content:
              "Causas: cabezal sucio, densidad de impresión baja, tipo de etiqueta incorrecto. Solución: limpiar el cabezal, aumentar la densidad en el software y verificar compatibilidad del rollo.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
          {
            title: "Error: Atasco de papel",
            content:
              "Solución: abrir todas las compuertas de acceso, retirar la etiqueta atascada con cuidado sin rasgar, limpiar residuos adhesivos y volver a cargar el rollo correctamente.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
        ],
        images: [],
        video: "",
      },
    ],
  },
  {
    id: "cr391",
    name: "Máquina Troqueladora CR391",
    description: "Troqueladora de precisión para corte y troquelado de materiales planos como cartón, plástico y láminas metálicas delgadas.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    categories: [
      {
        id: "uso-basico",
        title: "Uso Básico",
        content:
          "Guía de operación básica para la troqueladora CR391, incluyendo preparación del troquel, alimentación de material y ciclos de operación.",
        subSections: [
          {
            title: "Instalación del troquel",
            content:
              "1. Apagar completamente la máquina antes de instalar el troquel.\n2. Limpiar la mesa portadora con un paño seco.\n3. Centrar el troquel en la mesa y asegurarlo con los tornillos de fijación.\n4. Verificar la alineación con la placa guía antes de encender.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
          {
            title: "Configuración de presión",
            content:
              "Ajustar la presión de troquelado según el material:\n- Cartón 300g: 80-120 toneladas.\n- Plástico 2mm: 100-140 toneladas.\n- Lámina metálica 0.5mm: 150-180 toneladas.\nNunca exceder el límite máximo de la máquina.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
        ],
        images: [
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        ],
        video: "",
      },
      {
        id: "mantenimiento",
        title: "Mantenimiento",
        content:
          "Procedimientos de mantenimiento preventivo para la CR391.",
        subSections: [
          {
            title: "Lubricación de guías",
            content:
              "Lubricar las guías lineales y el sistema de husillo semanalmente con grasa NLGI-2. Aplicar grasa con pistola neumática en los niples de engrase ubicados en cada esquina del marco.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
          {
            title: "Inspección de troquel",
            content:
              "Inspeccionar el filo del troquel cada 500 ciclos. Afilar o reemplazar cuando el corte presente rebabas o bordes irregulares. Registrar en la bitácora de mantenimiento.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
        ],
        images: [imageLocal, imageLocal],
        video: videoLocal,
      },
      {
        id: "que-no-hacer",
        title: "Qué NO hacer",
        content:
          "Restricciones de operación críticas para la seguridad en la troqueladora CR391.",
        subSections: [
          {
            title: "Prohibiciones absolutas",
            content:
              "NUNCA introducir las manos en el área de troquelado con la máquina encendida. NUNCA troquelar materiales más gruesos que los especificados. NUNCA operar sin las guardas de seguridad instaladas.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
        ],
        images: [],
        video: "",
      },
      {
        id: "backup",
        title: "Backup y Registros",
        content:
          "Procedimientos para respaldo de programas de troquelado y registros de producción de la CR391.",
        subSections: [
          {
            title: "Exportar programas de troquelado",
            content:
              "1. Acceder al menú 'Programas' en el panel de control.\n2. Seleccionar los programas a exportar.\n3. Conectar USB en el puerto lateral.\n4. Presionar 'Exportar a USB' y esperar confirmación.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
          {
            title: "Registro de producción",
            content:
              "Completar el registro de producción diario con: número de ciclos realizados, material procesado, incidencias y operador responsable. Guardar en la carpeta compartida de producción.",
            video: videoLocal,
            extraContent: [
              { type: "text", value: lorem0 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem1 },
              { type: "video", value: videoLocal },
              { type: "text", value: lorem2 },
              { type: "image", value: imageLocal },
            ],
          },
        ],
        images: [],
        video: "",
      },
    ],
  },
];
