// implement your server here
// require your posts router and connect it here
const express = require('express')

const postModelRouter = require('./posts/posts-router')
const server = express()

server.use(express.json())
server.use('/api/posts', postModelRouter)

module.exports = server

