<template>
  <li class="todo-item" :class="isEditing ? 'editing' : ''">
    <div class="todo-content" @click="enterEditMode">
      <Icon :name="todo.completed ? 'check-square' : 'square'" @click.native="toggleComplete" />
      <p class="todo-item-name">{{ todo.name }}</p>
      <Icon name="trash-alt" @click.native="handleRemove" />
    </div>
    <input ref="inputRef" type="text" class="todo-item-input" v-model="value" @blur="handleBlur" />
  </li>
</template>
<script>
import Icon from '../../../components/common/Icon';
import { mapActions } from 'vuex';

export default {
  name: 'TodoItem',
  components: {
    Icon,
  },
  props: {
    todo: Object,
  },
  data() {
    return {
      isEditing: false,
      value: '',
    };
  },
  methods: {
    ...mapActions(['updateTodo', 'deleteTodo']),
    toggleComplete(evt) {
      evt.stopPropagation();
      this.updateTodo({ id: this.todo.id, completed: !this.todo.completed });
    },
    handleRemove(evt) {
      evt.stopPropagation();
      this.deleteTodo({ id: this.todo.id });
    },
    enterEditMode() {
      this.isEditing = true;
      this.value = this.todo.name;
      this.$nextTick(() => this.$refs['inputRef'].focus());
    },
    handleBlur() {
      this.updateTodo({ id: this.todo.id, name: this.value });
      this.isEditing = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.todo-item {
  position: relative;
  font-size: 18px;
  color: #333333;
}

.todo-content {
  .editing & {
    display: none;
  }
  display: flex;
  align-items: center;

  & > i {
    cursor: pointer;
  }
}

.todo-item-name {
  flex: 1;
  padding: 6px 4px;
  text-align: left;
  margin: 0;
}

.todo-item-input {
  display: none;
  height: 40px;
  width: 100%;
  box-sizing: border-box;

  .editing & {
    display: block;
  }
}
</style>
