<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      <Icon name="facebook" :brand="true" :size="32" color="blue" />
      <Icon name="angle-double-left" />
      <SideBar />
    </div> -->
    <router-view />
  </div>
</template>
<script>
import { request } from './utils/request';
// import Icon from './components/common/Icon';
// import SideBar from './components/SideBar';

export default {
  name: 'App',
  data() {
    return {
      value: '',
    };
  },
  created() {
    request.get('/test/json').then(value => (this.value = value));
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
  height: 100%;
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
