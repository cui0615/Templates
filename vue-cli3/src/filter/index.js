import Vue from 'vue';

/**
 * @name custom-filter
 * @description 自动加载 filters 目录下的 .js 结尾的文件
 * @description filters文件夹下的每个js文件只能包含一种过滤器，函数名就是过滤器的名字
 */
const filters = require.context('./filters', true, /\.js$/);

filters.keys(filters).forEach((key) => {
  const filterConfig = filters(key);
  const ctrl = filterConfig.default || filterConfig;

  Vue.filter(ctrl.name, ctrl);
});
