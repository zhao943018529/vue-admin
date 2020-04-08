<template>
  <div class="todo-header">
    <form @submit="handleSubmit">
      <input type="text" v-model="value" placeholder="Todo" />
    </form>
  </div>
</template>

<script>
// import { request, jsonPost } from '../../../utils/request';

export default {
  name: 'AddTodo',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    handleSubmit(evt) {
      evt.preventDefault();
      this.$store
        .dispatch('addTodo', { name: this.value, completed: false, time: Date.now() })
        .then(() => (this.value = ''));
    },
  },
};
</script>
