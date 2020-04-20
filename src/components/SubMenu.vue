<template>
  <div class="menu" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="menu-trigger" ref="triggerRef" @click="toggleClick">
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
import * as _ from 'lodash';
import Icon from './common/Icon';
import MenuList from './MenuList';
import Popup from './Popup';

export default {
  name: 'SubMenu',
  components: {
    Icon,
    Popup,
    MenuList,
  },
  props: {
    data: Object,
    isCollapsed: Boolean,
    getParent: Function,
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
        this.collapse();
      } else {
        this.isExpanded = true;
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
        // 3.如果不是进入子menu的话则需要向上递归是否需要收起面板
        const parent = this.getParent();
        parent.bubbleUp(evt.relatedTarget);
      }
    },
    contains(target) {
      const subMenus = this.getSubMenus();

      return (
        this.$el.contains(target) ||
        this.$refs['menuRef'].contains(target) ||
        _.some(subMenus, menu => menu.contains(target))
      );
    },
    collapse() {
      _.forEach(this.getSubMenus(), menu => menu.collapse());
      this.isExpanded = false;
    },
    bubbleUp(target) {
      if (!(this.$el.contains(target) || this.$refs['menuRef'].contains(target))) {
        this.isExpanded = false;
        const parent = this.getParent();
        parent.bubbleUp(target);
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
