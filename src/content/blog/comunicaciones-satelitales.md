---
title: "Comunicaciones Satelitales"
description: "Información sobre las comunicaciones satelitales"
pubDate: "Jun 08 2024"
heroImage: "/blog-satellite-comunications.jpeg"
authors: ["Alvaro Resplandor", "Julian López"]
---

En términos aeroespaciales un _satélite_ es un vehículo espacial lanzado por humanos, que describe órbitas alrededor de la tierra o de otro cuerpo celeste. Mientras que un _satélite de comunicaciones_ es una repetidora de microondas en el cielo, formada por una diversa combinación de uno o más de los siguientes dispositivos: receptor, transmisor, regenerador, filtro, computadora de a bordo, multiplexor, demultiplexor, antena, guía de onda y casi cualquier otro circuito de comunicaciones electrónicas que se haya desarrollado.

## Leyes de Kepler

Johannes Kepler (1571-1630), astrónomo alemán, descubrió las leyes que gobiernan el movimiento de los satélites. Las leyes del movimiento planetario describen la forma de la órbita, las velocidades del planeta y la distancia de un planeta con respecto al Sol.

- Los planetas describen elipses con el Sol en uno de los focos.
- La línea que une al Sol con un planeta barre áreas iguales en intervalos guales de tiempo.
- El cuadrado del tiempo de revolución de un planeta, dividido entre el cubo de su distancia promedio al Sol es un número igual para todos los planetas.

## Orbitas Satelitales

Si el satélite describe su órbita en la misma dirección que la de rotación de la Tierra (en el sentido de las manecillas del reloj) y su velocidad angular es mayor que la de la Tierra la órbita se llama prógrada o posígrada.

Si su órbita tiene dirección contraria a la de rotación de la Tierra, o la misma dirección, pero con una velocidad angular menor que la de la Tierra la órbita del satélite es retrógrada.

## Clasificación de los Satélites

### Giratorio

Aprovecha el momento angular de su masa giratoria para obtener estabilización de balanceo y cabeceo.

### Estabilizador de Tres Ejes

El cuerpo permanece fijo en relación con la superficie terrestre, mientras que un subsistema interno proporciona la estabilización de balanceo y cabeceo.

## Modelos de Enlaces en Sistemas Satelitales

### Modelo de Enlace de Subida

El principal componente de la sección de enlace de subida de un sistema satelital es la estación terrestre transmisora, que suele consistir de un modulador de FI, un convertidor elevador de frecuencia de FI a microondas RF, un amplificador de alta potencia (HPA, de high-power amplifier) y algún medio de limitar la banda del espectro final de salida (es decir, un filtro pasabandas de salida).

### Transfondedor

Consiste en un dispositivo limitador de banda de entrada (filtro pasabandas), un amplificador de bajo ruido (LNA, de low-noise amplifier) de entrada, un desplazador de frecuencia, un amplificador de potencia de bajo nivel y un filtro pasabandas de salida.

### Modelo Enlace de Bajada

Un receptor en la estación terrestre comprende un BPF de entrada, un LNA y un convertidor descendente de RF a FI.

### Enlaces Cruzados

A veces se presenta una aplicación en donde es necesario comunicarse entre satélites. Esto se hace con enlaces satelitales cruzados o enlaces intersatelitales (ISL, de intersatellite links).
