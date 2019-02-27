import { chatEvent } from '../../socket/events'
import logger from '../../modules/logger'
import appConfig from '../../config'

export const uploadFile = (req, res) => {
	const {
		file,
		body: { id }
	} = req

	if (!file) throw new Error('invalid file')

	logger.info('uploading new file')

	chatEvent.emit('fileUploaded', {
		file: appConfig.serverUrl + '/uploads/' + file.filename,
		id
	})
	res.json({ result: 'done' })
}
