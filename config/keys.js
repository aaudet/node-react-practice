// key.js, figure out the set of credentials to return
if (process.env.NODE_ENV == 'production') {
  //we're in production baby
  module.exports = require('./prod');
} else {
  //we're not in production baby
  module.exports = require('./dev');
}
// lecture 48-49 10:34
