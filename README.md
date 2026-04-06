# Express Template

Plantilla base para proyectos Node.js + Express.

## Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Paquetes incluidos**: dotenv, cors, morgan, nodemon

## Estructura
src/
    ├── app.js                     # Entrada principal
    ├── routes/
    │   ├── index.js               # Router central
    │   └── example.routes.js      # Ejemplo de ruta
    ├── controllers/
    │   └── example.controller.js  # Ejemplo de controlador
    └── middlewares/
        ├── errorHandler.js        # Manejo de errores global
        └── notFound.js            # Rutas no encontradas (404)

## Inicio rápido
```bash
# 1. Instalar dependencias
npm install

# 2. Crear archivo de entorno
cp .env.example .env

# 3. Correr en desarrollo
npm run dev

# 4. Correr en producción
npm start
```

El servidor estará corriendo en `http://localhost:3000`.  
Prueba el endpoint de ejemplo en: `GET /api/example`

## Agregar una nueva ruta

1. Crear `src/controllers/nuevo.controller.js`
2. Crear `src/routes/nuevo.routes.js`
3. Registrarla en `src/routes/index.js`:
```js
const nuevaRuta = require("./nuevo.routes");
router.use("/nuevo", nuevaRuta);
```
