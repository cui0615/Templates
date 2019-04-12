<template>
  <div class="home">
    <router-link to='/'>首页</router-link> |
    <router-link to='/demo'>demo</router-link>
    <router-view />
    <h1>This is an home page</h1>
    <button @click="clickHandle">调用mixins中的方法</button>
  </div>
</template>

<script>
import Mixin from '../mixins';

export default {
  mixins: [Mixin('HOME_PAGE')],
  name: 'home',
  components: {
  },
  methods: {
    clickHandle() {
      this.setTitleHandle('Kira');
    },
  },
};
</script>
