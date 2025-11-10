const express = require("express");
const router = express.Router();
const { pool } = require("../config/db");
const { auth } = require("../middleware/auth");
const { adminOnly } = require("../middleware/adminOnly");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = Date.now() + ext;
    cb(null, name);
  }
});

const upload = multer({ storage });

// ✅ PUBLIC: Fetch all posts
router.get("/posts", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM posts ORDER BY created_at DESC");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ PUBLIC: Fetch single post by slug
router.get("/posts/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const [rows] = await pool.query("SELECT * FROM posts WHERE slug = ?", [slug]);

    if (rows.length === 0) {
      return res.status(404).json({ msg: "Post not found" });
    }

    const post = rows[0];
    res.json({
      ...post,
      body: post.content
    });
  } catch (err) {
    console.error("Error fetching post by slug:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ ADMIN: Add new post with media and publishedAt
router.post("/posts", auth, adminOnly, upload.single("media"), async (req, res) => {
  try {
    const { title, slug, body, publishedAt } = req.body;
    const published = req.body.published || 0;
    const media = req.file ? req.file.filename : null;

    if (!title || !slug || !body) {
      return res.status(400).json({ msg: "Missing fields" });
    }

    await pool.query(
      "INSERT INTO posts (title, slug, content, published, media, publishedAt) VALUES (?, ?, ?, ?, ?, ?)",
      [title, slug, body, published, media, publishedAt || null]
    );

    res.status(201).json({ msg: "Post added!", media });
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ ADMIN: Delete post by ID
router.delete("/posts/:id", auth, adminOnly, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM posts WHERE id = ?", [id]);
    res.json({ msg: "Post deleted!" });
  } catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ ADMIN: Update post with optional media
router.put("/posts/:id", auth, adminOnly, upload.single("media"), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, body, published } = req.body;
    const media = req.file ? req.file.filename : null;

    if (!title || !slug || !body) {
      return res.status(400).json({ msg: "Missing fields" });
    }

    let query = "UPDATE posts SET title = ?, slug = ?, content = ?, published = ?";
    let params = [title, slug, body, published];

    if (media) {
      query += ", media = ?";
      params.push(media);
    }

    query += " WHERE id = ?";
    params.push(id);

    await pool.query(query, params);

    res.json({ msg: "Post updated!" });
  } catch (err) {
    console.error("Error updating post:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ PUBLIC: Fetch all pages
router.get("/pages/all", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM pages ORDER BY created_at DESC");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching pages:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ PUBLIC: Fetch single page by slug
router.get("/pages/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const [rows] = await pool.query("SELECT * FROM pages WHERE slug = ?", [slug]);

    if (rows.length === 0) {
      return res.status(404).json({ msg: "Page not found" });
    }

    const page = rows[0];
    res.json({
      ...page,
      body: page.content
    });
  } catch (err) {
    console.error("Error fetching page by slug:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;