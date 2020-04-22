<template>
  <SubMenu
    :prefixIcon="data.iconName"
    :name="data.name"
    ref="subMenuRef"
    v-if="data.children && data.children.length > 0"
    :getParent="getParent"
    :getSubMenus="getSubMenus"
    :isCollapsed="isCollapsed"
  >
    <NestedMenu
      :isCollapsed="isCollapsed"
      v-for="child in data.children"
      :data="child"
      v-bind:key="child.value"
      :getParent="getCurrent"
      ref="subChildren"
    ></NestedMenu>
  </SubMenu>
  <MenuItem :getMenu="getParent" :onExecute="data.callback" v-else>
    <div class="submenu-item">
      <Icon v-if="data.iconName != null" :name="data.iconName" />
      <span>{{ data.name }}</span>
    </div>
  </MenuItem>
</template>

<script>
import * as _ from 'lodash';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';
import Icon from './common/Icon';

export default {
  name: 'NestedMenu',
  components: {
    SubMenu,
    MenuItem,
    Icon,
  },
  props: {
    data: Object,
    getParent: Function,
    isCollapsed: Boolean,
  },
  methods: {
    getCurrent() {
      return this.$refs['subMenuRef'];
    },
    getSubMenus() {
      return this.$refs['subChildren'];
    },
    contains(target) {
      if (this.$refs['subMenuRef'] != null) {
        return this.$refs['subMenuRef'].contains(target);
      } else {
        return false;
      }
    },
    collapse() {
      _.forEach(this.getSubMenus, menu => menu.collapse());
    },
  },
};
</script>
