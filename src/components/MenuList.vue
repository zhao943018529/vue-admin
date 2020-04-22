<template>
  <ul class="menu-container" @mouseleave="this.handleMouseLeave" @keydown="handleKeyDown">
    <slot></slot>
  </ul>
</template>
<script>
// import * as _ from 'lodash';
import KeyCode from '../utils/KeyCode';

export default {
  name: 'MenuList',
  props: {
    collapse: Function,
    // deepContains: Function,
  },
  methods: {
    handleMouseLeave(evt) {
      // const relatedTarget = evt.relatedTarget;
      this.collapse(evt.relatedTarget);
    },
    contains(target) {
      return this.$el.contains(target);
    },
    handleKeyDown(evt) {
      switch (evt.keyCode) {
        case KeyCode.Up:
          break;
      }
    },
  },
};
</script>
<style lang="scss">
.menu-container {
  background: #ffffff;
  box-shadow: 2px 2px 2px #c8c8c8;
}

.menu-item {
  padding: 6px 12px;

  &:hover {
    background: #c8c8c8;
  }
}
</style>
