# Ejemplo Maria Visualización

En este trabajo, se van a leer los porcentajes de la tasa de actividad de la población de 16 años y más, en Euskadi y se van a graficar en un gráfico Combo Chart.

Los datos provienen de la hoja [Tasa de actividad de la población de 16 y más años de la C.A. de Euskadi, por trimestre, según edad y sexo (%).](http://www.eustat.eus/elementos/ele0011500/Tasa_de_actividad_de_la_poblacion_de_16_y_mas_anos_de_la_CA_de_Euskadi_por_trimestre_segun_edad_y_sexo__1/tbl0011534_c.html)

Se van a obtener con WebScraping mediante la función leerTASA() del [fichero JavaScript](../ESTADISTICA/leertasas.js)
Para ello abrir la consola (F12) de la lista tasa de actividad y pegar la definición de la función. Ejecutar a continuación la función y copiar el resultado (la consola de Google Chrome, inserta un botón Copy al final del listado de datos).

Los datos obtenidos se guardan como JSON en un fichero de nombre [obj.js](../ESTADISTICA/obj.js). Para poder usar directamente el array en una variable, añadir por delante de dicho array el texto: "obj="

Para visualizar los datos, se utiliza la librería de [Google Chart](https://developers.google.com/chart/) y el tipo de gráfico [Combo Chart](https://developers.google.com/chart/interactive/docs/gallery/combochart).
El resultado es el que se muestra en la página [visualizacion.html](../ESTADISTICA/visualizacion.html)

