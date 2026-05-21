import { NestFactory } from '@nestjs/core';
import App from './app/module';

if (process.env.DEV) console.warn('Running in development mode')
export const listentimeref = { time: 0 }

const app = await NestFactory.create(App);

app.listen(process.env.PORT ?? 4000, () => {
	listentimeref.time = performance.now()
	console.log(`[NestJS] Listening on port ${process.env.PORT} (in ${listentimeref.time.toFixed(1)}ms)`)
})
