# Ejercicio de evalucación final - módulo 2 - Marta García del Río

Ejercicio para evaluar los conocimientos adquiridos de JavaScript durante el módulo 2 de Adalab.

http://beta.adalab.es/m2-evaluacion-final-martagrio/

## Sobre el proyecto

Página web para buscar series y poder guardarlas como favoritas. Obtiene el nombre y la imagen
sacados de un API gratuita, a la que se conecta a través y obtiene los datos con JavaScript.

## Funcionalidad

La página dispone de un input de texto dónde introducir la serie a buscar, y con el valor de ese input, añadirlo a la URL de la API y realizar un fetch para poder acceder al objeto con los datos
deseados, nombre y fotografía. Se guarda el ID para poder posteriormente diferenciar el contenido
y evitar duplicados.

Dispone de una función que permite seleccionar y marcar/desmarcar como favoritas las series, indicándolas en la sección de la izquierda donde se muestran los marcados como favoritos.

De ahí se guarda con localStoraga de forma local, para que cuando se refresque la web o se realice una nueva búsqueda, se sigan viendo los favoritos indicados anterior.

## Téconologias usadas

- HTML5
- CSS3
- JavaScript ES6



