<template>
  <div class="todo-list">
    <transition-group class="todo-container" tag="ul" name="todos">
      <TodoItem v-for="todo in todos" :todo="todo" v-bind:key="todo.id" />
    </transition-group>
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
  data() {
    return {
      type: parseInt(this.$route.params.type || 0),
    };
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
  watch: {
    $route(newVal) {
      this.type = parseInt(newVal.params.type || 0);
    },
    type(newVal) {
      this.getTodos({ type: newVal });
    },
  },
};
</script>
<style lang="scss" scoped>
.todo-list {
  // width: 600px;
  // margin: 0 auto;
}
</style>

<style lang="scss">
.todos-enter-active,
.todos-leave-active {
  transition: all 0.6s;
}

.todos-enter,
.todos-leave-to {
  transform: translate(-100%);
  opacity: 0;
}

.todos-move {
  transition: transform 1s;
}
</style>
