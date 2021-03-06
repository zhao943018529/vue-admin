<template>
  <div class="menu" v-on="getEvents()">
    <div class="menu-trigger" ref="triggerRef" @click="toggleClick">
      <Icon v-if="prefixIcon != null" :name="prefixIcon" />
      <span class="menu-trigger-text" v-if="name">{{ name }}</span>
      <Icon v-if="suffixIcon != null" :name="suffixIcon" />
    </div>
    <Popup :visible="isExpanded" :getAlignElement="getAlignElement" v-if="!inline">
      <MenuList ref="menuRef" :inline="inline" :collapse="collapse">
        <slot></slot>
      </MenuList>
    </Popup>
    <MenuList :isExpanded="isExpanded" :inline="inline" ref="menuRef" v-else>
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
    inline: Boolean,
    getSubMenus: Function,
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    getEvents() {
      if (this.inline) {
        return null;
      } else {
        return {
          mouseenter: this.handleMouseEnter,
          mouseleave: this.handleMouseLeave,
        };
      }
    },
    collapse(target) {
      // this.deepCollapse();
      if (!this.contains(target)) {
        this.isExpanded = false;
      }
    },
    toggleClick() {
      if (this.isExpanded) {
        this.deepCollapse();
      }

      this.isExpanded = !this.isExpanded;
    },
    deepCollapse() {
      _.forEach(this.getSubMenus(), menu => menu.collapse());
    },
    getAlignElement() {
      return this.$refs['triggerRef'];
    },
    handleMouseEnter() {
      if (!this.isExpanded) {
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
.menu {
  display: inline-block;
}
.menu-trigger {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
