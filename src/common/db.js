import { PrismaMariaDb } from "@prisma/adapter-mariadb"
import { PrismaClient } from "../prisma/client"
import assert from "assert"
import 'dotenv/config'

assert(process.env.DATABASE_HOST, 'DATABASE_HOST not defined')
assert(process.env.DATABASE_USER, 'DATABASE_USER not defined')
assert(process.env.DATABASE_PASSWORD, 'DATABASE_PASSWORD not defined')
assert(process.env.DATABASE_NAME, 'DATABASE_NAME not defined')

const adapter = new PrismaMariaDb({
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : undefined,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME
})

const db = new PrismaClient({ adapter: adapter })
await db.$connect()

export const dbconntime = performance.now()
console.log(`Connected to database (in ${dbconntime.toFixed(1)}ms)`)

export default db