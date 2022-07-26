import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import utils from 'node-package-utilities'

export const packageName = 'ftpserv'

export const config = await utils.value.fromConfig(packageName)

const argv = yargs(hideBin(process.argv))
  .config(config || {})
  .option('port', {
    alias: 'p',
    describe: 'ftp port number',
    default: 10021,
    demandOption: true,
  })
  .option('root', {
    alias: 'r',
    describe: 'target root',
    default: '/Users/',
    demandOption: true,
  })
  .option('host.name', {
    alias: 'hname',
    describe: 'host name',
    default: '127.0.0.1',
    // demandOption: true,
  })
  .option('host.cwd', {
    alias: 'hcwd',
    describe: 'host cwd',
    default: '/',
    // demandOption: true,
  })
  .option('host.options', {
    alias: 'hopts',
    describe: 'host options',
    default: '',
  })
  .argv

export const port = argv.port
export const root = argv.root
export const host = argv.host

