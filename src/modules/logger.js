import { createLogger, format, transports } from 'winston'
import appConfig from '../config'

const logger = createLogger({
	level: appConfig.logLevel,
	format: format.combine(format.timestamp(), format.json()),
	transports: [
		new transports.File({ filename: 'error.log', level: 'error' }),
		new transports.Console()
	]
})

export default logger
