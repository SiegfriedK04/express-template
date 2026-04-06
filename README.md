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

Cada ruta sigue este flujo: **controller → route → registro en index**.

**1. Crear el controller** en `src/controllers/nuevo.controller.js`
```js
const getNuevo = (req, res) => {
  res.json({ message: "Respuesta de la nueva ruta" });
};

module.exports = { getNuevo };
```

**2. Crear el archivo de rutas** en `src/routes/nuevo.routes.js`
```js
const { Router } = require("express");
const { getNuevo } = require("../controllers/nuevo.controller");

const router = Router();

router.get("/", getNuevo);

module.exports = router;
```

**3. Registrarla** en `src/routes/index.js`
```js
const nuevaRuta = require("./nuevo.routes");
router.use("/nuevo", nuevaRuta);
```

El endpoint quedará disponible en: `GET /api/nuevo`
