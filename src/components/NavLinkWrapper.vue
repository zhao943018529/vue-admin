<template>
  <NavLinkGroup
    v-if="data.children"
    :data="data"
    :isRoot="true"
    :prefix="prefix"
    :collapsed="collapsed"
  />
  <NavLink :prefix="prefix" :isSmall="collapsed" :data="data" v-else />
</template>
<script>
import NavLink from './NavLink';

export default {
  name: 'NavLinkWrapper',
  components: {
    NavLink,
  },
  props: {
    data: Object,
    prefix: String,
    collapsed: Boolean,
  },
};
</script>
