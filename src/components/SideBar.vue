<template>
  <div class="sidebar-container">
    <ul class="sidebar-content">
      <NavLinkWrapper :data="routeObject" :collapse="true" :isRoot="true" />
    </ul>
  </div>
</template>
<script>
import NavLinkWrapper from './NavLinkWrapper';

export default {
  name: 'SideBar',
  components: {
    NavLinkWrapper,
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
            children: [
              {
                path: '/0',
                name: 'All',
              },
              { path: '/1', name: 'Todo' },
              { path: '/2', name: 'Completed' },
            ],
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
  padding: 0;
}
</style>
