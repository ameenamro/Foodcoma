// image.routes.js

import express from 'express';
import upload from '../utils/multer.js';
import imageController from '../controllers/image.controller.js';

const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
    try {
        const imageUploaded = imageController.uploadImage(req, res);
        res.status(200).json({
            message: 'success',
            data: imageUploaded,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
