import { Module } from "@nestjs/common";
import UserModule from "../users/module";
import AppController from "./controller";

@Module({
	controllers: [AppController],
	imports: [UserModule]
})
export default class App {}