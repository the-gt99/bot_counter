const express = require('express')
const bodyParser = require('body-parser')
const { Botact } = require('botact')
 
const app = express()
const bot = new Botact({
  confirmation: "d1527577",
  token: "af54bf0ee2a6051f81222b1058c88bbdb0ba217b9ecc399bd9c6c3af2f84dd0c1bd9b0a7b9a1af8388940"
})
 
// User wrote any message
bot.on((ctx) => {
  console.log('u mam')
  ctx.reply('What?')
})
 
// Parser request body
app.use(bodyParser.json())
 
// Bot's endpoint
app.post('/', bot.listen)
 
// Start listen on 3000
app.listen(process.env.PORT || 3000)