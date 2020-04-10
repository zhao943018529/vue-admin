<template>
  <ul class="nav-second" :class="collapsed ? 'collapse' : ''" @mouseleave="handleMouseLeave">
    <template v-for="(child, index) in children">
      <NavLinkGroup
        v-if="child.children && child.children.length > 0"
        :data="child"
        :prefix="prefix"
        :collapsed="collapsed"
        v-bind:key="child.path"
        :ref="getLinkRef(index)"
      />
      <NavLink v-bind:key="child.path" :prefix="prefix" :data="child" v-else />
    </template>
  </ul>
</template>
<script>
import * as _ from 'lodash';
import NavLink from './NavLink';
// import NavLinkGroup from './NavLinkGroup';

export default {
  name: 'NavTooltip',
  components: {
    NavLink,
    // NavLinkGroup,
  },
  props: {
    children: Array,
    collapsed: Boolean,
    prefix: String,
    getTrigger: Function,
  },
  mounted() {
    const trigger = this.getTrigger();
    if (this.collapsed) {
      document.body.append(this.$el);
      this.alignElem();
    } else if (!trigger.contains(this.$el)) {
      trigger.appendChild(this.$el);
    }
  },
  methods: {
    getLinkRef(index) {
      return `link-${index}`;
    },
    alignElem() {
      const trigger = this.getTrigger();
      const tRect = trigger.getBoundingClientRect();
      // const cRect = this.$el.getBoundingClientRect();
      this.$el.style.left = tRect.right + 'px';
      this.$el.style.top = tRect.y + 'px';
    },
    checkContain(related) {
      return (
        this.$el.contains(related) || _.some(this.$refs, link => link[0].checkContain(related))
      );
    },
    upwardCollapse(related) {
      this.$parent.upwardCollapse(related);
    },
    handleMouseLeave(evt) {
      this.upwardCollapse(evt.relatedTarget);
    },
    collapse() {
      _.forEach(this.$refs, group => group[0].collapse());
    },
  },
};
</script>

<style lang="scss">
.nav-second {
  padding: 0;
  margin: 0;

  &.collapse {
    position: absolute;
    z-index: 1000;
  }
}
</style>
