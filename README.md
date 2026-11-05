# Taller Práctico: De Vibe Coding a Spec-Driven Development (SDD) con IA

¡Bienvenidos al taller técnico!

En esta sesión vamos a contrastar la programación basada en impulsos (*Vibe Coding*) frente al desarrollo estructurado y profesional basado en especificaciones (*Spec-Driven Development* o SDD), utilizando **Kiro IDE**.

Este repositorio contiene los planos y la especificación técnica del proyecto **UniPulse Cartagena**. La IA se encargará de construir todo el entorno y la aplicación desde cero a partir de estos documentos.

---

## 🚀 Prueba 1: Vibe Coding

En esta primera etapa experimentaremos con el enfoque *Vibe Coding*, donde construiremos una aplicación mediante instrucciones en lenguaje natural, sin proporcionar previamente documentos de requerimientos, arquitectura o diseño.

### 📋 Prompt para la prueba de Vibe Coding

**Instrucción:** Copia y pega el siguiente prompt en un nuevo workspace o chat limpio de Kiro IDE.

> Hazme una aplicación web completa de una sola página llamada **'UniPulse'** usando React, Tailwind CSS y Lucide Icons.
>
> Debe ser un dashboard para estudiantes universitarios en Cartagena que incluya:
>
> 1. **Banner superior con estadísticas rápidas:** Muestra indicadores relevantes para la comunidad universitaria.
> 2. **Próximos torneos deportivos:** Incluye una sección con los próximos encuentros deportivos y estados de partidos interactivos.
> 3. **Feed de proyectos tecnológicos:** Presenta proyectos de tecnología desarrollados por estudiantes, con filtros por categoría y botones de "Me gusta".
>
> Hazlo visualmente impactante, con un tema oscuro moderno de alta tecnología (azul eléctrico y fondo oscuro), y ponle un nombre de usuario aleatorio en la esquina superior.
>
> Construye una experiencia visual atractiva, moderna, intuitiva y responsive.

### 🎯 Objetivo de la prueba

Evaluar cómo un agente de IA interpreta instrucciones generales y construye una aplicación funcional sin contar con especificaciones técnicas previamente definidas.

Presta atención a aspectos como:

- Calidad visual y experiencia de usuario (UI/UX).
- Estructura y organización del código.
- Coherencia entre los componentes desarrollados.
- Funcionalidades implementadas y nivel de interacción.
- Capacidad del agente para tomar decisiones de diseño y arquitectura de manera autónoma.

---

## 🏗️ Prueba 2: Spec-Driven Development (SDD)

En esta segunda etapa utilizaremos un enfoque estructurado de desarrollo basado en especificaciones (*Spec-Driven Development* o SDD).

A diferencia de la prueba anterior, el agente contará con documentos que definen previamente los requerimientos funcionales, el diseño y la arquitectura de la solución.

### 1. Clonar el repositorio

Clona este repositorio en tu equipo o abre directamente la carpeta del proyecto desde Kiro IDE:

```bash
git clone https://github.com/ingenieroguardo/unipulse.git
```

### 2. Configurar Kiro IDE

1. Abre **Kiro IDE** y selecciona la carpeta del proyecto clonado.
2. Asegúrate de iniciar sesión con tu cuenta gratuita de Kiro.
3. Abre el panel de chat o asistente del agente en Kiro.

### 3. Ejecutar el prompt de construcción

Copia y pega el siguiente prompt en el chat de Kiro IDE para que el agente analice las especificaciones, genere el plan de tareas y construya la aplicación.

---

### 📋 Prompt para Kiro IDE

**Instrucción:** Copia y pega el siguiente prompt en Kiro IDE durante el taller.

> Hola. Por favor, lee los archivos de especificación ubicados en la carpeta `.kiro/specs/` (`requirements.md` y `design.md`).
>
> Con base en ellos, realiza las siguientes actividades:
>
> 1. **Inicialización del proyecto:** Configura la estructura del proyecto web utilizando Vite, TypeScript, Tailwind CSS y las dependencias necesarias de React y Lucide Icons, de acuerdo con las especificaciones del diseño.
>
> 2. **Planificación de tareas:** Genera un plan de tareas detallado (*Task Breakdown*) que permita construir la aplicación paso a paso, siguiendo las especificaciones funcionales y técnicas.
>
> 3. **Implementación completa:** Ejecuta la construcción de toda la interfaz de UniPulse Cartagena, respetando estrictamente los requerimientos funcionales, la arquitectura definida y la paleta de colores establecida en los documentos de diseño.
>
> ¡Manos a la obra!

---

## 🔍 Comparativa: Vibe Coding vs. Spec-Driven Development

Al finalizar ambas pruebas, compara los resultados obtenidos teniendo en cuenta los siguientes aspectos:

| Criterio | Vibe Coding | Spec-Driven Development (SDD) |
|---|---|---|
| Punto de partida | Instrucciones en lenguaje natural | Especificaciones documentadas |
| Requerimientos | Interpretados por la IA | Definidos previamente |
| Arquitectura | Decidida autónomamente por la IA | Guiada por el documento de diseño |
| Planificación | Generalmente implícita | Plan de tareas estructurado |
| Control del desarrollo | Basado en iteraciones y prompts | Basado en requerimientos y tareas |
| Consistencia | Depende de la interpretación de la IA | Guiada por las especificaciones |
| Mantenimiento | Puede requerir mayor reorganización | Favorecido por una estructura definida |

## 🎯 Objetivo General del Taller

Experimentar cómo pasar de una programación basada en instrucciones improvisadas (*Vibe Coding*) a una metodología estructurada de desarrollo asistido por inteligencia artificial (*Spec-Driven Development*).

La idea es comprender cómo una buena definición de requerimientos, arquitectura y diseño permite que los agentes de IA construyan aplicaciones de manera más organizada, consistente y profesional.

---

**¡Disfruta construyendo software profesional guiado por agentes de IA!** 🚀