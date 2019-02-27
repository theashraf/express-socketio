import auth from './auth'
import { chatEvent } from '../events'

export default io => {
	chatEvent.on('fileUploaded', data => {
		io.sockets.emit('fileMessage', {
			file: data.file,
			from: data.id
		})
	})
	auth(io)
}
