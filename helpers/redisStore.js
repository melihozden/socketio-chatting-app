const redis = require('redis')
const session = require('express-session')
const redisStore = require('connect-redis')(session)

let client = redis.createClient()

module.exports = new redisStore({
    client,
    host:process.env.REDIS_URI,
    port:process.env.REDIS_PORT,
    host:process.env.REDIS_PASS
});