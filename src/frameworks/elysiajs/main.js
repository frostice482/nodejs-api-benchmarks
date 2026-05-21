import Elysia from "elysia";
import db from "../../common/db";
import { stats } from "../../common/stats";
import { log } from "../../common/util";

const app = new Elysia()
let listentime = 0

app.get('/users', async req => {
	const limit = Number(req.query.limit || '10')
	return db.user.findMany({ take: limit })
})

app.post('/users', async req => {
	await db.user.createMany({ data: req.body })
	return ''
})

app.get('/check', '')

app.get('/performance', () => stats(listentime))

app.listen(process.env.PORT, () => {
	listentime = performance.now()
	log(listentime, 'ElysiaJS', 'Listening on port', process.env.PORT)
})