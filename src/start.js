const fw = process.argv[2]
if (!fw) throw Error('Framework not specified')

await import('./common/db')
await import(`./frameworks/${fw}/main.js`)