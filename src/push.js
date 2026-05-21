import users from '../data.json'
import db from './common/db'

await db.user.createMany({
	data: users
})

await db.$disconnect()