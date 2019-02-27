function getIdFromUrl() {
	const urlParams = new URLSearchParams(window.location.search)
	return urlParams.get('id')
}

function getFileExt(filename) {
	return filename.split('.').pop()
}

function clearTextBox() {
	document.getElementById('textBox').value = ''
}

function setStatus(status) {
	document.getElementById('status').innerText = status
}

function appendTextMsg(text, sender) {
	const msgContainer = document.getElementById('chat')
	msgContainer.innerHTML += '<p>' + sender + ': ' + text + '</p><br>'
}

function appendFileMsg(file, sender) {
	const msgContainer = document.getElementById('chat')

	if (['png', 'jpg', 'jpeg'].includes(getFileExt(file))) {
		msgContainer.innerHTML += '<p>' + sender + ': </p><img src=' + file + '>'
	} else if (['mp3', 'wav'].includes(getFileExt(file))) {
		msgContainer.innerHTML +=
			'<p>' + sender + ': </p><audio controls src=' + file + '></audio>'
	} else {
		msgContainer.innerHTML +=
			'<p>' + sender + ': </p><a href=' + file + '>' + file + '<a/>'
	}
}

function sendTextMsg(text) {
	socket.emit('textMessage', { text })
}

document.getElementById('form').addEventListener('submit', function(e) {
	e.preventDefault()
	const textMsg = document.getElementById('textBox').value

	if (textMsg !== '') {
		sendTextMsg(textMsg)
		appendTextMsg(textMsg, id)
		clearTextBox()
	}
})

let id = getIdFromUrl()
const socket = io('http://localhost:3000?' + (id ? 'id=' + id : ''))

socket.on('connect', () => {
	id = id || socket.id
	setStatus('online' + ', welcome:' + id)
})

socket.on('textMessage', function(data) {
	appendTextMsg(data.text, data.from)
})

socket.on('fileMessage', function(data) {
	console.log(data)
	appendFileMsg(data.file, data.from)
})

socket.on('disconnect', () => {
	setStatus('offline')
})

socket.on('reconnect_attempt', () => {
	setStatus('trying to reconnect...')
})

document.getElementById('file').addEventListener('change', function(e) {
	const file = this.files[0]
	const xhr = new XMLHttpRequest()

	xhr.onreadystatechange = function(e) {
		if (4 == this.readyState) {
			console.log('xhr upload complete')
			document.getElementById('file').value = ''
		}
	}
	xhr.open('post', 'http://localhost:3000/api/chat/file/upload', true)
	const formData = new FormData()
	formData.append('file', file)
	formData.append('id', id)
	xhr.send(formData)
})
