console.log(process.cwd());

const algorithm = require('../starAlgorithm');
// const answers = require('.../questions');
const answers = require('../../../src/questions');
// test failure criteria
test('do not know interest rate, expect 1', () => {
  expect(algorithm.calculateStars(answers)).toBe(1);
});



// two star

// three star

// four star

// five star