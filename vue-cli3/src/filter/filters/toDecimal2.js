// 格式钱
const toDecimal2 = (x = 10) => {
  const f = parseFloat(x);

  if (Number.isNaN(f)) {
    return false;
  }

  const fn = Math.round(x * 100) / 10000;
  let s = fn.toString();
  let rs = s.indexOf('.');

  if (rs < 0) {
    rs = s.length;
    s += '.';
  }

  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
};

export default toDecimal2;
