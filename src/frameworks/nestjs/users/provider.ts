import { Injectable } from "@nestjs/common";
import db from "../../../common/db";
import type { UserCreateManyInput } from "../../../prisma/models";

@Injectable()
export default class UserProvider {
	async getUsers(limit?: number) {
		return db.user.findMany({ take: limit })
	}

	async addUsers(users: UserCreateManyInput[]) {
		return db.user.createMany({ data: users })
	}
}
