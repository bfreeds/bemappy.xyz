import GhostContentAPI from '@tryghost/content-api'
require('dotenv').config()

const ghostClient = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v2'
})

export default ghostClient
