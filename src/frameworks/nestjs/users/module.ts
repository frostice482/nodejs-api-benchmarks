import { Module } from "@nestjs/common";
import UserController from "./controller";
import UserProvider from "./provider";

@Module({
	controllers: [UserController],
	providers: [UserProvider],
	exports: [UserProvider]
})
export default class UserModule {}
