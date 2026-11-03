# Backend API REST con Autenticación JWT

API de backend desarrollada en Node.js y Express que implementa un sistema de autenticación basado en JSON Web Tokens (JWT) y un CRUD de tareas protegido donde cada usuario administra exclusivamente sus propios registros.

## Requisitos previos
* **Node.js**: Entorno de ejecución para JavaScript.
* **Express (`^5.2.1`)**: Framework web para la creación de la API REST.
* **Mongoose (`^9.10.4`)**: Modelado de datos para la base de datos de MongoDB.
* **jsonwebtoken (`^9.0.3`)**: Generación y verificación de Tokens JWT para autenticar rutas protegidas.
* **bcrypt (`^6.0.0`)**: Encriptación y hashing seguro de contraseñas.
* **dotenv (`^18.0.5`)**: Manejo de variables de entorno locales desde un archivo `.env`.
* **express-async-handler (`^1.2.0`)**: Manejo simplificado de excepciones en funciones asíncronas de Express.
* **colors (`^1.4.0`)**: Formato de colores en la consola.
* **nodemon (`^1.19.4`)**: Herramienta de desarrollo para reinicio automático del servidor al detectar cambios.

* **Node.js** instalado en la computadora.
* Una instancia de **MongoDB** (local o MongoDB Atlas).

## 📦 Instalación

1. Clona este repositorio o descarga los archivos del proyecto.
2. Instala las dependencias listadas en el `package.json` ejecutando:
   ```bash
   npm install
