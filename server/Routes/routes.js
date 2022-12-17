const router = require("express").Router();
const upload = require("../utils/multer");
const { postMagazine, getAllMagazines } = require("../controllers")

router.get("/magazines", getAllMagazines);
router.post("/magazines", upload.single("image"), postMagazine);
module.exports = router;