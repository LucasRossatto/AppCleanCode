const { Router } = require("express");
const userRoutes = require("../routers/userRoutes");
const adminRoutes = require("../routers/adminRoutes");
const router = Router();

router.use("/user", userRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
