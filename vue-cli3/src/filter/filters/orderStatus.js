// 订单状态
const orderStatus = (status) => {
  // CLOSED(0, "已关闭"), WAIT(1, "待支付"), PAID(2, "待发货"), DELIVERED(3, "待收货"), FINISH(4, "交易完成");
  let statusText = '';
  switch (status) {
    case 'CLOSED':
      statusText = '已关闭';
      break;
    case 'WAIT':
      statusText = '待支付';
      break;
    case 'PAID':
      statusText = '待发货';
      break;
    case 'DELIVERED':
      statusText = '待收货';
      break;
    case 'FINISH':
      statusText = '交易完成';
      break;
    default:
      break;
  }
  return statusText;
};

export default orderStatus;
