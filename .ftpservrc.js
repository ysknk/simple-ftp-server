import path from 'path'

export default {
  port: 10021,
  root: path.join(process.cwd(), '/test/'),
  host: {
    name: '127.0.0.1',
    cwd: '/',
    // options: {
    //   pasvPortRangeStart: 1025,
    //   pasvPortRangeEnd: 1050,
    //   tlsOptions: null,
    //   allowUnauthorizedTls: true,
    // }
  }
}
