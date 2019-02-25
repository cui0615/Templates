// 支付方式
const getOriginText = (origin) => {
  // origin: WECHAT(1, "微信"), ALIPAY(2, "支付宝");
  let originText = '';
  switch (origin) {
    case 'WECHAT':
      originText = '微信';
      break;
    case 'ALIPAY':
      originText = '支付宝';
      break;
    default:
      break;
  }
  return originText;
};

export default getOriginText;
