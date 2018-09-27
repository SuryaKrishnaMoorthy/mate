const AssertionError = require('assert').AssertionError;
const chalk = require('chalk')

  let passing = 0;
  let failing = 0;

  const describe = (desc, cb) => {
    cb();
    console.log(`${chalk.green(`${passing} passing`)} , ${chalk.red(`${failing} failing`)}`);
  }

  const it = (desc, cb) => {
    try {
      cb();
      console.log(`${chalk.green(`\u{2713}`)} ${desc}\n`)
      passing++;
    } catch (e) {
      console.log(`${chalk.red(`\u{2717}`)} ${desc} \n AssertionError: ${e.message}\n `);
      failing++;
    }
  }

module.exports = {
  describe,
  it
}
