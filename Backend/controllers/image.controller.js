// image.controller.js

import { config } from 'dotenv';
import cloudinary from 'cloudinary';
import Image from '../models/image.schema.js';

config();

async function uploadImage(req, res) {
    try {
        const { originalname, mimetype, size, buffer } = req.file;

        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                if (error) {
                    console.error(error);
                    reject('Error uploading image to Cloudinary');
                } else {
                    resolve(result);
                }
            }).end(buffer);
        });

        const image = new Image({
            filename: originalname,
            originalname,
            mimetype,
            size,
            cloudinaryId: result.public_id,
        });

        await image.save();

        res.status(200).json({
            success: true,
            message: 'Image uploaded successfully',
            imageId: image._id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default uploadImage;
