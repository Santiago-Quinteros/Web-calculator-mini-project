# Usa una imagen base de Nginx
FROM nginx:alpine

# Copia tus archivos al directorio de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# El comando por defecto ya ejecuta Nginx, no es necesario cambiarlo
