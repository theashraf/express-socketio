import Router from 'express-promise-router'
import { fileUpload } from '../../middlewares/fileUpload'
import { validateBody } from '../../middlewares/validation'
import { uploadFileSchema } from '../validationSchemas/chat'
import { uploadFile } from '../controllers/chat'

const router = Router()

router.post(
	'/file/upload',
	fileUpload.single('file'),
	validateBody(uploadFileSchema),
	uploadFile
)
export default router
