<template>
  <div class="menu" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="menu-trigger" ref="triggerRef" @click="toggleClick">
      <Icon v-if="prefixIcon != null" :name="prefixIcon" />
      <span v-if="name">{{ name }}</span>
      <Icon v-if="suffixIcon != null" :name="suffixIcon" />
    </div>
    <Popup :visible="isExpanded" :getAlignElement="getAlignElement" v-if="isCollapsed">
      <MenuList ref="menuRef">
        <slot></slot>
      </MenuList>
    </Popup>
    <MenuList v-else>
      <slot></slot>
    </MenuList>
  </div>
</template>
<script>
import Icon from './common/Icon';
import MenuList from './MenuList';
import Popup from './Popup';
import * as _ from 'lodash';

export default {
  name: 'Menu',
  components: {
    Icon,
    Popup,
    MenuList,
  },
  props: {
    prefixIcon: String,
    suffixIcon: String,
    name: String,
    isCollapsed: Boolean,
    getSubMenus: Function,
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleClick() {
      if (this.isExpanded) {
        this.deepCollapse();
      }
      this.isExpanded = !this.isExpanded;
    },
    deepCollapse() {
      if (!this.isCollapsed) {
        _.forEach(this.getSubMenus(), menu => menu.collapse());
      }
    },
    getAlignElement() {
      return this.$refs['triggerRef'];
    },
    handleMouseEnter() {
      if (this.isCollapsed && !this.isExpanded) {
        this.isExpanded = true;
      }
    },
    handleMouseLeave(evt) {
      // 1.首先要检查是否在当前面板之内 及当前下面的子面板要检查是否进入子menu
      if (!this.contains(evt.relatedTarget)) {
        this.isExpanded = false;
      }
    },
    contains(target) {
      return (
        this.$el.contains(target) ||
        this.$refs['menuRef'].contains(target) ||
        _.some(this.getSubMenus(), subMenu => subMenu.contains(target))
      );
    },
    bubbleUp(target) {
      if (!(this.$el.contains(target) || this.$refs['menuRef'].contains(target))) {
        this.isExpanded = false;
      }
    },
  },
};
</script>
<style lang="scss">
.menu-trigger {
  display: flex;
}
</style>
