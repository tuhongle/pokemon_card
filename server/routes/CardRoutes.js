import express from "express"
import multer from 'multer'
import * as cardController from '../controllers/cardController.js'

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + '/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
    }
})

const upload = multer({storage})

router.get('/', cardController.fetchAllCards)

router.post('/', upload.single('image'), cardController.createCard)

router.get('/:id', cardController.fetchCardByID)

router.patch('/:id', cardController.updateCardByID)

router.delete('/:id', cardController.deleteCard)

export default router;