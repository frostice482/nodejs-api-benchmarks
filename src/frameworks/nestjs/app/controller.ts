import { Controller, Get } from "@nestjs/common";
import { stats } from "../../../common/stats";

@Controller()
export default class AppController {
	@Get('/performance')
	async getPerformanceStats() {
		const { listentimeref: { time: startup } } = await import('../main')
		return stats(startup)
	}
}