<template>
  <SubMenu :data="data" ref="menuRef" v-if="data.children && data.children.length > 0">
    <NestedMenu
      :isCollapsed="isCollapsed"
      v-for="child in data.children"
      :data="child"
      v-bind:key="child.value"
      :getParent="getCurrent"
    ></NestedMenu>
  </SubMenu>
  <MenuItem v-else> </MenuItem>
</template>

<script>
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';

export default {
  name: 'NestedMenu',
  components: {
    SubMenu,
    MenuItem,
  },
  props: {
    data: Object,
    getParent: Function,
    isCollapsed: Boolean,
  },
  methods: {
    getCurrent() {
      return this.$refs['menuRef'];
    },
  },
};
</script>
