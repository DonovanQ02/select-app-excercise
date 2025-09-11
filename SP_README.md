## Lista de apps

El siguiente ejercicio nos servirá para evaluar cómo resuelves problemas cotidianos durante el desarrollo de una aplicación así como tu capacidad de aplicar tus conocimientos.

## Instrucciones

- Utilizando React crea una vista/componente que permita visualizar los elementos en la base de datos y agregar nuevos de forma ordenada

## Diseño

[Excalidraw](https://excalidraw.com/#json=5gSXpnAlpZVXvfJk1evHG,hul_LqMQ_CVTwxq3cGP3Iw)

## Criterios de aceptación

### Frontend

- Utiliza Typescript y React (ya viene preconfigurado con Vite)
- Mostrar los datos en una tabla ordenados de la siguiente manera
- Primero las apps que no tienen dominios ordenadas alfabéticamente ascendente
- Después las apps que sí tienen dominios ordenadas por el primer registro en la lista de dominios, igualmente ordenadas alfabéticamente ascendente.
  Para este apartado se toma en cuenta solo el dominio, es decir ignorando el protocolo (http/https) y el www si lo contiene.
- La interfaz debe mostrar un campo de texto y un botón que permita registra nuevas apps, sin embargo las nuevas apps solo tendrán nombre y el campo de domains se pondrá como una lista vacía por defecto (domains: [])
- Cada que se agrega una nueva app debe agregarse de forma ordenada de acuerdo a las reglas descritas arriba.

## Datos

- El archivo apps-db.json contiene una lista de aplicaciones que consiste de la siguiente forma:

```type
type Application = {
  id: string;
  name: string;
  domains: string[];
};
```
