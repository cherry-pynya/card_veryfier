import systemCheck from '../js/sytemCheck';

const values = [
  ['VISA 1', '4539162064830912', 'visa'],
  ['VISA 2', '4764281447222641', 'visa'],
  ['VISA 3', '4485742806193062850', 'visa'],
  ['MasterCard 1', '5393621074554145', 'mastercard'],
  ['MasterCard 2', '5202911762461088', 'mastercard'],
  ['MasterCard 3', '5374211605104645', 'mastercard'],
  ['Maestro 1', '5018284644410838', 'maestro'],
  ['Maestro 2', '5038257426095932', 'maestro'],
  ['Maestro 3', '6763634154270383', 'maestro'],
  ['American Express 1', '379625208942372', 'americaExpress'],
  ['American Express 2', '375116665034386', 'americaExpress'],
  ['American Express 3', '343105570238819', 'americaExpress'],
  ['mir 1', '2201382000000013', 'mir'],
  ['unionpay 1', '6201382000000013', 'unionPay'],
  ['false card 1', '1201399000000013', undefined],
  ['false card 2', '00000013', undefined],
  ['false card 3', '920130013', undefined],
  ['false card 4', '82013997666767000065645600013', undefined],
  ['false card 5', '020139900066666000013', undefined],
];

describe('testing', () => {
  test.each(values)('if %s identified?', (_, value, expected) => {
    const result = systemCheck(value);
    expect(result).toBe(expected);
  });
});
