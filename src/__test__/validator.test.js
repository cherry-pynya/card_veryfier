import validator from '../js/validator';

const values = [
  ['VISA 1', '4539162064830912', true],
  ['VISA 2', '4764281447222641', true],
  ['VISA 3', '4485742806193062850', true],
  ['MasterCard 1', '5393621074554145', true],
  ['MasterCard 2', '5202911762461088', true],
  ['MasterCard 3', '5374211605104645', true],
  ['Maestro 1', '5018284644410838', true],
  ['Maestro 2', '5038257426095932', true],
  ['Maestro 3', '6763634154270383', true],
  ['American Express 1', '379625208942372', true],
  ['American Express 2', '375116665034386', true],
  ['American Express 3', '343105570238819', true],
  ['mir 1', '2201382000000013', true],
  ['false card 1', '2201399000000013', false],
  ['false card 2', '20000013', false],
  ['false card 3', '220130013', false],
  ['false card 4', '22013997666767000065645600013', false],
  ['false card 5', '220139900066666000013', false],
];

describe('testing', () => {
  test.each(values)('if %s is true?', (_, value, expected) => {
    const result = validator(value);
    expect(result).toBe(expected);
  });
});
