export default app => {
	app.get('/', (req, res) => {
		res.render('home')
	})
	app.get('/chat', (req, res) => {
		res.render('chat')
	})
}
