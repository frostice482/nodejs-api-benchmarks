import express from 'express'
import db from '../../common/db'
import { stats } from '../../common/stats'

const app = express()
let listentime = 0

app.get('/users', async (req, res, next) => {
	try {
		const limit = Number(req.query.limit || '10')
		res.json(await db.user.findMany({ take: limit }))
	} catch (e) {
		next(e)
	}
})

app.post('/users', express.json(), async (req, res, next) => {
	try {
		await db.user.createMany({ data: req.body })
		res.end()
	} catch(e) {
		next(e)
	}
})

app.post('/check', (req, res) => res.end())

app.get('/performance', (req, res) => res.json(stats(listentime)))

app.listen(process.env.PORT, err => {
	if (err) throw err
	listentime = performance.now()
	console.log(`[Fastify] Listening on port ${process.env.PORT} (in ${listentime.toFixed(1)}ms)`)
})
