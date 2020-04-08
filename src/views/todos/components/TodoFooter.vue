<template>
  <div>
    <ul class="todo-footer">
      <NavLink name="All" :path="fullPath(0)" />
      <NavLink name="Todo" :path="fullPath(1)" />
      <NavLink name="Completed" :path="fullPath(2)" />
    </ul>
  </div>
</template>
<script>
import NavLink from './NavLink';

export default {
  name: 'TodoFooter',
  components: {
    NavLink,
  },
  methods: {
    fullPath(path) {
      const paths = this.$route.path.split('/');
      paths.pop();

      return `${paths.join('/')}/${path}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-footer {
}
</style>
