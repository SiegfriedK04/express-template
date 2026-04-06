const { Router } = require("express");
const exampleRoutes = require("./example.routes");

const router = Router();

router.use("/example", exampleRoutes);

module.exports = router;