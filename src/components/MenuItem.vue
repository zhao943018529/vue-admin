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
    getMenu: Function,
  },
  methods: {
    handleClick() {
      if (this.onExecute != null) {
        this.onExecute();
        if (this.getMenu != null) {
          // const menu = this.getMenu();
        }
      }
    },
  },
};
</script>
