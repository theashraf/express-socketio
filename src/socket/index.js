import socketIo from 'socket.io'
import middlewares from './middlewares'
import handlers from './handlers'

export default server => {
	const io = socketIo(server)
	middlewares(io)
	handlers(io)
}
