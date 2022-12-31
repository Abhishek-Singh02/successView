const router = require("express").Router();
const upload = require("../utils/multer");
const { postMagazine, getAllMagazines, postBlog, getAllBlogs, getBlogByID, getMagazineByID, getAllNews, postNews, getNewsByID } = require("../controllers")

router.route("/magazines").get(getAllMagazines).post(upload.single("image"), postMagazine);
router.route("/blogs").get(getAllBlogs).post(upload.single("image"), postBlog)
router.route("/news").get(getAllNews).post(upload.single("image"), postNews)
router.get("/news/:id", getNewsByID)
router.get("/blogs/:id", getBlogByID)
router.get("/magazines/:id", getMagazineByID)
module.exports = router;