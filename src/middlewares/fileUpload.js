import express from 'express'
import path from 'path'
import fs from 'fs'
import multer from 'multer'

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, path.join(__dirname, '../../uploads'))
	},
	filename: function(req, file, cb) {
		const fileExtension = file.originalname.split('.')[1]
		cb(null, Date.now() + '.' + fileExtension)
	}
})

const checkDirectorySync = directory => {
	try {
		fs.statSync(directory)
	} catch (e) {
		fs.mkdirSync(directory)
	}
}

export const fileUpload = multer({
	storage
})

export default app => {
	checkDirectorySync(path.join(__dirname, '../../uploads'))
	app.use('/uploads', express.static(path.join(__dirname, '../../uploads')))
}
