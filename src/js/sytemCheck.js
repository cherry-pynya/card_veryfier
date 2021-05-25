export default function systemCheck(value) {
  // eslint-disable-next-line no-param-reassign
  value = value.replace(/\D/g, '');
  if (value[0] === '2') return 'mir';
  if (value[0] === '3' && (value[1] === '3' || value[1] === '7' || value[1] === '4')) return 'americaExpress';
  if (value[0] === '4') return 'visa';
  if (value[0] === '5' && (value[1] === '0' || value[1] === '6' || value[1] === '8' || value[1] === '7')) return 'maestro';
  if (value[0] === '6' && (value[1] === '3' || value[1] === '7')) return 'maestro';
  if (value[0] === '5' && (value[1] === '1' || value[1] === '2' || value[1] === '3' || value[1] === '4' || value[1] === '5')) return 'mastercard';
  if (value[0] === '6' && value[1] === '2') return 'unionPay';
  return undefined;
}
