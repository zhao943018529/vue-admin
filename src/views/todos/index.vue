<template>
  <div class="page-todos">
    <AddTodo />
    <TodoList />
    <TodoFooter />
  </div>
</template>

<script>
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  name: 'TodoPage',
  components: {
    AddTodo,
    TodoList,
    TodoFooter,
  },
};
</script>

<style lang="scss" scoped>
.page-todos {
  width: 600px;
  margin: 0 auto;
}
</style>
