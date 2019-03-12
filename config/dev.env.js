'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API:'"http://localhost:8080"',
  bigImage: 'http://39.108.53.107:9098/'
})
