export default io => {
	io.use((socket, next) => {
		const { id } = socket.handshake.query
		socket.id = id || socket.id
		next()
	})
}
