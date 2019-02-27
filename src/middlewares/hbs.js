import express from 'express'
import path from 'path'
import hbs from 'hbs'

export default app => {
	app.use(express.static(path.join(__dirname, '../views/assets')))

	app.set('view engine', 'hbs')
	app.set('views', path.join(__dirname, '../views'))
}
