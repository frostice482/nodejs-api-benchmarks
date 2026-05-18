import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import UserProvider from './provider';
import type { UserCreateManyInput } from '../../../prisma/models';

@Controller()
export default class UserController {
	constructor(private svc: UserProvider) {}

	@Get('/users')
	async getUsers(@Query('limit') limit?: number) {
		console.log(limit)
		return this.svc.getUsers(limit)
	}

	@Post('/users')
	async addUsers(@Body() users: UserCreateManyInput[]) {
		await this.svc.addUsers(users)
	}
}