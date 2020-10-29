const substract = require('./substract');
const sum = require('./substract');

test('substract 1 - 2 to equal -1', () => {
  expect(substract(1, 2)).toBe(-1);
});