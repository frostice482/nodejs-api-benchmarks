import { PrismaMariaDb } from "@prisma/adapter-mariadb"
import { PrismaClient } from "../prisma/client"
import assert from "assert"
import { log } from "./util"

assert(process.env.DATABASE_HOST, 'DATABASE_HOST not defined')
assert(process.env.DATABASE_USER, 'DATABASE_USER not defined')
assert(process.env.DATABASE_PASSWORD, 'DATABASE_PASSWORD not defined')
assert(process.env.DATABASE_NAME, 'DATABASE_NAME not defined')

const adapter = new PrismaMariaDb({
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : undefined,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,

	connectionLimit: Number(process.env.DB_CONN_LIMIT || '100')
})

const db = new PrismaClient({ adapter: adapter })
log(0, 'Prisma', 'Connecting')
await db.$connect()

export const dbconntime = performance.now()
log(dbconntime, 'Prisma', 'Connected')

export default db