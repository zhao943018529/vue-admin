<template>
  <router-link :to="path" v-slot="{ href, route, navigate, isActive }">
    <li class="nav-link" :class="isActive ? 'active' : ''">
      <a :href="href" @click="navigate"> {{ name }}</a>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    path: String,
    name: String,
  },
};
</script>
<style lang="scss" scoped>
.nav-link {
  &.active {
    color: red;
  }
}
</style>
