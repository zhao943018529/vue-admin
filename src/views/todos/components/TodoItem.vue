<template>
  <li class="todo-item" :class="isEditing ? 'editing' : ''">
    <div class="todo-content" @click="enterEditMode">
      <Icon :name="todo.completed ? 'check-square' : 'square'" @click="toggleComplete" />
      <p class="todo-item-name">{{ todo.name }}</p>
      <Icon name="trash-alt" @click="handleRemove" />
    </div>
    <input type="text" class="todo-item-input" :value="value" @blur="handleBlur" />
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
      value: this.todo.name,
    };
  },
  methods: {
    ...mapActions(['updateTodo', 'deleteTodo']),
    toggleComplete() {
      this.updateTodo({ id: this.todo.id, completed: !this.todo.completed });
    },
    handleRemove() {
      this.delteTodo({ id: this.props.id });
    },
    enterEditMode() {
      this.isEditing = true;
      this.value = this.props.todo.name;
    },
    handleBlur() {
      this.isEditing = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.todo-item {
  position: relative;
  font-size: 18px;
}

.todo-content {
  .editting & {
    display: none;
  }
  display: flex;
  align-items: center;
}

.todo-item-name {
  flex: 1;
}

.todo-item-input {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 4px 6px;

  .editting & {
    display: block;
  }
}
</style>
