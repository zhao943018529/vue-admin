<template>
  <ul class="menu-container"></ul>
</template>
<script>
import * as _ from 'lodash';

export default {
  name: 'MenuList',
  props: {},
  methods: {
    renderItem() {},
    contains(target) {
      return this.$el.contains(target);
    },
  },
  render() {
    return _.map();
  },
};
</script>
