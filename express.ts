import dotenv from 'dotenv'
import express from 'express'
const app = express()
const sourceDir = 'dist'

dotenv.config()
const port = process.env.PORT ?? 3000

app.use(express.static(sourceDir))
app.listen(port, () => {
  console.log(`Web server started: http://localhost:${port}`)
})
