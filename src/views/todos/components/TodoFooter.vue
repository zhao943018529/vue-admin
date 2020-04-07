<template>
  <div>
    <ul class="todo-footer">
      <NavLink name="All" path="/" />
      <NavLink name="Todo" path="/todo" />
      <NavLink name="Completed" path="/completed" />
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
};
</script>

<style lang="scss" scoped>
.todo-footer {
}
</style>
