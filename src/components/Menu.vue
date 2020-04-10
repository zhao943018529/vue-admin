<template>
  <div class="menu">
    <div class="menu-trigger"><Icon /></div>
  </div>
</template>
<script>
// import MenuList from './MenuList';
import Icon from './common/Icon';

export default {
  name: 'Menu',
  components: {
    Icon,
  },
  props: {
    prefixIcon: String,
    suffixIcon: String,
  },
};
</script>
