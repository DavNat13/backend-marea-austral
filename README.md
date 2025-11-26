# Marea Austral - Backend API Service
<p align="left">
  <img src="https://img.shields.io/badge/estado-activo-success.svg" alt="Estado del proyecto">
  <img src="https://img.shields.io/badge/backend-Node.js-339933?style=flat&logo=nodedotjs" alt="Backend Node">
  <img src="https://img.shields.io/badge/database-MongoDB-47A248?style=flat&logo=mongodb" alt="DB Mongo">
  <img src="https://img.shields.io/badge/language-JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="Lenguaje JS">
</p>

Este repositorio contiene el **Servidor Backend** para la aplicación móvil "Marea Austral".

Su función principal es actuar como la "Fuente de la Verdad" en la nube, permitiendo la sincronización de datos (viajes, mantenimientos y usuarios) desde los dispositivos móviles para garantizar persistencia externa, gestión de roles y respaldo seguro de la información.

## ✨ Características Principales

- **API RESTful:** Arquitectura de microservicios organizada por dominios (Auth, Trips, Maintenance).
- **Gestión de Roles:** Sincronización con Firebase Auth para asignar y persistir roles de usuario (`capitan`, `tripulante`, `fiscalizador`, `invitado`) cumpliendo requisitos de negocio.
- **Base de Datos NoSQL:** Utiliza **MongoDB Atlas** para almacenar estructuras de datos complejas y flexibles, como las rutas GPS de los viajes (arrays de coordenadas).
- **Sincronización de Bitácora:** Recepción y almacenamiento de viajes náuticos con sus estadísticas (duración, distancia) y trazado geoespacial.
- **Gestión de Mantenimiento:** Operaciones CRUD completas para el registro de servicios mecánicos, vinculados unívocamente al `userId` del propietario.
- **Seguridad:** Manejo de variables de entorno (`dotenv`) para proteger credenciales de base de datos y configuración del puerto.

## 🚀 Stack Tecnológico
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,js,postman" />
  </a>
</p>

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework Web:** [Express.js](https://expressjs.com/) (Manejo de rutas y middleware)
- **Base de Datos:** [MongoDB Atlas](https://www.mongodb.com/atlas) (Cluster en la nube AWS)
- **ODM:** [Mongoose](https://mongoosejs.com/) (Modelado de datos)
- **Utilidades:**
    - `cors`: Gestión de acceso cruzado.
    - `dotenv`: Manejo de variables de entorno.
    - `nodemon`: Desarrollo ágil con reinicio automático.

## 📂 Estructura del Proyecto
El backend sigue el patrón MVC (Model-View-Controller) adaptado a API para mantener el código modular y escalable:

```yaml
backend-marea-austral/
├── 📂 src/
│   ├── 📂 config/
│   │   └── 📄 db.js              # Conexión a MongoDB Atlas
│   ├── 📂 controllers/           # Lógica de negocio (Qué hace el sistema)
│   │   ├── 📄 authController.js
│   │   ├── 📄 maintenanceController.js
│   │   └── 📄 tripController.js
│   ├── 📂 models/                # Esquemas de datos (Mongoose Schemas)
│   │   ├── 📄 User.js            # Roles y UID
│   │   ├── 📄 Trip.js            # Viajes y Coordenadas
│   │   └── 📄 MaintenanceLog.js  # Registros de servicio
│   ├── 📂 routes/                # Definición de Endpoints (URL)
│   │   ├── 📄 authRoutes.js
│   │   ├── 📄 maintenanceRoutes.js
│   │   └── 📄 tripRoutes.js
│   └── 📄 app.js                 # Punto de entrada del servidor
├── 📄 .env                       # Variables de entorno (NO SUBIR A GIT)
├── 📄 package.json
└── 📄 README.md
```

## 🔌 Documentación de Endpoints (API)

La API expone los siguientes recursos para el consumo de la aplicación móvil:

### 🔐 Autenticación & Usuarios
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `POST` | `/api/auth/sync` | Sincroniza el usuario de Firebase con MongoDB y devuelve su rol asignado. |

### ⚓ Bitácora de Viajes
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `POST` | `/api/trips` | Recibe un objeto `NetworkTrip` con la ruta GPS completa y estadísticas. |
| `GET` | `/api/trips/user/:userId` | Obtiene el historial de viajes de un usuario específico. |

### 🛠️ Mantenimiento
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `POST` | `/api/maintenance` | Crea un nuevo registro de mantenimiento. |
| `GET` | `/api/maintenance/user/:userId` | Lista los mantenimientos de un usuario. |
| `DELETE` | `/api/maintenance/:id` | Elimina un registro específico por su ID. |

## 📋 Prerrequisitos

Para ejecutar este servidor localmente, necesitas:

* Node.js (v16 o superior)
* npm (Gestor de paquetes)
* Una cuenta y cluster activo en MongoDB Atlas.

## ⚙️ Instalación y Despliegue Local

### 1. Clonar e Instalar
```bash
git clone [https://github.com/TU_USUARIO/backend-marea-austral.git](https://github.com/TU_USUARIO/backend-marea-austral.git)
cd backend-marea-austral
npm install
```

### 2. Configurar Variables de Entorno
Crea un archivo llamado `.env` en la raíz del proyecto y configura tu conexión:

```env
PORT=3000
# Reemplaza con tu cadena de conexión real de MongoDB Atlas
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/marea_austral_db
```
### 3. Ejecutar Servidor
Para desarrollo (con reinicio automático):

```bash
npx nodemon src/app.js
```

Para producción:

```bash
node src/app.js
```

Si todo es correcto, verás en la consola:

```bash
🚀 Servidor Marea Austral FULL corriendo en puerto 3000
🔥 MongoDB Conectado: Nube Atlas activa
```

Desarrollado por David Nahuelcar Tecas para la asignatura de Desarrollo de Aplicaciones Móviles - Duoc UC Puerto Montt.