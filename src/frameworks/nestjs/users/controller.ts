import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common'
import UserProvider from './provider';
import type { UserCreateManyInput } from '../../../prisma/models';

@Controller()
export default class UserController {
	constructor(private svc: UserProvider) {}

	@Get('/users')
	async getUsers(@Query('limit', ParseIntPipe) limit?: number) {
		return this.svc.getUsers(limit)
	}

	@Post('/users')
	async addUsers(@Body() users: UserCreateManyInput[]) {
		await this.svc.addUsers(users)
	}
}