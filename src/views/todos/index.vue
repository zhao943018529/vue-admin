<template>
  <div class="page-todo">
    <AddTodo />
    <TodoList :type="type" />
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
  computed: {
    type() {
      return this.$route.params.type;
    },
  },
};
</script>
