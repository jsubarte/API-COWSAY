#### Nota: La aplicación fue desarrollada con el IDE VSCode y Node 16.3.0 tomar en cuenta esto principalmente la version de Node

# Descripción

Esta aplicación es una API sencilla desarrollada en Nodejs, usando las librerías express y cowsay, en la cual seleccionamos una de las imágenes predefinidas que tiene la librería cowsay y le enviamos un mensaje. Como resultado nos devuelve la imagen con el mensaje ingresado. Al final de este documento dejo unas capturas de pantalla de esta.

# Instrucciones para usar en otro equipo
1. Clone el repositorio actual con la siguiente instrucción:

        git clone https://github.com/jsubarte/API-COWSAY.git

   o de clic al botón Code y luego en Download ZIP y descomprima en su directorio local.
2. Abra el terminal y diríjase al directorio raíz del proyecto que acaba de clonar o descargar.
3. Ejecute la siguiente instrucción:

        npm install

   Esto instalara todas las dependencias necesarias para la ejecución del proyecto.
4. Ejecute el proyecto con la siguiente instrucción:

        node src/index.js

   Esto iniciará el servidor y estará listo para usar la aplicación.
5. Abra su navegador ( Chrome / Mozilla ) y vaya a la dirección:

        http://localhost:3000 
 
    podrá ver la pantalla inicial de la aplicación.
6. Seleccione la figura que desea utilizar de la lista desplegable y escriba su mensaje, luego de esto de clic en el botón enviar.
7. Se le mostrara una nueva pantalla con la imagen seleccionada y el mensaje ingresado, para volver simplemente de clic en Regresar.

# Capturas de pantalla

### Pantalla de configuración

![Alt Pantalla1](https://github.com/jsubarte/API-COWSAY/blob/Docker/img-capturas/Docker1.png)

### Pantalla de salida

![Alt Pantalla2](https://github.com/jsubarte/API-COWSAY/blob/Docker/img-capturas/Docker2.png)