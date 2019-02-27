import bodyParser from './bodyParser'
import hbs from './hbs'
import logger from './logger'
import errorHandler from './errorHandler'
import security from './security'
import views from './views'
import api from '../api'
import fileUpload from './fileUpload'

export default app => {
	security(app)
	logger(app)
	bodyParser(app)
	hbs(app)
	views(app)
	fileUpload(app)
	api(app)
	errorHandler(app)
}
