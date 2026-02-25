export const machines = [
  {
    id: "fiber",
    name: "Máquina Láser Fiber",
    description: "Sistema de corte y grabado láser de fibra óptica de alta precisión para materiales metálicos y no metálicos.",
    image: "https://images.unsplash.com/photo-1565787131200-e4069e7f4c96?w=600&q=80",
    categories: [
      {
        id: "uso-basico",
        title: "Uso Básico",
        content:
          "Guía completa para el encendido, configuración y operación básica de la Máquina Láser Fiber. Es fundamental conocer cada paso del proceso para garantizar la seguridad del operador y la calidad del trabajo.",
        subSections: [
          {
            title: "Encendido del equipo",
            content:
              "1. Verificar que el área de trabajo esté despejada.\n2. Encender el interruptor principal ubicado en el panel lateral.\n3. Esperar 30 segundos a que el sistema inicialice.\n4. Confirmar que el indicador verde esté activo.",
          },
          {
            title: "Configuración inicial",
            content:
              "1. Abrir el software de control en la PC conectada.\n2. Cargar el archivo de diseño (.dxf o .ai).\n3. Configurar potencia y velocidad según el material.\n4. Realizar un recorrido en vacío antes del corte real.",
          },
          {
            title: "Finalización de trabajo",
            content:
              "1. Esperar a que el cabezal regrese a la posición de origen.\n2. Retirar la pieza con guantes de protección.\n3. Limpiar el área de residuos y polvo metálico.\n4. Apagar el equipo siguiendo el procedimiento de apagado seguro.",
          },
        ],
        images: [
          "https://images.unsplash.com/photo-1565787131200-e4069e7f4c96?w=600&q=80",
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80",
        ],
        video: "",
      },
      {
        id: "mantenimiento",
        title: "Mantenimiento",
        content:
          "Procedimientos de mantenimiento preventivo y correctivo para asegurar el óptimo funcionamiento del láser Fiber a largo plazo.",
        subSections: [
          {
            title: "Limpieza de lentes",
            content:
              "Limpiar la lente de enfoque semanalmente usando paños de microfibra y solución IPA al 99%. Nunca usar agua o productos abrasivos. Realizar movimientos circulares suaves desde el centro hacia afuera.",
          },
          {
            title: "Revisión del sistema de refrigeración",
            content:
              "Verificar el nivel del líquido refrigerante mensualmente. Cambiar el filtro de agua cada 3 meses. Revisar que no haya fugas en las mangueras. Mantener la temperatura del chiller entre 20°C y 25°C.",
          },
          {
            title: "Calibración de la cama de trabajo",
            content:
              "Calibrar la mesa de trabajo cada 2 semanas usando la herramienta de nivelación incluida. Asegurarse de que la distancia focal sea la correcta para el material a trabajar.",
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
          },
          {
            title: "Errores operativos comunes",
            content:
              "No dejar el equipo encendido sin supervisión. No abrir la cubierta durante el proceso de corte. No superar los límites de potencia especificados para cada material. No usar el equipo con el sistema de extracción de humos desactivado.",
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
          },
          {
            title: "Error: Corte incompleto",
            content:
              "Causas posibles: velocidad muy alta, potencia insuficiente, lente sucia o foco incorrecto. Solución: reducir velocidad en 20%, aumentar potencia gradualmente, limpiar la lente y recalibrar el foco.",
          },
          {
            title: "Error: Software no reconoce el equipo",
            content:
              "Causas posibles: driver USB no instalado, cable USB dañado, puerto COM incorrecto. Solución: reinstalar drivers, cambiar cable USB, seleccionar manualmente el puerto COM correcto en la configuración.",
          },
        ],
        images: [],
        video: "",
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
          },
          {
            title: "Configuración de impresión",
            content:
              "1. Conectar la Viper391s al PC mediante USB o red local.\n2. Abrir el software BarTender o ZPL Editor.\n3. Seleccionar la impresora 'VIPER391S' en la lista.\n4. Configurar dimensiones de etiqueta y densidad de impresión (DPI).",
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
          },
          {
            title: "Limpieza del rodillo de arrastre",
            content:
              "Limpiar el rodillo de goma mensualmente con un paño húmedo sin productos químicos. Revisar que no tenga residuos de adhesivo de etiquetas pegadas.",
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
          },
          {
            title: "Error: Atasco de papel",
            content:
              "Solución: abrir todas las compuertas de acceso, retirar la etiqueta atascada con cuidado sin rasgar, limpiar residuos adhesivos y volver a cargar el rollo correctamente.",
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
          },
          {
            title: "Configuración de presión",
            content:
              "Ajustar la presión de troquelado según el material:\n- Cartón 300g: 80-120 toneladas.\n- Plástico 2mm: 100-140 toneladas.\n- Lámina metálica 0.5mm: 150-180 toneladas.\nNunca exceder el límite máximo de la máquina.",
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
          },
          {
            title: "Inspección de troquel",
            content:
              "Inspeccionar el filo del troquel cada 500 ciclos. Afilar o reemplazar cuando el corte presente rebabas o bordes irregulares. Registrar en la bitácora de mantenimiento.",
          },
        ],
        images: [],
        video: "",
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
          },
          {
            title: "Registro de producción",
            content:
              "Completar el registro de producción diario con: número de ciclos realizados, material procesado, incidencias y operador responsable. Guardar en la carpeta compartida de producción.",
          },
        ],
        images: [],
        video: "",
      },
    ],
  },
];
