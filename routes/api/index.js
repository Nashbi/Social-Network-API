const router = require("express").Router();
const userRouting = require("./userRouting");
const thoughtRouting = require("./thoughtRouting");

router.use("/user", userRouting);
router.use("/thoughts", thoughtRouting);

module.exports = router;