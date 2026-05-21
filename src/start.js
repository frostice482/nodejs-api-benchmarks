import { log } from './common/util'

const fw = process.argv[2]
if (!fw) throw Error('Framework not specified')

log(0, 'Bootstrap', 'Initializing database')
await import('./common/db')
log(0, 'Bootstrap', 'Initializing framework')
await import(`./frameworks/${fw}/main.js`)
log(0, 'Bootstrap', 'Framework initialized')