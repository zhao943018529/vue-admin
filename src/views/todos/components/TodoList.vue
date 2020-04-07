<template>
  <div class="todo-list">
    <ul class="todo-container">
      <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id" />
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
// import Icon from '../../../components/common/Icon';
import TodoItem from './TodoItem';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    type: Number,
  },
  computed: {
    ...mapState({
      todos: state => state.todos.todos,
    }),
  },
  mounted() {
    this.getTodos({ type: this.type });
  },
  methods: {
    ...mapActions(['getTodos', 'deleteTodos']),
  },
};
</script>
<style lang="scss" scoped></style>
