<template>
  <div class="sidebar-container">
    <ul class="sidebar-content">
      <NavLinkGroup :data="routeObject" :collapse="true" />
    </ul>
  </div>
</template>
<script>
import NavLinkGroup from './NavLinkGroup';

export default {
  name: 'SideBar',
  components: {
    NavLinkGroup,
  },
  data() {
    return {
      routeObject: {
        path: '/todos',
        name: 'Todos',
        iconName: 'clipboard-list',
        children: [
          {
            path: '/0',
            name: 'All',
          },
          { path: '/1', name: 'Todo' },
          { path: '/2', name: 'Completed' },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.sidebar-content {
  max-width: 120px;
}
</style>
