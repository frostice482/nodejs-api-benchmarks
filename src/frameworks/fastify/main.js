import fastify from 'fastify'
import db from '../../common/db'
import { stats } from '../../common/stats'
import { log } from '../../common/util'

const app = fastify()
let listentime = 0

app.get('/users', async req => {
	const limit = Number(req.query.limit || '10')
	return db.user.findMany({ take: limit })
})

app.post('/users', async req => {
	await db.user.createMany({ data: req.body })
	return ''
})

app.get('/check', () => '')

app.get('/performance', () => stats(listentime))

app.listen({
	port: Number(process.env.PORT),
	host: '0.0.0.0'
}, () => {
	listentime = performance.now()
	log(listentime, 'Fastify', 'Listening on port', process.env.PORT)
})