# We use alpine for a lightweight (less memory) image
FROM node:16-alpine 

# Copy the files that declares the dependencies (in this case using yarn)
# COPY package.json ./
COPY ./package.json /

# Instalamos las dependencias de la aplicación
RUN npm install

# Copiamos los archivos de la aplicación al contenedor
COPY . .

# Run command to start the process runing a shell command using node
CMD ["npm", "start"]


# This is for documentation only, the port muyst be exposed manually or in compose definition.
EXPOSE 80
