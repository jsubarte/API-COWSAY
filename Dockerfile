# DESCARGA LA IMAGEN
FROM node:16.3.0

# SE CREA DIRECTORIO DE APLICACION
WORKDIR /API-COWSAY

# COPIA TODOS LOS ARCHIVOS PACKAGE
COPY package*.json ./

# COPIA TODOS LOS ARCHIVOS
COPY . .

# SE INSTALA NODE_MODULES
RUN npm install

# PUERTO USADO
EXPOSE 3000

# EJECUTA LA APLICACION
CMD ["node","src/index.js"]