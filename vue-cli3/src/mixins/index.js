

export default rightType => ({ // rightType作为参数传入，返回特定mixin
  data() {
    return {
      router: {
        PayMethod: {
          path: 'closeWindow',
          title: '蛋品来点',
        },
        GiftCard: {
          path: '/eggcard/paymethod',
          title: '蛋品来点',
        },
      },
    };
  },
  mounted() {
    console.log('rightType===', rightType);
    console.log('data===', this.router);
  },
  methods: {
    // 设置头部信息
    setTitleHandle(title) {
      console.log('title:', title);
    },
  },
  computed: {
    hasRight() { // 判断用户是否有权限进入本页面的计算属性
      // 这里的user是之前在app中通过接口返回注入store的用户信息
      const { rightList } = this.$store.state.user;
      return rightList.indexOf(rightType); // 问题解决，美滋滋
    },
  },

});
