<template>
  <div class="menu" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="menu-trigger" ref="triggerRef">
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
    isCollapsed: Boolean,
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
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
      }
    },
    contains(target) {
      return this.$el.contains(target) || this.$refs['menuRef'].contains(target);
    },
  },
};
</script>
<style lang="scss">
.menu-trigger {
  display: flex;
}
</style>
