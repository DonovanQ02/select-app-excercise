## Combobox con búsqueda

El siguiente ejercicio nos servirá para evaluar cómo resuelves problemas cotidianos durante el desarrollo de una aplicación así como tu capacidad de aplicar tus conocimiento.

## Instrucciones

- Utilizando React (el framework que mejor te parezca) crea un componente Select con búsqueda, una vez terminado pon las instrucciones de instalación y ejecución en un README, comprime el proyecto y envíalo por correo.

## Diseño

[Figma](https://www.figma.com/design/lepcYC6PO7wv5w5rNF0NEn/Ejercicio-Combobox-%F0%9F%9A%80?node-id=12-1318&t=q2Fv42dJ4z1vHghM-1)

## Criterios de aceptación

### Backend

- Utilizar TypeScript
- Utiliza los datos de apps-db.json
- Implementa en el API una ruta `GET` que reciba la petición y regrese los registros
- Implementa en el API una ruta `POST` que reciba una aplicación y la inserte en la lista de elementos
- Implementa en el API una ruta `DELETE` que reciba un id de aplicación y lo remueva de la lista

### Frontend

- Utiliza Typescript y React (ya viene preconfigurado con Vite)
- Debes cubrir los estados básicos de un componente de acuerdo al diseño
  - Focus, hover, active, etc.
- Ponle creatividad a tu diseño si deseas agregarle algo.
- Cuando el usuario escribe en el campo de texto debe buscar en la lista por los resultados más próximos en el campo de `name`.
- Seleccionar un elemento de la lista limpia el campo de texto y la lista así como también cierra la lista.
- Considera formas de limitar la cantidad de peticiones al servidor mientras el usuario está escribiendo.
- Muestra los íconos pertenecientes a cada aplicación (del json) en conjunto con su nombre y uno de sus dominios cuando se muestran en la lista, las imágenes están dentro del folder `icons` y utilizan el `application.id` como parte de su nombre.
- Solo se puede seleccionar un elemento a la vez, si se selecciona otro se reemplaza por el nuevo.

## Datos

- El archivo apps-db.json contiene una lista de aplicaciones que consiste de la siguiente forma:

```type
type Application = {
  id: string;
  name: string;
  domains: string[];
};
```

La búsqueda no debe ser sensible a mayúsculas/minúsculas.

## Créditos extra

### Back

- Hacer buen manejo de estados en las respuestas del API
- Middleware para manejo de errores
- Poder buscar por diferentes atributos del modelo

### Front

- Poder navegar entre las opciones de la lista con las teclas de arriba y abajo
- Poder seleccionar la opción con la tecla Enter
- Ordenar los resultados alfabéticamente
