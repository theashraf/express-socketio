import helmet from 'helmet'
import cors from 'cors'

export default app => {
	app.use(helmet())
	app.use(cors())
}
