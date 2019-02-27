import app from './app'
import { createServer } from 'http'
import socket from './socket'
import appConfig from './config'

const server = createServer(app)
socket(server)

server.listen(appConfig.port, () =>
	console.log(`server is running on port ${appConfig.port}`)
)
