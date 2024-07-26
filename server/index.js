const express = require('express')
const cors = require('cors')
const config = require('./config')
const connection = require('./libraries/connect')
const app = express()
const {
  port,
  version,
  server
} = config
const authRoutes = require('./router/auth.routes')
const userRoutes = require('./router/user.routes')
const menuRoutes = require('./router/menu.routes')
const courseRoutes = require('./router/course.routes')
const postRoutes = require('./router/post.routes')
const newsletterRoutes = require('./router/newsletter.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// configure static folder
app.use(express.static('uploads'))
// configure header http - cors
app.use(cors())

// Routes
app.use(`/api/${version}`, authRoutes)
app.use(`/api/${version}`, userRoutes)
app.use(`/api/${version}`, menuRoutes)
app.use(`/api/${version}`, courseRoutes)
app.use(`/api/${version}`, postRoutes)
app.use(`/api/${version}`, newsletterRoutes)

app.listen(port, () => {
  console.log(`Server running at http://${server}:${port}/api/${version}`)
  connection()
})
