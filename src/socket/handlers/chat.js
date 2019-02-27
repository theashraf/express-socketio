import logger from '../../modules/logger'

const onConnection = socket => {
	logger.info('new connection with id: ' + socket.id)
}

const onTextMessage = socket => {
	socket.on('textMessage', data => {
		socket.broadcast.emit('textMessage', { text: data.text, from: socket.id })
	})
}

const onDisconnect = socket => {
	socket.on('disconnect', () => {
		logger.info('user disconnect with id: ' + socket.id)
	})
}

export default socket => {
	onConnection(socket)
	onTextMessage(socket)
	onDisconnect(socket)
}
