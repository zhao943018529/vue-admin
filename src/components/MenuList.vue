<template>
  <ul
    class="menu-container"
    :class="getClassName()"
    v-on="!inline ? { mouseleave: handleMouseLeave } : null"
    @keydown="handleKeyDown"
  >
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
    inline: Boolean,
    isExpanded: Boolean,
    // deepContains: Function,
  },
  methods: {
    getClassName() {
      if (this.inline) {
        if (this.isExpanded) {
          return 'expanded';
        } else {
          return 'collapsed';
        }
      } else {
        return null;
      }
    },
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
  transition: height 0.4s ease-in;

  &.expanded {
    height: auto;
  }

  &.collapsed {
    height: 0;
    overflow: hidden;
  }
}

.menu-item {
  padding: 6px 12px;

  &:hover {
    background: #c8c8c8;
  }
}
</style>
