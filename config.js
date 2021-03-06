'use strict'

const _ = require('lodash')
const Confidence = require('confidence')
const ToBoolean = require('to-boolean')
const env = require('dotenv').config()

const config = {
    $meta: 'This file defines all configuration for project.',
    projectName: 'hello-bot',
    app: {
      host: process.env.APP_HOST || 'localhost',
      port: process.env.APP_PORT || 3500
    },
    fbMessenger: {
      token: process.env.VERIFY_TOKEN || 'h3ll0-Bot',
      accessToken: process.env.PAGE_ACCESS_TOKEN,
      apiMessages: process.env.FB_API_MESSAGE || 'https://graph.facebook.com/v2.6/me/messages',
      apiUrl:  process.env.FB_API_URL || 'https://graph.facebook.com/v2.6'
    },
    logger: {
        options: {
            console: ToBoolean(_.defaultTo(process.env.LOGGER_DEBUG, true))
        }
    }
}

const store = new Confidence.Store(config)
const criteria = {
  env: process.env.APP_ENV
}

module.exports = {
  get: key => store.get(key, criteria),
  meta: key => store.meta(key, criteria)
}
