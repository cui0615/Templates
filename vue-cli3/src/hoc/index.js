import NotLogin from './NotLogin.vue';

export default (Comp, login) => ({
  components: {
    Comp,
    NotLogin,
  },
  mounted() {
    console.log('login::::', login);
  },
  computed: {
  },
  render(h) {
    return login ? h(Comp, {}) : h(NotLogin, {});
  },
});
