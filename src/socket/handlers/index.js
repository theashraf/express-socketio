import chat from './chat'

export default io => {
	io.on('connection', socket => {
		chat(socket)
	})
}
