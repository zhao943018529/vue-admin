<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      <i class="fab fa-affiliatetheme" />
    </div>
    <router-view />
  </div>
</template>
<script>
import { fetcher } from './utils/fetch';

export default {
  name: 'App',
  data() {
    return {
      value: '',
    };
  },
  created() {
    fetcher.get('/test/json').then(value => (this.value = value));
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a3c4e6;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
