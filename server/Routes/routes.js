const router = require("express").Router();
const upload = require("../utils/multer");
const { postMagazine, getAllMagazines, postBlog, getAllBlogs } = require("../controllers")

router.get("/magazines", getAllMagazines);
router.post("/magazines", upload.single("image"), postMagazine);
router.get("/blogs", getAllBlogs);
router.post("/blogs", upload.single("image"), postBlog);
module.exports = router;