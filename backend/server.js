const express = require('express');
const multer = require('multer');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = 3000;

// Set up storage engine for multer (store files locally)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp for uniqueness
    }
});

const upload = multer({ storage: storage });

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send({ message: 'File uploaded successfully!', file: req.file });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
