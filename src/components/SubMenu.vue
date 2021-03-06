<template>
  <li class="sub-menu" v-on="getEvents()">
    <div class="menu-trigger" ref="triggerRef" @click="toggleClick">
      <Icon v-if="prefixIcon != null" :name="prefixIcon" />
      <span class="menu-trigger-text" v-if="name">{{ name }}</span>
      <Icon v-if="suffixIcon != null" :name="suffixIcon" />
    </div>
    <Popup :visible="isExpanded" :getAlignElement="getAlignElement" v-if="!inline">
      <MenuList ref="menuRef" :inline="inline" :collapse="bubbleUp">
        <slot></slot>
      </MenuList>
    </Popup>
    <MenuList :inline="inline" :isExpanded="isExpanded" :collapse="bubbleUp" v-else>
      <slot></slot>
    </MenuList>
  </li>
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
    prefixIcon: String,
    suffixIcon: String,
    name: String,
    inline: Boolean,
    getParent: Function,
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
    toggleClick() {
      this.isExpanded = !this.isExpanded;
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
      // 阻止冒泡 防止触发MenuList 的mouseleave
      evt.stopPropagation();
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
      // _.forEach(this.getSubMenus(), menu => menu.collapse());
      // this.bubbleUp();
    },
    bubbleUp(target) {
      if (!this.contains(target)) {
        this.isExpanded = false;
        const parent = this.getParent();
        parent.bubbleUp(target);
      }
    },
  },
};
</script>
<style lang="scss">
.sub-menu {
}

.menu-trigger {
  display: flex;
}

.menu-trigger-text {
  margin-left: 4px;
}
</style>
