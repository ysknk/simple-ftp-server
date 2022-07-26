#!/usr/bin/env node

'use strict'

/* @author ysknk */

import ftpd from 'ftpd'
import fs from 'fs'
import utils from 'node-package-utilities'

import {
  port,
  root,
  host
} from './lib/arguments.js'

const options = {
  pasvPortRangeStart: 1025,
  pasvPortRangeEnd: 1050,
  tlsOptions: null,
  allowUnauthorizedTls: true,
}

const mergeOptions = host.options
  ? Object.assign({}, options, host.options)
  : options

const server = new ftpd.FtpServer(host.name, {
  getInitialCwd: function() {
    return host.cwd
  },
  getRoot: function() {
    return root
  },
  ...mergeOptions
})

server.on('error', function(error) {
  utils.message.failure(`FTP Server: ${error}`, {ptime: false})
})

server.on('client:connected', function(connection) {
  let username = null
  // user
  connection.on('command:user', function(user, success, failure) {
    if (user) {
      username = user
      success()
    } else {
      failure()
    }
  })
  // pass
  connection.on('command:pass', function(pass, success, failure) {
    if (pass) {
      success(username)
    } else {
      failure()
    }
  })
})

// server.debugging = 0

server.listen(port)
utils.message.success(`Listening on port ${port}`, {ptime: false})
