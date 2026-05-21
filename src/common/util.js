/**
 * @param {number} time
 * @param {string} name
 * @param  {...any} str
 */
export function log(time, name, ...str) {
	time ||= performance.now()
	console.log(`[${time.toFixed(1).padStart(6)}] [${name}]`, ...str)
}