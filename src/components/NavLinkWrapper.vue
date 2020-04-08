<template>
  <NavLinkGroup
    v-if="data.children"
    :data="data"
    :isRoot="true"
    :prefix="prefix"
    :collapse="collapse"
  />
  <NavLink :prefix="prefix" :data="data" v-else />
</template>
<script>
import NavLink from './NavLink';
import NavLinkGroup from './NavLinkGroup';

export default {
  name: 'NavLinkWrapper',
  components: {
    NavLink,
    NavLinkGroup,
  },
  props: {
    data: Object,
    prefix: String,
    collapse: Boolean,
  },
};
</script>
