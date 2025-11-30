# Marea Austral - Backend API Service

<p align="left">
  <img src="https://img.shields.io/badge/status-active-success.svg" alt="Estado">
  <img src="https://img.shields.io/badge/backend-Node.js-339933?style=flat&logo=nodedotjs" alt="Node.js">
  <img src="https://img.shields.io/badge/database-MongoDB-47A248?style=flat&logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/cloud-Render-46E3B7?style=flat&logo=render" alt="Render">
</p>

Este repositorio contiene el **Servidor Backend** y la API RESTful para la aplicación móvil "Marea Austral".

Actúa como la fuente de verdad en la nube, gestionando la sincronización de datos bidireccional, la persistencia de rutas GPS complejas y la administración de roles de usuario.

## 📡 Base URL (Despliegue)
El servicio se encuentra desplegado y activo en **Render**:
> **`https://backend-marea-austral.onrender.com/`**

## ✨ Características Técnicas

* **Arquitectura REST:** Endpoints organizados por recursos (`auth`, `trips`, `maintenance`).
* **Persistencia NoSQL:** Uso de **MongoDB Atlas** para almacenar documentos flexibles (como arrays de coordenadas GPS).
* **Gestión de Roles:** Lógica de negocio para asignar y verificar roles (`capitan`, `navegante`) sincronizados con Firebase Auth.
* **Sincronización Híbrida:** Diseñado para soportar la arquitectura *Offline-First* de la app móvil, permitiendo subida (POST) y descarga (GET) de historiales.

## 🛠️ Stack Tecnológico

* **Runtime:** Node.js (v18+)
* **Framework:** Express.js
* **Base de Datos:** MongoDB (Mongoose ODM)
* **Seguridad:** Helmet & Cors
* **Logs:** Morgan

## 🔌 Documentación de Endpoints (API)

### 1. Autenticación y Usuarios (`/api/auth`)
Gestiona la identidad y roles de los usuarios.

| Método | Endpoint | Descripción | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `POST` | `/sync` | Sincroniza usuario Firebase y devuelve su rol. | `{ "firebaseUid": "...", "email": "..." }` |

### 2. Bitácora de Viajes (`/api/trips`)
Manejo de datos geoespaciales y estadísticas de navegación.

| Método | Endpoint | Descripción | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `POST` | `/` | Guarda un nuevo viaje con su ruta GPS. | `{ "userId": "...", "routeCoordinates": [...], ... }` |
| `GET` | `/user/:userId` | Obtiene el historial de viajes de un usuario. | N/A |

### 3. Mantenimiento (`/api/maintenance`)
Registro de servicios y costos de la embarcación.

| Método | Endpoint | Descripción | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `POST` | `/` | Registra un nuevo mantenimiento. | `{ "description": "...", "cost": 50000, ... }` |
| `GET` | `/user/:userId` | Obtiene el historial de mantenimientos. | N/A |

## 📦 Estructura del Proyecto
<details>
<summary>Haz clic para expandir la estructura de archivos</summary>
```text
backend-marea-austral/
├── src/
│   ├── config/         # Conexión a BD (Mongoose)
│   ├── controllers/    # Lógica de los microservicios
│   ├── models/         # Esquemas de datos (Schemas)
│   ├── routes/         # Definición de rutas API
│   └── app.js          # Entry point
├── .env                # Variables de entorno (Ignorado)
└── package.json        # Dependencias
```
</details>

## 🚀 Instalación y Ejecución Local

Si deseas correr este servidor en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/DavNat13/backend-marea-austral.git](https://github.com/DavNat13/backend-marea-austral.git)
    cd backend-marea-austral
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz y agrega tu cadena de conexión:
    ```env
    PORT=3000
    MONGO_URI=tu_cadena_de_mongodb_atlas
    ```

4.  **Ejecutar:**
    ```bash
    npm start
    # O para desarrollo:
    npm run dev
    ```

---
**Desarrollado por:** David Nahuelcar Tecas
**Asignatura:** Desarrollo de Aplicaciones Móviles - Duoc UC Puerto Montt