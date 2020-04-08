<template>
  <NavLink v-if="data.children" :data="data" />
  <NavLinkGroup :data="data" v-else />
</template>
<script>
import NavLink from './NavLink';
import NavLinkGroup from './NavLinkGroup';

export default {
  name: 'NavLinkWrapper',
  props: {
    data: Object,
  },
  components: {
    NavLink,
    NavLinkGroup,
  },
};
</script>
