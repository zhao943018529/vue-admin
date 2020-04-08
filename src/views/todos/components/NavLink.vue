<template>
  <router-link :to="path" v-slot="{ href, route, navigate, isActive }">
    <li class="nav-link" :class="isActive ? 'active' : ''">
      <a class="link-a" :href="href" @click="navigate"> {{ name }}</a>
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
  display: inline-block;
  padding: 4px 6px;

  &.active {
    color: red;
  }
}

.link-a {
}
</style>
