<template>
  <li class="menu-item-content" tabindex="-1" @click="handleClick">
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    onExecute: Function,
  },
  methods: {
    handleClick() {
      if (this.onExecute != null) {
        this.onExecute();
      }
    },
  },
};
</script>
