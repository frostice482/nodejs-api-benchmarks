import { dbconntime } from "./db";

export function stats(listentime) {
	return {
		resource: process.resourceUsage(),
		mem: process.memoryUsage(),
		startup: listentime,
		dbconn: dbconntime
	}
}